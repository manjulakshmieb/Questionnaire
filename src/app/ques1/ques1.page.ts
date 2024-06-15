import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.page.html',
  styleUrls: ['./ques1.page.scss'],
})
export class Ques1Page implements OnInit{


  constructor(private router:Router,) { }
   
  ngOnInit() {
  }

  controlBtn(input:any) {
    if(input=="next"){
      this.router.navigate(['/ques2']);
    }
    
  }

  

}
