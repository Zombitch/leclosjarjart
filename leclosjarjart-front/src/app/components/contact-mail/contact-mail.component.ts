import { Component, inject, signal } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-contact-mail',
  templateUrl: './contact-mail.component.html',
  styleUrl: './contact-mail.component.scss',
  standalone: false
})

export class ContactMailComponent {
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  readonly dateRange = new FormGroup({
    start: new FormControl<Date | null>(null, [Validators.required]),
    end: new FormControl<Date | null>(null, [Validators.required]),
  });

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorEmailMessage = signal('');

  constructor(){
    this._locale.set(navigator.language);
    this._adapter.setLocale(this._locale());
  }

  updateErrorEmailMessage() {
    if (this.email.hasError('required')) {
      this.errorEmailMessage.set('Champ obligatoire');
    } else if (this.email.hasError('email')) {
      this.errorEmailMessage.set('Email non valide');
    } else {
      this.errorEmailMessage.set('');
    }
  }

  sendMail(){
    console.log("SENT")
  }
}
