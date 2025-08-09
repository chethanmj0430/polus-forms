import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

export interface FormSchema {
  type: string;
  label: string;
  name: string;
  required?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class FormState {
  public readonly formASchema: FormSchema[] = [
    { "type": "text", "label": "Full Name", "name": "fullName", "required": true },
    { "type": "email", "label": "Email", "name": "email" },
    { "type": "checkbox", "label": "Subscribe", "name": "subscribe" }
  ];

  public readonly formBSchema: FormSchema[] = [
    { "type": "text", "label": "Username", "name": "username", "required": true },
    { "type": "password", "label": "Password", "name": "password", "required": true },
    { "type": "checkbox", "label": "Remember Me", "name": "remember" }
  ];

 private formAStateSubject = new BehaviorSubject<any>(this.getLocalStorage('formAState'));
  private formBStateSubject = new BehaviorSubject<any>(this.getLocalStorage('formBState'));

  public formAState$: Observable<any> = this.formAStateSubject.asObservable();
  public formBState$: Observable<any> = this.formBStateSubject.asObservable();

  constructor() { }

  setFormAState(state: any): void {
    this.formAStateSubject.next(state);
    this.saveToLocalStorage('formAState', state);
  }

  setFormBState(state: any): void {
    this.formBStateSubject.next(state);
    this.saveToLocalStorage('formBState', state);
  }

  private getLocalStorage(key: string): any {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : {};
  }

  private saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
