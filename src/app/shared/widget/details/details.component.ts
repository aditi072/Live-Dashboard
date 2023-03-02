import { Component } from '@angular/core';
import {
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { chart} from 'highcharts';
import * as Highcharts from 'highcharts';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit{
  @ViewChild('chartTarget') chartTarget: ElementRef;
  @ViewChild('chartTarget2') chartTarget2: ElementRef;
  @ViewChild('chartTarget3') chartTarget3: ElementRef;
  @ViewChild('chartTarget4') chartTarget4: ElementRef;
  @ViewChild('chartTarget5') chartTarget5: ElementRef;
  options: any;
  options2: any;
  options3: any;
  options4: any;
  options5: any;
  chart;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initOptions();
    this.chart = chart(this.chartTarget.nativeElement, this.options as any);
    this.chart = chart(this.chartTarget2.nativeElement, this.options2 as any);
    this.chart = chart(this.chartTarget3.nativeElement, this.options3 as any);
    this.chart = chart(this.chartTarget4.nativeElement, this.options4 as any);
    this.chart = chart(this.chartTarget5.nativeElement, this.options5 as any);
  }

  initOptions() {
    this.options = {
      chart: {
        type: 'solidgauge',
        width: 200,
        height: 180,
        
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
      title: false,
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
              '<span style="font-size:14.5px">{y}</span><br/><br/>' +
              '<span style="font-size:10px;opacity:0.4">Voltage(v)</span>' +
              '</div>'
          },
          tooltip: {
            valueSuffix: 'Voltage (v)'
          }
        }
      ]
    };

    // ------------ 2
    this.options2 = {
      chart: {
        type: 'solidgauge',
        width: 200,
        height: 180,
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
      title: false,
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
        max: 30,
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
          data: [11.07],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:20px">{y}</span><br/><br/>' +
              '<span style="font-size:10px;opacity:0.4">Voltage(v)</span>' +
              '</div>'
          },
          tooltip: {
            valueSuffix: 'Current (A)'
          }
        }
      ]
    };
    // ------------ 3
    this.options3 = {
      chart: {
        type: 'solidgauge',
        width: 200,
        height: 180
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
      title: false,
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
        max: 30,
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
          innerRadius: '90%',
          data: [0.17],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:22px">{y}</span><br/><br/>' +
              '<span style="font-size:11px;opacity:0.4">Power(kW)</span>' +
              '</div>'
          },
          tooltip: {
            valueSuffix: 'Power(kW)'
          }
        }
      ]
    };
    // ------------ 4
    this.options4 = {
      chart: {
        type: 'solidgauge',
        width: 200,
        height: 180
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
      title: false,
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
        max: 1,
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
          innerRadius: '90%',
          data: [0.3],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:22px">{y}</span><br/><br/>' +
              '<span style="font-size:10px;opacity:0.4">Power Factor</span>' +
              '</div>'
          },
          tooltip: {
            valueSuffix: 'Power Factor'
          }
        }
      ]
    };
    // ------------ 5
    this.options5 = {
      chart: {
        type: 'solidgauge',
        width: 200,
        height: 180
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
      title: false,
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
        max: 60,
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
          innerRadius: '90%',
          data: [50.06],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:15px">{y}</span><br/><br/>' +
              '<span style="font-size:7px;opacity:0.4">Frequency(Hz)</span>' +
              '</div>'
          },
          tooltip: {
            valueSuffix: 'Frequency(Hz)'
          }
        }
      ]
    };
  }

  
}
