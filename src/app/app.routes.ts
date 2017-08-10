import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { PageNotFoundComponent }    from './not-found.component';
/**
 * Created by chenqiang on 2017/7/23.
 */
const appRoutes: Routes = [
  { path: 'blogs', loadChildren: 'app/blogs/blogs.module#BlogsModule'},
  { path: 'echart', loadChildren: 'app/echarts/echarts.module#EchartsModule'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  { path: '',  redirectTo: 'blogs', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
