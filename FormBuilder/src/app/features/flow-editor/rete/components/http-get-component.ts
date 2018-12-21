import { Component, Output } from 'rete';
import { jsonSocket } from '../sockets';
import { UrlControl } from '../controls/url-control';
import { HttpClient } from '@angular/common/http';

export class HttpGetComponent extends Component {

    constructor(private http: HttpClient) {
        super('HttpGet');
    }

    builder(node) {
        const output1 = new Output('output1', 'JSON', jsonSocket);
        return node
            .addControl(new UrlControl(this.editor, 'url'))
            .addOutput(output1);
    }

    async worker(node, inputs, outputs) {
        const url = node.data.url;
        const data = await this.http
            .get(url).toPromise()
            .then(d => JSON.stringify(d));
        outputs['output1'] = data;
    }
}
