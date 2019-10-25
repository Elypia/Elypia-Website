import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-company-color',
  templateUrl: './company-color.component.html',
  styleUrls: ['./company-color.component.css']
})
export class CompanyColorComponent {

  /**
   * The background color to display and show the code of.
   * This should be an RGB value including the #.
   */
  @Input() public backgroundColorRgb: string;

  /**
   * The foreground color to display and show the code of.
   */
  @Input() public colorRgb: string;

  /** A friendly name of this color to display. */
  @Input() public colorName: string;
}
