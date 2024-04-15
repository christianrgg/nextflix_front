import { Component } from '@angular/core';
import {ButtonRedComponent} from "../../components/button-red/button-red.component";
import {InputComponent} from "../../components/input/input.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ButtonRedComponent,
    InputComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
