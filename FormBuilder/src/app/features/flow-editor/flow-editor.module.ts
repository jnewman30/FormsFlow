import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlowEditorRoutingModule } from './flow-editor-routing.module';
import { ReteComponent } from './rete/rete.component';
import { FlowEditorComponent } from './flow-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgDragDropModule } from 'ng-drag-drop';

import {
    MatCommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDividerModule
} from '@angular/material';

import {
    CovalentCommonModule,
    CovalentLayoutModule
} from '@covalent/core';

import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
    declarations: [
        FlowEditorComponent,
        ReteComponent,
        ToolboxComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FlowEditorRoutingModule,
        NgDragDropModule.forRoot(),

        FlexLayoutModule,
        MatCommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatExpansionModule,
        MatToolbarModule,
        MatDividerModule,

        CovalentCommonModule,
        CovalentLayoutModule
    ],
    providers: [],
})
export class FlowEditorModule { }
