/**
 * Created by chenqiang on 2017/7/23.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogRoutingModule} from './blogs.routes'
import {BlogsComponent} from './blogs.component';
import {BlogListComponent} from './blog-list.component'
import {BlogDetailComponent} from './blog-detail.component';
import {BlogWriteComponent} from './blog-write.component';
import {BlogUpdateComponent} from './blog-update.component';
import {BlogDeleteComponent} from './blog-delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
import {MyPaginationComponent} from '../commons/my-pagination.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MyModalComponent} from '../commons/my-modal.component';
import {MyButtonModelComponent} from '../commons/my-button-modal.component';
@NgModule({
  declarations: [
    BlogsComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogWriteComponent,
    BlogUpdateComponent,
    BlogDeleteComponent,
    MyPaginationComponent,
    MyModalComponent,
    MyButtonModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [
    MyModalComponent
  ]
})

export class BlogsModule {}
