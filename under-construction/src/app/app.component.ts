import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'farai mathemera';
  education = [
    {
      degree: 'BSc Computer Science and Business Computing',
      institution: 'University of Cape Town',
      description: `
        <ul>
          <li></li>
          <li></li>
        </ul>
      `,
      duration: '2015-2018',
    },
    // Add more education entries here if needed
  ];
}
