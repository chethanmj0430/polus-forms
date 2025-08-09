import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification';
import { Observable } from 'rxjs/internal/Observable';
import {AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [CommonModule, AsyncPipe ],
  templateUrl: './notification.html',
  styleUrl: './notification.scss'
})
export class Notification implements OnInit {
   message$!: Observable<string | null>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.message$ = this.notificationService.message$;
  }
}
