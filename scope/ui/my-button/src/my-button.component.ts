import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  constructor() { }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

}
