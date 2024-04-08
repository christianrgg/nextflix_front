import { Routes } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {MxComponent} from "./pages/mx/mx.component";

export const routes: Routes = [
  {
    path:'login',
    component: AuthComponent
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
