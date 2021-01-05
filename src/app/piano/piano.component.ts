import { Component, OnInit } from '@angular/core';
import { Instrument } from 'piano-chart';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  constructor() {
    const piano = new Instrument(document.getElementById("pianoContainer"));
    piano.create();
  }

  ngOnInit() {
    const piano = new Instrument(document.getElementById("pianoContainer"));
    piano.create();
  }

}
