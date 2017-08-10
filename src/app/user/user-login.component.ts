/**
 * Created by chenqiang on 2017/8/10.
 */
import {Component, OnInit} from '@angular/core';
@Component({
  template: `
      <div><h1>this is login page</h1></div>
  `,
  styles: [
    '.auth-main{display: flex;align-items: center;height: 100%;width: 100%;position: absolute; background-color: #95a237}',
  ]
})

export class UserLoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
