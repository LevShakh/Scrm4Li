import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, Header],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  constructor(private router: Router) {}

  form = {
    manager: '',
    phone: '',
    city: '',
    login: '',
    password: ''
  };

  onSave() {
    console.log('Saved data:', this.form);
    alert('Settings saved!');
    this.router.navigate(['/home'])
  }

  logout() {
    this.router.navigate(['/login'])
  }
}
