import { Component } from '@angular/core';
import {InputComponent} from "../../components/input/input.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
