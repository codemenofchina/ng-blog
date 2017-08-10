/**
 * Created by xiaoqiang on 2017/8/9.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-button-modal-basic',
  template: `
    <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">{{title}}</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{{bodyContent}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" (click)="c('Close click')" class='btn btn-primary' type='button'>确认</button>
      </div>
    </ng-template>
    <button class="{{buttonCss}}" (click)="open(content)">{{buttonName}}</button>
  `
})
export class MyButtonModelComponent {
  @Output() onCloseResult = new EventEmitter<boolean>();
  @Input() buttonName: string;
  @Input() title: string;
  @Input() bodyContent: string;
  @Input() buttonCss: string;
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.onCloseResult.emit(true);
    }, (reason) => {
      this.onCloseResult.emit(false);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
