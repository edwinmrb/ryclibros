import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IPersona } from '../persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  templateUrl: './persona-delete-dialog.component.html',
})
export class PersonaDeleteDialogComponent {
  persona?: IPersona;

  constructor(protected personaService: PersonaService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.personaService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
