import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CustomerComponentComponent} from './customer-component/customer-component.component';

const routes: Routes = [
  {
    path: 'app-customer-component',
    component: CustomerComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
