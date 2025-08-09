import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormSchema } from '../../services/form-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss'
})
export class DynamicForm {
@Input() schema: FormSchema[] = [];
  @Input() initialValue: any = {};
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['schema'] || changes['initialValue']) {
      this.buildForm();
      if (this.initialValue) {
        this.form.patchValue(this.initialValue);
      }
    }
  }

  buildForm(): void {
    const group = this.fb.group({});
    this.schema.forEach(control => {
      const validators = this.getValidators(control);
      group.addControl(control.name, this.fb.control(null, validators));
    });
    this.form = group;
  }

  private getValidators(control: FormSchema): any[] {
    const validators = [];
    if (control.required) {
      validators.push(Validators.required);
    }
    if (control.type === 'email') {
      validators.push(Validators.email);
    }
    return validators;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  getControl(name: string): AbstractControl | null {
    return this.form.get(name);
  }
}
