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

    onDropComponent(event: any): void {
        if (!event.dragData) {
            return;
        }
        const component = event.dragData.component;
        this.editor.addNode(component);
    }

    async run(): Promise<void> {
        if (!this.editor) {
            return;
        }
        await this.editor.run();
    }
}
