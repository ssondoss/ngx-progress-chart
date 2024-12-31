
# ngx-progress-chart
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.
A customizable lightweight progress chart for Angular applications.

![Progress Chart Example](https://github.com/ssondoss/ngx-progress-chart/blob/main/projects/ngx-progress-chart/progress-bar-chart.png)

## Features
- Customizable
- Lightweight
- Native Angular code


## Installation
Install the library via npm:
`npm install ngx-progress-chart`

## Usage

### 1.Install the library:
```bash
npm install ngx-progress-chart
```

### 2. Import the Module
In your Angular application, import the NgxProgressChartModule in your 
AppModule or any other module where you plan to use it:

```typescript
import { NgxProgressChartModule } from 'ngx-progress-chart';

@NgModule({
  declarations: [...],
  imports: [
    NgxProgressChartModule,
    ...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### 3. Add the Component to Your Template
#### simple usage:
```html
<ngx-progress-chart 
    [labels]="['0%', '50%', '100%']"
    [progressWidth]="75"
    [tooltipClass]="'custom-tooltip'"
    [tooltip]="'75%'"
    [progressBarStyle]="{ 'background-color': '#eee' }"
    [progressFillStyle]="{ 'background-color': '#4caf50' }"
    [labelsStyle]="{ 'font-size': '14px', color: '#333' }"
    >
</ngx-progress-chart>
```

#### detialed usage:

```html
<ngx-progress-chart
  [labels]="['0%', '50%', '100%']"
  [progressWidth]="75"
  [tooltipClass]="'custom-tooltip'"
  [tooltip]="'75%'"
  [containerClasses]="['custom-container']"
  [progressBarClasses]="['custom-progress-bar']"
  [progressFillClasses]="['custom-progress-fill']"
  [labelsClasses]="['custom-label']"
  [containerStyle]="{ ... }"
  [progressBarStyle]="{ ... }"
  [progressFillStyle]="{ ... }"
  [labelsStyle]="{ ... }"
></ngx-progress-chart>
```
define custom styles for the package in your ```global styles file```

```
.custom-container {...} 
.custom-progress-bar{...}
...
```


