import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Input() modalId!: string;

  constructor(public modal: ModalService, public el: ElementRef) {}
  ngOnInit(): void {
    this.modal.registerModal(this.modalId);
    console.log(this.el.nativeElement);
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggelModal(this.modalId);
  }
}
