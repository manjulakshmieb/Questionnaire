import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.page.html',
  styleUrls: ['./ques1.page.scss'],
})
export class Ques1Page implements OnInit{

  question:any
  constructor(private router:Router
  ) { }
   
  ngOnInit() {
  }
    // next and prevous button logic here

    controlBtn(input:any) {
      if(input=="next"){
        this.router.navigate(['/submit']);
      }else{
        this.router.navigate(['/ques3']);
      }
      
    }

  

}
