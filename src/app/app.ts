import { Component, signal } from '@angular/core';
import { FormTabs } from "./components/form-tabs/form-tabs";
import { Notification } from "./components/notification/notification";

@Component({
  selector: 'app-root',
  imports: [FormTabs, Notification],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('polus-forms');
}
