import {Component, Input} from '@angular/core';
import {NGXLogger} from 'ngx-logger';

/**
 * Badge that shows the percentage with a background-color
 * that represents how close the percentage is to 100.
 */
@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent {

  /** The percentage that this component reflects. */
  @Input() public percentage: number;

  /** The color that the minimum (0) value should be displayed as. */
  @Input() public minColor: number[] = [112, 48, 51, 1];

  /** The color that the maximum (100) value should be displayed as. */
  @Input() public maxColor: number[] = [53, 107, 51, 1];

  /** An optional override if a color off the scale should be used for 100%. */
  @Input() public completeColor: number[] = null;

  constructor(private logger: NGXLogger) { }

  public getRgba(): string {
    if (this.percentage === 100 && this.completeColor)
      return `rgba(${this.completeColor[0]}, ${this.completeColor[1]}, ${this.completeColor[2]}, ${this.completeColor[3]})`;
    else {
      const r = this.minColor[0] - ((this.minColor[0] - this.maxColor[0]) * (this.percentage / 100));
      const g = this.minColor[1] - ((this.minColor[1] - this.maxColor[1]) * (this.percentage / 100));
      const b = this.minColor[2] - ((this.minColor[2] - this.maxColor[2]) * (this.percentage / 100));
      const a = this.minColor[3] - ((this.minColor[3] - this.maxColor[3]) * (this.percentage / 100));

      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
  }
}
