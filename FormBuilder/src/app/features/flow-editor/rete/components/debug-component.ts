import { Component, Input } from 'rete';
import { jsonSocket } from '../sockets';

export class DebugComponent extends Component {

    constructor() {
        super('DEBUG');
    }

    builder(node) {
        const inp1 = new Input('json', 'JSON', jsonSocket);

        return node.addInput(inp1);
    }

    worker(node, inputs, outputs) {
        const json = inputs['json'][0];
        if (json) {
            console.log('DEBUG', json);
        }
    }
}
