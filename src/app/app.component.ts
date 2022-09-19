import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [0];
  constructor() {
    setInterval(() => {
      this.images.push(this.images.length);
    }, 2000);
  }
}
