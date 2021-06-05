import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IContact } from '../../shared/interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  data: IContact;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getContact().subscribe(res => {
      this.data = res.data;
    });
  }

}
