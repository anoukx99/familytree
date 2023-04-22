import { Component } from '@angular/core';

@Component({
  selector: 'app-programma',
  templateUrl: './programma.component.html',
  styleUrls: ['./programma.component.css']
})
export class ProgrammaComponent {
    programData = [
      {
        time: '14:00',
        activity: 'Officiële opening familiedag',
        age: ''
      },
      {
        time: '14:15',
        activity: 'Activiteit 1',
        age: 'Doelgroep'
      },
      {
        time: '',
        activity: 'Speurtocht',
        age: '5 t/m 11 jaar'
      },
      {
        time: '',
        activity: 'Weerwolven van Wakkerdam',
        age: '12+'
      },
      {
        time: '',
        activity: 'Wandeltocht door Naarden',
        age: 'Iedereen / vooral volwassenen.'
      },
      {
        time: '16:00',
        activity: 'Activiteit 2',
        age: 'Doelgroep'
      },
      {
        time: '',
        activity: 'Verschillende spellen',
        age: 'Kleinste kinderen'
      },
      {
        time: '',
        activity: 'Familie de Graaf PubQuiz',
        age: '10+'
      },
      {
        time: '',
        activity: 'Doorlopende activiteiten',
        age: 'Doelgroep'
      },
      {
        time: '',
        activity: 'Spelletjes',
        age: 'Iedereen'
      },
      {
        time: '',
        activity: 'Karaoke',
        age: 'Iedereen'
      },
      {
        time: '',
        activity: 'Fotobooth',
        age: 'Iedereen'
      },
      {
        time: '17:30',
        activity: 'Avondeten',
        age: ''
      },
      {
        time: '',
        activity: 'Frietkraam komt.',
        age: ''
      }
    ];
  }

