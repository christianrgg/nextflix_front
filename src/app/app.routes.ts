import { Routes } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {MxComponent} from "./pages/mx/mx.component";
import {RegisterComponent} from "./pages/register/register.component";

export const routes: Routes = [
  {
    path:'login',
    component: AuthComponent,

  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'mx',
    component: MxComponent
  },
  {
   path:'**',
   redirectTo:'mx'
  }
];
