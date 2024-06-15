import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.page.html',
  styleUrls: ['./ques3.page.scss'],
})
export class Ques3Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
    // next and prevous button logic here

  controlBtn(input:any) {
    if(input=="next"){
      this.router.navigate(['/submit']);
    }else{
      this.router.navigate(['/ques2']);
    }
    
  }


}
