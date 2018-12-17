import {
    Component, AfterViewInit,
    ViewChild, Input,
    ElementRef, ViewEncapsulation
} from '@angular/core';

import { NodeEditor, Node, Engine } from 'rete'; // , Engine, Input as reteInput } from 'rete';
import * as ConnectionPlugin from 'rete-connection-plugin';
import * as VueRenderPlugin from 'rete-vue-render-plugin';
import { NumComponent } from './components/number-component';
import { AddComponent } from './components/add-component';
import { JsonComponent } from './components/json-component';
import { DebugComponent } from './components/debug-component';
import { TemplateComponent } from './components/template-component';

@Component({
    selector: 'app-rete',
    template: '<div class="wrapper"><div #nodeEditor class="node-editor"></div></div>',
    styleUrls: ['./rete.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ReteComponent implements AfterViewInit {

    @ViewChild('nodeEditor') el: ElementRef;
    editor: NodeEditor;

    engine: Engine;
    components = [];

    @Input() flow = {};

    constructor() {
        console.log('Rete Component');
    }

    async ngAfterViewInit() {
        const self = this;

        const container = this.el.nativeElement;

        this.components = [
            new NumComponent(),
            new AddComponent(),
            new JsonComponent(),
            new DebugComponent(),
            new TemplateComponent()
        ];

        this.editor = new NodeEditor('demo@0.2.0', container);
        this.editor.use(ConnectionPlugin);
        this.editor.use(VueRenderPlugin);

        this.engine = new Engine('demo@0.2.0');

        this.components.map(c => {
            this.editor.register(c);
            this.engine.register(c);
        });

        // const jsonNode = await this.components[2].createNode({ json: '{ "name": "Fred Flinstone", "age": 40 }' });
        // jsonNode.position = [80, 200];
        // this.editor.addNode(jsonNode);

        // const templateNode = await this.components[4].createNode({ mustache: '{{ age }}' });
        // templateNode.position = [400, 200];
        // this.editor.addNode(templateNode);

        // const debugNode = await this.components[3].createNode();
        // debugNode.position = [800, 200];
        // this.editor.addNode(debugNode);

        // this.editor.connect(jsonNode.outputs.get('json'), templateNode.inputs.get('json'));
        // this.editor.connect(templateNode.outputs.get('jsonOut'), debugNode.inputs.get('json'));


        this.editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
            // await engine.abort();
            // await engine.process(this.editor.toJSON());
            this.flow = this.editor.toJSON();
        });

        this.editor.view.resize();
        this.editor.trigger('process');
    }

    async addNode(name: string, mousePlaced: boolean = true): Promise<void> {
        const component = this.components.find(c => c.name === name);
        console.log('Adding Component', component);
        if (!component) {
            return;
        }
        const node = await component.createNode();
        this.editor.addNode(node, mousePlaced);
        this.editor.view.resize();
    }

    removeNode(node: Node): void {
        this.editor.removeNode(node);
    }

    async run(): Promise<void> {
        this.flow = this.editor.toJSON();
        await this.engine.abort();
        await this.engine.process(this.flow);
    }
}
