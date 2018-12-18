import {
    Component, AfterViewInit,
    ViewChild, Input,
    ElementRef, ViewEncapsulation
} from '@angular/core';

import { NodeEditor, Node, Engine, Selected } from 'rete'; // , Engine, Input as reteInput } from 'rete';
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
        const container = this.el.nativeElement;

        this.components = [
            new NumComponent(),
            new AddComponent(),
            new JsonComponent(),
            new DebugComponent(),
            new TemplateComponent()
        ];

        this.editor = new NodeEditor('demo@0.2.0', container);

        this.editor.on('error', async (e) => {
            console.error('Editor Error', e);
        });

        this.editor.use(ConnectionPlugin);
        this.editor.use(VueRenderPlugin);

        this.editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
            this.flow = this.editor.toJSON();
        });

        this.editor.on('click', async (e) => {
            this.editor.selected.clear(); // Doesn't seem to work...
        });

        this.engine = new Engine('demo@0.2.0');

        this.components.map(c => {
            this.editor.register(c);
            this.engine.register(c);
        });

        this.editor.view.resize();
        this.editor.trigger('process');
    }

    async addNode(name: string, x: Number = 200, y: Number = 200): Promise<void> {
        const component = this.components.find(c => c.name === name);
        if (!component) {
            return;
        }
        const node = await component.createNode();
        node.position = [x, y];
        this.editor.addNode(node, false);
        // this.editor.view.resize();
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
