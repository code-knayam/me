import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProjects } from 'src/app/shared/interfaces/project.interface';
import { DataService } from '../../services/data.service';
import { IWorks } from '../../shared/interfaces/work.interface';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {

  worksData: IWorks;
  projectsData: IProjects;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorks().subscribe(res => {
      this.worksData = res.data;
    });
    this.dataService.getProjects().subscribe(res => {
      this.projectsData = res.data;
    });
  }

}
