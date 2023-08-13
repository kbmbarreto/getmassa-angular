import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MassasComponent } from './views/massas/massas.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'massas',
  component: MassasComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
