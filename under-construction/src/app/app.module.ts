import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './modules/header/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { EducationComponent } from './modules/education/education.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { SkillComponent } from './modules/skill/skill.component';
import { IntroComponent } from './modules/intro/intro.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    IntroComponent,
    SkillComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
