import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  owners = [ 0, 1, 3 ];
  fuel = [ 'Petrol', 'Diesel', 'CNG'];
  seller = ['Dealer', 'Individual'];
  transmission = ['Manual', 'Automatic'];

  constructor(private _service : CalculateService) { }


  ngOnInit(): void {
  }

  onCalculate(PrizeForm){    

    this._service.prizeCalculation(PrizeForm.value)    
  }

}
