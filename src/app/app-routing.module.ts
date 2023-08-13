import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MassasComponent } from './views/massas/massas.component';
import { MassaCreateComponent } from './components/massa/massa-create/massa-create.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'massas',
  component: MassasComponent,
},
{
  path: 'massas/create',
  component: MassaCreateComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
