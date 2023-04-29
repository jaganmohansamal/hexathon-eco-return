import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  @Input() public citySelected: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Payment(event: any) {
    console.log(event.target.className);
    if(event.target.className.includes("badge-success")){
      //
    }
    else{
      this.router.navigate(['/', "payment"]);
    }
  }
}
