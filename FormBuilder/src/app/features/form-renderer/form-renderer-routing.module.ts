import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRendererComponent } from './form-renderer.component';

const routes: Routes = [
    {
        path: 'renderer',
        component: FormRendererComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormRendererRoutingModule { }
