import { Component, Output } from 'rete';
import { jsonSocket } from '../sockets';
import { JsonControl } from '../controls/json-control';

export class JsonComponent extends Component {

    constructor() {
        super('JSON');
    }

    builder(node) {
        const out1 = new Output('json', 'JSON', jsonSocket);
        return node
            .addControl(new JsonControl(this.editor, 'json'))
            .addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['json'] = node.data.json;
    }
}
