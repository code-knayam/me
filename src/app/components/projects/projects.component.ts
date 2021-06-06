import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IProjects } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data: IProjects;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe(res => {
      this.data = res.data;
    })
  }
}
