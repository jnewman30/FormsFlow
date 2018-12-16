import {
    Component, AfterViewInit,
    ViewChild, Input,
    ElementRef, ViewEncapsulation
} from '@angular/core';

import { NodeEditor, Node } from 'rete'; // , Engine, Input as reteInput } from 'rete';
import * as ConnectionPlugin from 'rete-connection-plugin';
import * as VueRenderPlugin from 'rete-vue-render-plugin';
import { NumComponent } from './components/number-component';
import { AddComponent } from './components/add-component';

@Component({
    selector: 'app-rete',
    template: '<div class="wrapper"><div #nodeEditor class="node-editor"></div></div>',
    styleUrls: ['./rete.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ReteComponent implements AfterViewInit {

    @ViewChild('nodeEditor') el: ElementRef;
    editor: NodeEditor;

    @Input() flow = {};

    constructor() {
        console.log('Rete Component');
    }

    async ngAfterViewInit() {
        const self = this;

        const container = this.el.nativeElement;

        const components = [new NumComponent(), new AddComponent()];

        this.editor = new NodeEditor('demo@0.2.0', container);
        this.editor.use(ConnectionPlugin);
        this.editor.use(VueRenderPlugin);

        // const engine = new Engine('demo@0.2.0');

        components.map(c => {
            this.editor.register(c);
            // engine.register(c);
        });

        const n1 = await components[0].createNode({ num: 2 });
        const n2 = await components[0].createNode({ num: 0 });
        const add = await components[1].createNode();

        n1.position = [80, 200];
        n2.position = [80, 400];
        add.position = [500, 240];

        this.editor.addNode(n1);
        this.editor.addNode(n2);
        this.editor.addNode(add);

        this.editor.connect(n1.outputs.get('num'), add.inputs.get('num1'));
        this.editor.connect(n2.outputs.get('num'), add.inputs.get('num2'));

        this.editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
            // await engine.abort();
            // await engine.process(editor.toJSON());
            this.flow = this.editor.toJSON();
        });

        this.editor.view.resize();
        this.editor.trigger('process');
    }

    addNode(node: Node, mousePlaced: boolean = true): void {
        this.editor.addNode(node, mousePlaced);
    }

    removeNode(node: Node): void {
        this.editor.removeNode(node);
    }
}
