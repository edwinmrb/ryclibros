import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IUbicacion } from '../ubicacion.model';
import { UbicacionService } from '../service/ubicacion.service';

@Component({
  templateUrl: './ubicacion-delete-dialog.component.html',
})
export class UbicacionDeleteDialogComponent {
  ubicacion?: IUbicacion;

  constructor(protected ubicacionService: UbicacionService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.ubicacionService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
