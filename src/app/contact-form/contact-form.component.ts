import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      emailjs.init('FkfC-x6Q99UYh4Fp6');
    }
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        await emailjs.send('service_cx0lvy8', 'Portfolio', {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        });

        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        this.submitError = true;
        console.error("Erreur lors de l'envoi:", error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
