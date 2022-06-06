import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PupilDetailComponent } from './pupil-detail/pupil-detail.component';
import { PupilsComponent } from './pupils-info/pupils.component';

const routes: Routes = [
  { path:'pupils', component:PupilsComponent },
  { path:'pupil/:id', component:PupilDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsInfoRoutingModule { }
