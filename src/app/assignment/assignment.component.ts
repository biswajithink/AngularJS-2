import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [`
    .white-text{
    color:#fff;
    }
  `]
})
export class AssignmentComponent implements OnInit {

showSecret=false;
log = [];
toggleshowSecret(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
}
ngOnInit() {
  }

}