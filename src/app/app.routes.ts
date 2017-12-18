 
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
 import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { LoginComponent } from './views/login/login.component';
import { DashabordComponent } from './components/dashabord/dashabord.component';
import { HeadersComponent } from './components/headers/headers.component';

 
export const routes: Routes = [
   {path: '', redirectTo: 'Login', pathMatch: 'full'},
  
    { path: 'Login', component: LoginComponent },
    { path: 'Sales', component: HeadersComponent,
     children: [
        { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
        { path: 'Dashboard', component: DashabordComponent } 
        ]
    },
    {path: '**', redirectTo: 'Login', pathMatch: 'full'}
  ];


// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}  

 