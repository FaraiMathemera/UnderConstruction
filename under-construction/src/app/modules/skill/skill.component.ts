import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  skills = [
    { name: 'TYPESCRIPT', experience: 5 },
    { name: 'NODE, EXPRESS', experience: 3 },
    { name: 'SQL, mySQL AND PostgreSQL', experience: 4 },
    { name: 'AWS', experience: 6 },
    { name: 'ANGULAR', experience: 3 },
    { name: 'HTML, CSS, JS', experience: 4 },
  ];
}
