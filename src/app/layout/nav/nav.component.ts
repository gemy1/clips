import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(public modal: ModalService) {}
  openModal(event: Event, modalId: string) {
    event.preventDefault();

    this.modal.toggelModal(modalId);
  }
}
