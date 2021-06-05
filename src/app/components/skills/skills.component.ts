import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  keywords: string[];
  index = 0;
  skillTextIndex = 0;
  nextWord = "";
  skillText = "";
  completed = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe((res) => {
      this.keywords = res.data;
      this.animateSkills();
    })
  }

  animateSkills() {
    if (this.skillText.length == 0) {
      this.skillTextIndex = 1;
      this.completed = false;
      if (this.index === this.keywords.length) {
        this.index = 0;
      }
      this.nextWord = this.keywords[this.index];
      this.skillText = this.nextWord.substring(0, 1);
      this.index++;
      this.skillTextIndex++;
    } else if (this.skillText.length != this.nextWord.length && !this.completed) {
      this.skillText = this.nextWord.substring(0, this.skillTextIndex);
      this.skillTextIndex++;
    } else if (this.skillText.length == this.nextWord.length && !this.completed) {
      this.completed = true;
      window.setTimeout(
        () => {
          this.skillText = this.skillText.substring(0, this.skillText.length - 1);
        }, 300);
    } else if (this.skillText.length != this.nextWord.length && this.completed) {
      this.skillText = this.skillText.substring(0, this.skillText.length - 1);
    }
    document.getElementById('skills') ? document.getElementById('skills').innerText = this.skillText : false;
    window.setTimeout(this.animateSkills.bind(this), 150);
  }

}
