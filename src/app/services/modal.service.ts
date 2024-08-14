import { Injectable } from '@angular/core';
import IModal from '../interfaces/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modals: IModal[] = [];

  constructor() {}

  registerModal(modalId: string) {
    const modal = this.modals.find((m) => m.modalId === modalId);
    if (!modal) {
      this.modals.push({ modalId, visible: false });
    }
  }
  isModalVisible(modalId: string): boolean {
    return !!this.modals.find((modal) => modal.modalId === modalId)?.visible;
  }
  toggelModal(modalId: string) {
    const modal = this.modals.find((modal) => modal.modalId === modalId);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
