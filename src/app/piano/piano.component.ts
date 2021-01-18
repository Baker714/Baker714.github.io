import { Component, OnInit } from '@angular/core';
import { Instrument } from 'piano-chart';
import * as WebMidi from 'webmidi';
import * as Tone from 'tone';


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
      keyPressStyle: "subtle",
    });
    const synth = new Tone.Synth().toDestination();
    piano.create();
    piano.addKeyMouseDownListener((key) => {piano.keyDown(key);synth.triggerAttackRelease(String(key), "8n");});
    piano.addKeyMouseUpListener((key) => {piano.keyUp(String(key));})
  }

}
