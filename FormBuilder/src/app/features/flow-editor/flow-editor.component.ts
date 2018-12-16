import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-flow-editor',
    templateUrl: './flow-editor.component.html',
    styleUrls: ['./flow-editor.component.scss']
})
export class FlowEditorComponent implements OnInit {

    componentGroups = [
        {
            name: 'Data',
            components: [
                {
                    name: 'Rhooster',
                    components: [
                        {
                            name: 'Query Dts'
                        },
                        {
                            name: 'Save Dts'
                        },
                        {
                            name: 'Data Adapter'
                        }
                    ]
                },
                {
                    name: 'Web',
                    components: [
                        {
                            name: 'GET'
                        },
                        {
                            name: 'POST'
                        },
                        {
                            name: 'PUT'
                        },
                        {
                            name: 'DELETE'
                        }
                    ]
                },
                {
                    name: 'General',
                    components: [
                        {
                            name: 'JSON Extract'
                        },
                        {
                            name: 'XML Extract'
                        },
                        {
                            name: 'RegEx Extract'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Paperwise',
            components: [
                {
                    name: 'Route Document'
                },
                {
                    name: 'Get File Cabinet'
                },
                {
                    name: 'Get Document'
                },
                {
                    name: 'Post Document'
                },
                {
                    name: 'Put Document'
                },
                {
                    name: 'Get Index Info'
                },
                {
                    name: 'Post Index Info'
                },
                {
                    name: 'Put Index Info'
                }
            ]
        },
        {
            name: 'Conditionals',
            components: [
                {
                    name: 'If Equal To'
                },
                {
                    name: 'If Greater Then'
                },
                {
                    name: 'If Less Then'
                }
            ]
        },
        {
            name: 'Math',
            components: [
                {
                    name: 'Expression'
                },
                {
                    name: 'Add'
                },
                {
                    name: 'Subtract'
                },
                {
                    name: 'Multiply'
                },
                {
                    name: 'Divide'
                }
            ]
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
