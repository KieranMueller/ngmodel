import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  user = {
    firstName: '',
    password: '',
  };

  placeholder = {
    firstName: 'Kieran',
    password: 'password',
  };

  onSubmit() {
    alert('do something');
  }
}
