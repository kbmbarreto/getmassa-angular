import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MassasComponent } from './views/massas/massas.component';
import { MassaCreateComponent } from './components/massa/massa-create/massa-create.component';
import { MassaUpdateComponent } from './components/massa/massa-update/massa-update.component';
import { MassaDeleteComponent } from './components/massa/massa-delete/massa-delete.component';

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
},
{
  path: 'massas/update/:id',
  component: MassaUpdateComponent,
},
{
  path: 'massas/delete/:id',
  component: MassaDeleteComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
