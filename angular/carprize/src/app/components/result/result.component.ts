import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private _service:CalculateService) { }

  carPrize = "Yet to be predicted";

  ngOnInit(): void {
    this._service.$sendPrize.subscribe((data) =>{ this.carPrize = data});
  }

}
