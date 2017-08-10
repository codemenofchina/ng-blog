/**
 * Created by chenqiang on 2017/8/10.
 */
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {UserLoginComponent} from './user-login.component';
import {UserRegisterComponent} from './user-register.component';
import {UserRoutingModule} from './user.routes';
@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})

export class UserModule {}
