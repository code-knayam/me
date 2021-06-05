import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IWork } from '../../shared/interfaces/work.interface';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  data: IWork;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorks().subscribe(res => {
      this.data = res.data;
    })
  }

}
