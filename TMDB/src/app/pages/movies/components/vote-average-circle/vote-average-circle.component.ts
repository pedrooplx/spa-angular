import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-average-circle',
  templateUrl: './vote-average-circle.component.html',
  styleUrls: ['./vote-average-circle.component.css']
})
export class VoteAverageCircleComponent implements OnInit {

  constructor() { }

  @Input() average!: Number;

  ngOnInit(): void {
  }

}
