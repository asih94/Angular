import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PupilsInfoRoutingModule } from './pupils-routing.module';
import { PupilDetailComponent } from './pupil-detail/pupil-detail.component';
import { FormsModule } from '@angular/forms';
import { PupilsComponent } from './pupils-info/pupils.component';


@NgModule({
  declarations: [
    PupilDetailComponent, PupilsComponent
  ],
  imports: [
    CommonModule, FormsModule,
    PupilsInfoRoutingModule
  ]
})
export class PupilsInfoModule { }
