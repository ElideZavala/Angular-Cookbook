import { Injectable } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeBucketService extends BucketService {
  constructor() {
    super();
  }

  removeItem(): void {
    alert('Employess can not delete items');
  }
}
