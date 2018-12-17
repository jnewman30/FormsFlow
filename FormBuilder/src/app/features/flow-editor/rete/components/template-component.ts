import { Component, Output, Input } from 'rete';
import { jsonSocket } from '../sockets';
import { TemplateControl } from '../controls/template-control';
import Mustache from 'mustache';

export class TemplateComponent extends Component {

    constructor() {
        super('Template');
    }

    builder(node) {
        const inp1 = new Input('json', 'JSON', jsonSocket);
        const out1 = new Output('jsonOut', 'JSON', jsonSocket);

        return node
            .addInput(inp1)
            .addControl(new TemplateControl(this.editor, 'mustache'))
            .addOutput(out1);
    }

    worker(node, inputs, outputs) {
        try {
            console.log('Template : JSON Input', inputs['json'][0]);
            const json = inputs['json'][0];
            const template = node.data.mustache;
            const jsonObj = JSON.parse(json);
            let out = null;
            try {
                out = Mustache.render(template, jsonObj);
            } catch (e) {
                console.warn('Invalid Mustache Template', e);
            }
            outputs['jsonOut'] = out;
        } catch (e) {
            console.error('Debug Error', e);
        }
    }
}
