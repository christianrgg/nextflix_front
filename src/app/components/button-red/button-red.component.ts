import {Component, Input} from '@angular/core';

interface ngOnInit {
}

@Component({
  selector: 'app-buttonRed-component',
  standalone: true,
  imports: [],
  templateUrl: './button-red.component.html',
  styleUrl: './button-red.component.scss'
})
export class ButtonRedComponent {
  @Input() text: string ='';
  constructor() {}

}
