import { Component } from '@angular/core';
import {InputComponent} from "../../components/input/input.component";
import {ButtonRedComponent} from "../../components/button-red/button-red.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    InputComponent,
    ButtonRedComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
