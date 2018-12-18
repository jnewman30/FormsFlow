import { Component, Input } from 'rete';
import { anySocket } from '../sockets';

export class DebugComponent extends Component {

    constructor() {
        super('Debug');
    }

    builder(node) {
        const input1 = new Input('input1', 'Any', anySocket);
        return node.addInput(input1);
    }

    worker(node, inputs, outputs) {
        const input1 = inputs['input1'][0];
        if (input1) {
            console.log('Debug:', input1);
        }
    }
}
