import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LineComponent } from './widget/line/line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Line2Component } from './widget/line2/line2.component';
import { DetailsComponent } from './widget/details/details.component';
import { MatSelectModule } from '@angular/material/select';
import { DropdownsComponent } from './widget/dropdowns/dropdowns.component';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { GaugesComponent } from './widget/gauges/gauges.component';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LineComponent,
    Line2Component,
    GaugesComponent,
    DetailsComponent,
    DropdownsComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatFormFieldModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LineComponent,
    Line2Component,
    GaugesComponent,
    DetailsComponent,
    DropdownsComponent
  ]
})
export class SharedModule { }
