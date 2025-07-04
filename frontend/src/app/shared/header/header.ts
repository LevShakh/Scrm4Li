import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private router: Router) {}

  onAddClient() {
    alert('Redirect to add client form or open modal');
    //this.showAddClientBtn = false;
  }

  openSettings() {
    this.router.navigate(['/settings']);
  }

}
