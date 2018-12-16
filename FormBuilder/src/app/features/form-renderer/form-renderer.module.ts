import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRendererComponent } from './form-renderer.component';
import { FormRendererRoutingModule } from './form-renderer-routing.module';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { PrismService } from '../form-builder/prism.service';
import { FormioAuthService } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';



export const AppConfig = {
    appUrl: location.origin,
    apiUrl: 'http://localhost:3000/formData'
};

@NgModule({
    declarations: [FormRendererComponent],
    imports: [
        CommonModule,
        FormRendererRoutingModule,
        FormioModule
    ],
    providers: [
        PrismService,
        FormioAuthService,
        FormioResources,
        { provide: FormioAppConfig, useValue: AppConfig }
    ],
})
export class FormRendererModule { }
