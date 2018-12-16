import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowEditorComponent } from './flow-editor.component';

const routes: Routes = [
    {
        path: 'flow',
        component: FlowEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FlowEditorRoutingModule { }
