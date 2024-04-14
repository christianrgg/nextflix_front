import {Component, input} from '@angular/core';
import {InputInterface} from "../../interfaces/input.interface";

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  protected readonly input = input;
}
