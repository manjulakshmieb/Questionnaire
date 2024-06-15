import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ques2',
  templateUrl: './ques2.page.html',
  styleUrls: ['./ques2.page.scss'],
})
export class Ques2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

    // next and prevous button logic here

    controlBtn(input:any) {
      if(input=="next"){
        this.router.navigate(['/ques3']);
      }else{
        this.router.navigate(['/ques1']);
      }
      
    }

}
