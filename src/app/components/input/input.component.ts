import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  //protected readonly input = input;
  @Input() inputId = '';
  //@Input() value = '';
  @Input() label= '';
  //@Input() type='';
  constructor() {}
}
