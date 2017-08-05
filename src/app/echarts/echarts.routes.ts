import {RouterModule, Routes} from '@angular/router';
import {EchartsComponent} from './echarts.component';
import {NgModule} from '@angular/core';
const echartsRoutes: Routes = [
  { path: '', component: EchartsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(echartsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export  class EchartsRoutingModule {
}
