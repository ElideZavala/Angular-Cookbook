import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  // BehaviorSubject: es un observable que emite el último valor emitido por el observable
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  // lo convertimos en observable para que se pueda suscribir
  count$: Observable<number> = this.count.asObservable();

  constructor() {}

  setCount(countValue: number): void {
    // valor máximo de countValue es 0, ya que Math.max devuelve el mayor de los números dados
    // Math.max retorn el mayor de los números dados, en este caso 0 y countValue
    const newCount = Math.max(0, countValue);
    this.count.next(newCount);
  }
}
