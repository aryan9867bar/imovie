import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  submitFeedback() {
    // Here you can handle form submission logic, such as sending data to a server or displaying a confirmation message
    console.log('Form Data:', this.formData);
    // Reset form after submission
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

}
