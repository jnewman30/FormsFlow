import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatCommonModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { CovalentCommonModule, CovalentLayoutModule, CovalentDialogsModule, TdDialogService } from '@covalent/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home';
import { FormBuilderModule } from './features/form-builder';
import { FormRendererModule } from './features/form-renderer';
import { FlowEditorModule } from './features/flow-editor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        /* Features */
        HomeModule,
        FormBuilderModule,
        FlowEditorModule,
        FormRendererModule,

        MatCommonModule, MatIconModule, MatButtonModule, MatListModule,
        CovalentCommonModule, CovalentLayoutModule, CovalentDialogsModule,
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
