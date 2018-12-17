import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

    components = [
        {
            name: 'JSON',
            component: 'JSON'
        },
        {
            name: 'Template',
            component: 'Template'
        },
        {
            name: 'Debug',
            component: 'DEBUG'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
