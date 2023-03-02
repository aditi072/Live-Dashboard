import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-line2',
  templateUrl: './line2.component.html',
  styleUrls: ['./line2.component.css']
})
export class Line2Component implements OnInit{
  chartOptions: {};

  Highcharts = Highcharts;

  ngOnInit(){
    // Highcharts.chart('container', {
    this.chartOptions = {
      title: {
        text: 'Power (kW)',
        align: 'center'
      },
    
      xAxis: {
        type: 'datetime',
        min: Date.UTC(2022, 0, 1, 12, 6, 29),
        dateTimeLabelFormats: {
          second: '%H:%M:%S', // set the format for seconds
          minute: '%H:%M:%S', // set the format for minutes
          hour: '%H:%M:%S', // set the format for hours
        },
        // startOnTick: true,
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%H:%M:%S', this.value); // format the label using Highcharts.dateFormat()
          }
        },
          tickPositioner: function() {
        // Define the first tick position as the desired value
        var firstTick = Date.UTC(2022, 0, 1, 12, 6, 29);
        
        // Define the tick interval (e.g., every 5 seconds)
        var tickInterval = 10000;
        
        // Calculate the tick positions based on the first tick and the interval
        var positions = [firstTick];
        var nextTick = firstTick + tickInterval;
        while (nextTick <= this.dataMax) {
          positions.push(nextTick);
          nextTick += tickInterval;
        }
        return positions;
        },
        gridLineWidth: 1,
      },
      
      yAxis: {
        title: {
          text: 'Value'
        },
        labels: {
          format: '{value:.2f}' // format y-axis labels to 2 decimal places
        },
        min: 0,
        tickInterval: 0.05,
      },
    
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
    
      series: [{
        data: [
          [Date.UTC(2022, 0, 1, 12, 6, 29), 0.20],
          [Date.UTC(2022, 0, 1, 12, 6, 39), 0.17],
          [Date.UTC(2022, 0, 1, 12, 6, 49), 0.19],
          [Date.UTC(2022, 0, 1, 12, 6, 59), 0.16],
          [Date.UTC(2022, 0, 1, 12, 7, 9), 0.19],]
      }],
    
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    
    };
  }
}
