/**
 * Created by chenqiang on 2017/8/6.
 */
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-my-model',
  styles: [
    '.modal-buttons .btn {margin-right: 20px;}.modal-content {color: black;}'
  ],
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">{{modalHeader}}</h4>
        <button class="close" aria-label="Close" (click)="close()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{modalContent}}
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary confirm-btn" (click)="confirm()">确认</button>
      </div>
    </div>
  `
})

export class MyModalComponent implements OnInit {

  modalHeader: string;
  modalContent: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  close() {
    console.log('modal closed')
    this.activeModal.close();
  }

  confirm() {
    console.log('modal confirm')
    this.activeModal.close();
  }
}
