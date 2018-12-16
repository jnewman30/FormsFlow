import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlowEditorRoutingModule } from './flow-editor-routing.module';
import { ReteComponent } from './rete/rete.component';
import { FlowEditorComponent } from './flow-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    declarations: [
        FlowEditorComponent,
        ReteComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FlowEditorRoutingModule,

        FlexLayoutModule,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatExpansionModule
    ],
    providers: [],
})
export class FlowEditorModule { }
