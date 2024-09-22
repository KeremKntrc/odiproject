import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



    date:Date = new Date();
    type:string = '';
    quantity:Number =0;



selectedValue:string = "";


firstText:string = 'Please Fill All Information Correctly';

minQuantity:number = 1;
maxQuantity:number= 100;

  CForm = new FormGroup ({
    date:new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required]),
    quantity: new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(100)])
  })

  viewCalculate(){
    let unWorkDays=0;
    let dates = this.date;
    if(this.type == "Cotton"){
      if(this.quantity < 50){
        dates = this.getNewDate(dates,2);
      } else if(this.quantity >= 50){
        dates = this.getNewDate(dates,3);
      }
    } else if(this.type == "Linen"){
      if(this.quantity < 50){
        dates = this.getNewDate(dates,4);
      } else if(this.quantity >= 50){
        dates = this.getNewDate(dates,5);
      }
    }
    this.firstText = `Your Estimated Shipping Time Is ${dates.toDateString()}` ;
}
 getNewDate(date:Date,number:Number){
  for(let i=0;i<number;i++){
    date.setDate(date.getDate() +1);
    if(date.getDay() == 6){
      date.setDate(date.getDate() +2);
    } else if(date.getDay() == 0){
      date.setDate(date.getDate() +1);
    }
  }
  return date;
 }
}
