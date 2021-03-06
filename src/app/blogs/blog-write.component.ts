/**
 * Created by chenqiang on 2017/7/28.
 */
import {Component, OnInit} from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  template: `
    <br>
    <div>
      <form [formGroup]="blogForm" (ngSubmit)="onSubmit()" novalidate>
        <div class="form-group">
          <label class="d-block">
            <input class="form-control" formControlName="name" placeholder="标题，2到32个字符" />
          </label>
        </div>
        <div formGroupName="reprinted">
          <div class="form-group">
            <label class="d-block">
              <input class="form-control" formControlName="reprintedUrl" placeholder="原文URL，如果是转载请粘贴，最长1024个字符" />
            </label>
          </div>
        </div>
        <div>
          <ckeditor formControlName="content">
          </ckeditor>
        </div>
        <div><button class="btn btn-success" type="submit" >提交</button></div>
      </form>
      <!--<p>formValue: {{blogForm.value | json}}</p>-->
      <!--<p>formStatus: {{blogForm.status | json}}</p>-->
      <!--<p>reprintedValue: {{blogForm.get('reprinted.reprintedUrl').value}}</p>-->
      <!--<p>contentValue: {{blogForm.get('content').value}}</p>-->
    </div>
  `
})

export class BlogWriteComponent implements OnInit {

  blogForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createFrom();
  }

  ngOnInit() {}


  createFrom(): void {
    this.blogForm = this.fb.group({
      name: ['', Validators.required],
      reprinted: this.fb.group({
        reprintedUrl: ''
      }),
      content: '<p>My HTML</p>'
    });
  }

  onSubmit(): void {
    console.log(this.blogForm.value);
  }
}
