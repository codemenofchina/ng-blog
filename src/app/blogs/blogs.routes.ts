import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {BlogsComponent} from './blogs.component';
import {BlogListComponent} from './blog-list.component';
import {BlogDetailComponent} from './blog-detail.component';
import {BlogWriteComponent} from './blog-write.component';
import {BlogUpdateComponent} from './blog-update.component';
import {BlogDeleteComponent} from './blog-delete.component';

const blogsRoutes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: 'write',
        component: BlogWriteComponent
      },
      {
        path: 'update/:id',
        component: BlogUpdateComponent
      },
      {
        path: 'delete/:id',
        component: BlogDeleteComponent
      },
      {
        path: 'detail/:id',
        component: BlogDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogRoutingModule {}
