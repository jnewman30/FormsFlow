import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';

import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormioAuthService } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { PrismService } from './prism.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatTabsModule } from '@angular/material';

export const AppConfig = {
    appUrl: location.origin,
    apiUrl: 'http://localhost:3000/formData'
};

@NgModule({
    declarations: [
        FormBuilderComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        MatCommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatTabsModule,
        FormBuilderRoutingModule,
        FormioModule, FormioGrid
    ],
    providers: [
        PrismService,
        FormioAuthService,
        FormioResources,
        { provide: FormioAppConfig, useValue: AppConfig }
    ],
})
export class FormBuilderModule { }
