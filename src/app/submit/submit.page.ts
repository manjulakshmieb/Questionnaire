import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/ques1']);

  }

  submit() {
    // Add your submission logic here
    alert('Submitted successfully!');
    this.router.navigate(['ques1'])
  }

}
