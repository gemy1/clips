import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visable = false;

  constructor() {}
  isModalVisible(): boolean {
    return this.visable;
  }
  toggelModal() {
    this.visable = !this.visable;
  }
}
