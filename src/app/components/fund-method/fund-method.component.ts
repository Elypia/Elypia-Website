import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fund-method',
  templateUrl: './fund-method.component.html',
  styleUrls: ['./fund-method.component.css']
})
export class FundMethodComponent {

  @Input() url: string;
  @Input() name: string;
  @Input() description: string;
}
