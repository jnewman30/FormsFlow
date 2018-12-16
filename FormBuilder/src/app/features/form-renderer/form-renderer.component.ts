import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-form-renderer',
    templateUrl: './form-renderer.component.html',
    styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {
    formData: any = {};

    constructor(
        private http: HttpClient) { }

    ngOnInit() {
        this.http.get<string>('http://localhost:3000/forms')
            .subscribe(response => {
                this.formData = response;
            });
    }

    async submitForm(event: any): Promise<boolean> {

        const formData = event.data;
        const response = await this.http
            .post<{success: boolean}>('http://localhost:3000/formData', formData)
            .toPromise();
        console.log('Submit Response', response);
        return response.success;
    }
}
