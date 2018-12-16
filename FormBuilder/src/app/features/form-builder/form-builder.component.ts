import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { PrismService } from './prism.service';
import { TdDialogService } from '@covalent/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

    @ViewChild('json') jsonElement?: ElementRef;
    public form: any;

    constructor(
        public prism: PrismService,
        private dialogService: TdDialogService,
        private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<string>('http://localhost:3000/forms')
            .subscribe(response => this.form = response);
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit(): void {
        this.prism.init();
        // console.log(this.jsonElement);
    }

    onChange(event: any): void {
        // console.log('On Change', event.form);
    }

    save(): void {
        this.openPrompt();
    }

    openPrompt(): void {
        this.dialogService.openPrompt({
            message: 'What would you line to name your form?',
            disableClose: true, // defaults to false
            title: 'Save Form', // OPTIONAL, hides if not provided
            cancelButton: 'Cancel', // OPTIONAL, defaults to 'CANCEL'
            acceptButton: 'Save', // OPTIONAL, defaults to 'ACCEPT'
            width: '400px', // OPTIONAL, defaults to 400px
        }).afterClosed().subscribe((newValue: string) => {
            if (newValue) {
                // DO SOMETHING
                this.form.title = newValue;
                // const formJson = JSON.stringify(this.form);
                // console.log('Save Form', formJson);
                this.http.post(
                    'http://localhost:3000/forms/',
                    this.form, {
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }).subscribe(response => {
                        console.log(response);
                    });

            } else {
                // DO SOMETHING ELSE
                console.log('Abort Save');
            }
        });
    }
}
