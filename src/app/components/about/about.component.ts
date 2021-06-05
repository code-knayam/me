import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IAbout } from 'src/app/shared/interfaces/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: IAbout;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAbout().subscribe(res => {
      this.data = res.data;
    })
  }

}
