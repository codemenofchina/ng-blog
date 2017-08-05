import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EchartsRoutingModule} from './echarts.routes';
import {EchartsComponent} from './echarts.component';
@NgModule({
  declarations: [
    EchartsComponent
  ],
  imports: [
    CommonModule,
    EchartsRoutingModule
  ]
})

export class EchartsModule {}
