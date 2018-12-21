import { Component, Output, Input } from 'rete';
import { jsonSocket, anySocket } from '../sockets';
import { TemplateControl } from '../controls/template-control';
import Mustache from 'mustache';

export class TemplateComponent extends Component {

    constructor() {
        super('Template');
    }

    builder(node) {
        const inp1 = new Input('input1', 'JSON', jsonSocket);
        const out1 = new Output('output1', 'Any', anySocket);

        return node
            .addInput(inp1)
            .addControl(new TemplateControl(this.editor, 'mustache'))
            .addOutput(out1);
    }

    worker(node, inputs, outputs) {
        try {
            const input1 = inputs['input1'][0] || '{}';
            const template = node.data.mustache;
            const jsonObj = JSON.parse(input1);
            let out = null;
            try {
                out = Mustache.render(template, jsonObj);
            } catch (e) {
                console.warn('Invalid Mustache Template', e);
            }
            outputs['output1'] = out;
        } catch (e) {
            console.error('Error Displaying Debug Info', e);
        }
    }
}
