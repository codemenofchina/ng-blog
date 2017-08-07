/**
 * Created by chenqiang on 2017/7/25.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from './blog';
import {BlogsService} from './services/blogs.service';
@Component({
  template: `
    <div>
      <h1>title: {{blog.title}}</h1>
      <strong>ID: {{ blog.blogId }}</strong>
      <strong>TIME: {{ blog.time }}</strong>
    </div>
    <!--<div>HHHHHH</div>-->
  `,
  providers: [
    BlogsService
  ]
})

export class BlogDetailComponent implements OnInit {

  blog: Blog = new Blog();
  id: number;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogsService
  ) {}

  initHandle() {
    this.blogService.getBlogById(this.id).subscribe(
      result => this.blog = result.data,
      error => this.errorMessage = <any>error
    )

  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      // console.log('detail: ' + res.id);
      this.id = res.id;
    });
    this.initHandle();
  }


}
