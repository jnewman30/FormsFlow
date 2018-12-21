import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

    components = [
        {
            name: 'Debug',
            component: 'Debug'
        },
        {
            name: 'JSON',
            component: 'JSON'
        },
        {
            name: 'Template',
            component: 'Template'
        },
        {
            name: 'Http Get',
            component: 'HttpGet'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
