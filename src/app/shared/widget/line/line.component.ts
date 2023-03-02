import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit{
  chartOptions: {};

  Highcharts = Highcharts;

  // chartData = [
  //   [Date.UTC(2022, 0, 1, 12, 6, 29), 0.7],
  //           [Date.UTC(2022, 0, 1, 12, 6, 39), 0.4],
  //           [Date.UTC(2022, 0, 1, 12, 6, 49), 0.85],
  //           [Date.UTC(2022, 0, 1, 12, 6, 59), 0.3],
  //           [Date.UTC(2022, 0, 1, 12, 7, 9), 0.8],
  //           [Date.UTC(2022, 0, 1, 12, 7, 19), 0.3]
  // ]

  ngOnInit() {
    this.chartOptions = {
        title: {
          text: 'Power Factor',
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
          startOnTick: true,
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
            format: '{value:.1f}' // format y-axis labels to 2 decimal places
          },
          min: 0,
          tickInterval: 0.2,
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
            [Date.UTC(2022, 0, 1, 12, 6, 29), 0.7],
            [Date.UTC(2022, 0, 1, 12, 6, 39), 0.4],
            [Date.UTC(2022, 0, 1, 12, 6, 49), 0.85],
            [Date.UTC(2022, 0, 1, 12, 6, 59), 0.3],
            [Date.UTC(2022, 0, 1, 12, 7, 9), 0.8],
            [Date.UTC(2022, 0, 1, 12, 7, 19), 0.3],]
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
  
  // Create the chart with the initial options and data
  // const chart: Highcharts.Chart = Highcharts.chart(this.chartOptions);
  
  // // Set the interval to update the chart data every 2 seconds
  // setInterval(() => {
  //   chart.series[0].setData(generateRandomData());
  // }, 2000);
  
  // // Function to generate random data for the chart
  // function generateRandomData(): [number, number][] {
  //   const data: [number, number][] = [];
  //   let now = Date.now();
  //   for (let i = 0; i < 10; i++) {
  //     const value = Math.floor(Math.random() * 100);
  //     data.push([now, value]);
  //     now += 1000;
  //   }
  //   return data;
  // }

