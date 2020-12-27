import { Component, OnDestroy, OnInit } from '@angular/core';
import * as p5 from 'p5';

// declare var p5: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private p5;

  constructor() {}

  ngOnInit(): void {
    this.createCanvas();
  }

  createCanvas() {
    this.p5 = new p5(this.drawing);
  }

  drawing = (p: any) => {
    let stars = [];
    let speed;
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight-5).parent('home');
      for (var i = 0; i < 200; i++) {
        stars[i] = new Star();
      }
    };

    p.draw = () => {
      p.background(0);
      speed = p.map(p.mouseX, 2, p.width, 1, 40);
      p.translate(p.width / 2, p.height / 2);
      for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
      }
    };

    function Star() {
      this.x = p.random(-p.width, p.width);
      this.y = p.random(-p.height, p.height);
      this.z = p.random(p.width);
      this.pz = this.z;

      this.update = function () {
        this.z = this.z - speed;
        if (this.z < 1) {
          this.x = p.random(-p.width, p.width);
          this.y = p.random(-p.height, p.height);
          this.z = p.width;
          this.pz = this.z;
        }
      };

      this.show = function () {
        p.fill(255);
        p.noStroke();

        var sx = p.map(this.x / this.z, 0, 1, 0, p.width);
        var sy = p.map(this.y / this.z, 0, 1, 0, p.height);
        var r = p.map(this.z, 0, p.width, 13, 0);
        p.ellipse(sx, sy, r, r);

        var px = p.map(this.x / this.pz, 0, 1, 0, p.width);
        var py = p.map(this.y / this.pz, 0, 1, 0, p.height);

        p.stroke(255);
        this.pz = this.z;
        p.line(px, py, sx, sy);
      };
    }
  }

  ngOnDestroy() {
    document.getElementById('home')?.remove();
  }
}
