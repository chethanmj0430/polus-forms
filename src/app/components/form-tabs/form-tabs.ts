import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormState, FormSchema } from '../../services/form-state';
import { DynamicForm } from "../dynamic-form/dynamic-form";
import { AsyncPipe, CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-form-tabs',
  imports: [DynamicForm, CommonModule, AsyncPipe],
  templateUrl: './form-tabs.html',
  styleUrl: './form-tabs.scss'
})
export class FormTabs {
activeTab = 'formA';
  
  formASchema: FormSchema[] = [];
  formBSchema: FormSchema[] = [];
  formAValue$!: Observable<any>;
  formBValue$!: Observable<any>;

  constructor(private formStateService: FormState, private notificationService: NotificationService) { }

  ngOnInit(): void {
    
    this.formAValue$ = this.formStateService.formAState$;
    this.formBValue$ = this.formStateService.formBState$;


    this.formASchema = this.formStateService.formASchema;
    this.formBSchema = this.formStateService.formBSchema;
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  onFormASubmit(formValue: any): void {
    console.log('Form A submitted:', formValue);
    this.formStateService.setFormAState(formValue);
    this.notificationService.show('Form A data saved successfully!');
  }

  onFormBSubmit(formValue: any): void {
    console.log('Form B submitted:', formValue);
    this.formStateService.setFormBState(formValue);
    this.notificationService.show('Form B data saved successfully!');
  }
}
