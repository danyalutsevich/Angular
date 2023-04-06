import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'John Doe';
  title: string = 'Web Developer';
  address: string = '1234 Main St, Anytown, USA';
  phone: string = '(555) 555-5555';
  email: string = 'email@email.com';
  website: string = 'https://www.website.com';
  summary: string = 'Summary of your skills and experience.';
  skills: string[] = ['Skill 1', 'Skill 2', 'Skill 3'];
  experience: any[] = [
    {
      company: 'Company 1',
      title: 'Job Title 1',
      years: '2010 - 2012',
      description: 'Description 1'
    },
    {
      company: 'Company 2',
      title: 'Job Title 2',
      years: '2012 - 2014',
      description: 'Description 2'
    },
    {
      company: 'Company 3',
      title: 'Job Title 3',
      years: '2014 - 2016',
      description: 'Description 3'
    }]


}