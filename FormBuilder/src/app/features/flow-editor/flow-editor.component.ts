import { Component, OnInit, ViewChild } from '@angular/core';
import { ReteComponent } from './rete/rete.component';

@Component({
    selector: 'app-flow-editor',
    templateUrl: './flow-editor.component.html',
    styleUrls: ['./flow-editor.component.scss']
})
export class FlowEditorComponent implements OnInit {

    @ViewChild('editor') editor: ReteComponent;

    constructor() { }

    ngOnInit() {
    }

    onDropComponent(event: { dragData: any, nativeEvent: DragEvent }): void {
        if (!event.dragData) {
            console.warn('Component missing drag data!');
            return;
        }
        const x = event.nativeEvent.layerX || 100;
        const y = event.nativeEvent.layerY || 200;

        const component = event.dragData.component;
        this.editor.addNode(component, x, y);
    }

    async run(): Promise<void> {
        if (!this.editor) {
            return;
        }
        await this.editor.run();
    }

    async stop(): Promise<void> {
        await this.editor.engine.abort();
    }

    async trash(): Promise<void> {
    }
}
