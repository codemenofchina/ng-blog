/**
 * Created by chenqiang on 2017/8/10.
 */
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './user-login.component';
import {UserRegisterComponent} from './user-register.component';
import {NgModule} from '@angular/core';
const userRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {}
