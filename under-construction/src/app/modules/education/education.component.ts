import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input()
  degree!: string;
  @Input()
  institution!: string;
  @Input()
  description!: string;
  @Input()
  duration!: string;
}
