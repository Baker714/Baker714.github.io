import { Component, OnInit } from '@angular/core';
import { Instrument } from 'piano-chart';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const piano = new Instrument(document.getElementById("pianoContainer"), {
      startOctave: 3,
      endOctave: 4,
      showNoteNames: "onpress",
      keyPressStyel: "subtle",
    });
    piano.create();
    piano.keyDown("A3");
  }

}
