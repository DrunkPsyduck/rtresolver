  
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ModificarUrlComponent } from './modificar-url/modificar-url.component';

const appRoutes: Routes = [
  { path: '', component: ModificarUrlComponent }
 
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
