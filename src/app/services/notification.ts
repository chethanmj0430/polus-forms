import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  public message$: Observable<string | null> = this.messageSubject.asObservable();

  constructor() { }

  show(message: string, duration = 3000): void {
    this.messageSubject.next(message);
    setTimeout(() => this.messageSubject.next(null), duration);
  }
}
