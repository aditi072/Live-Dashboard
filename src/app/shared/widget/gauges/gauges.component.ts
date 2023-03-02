import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { chart} from 'highcharts';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;
  options: any;
  chart;

  ngAfterViewInit() {
    this.initOptions();
    this.chart = this.chart(this.chartTarget.nativeElement, this.options as any);
  }

  ngOnInit() { }

  initOptions() {
    this.options = {
      chart: {
        type: 'solidgauge'
      },
      pane: {
        center: ['50%', '85%'],
        size: '80%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: 'white',
          innerRadius: '90%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      // the value axis
      yAxis: {
        length: 5,
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 16
        },
        min: 0,
        max: 250,
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      series: [
        {
          name: 'Speed',
          innerRadius: '90%',
          data: [240.32],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/><br/>' +
              '<span style="font-size:12px;opacity:0.4">Voltage(v)</span>' +
              '</div>'
          },
          tooltip: {
            valueSuffix: 'Voltage (v)'
          }
        }
      ]
    };
  }

    // Bring life to the dials
  //   setInterval(function () {
  //     // Speed
  //     var point, newVal, inc;

  //     if (chartSpeed) {
  //       point = chartSpeed.series[0].data[0];
  //       inc = Math.round((Math.random() - 0.5) * 100);
  //       newVal = point.y + inc;

  //       if (newVal < 0 || newVal > 200) {
  //         newVal = point.y - inc;
  //       }

  //       point.update(newVal);
  //     }

  //     // RPM
  //     if (chartRpm) {
  //       point = chartRpm.series[0].data[0];
  //       inc = Math.random() - 0.5;
  //       newVal = point.y + inc;

  //       if (newVal < 0 || newVal > 5) {
  //         newVal = point.y - inc;
  //       }

  //       point.update(newVal);
  //     }
  //   }, 2000);

}
