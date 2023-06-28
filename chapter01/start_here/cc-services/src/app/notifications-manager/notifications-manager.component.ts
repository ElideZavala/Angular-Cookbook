import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$!: Observable<number>;
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((countValue) => {
      this.notificationsService.setCount(++countValue);
    });
  }

  removeNotification() {
    this.getCountValue((countValue) => {
      this.notificationsService.setCount(--countValue);
    });
  }

  resetCount() {
    this.getCountValue(() => {
      this.notificationsService.setCount(0);
    });
  }
}
