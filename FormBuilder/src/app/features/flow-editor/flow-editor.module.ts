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
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule
} from '@angular/material';
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
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatExpansionModule,
        MatToolbarModule
    ],
    providers: [],
})
export class FlowEditorModule { }
