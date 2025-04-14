import { Component, signal } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-mail',
  templateUrl: './contact-mail.component.html',
  styleUrl: './contact-mail.component.scss',
  standalone: false
})

export class ContactMailComponent {
  readonly dateRange = new FormGroup({
    start: new FormControl<Date | null>(null, [Validators.required]),
    end: new FormControl<Date | null>(null, [Validators.required]),
  });

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorEmailMessage = signal('');

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
