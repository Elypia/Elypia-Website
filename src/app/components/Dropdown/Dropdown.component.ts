import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './Dropdown.component.html',
  styleUrls: ['./Dropdown.component.css']
})
export class DropdownComponent {
  @Input() d: any
}
