/**
 * Created by chenqiang on 2017/8/1.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <ngb-pagination
      [collectionSize]="collectionSize"
      [pageSize]="pageSize"
      [maxSize]="maxSize"
      [rotate]="rotate"
      [boundaryLinks]="boundaryLinks"
      (pageChange)="pageChange($event)">
    </ngb-pagination>
  `
})
export class MyPaginationComponent {
  @Input()
  collectionSize = 0;
  pageSize: number;
  @Output()
  currentPage = new EventEmitter();
  maxSize: number;
  rotate: boolean;
  boundaryLinks: boolean;
  constructor () {
    this.pageSize = 10;
    this.maxSize = 5;
    this.rotate = true;
    this.boundaryLinks = true;
  }
  pageChange(event) {
    this.currentPage.emit(event);
    console.log(event);
  }
}
