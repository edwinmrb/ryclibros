import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IPrestamo, Prestamo } from '../prestamo.model';
import { PrestamoService } from '../service/prestamo.service';

@Injectable({ providedIn: 'root' })
export class PrestamoRoutingResolveService implements Resolve<IPrestamo> {
  constructor(protected service: PrestamoService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPrestamo> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((prestamo: HttpResponse<Prestamo>) => {
          if (prestamo.body) {
            return of(prestamo.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Prestamo());
  }
}
