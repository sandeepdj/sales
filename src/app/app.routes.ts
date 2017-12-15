 
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashabordComponent } from './components/dashabord/dashabord.component';
import { HeadersComponent } from './components/headers/headers.component';

 
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Sales', component: HeadersComponent,
     children: [
        { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
        { path: 'Dashboard', component: DashabordComponent } 
        ]
    }
  ];


// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
