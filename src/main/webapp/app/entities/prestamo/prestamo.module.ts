import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { PrestamoComponent } from './list/prestamo.component';
import { PrestamoDetailComponent } from './detail/prestamo-detail.component';
import { PrestamoUpdateComponent } from './update/prestamo-update.component';
import { PrestamoDeleteDialogComponent } from './delete/prestamo-delete-dialog.component';
import { PrestamoRoutingModule } from './route/prestamo-routing.module';

@NgModule({
  imports: [SharedModule, PrestamoRoutingModule],
  declarations: [PrestamoComponent, PrestamoDetailComponent, PrestamoUpdateComponent, PrestamoDeleteDialogComponent],
  entryComponents: [PrestamoDeleteDialogComponent],
})
export class PrestamoModule {}