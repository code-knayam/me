import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IWorks } from '../../shared/interfaces/work.interface';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {

  data: IWorks;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorks().subscribe(res => {
      this.data = res.data;
    })
  }

}
