import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chess-square',
  templateUrl: './chess-square.component.html',
  styleUrls: ['./chess-square.component.css']
})
export class ChessSquareComponent implements OnInit {
  @Input() value: 'Q' | 'K' | 'R' | 'N' | 'B' | 'P';
  ngOnInit() {
  }
}
