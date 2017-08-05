/**
 * Created by chenqiang on 2017/7/23.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})

export class BlogsComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  gotoWrite($event): void {
    this.router.navigateByUrl('blogs/write')
  }
}
