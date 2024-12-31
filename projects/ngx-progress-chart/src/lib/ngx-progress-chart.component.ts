import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-progress-chart',
  template: `
    <div
      class="progress-container"
      [class]="containerClasses"
      [style]="containerStyle"
    >
      <div
        class="progress-bar"
        [class]="progressBarClasses"
        [style]="progressBarStyle"
      >
        <div
          class="progress-fill"
          [class]="progressFillClasses"
          [style.width.%]="currentProgressWidth"
          [style]="progressFillStyle"
        >
          <span
            class="tooltipDefault"
            [class]="[tooltipClass]"
            [style.left]="currentProgressWidth / 2 - 3 + '%'"
          >
            {{ tooltip ? tooltip : currentProgressWidth + '%' }}
          </span>
        </div>
      </div>
      <div
        class="progress-labels"
        [class]="labelsClasses"
        [style]="labelsStyle"
      >
        <span *ngFor="let label of labels">{{ label }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .progress-container {
        width: 100%;
        position: relative;
        padding: 0px 10px;
      }

      .progress-bar {
        height: 45px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #eee;
      }

      .progress-fill {
        height: 100%;
        border-radius: 3px;
        width: 0%;
        background-color: #ccc;
      }
      .progress-fill:hover {
        .tooltipDefault {
          display: block;
        }
      }
      .tooltipDefault {
        position: absolute;
        bottom: 120%;
        border-radius: 4px;
        z-index: 999;
        font-size: 10px;
        display: none;
        color: #000;
        animation: fadeIn 0.8s forwards !important;
        padding: 4px 8px;
        border: 1px solid #eee;
        background-color: #fff;
      }
      .progress-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      }

      .progress-labels span {
        font-size: 12px;
        padding-top: 2px;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(-15px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    `,
  ],
})
export class NgxProgressChartComponent implements OnInit {
  @Input() labels: any[] = [];
  @Input() progressWidth: number = 0;
  @Input() tooltipClass: string = '';
  @Input() tooltip: string = '';

  @Input() containerClasses: string[] = [];
  @Input() progressBarClasses: string[] = [];
  @Input() progressFillClasses: string[] = [];
  @Input() labelsClasses: string[] = [];

  @Input() containerStyle: { [key: string]: string } = {};
  @Input() progressBarStyle: { [key: string]: string } = {};
  @Input() progressFillStyle: { [key: string]: string } = {};
  @Input() labelsStyle: { [key: string]: string } = {};

  currentProgressWidth: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progressWidth']) {
      setTimeout(() => this.updateWidth(this.progressWidth), 0);
    }
  }

  private updateWidth(newWidth: number) {
    if (newWidth > 100) newWidth = 100;
    if (newWidth < 0) newWidth = 0;
    let transTime = Math.abs(newWidth - this.currentProgressWidth) / 50;
    this.currentProgressWidth = newWidth;
    this.progressFillStyle = {
      ...this.progressFillStyle,
      transition: 'width ' + transTime + 's ease-out',
    };
  }

  ngOnInit(): void {}
}
