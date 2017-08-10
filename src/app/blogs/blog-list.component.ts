import {Component, OnInit} from '@angular/core';
import {BlogsService} from './services/blogs.service';
import {Blog} from './blog';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MyModalComponent} from '../commons/my-modal.component';
@Component({
  template: `
    <div class='container-fluid'>
      <form class='form-horizontal'>
        <div class='row'>
          <div class='col-sm-10'>
            <div class='input-group'>
              <input class='form-control' type='text' placeholder='搜索' id='searchText' name='searchText'/>
              <span class='input-group-btn'>
                <button class='btn btn-primary' type='button'><i class='fa fa-search' aria-hidden='true'></i>搜索</button>
              </span>
            </div>
          </div>
          <div class='col-sm-2'>
            <div class='input-group'>
              <button class='btn btn-success' type='button' routerLink="/blogs/write">发布文章</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div>
      <div class="container-fluid">
        <div *ngFor="let blog of blogList" class="row">
          <div class="col-md-1">blogId:{{blog.blogId}}</div>
          <div class="col-md-6"><a routerLink="/blogs/detail/{{blog.blogId}}">title:{{blog.title}}</a></div>
          <div class="col-md-3">time:{{blog.time}}</div>
          <div class="col-md-2">
            <button class="btn btn-outline-success" type="button" routerLink="/blogs/update/{{blog.blogId}}">修改</button>
            <app-button-modal-basic  (onCloseResult)="onCloseResult($event)" [buttonCss]="buttonCss" [title]="title" [bodyContent]="bodyContent" [buttonName]="buttonName"></app-button-modal-basic>
            <!--<button class="btn btn-outline-danger" type="button" (click)="childModalShow()" >haha</button>-->
          </div>
          <hr/>
        </div>
      </div>
    </div>
    <app-pagination [collectionSize]="totalNum" (currentPage)="pageHandel($event)"></app-pagination>
  `,
  providers: [
    BlogsService
  ]
})

export class BlogListComponent implements OnInit {

  blogList: Blog[];
  errorMessage: string;
  totalNum: number;
  currentPage = 0;
  buttonName = '删除';
  buttonCss = 'btn btn-outline-danger';
  closeResult = false;
  title = '确认删除？';
  bodyContent = '本次删除会将该文章放入回收站，进入回收站可以永久删除';
  constructor(
    private blogService: BlogsService,
    private modalService: NgbModal
  ) {
  }

  initHandle() {
    this.blogService.getBlogs(this.currentPage).subscribe(
      result => {
        this.totalNum = result.total;
        this.blogList = result.data;
      },
      error => this.errorMessage = <any>error
    )

  }

  ngOnInit() {
    this.initHandle();
  }


  pageHandel(event) {
    this.currentPage = event;
    this.initHandle();
  }

  // childModalShow() {
  //   console.log(1);
  //   let ngbModalInstance =this.modalService.open(MyModalComponent, {size: 'sm'});
  //
  //   // ngbModalInstance.then(function(){
  //   // console.log()
  //   //
  //   // })
  //   const ngbModalRef = this.modalService.open(MyModalComponent, {size: 'sm'});
  //   console.log(ngbModalRef);
  //   ngbModalRef.componentInstance.modalHeader = 'Child modal';
  //   ngbModalRef.componentInstance.modalContent = `I am a child modal, opened from parent component!`;
  //   console.log(2);
  //   // this.modalActiveService.close(result => {
  //   //   console.log(4);
  //   //   console.log(result)
  //   // });
  //   // this.modalActiveService.dismiss(reason => {
  //   //   console.log(5);
  //   //   console.log(reason);
  //   // });
  //   console.log(3);
  // }

  flag(flag: boolean) {
    console.log(flag);
  }

  onCloseResult(closeResult: boolean) {
    this.closeResult = closeResult;
    console.log(this.closeResult);
  }

}
