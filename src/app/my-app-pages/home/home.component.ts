import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'Myapp-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  message?: string;

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getHello().subscribe((helloWorldResult)=>{
      this.message = helloWorldResult.message
    })
  }

}
