import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('modal service', () => {
  let modalService: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService],
    });
    modalService = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(modalService).toBeTruthy();
  });

  it('should register the modal', () => {
    modalService.registerModal('test');
    expect(modalService.modalsArray.length).toBe(1);
  });

  it('should toggle the modal visibility', () => {
    modalService.registerModal('test');
    modalService.toggelModal('test');

    expect(modalService.modalsArray[0].visible).toBe(true);
  });

  it('should return the visibility of the modal', () => {
    modalService.registerModal('test');
    modalService.toggelModal('test');
    const result = modalService.isModalVisible('test');

    expect(result).toBe(true);
  });
});
