import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Pupil from '../Pupil';
import { PupilService } from '../pupil.service';

@Component({
  selector: 'app-pupil-detail',
  templateUrl: './pupil-detail.component.html',
  styleUrls: ['./pupil-detail.component.css']
})
export class PupilDetailComponent implements OnInit {

  id: string | null = "";
  pupil: Observable<Pupil | undefined> = of(undefined);
  constructor(private service: PupilService,
    private route: ActivatedRoute,
    private router: Router
    ) { }



  ngOnInit(): void {
    this.pupil = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getPupil(params.get("id"))));

  }

  goBack(){
    this.router.navigate(['/pupils'])

  }


}
