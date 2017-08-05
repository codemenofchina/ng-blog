/**
 * Created by chenqiang on 2017/7/28.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  template: `
    <div>
      <h1>this is delete page</h1>
      <strong>ID: {{blogId}}</strong>
    </div>
  `
})

export class BlogDeleteComponent implements OnInit {

  blogId: string;

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit () {
    this.route.params.subscribe(res => {
      console.log('delete: ' + res.id);
      this.blogId = res.id;
    })
  }
}
