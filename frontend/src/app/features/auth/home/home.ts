import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  showAddClientBtn = false;
  contextMenuX = 0;
  contextMenuY = 0;

  clients = [
    { id: 4564653, name: 'Vasya Pupkin', phone: '+491313514123', comment: 'He payed $1000', sum: 1000, stage: '1 level' },
    { id: 356345634, name: 'Vasya Pupkin', phone: '+491313514123', comment: 'He payed $1000', sum: 1000, stage: '3 level' },
    { id: 232424243, name: 'Vasya Pupkin', phone: '+491313514123', comment: 'He payed $1000', sum: 1000, stage: '2 level' },
    // и т.д.
  ];

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
    this.showAddClientBtn = true;
  }

  onAddClient() {
    alert('Redirect to add client form or open modal');
    this.showAddClientBtn = false;
  }

  openSettings() {
    alert('Open user settings window (future)');
  }
}
