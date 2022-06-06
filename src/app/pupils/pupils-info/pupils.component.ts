import { Component, OnInit, SimpleChange } from '@angular/core';
import { PupilService } from '../pupil.service';
import Pupil from '../Pupil';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.css']
})
export class PupilsComponent implements OnInit {

  pupils: Pupil[] = [];

  color:string='';

  constructor(private service: PupilService) { }

  ngOnInit(): void {
    this.getPupils();
  }

  getPupils():void{
    this.service.getPupils().subscribe((pupils) => this.pupils = pupils)
  }

}
