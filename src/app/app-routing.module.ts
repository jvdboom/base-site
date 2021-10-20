import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent, DailyComponent, DeliverJobsComponent, HomeComponent, LetterComponent, MonthlyComponent, TestComponent, ToParkComponent } from './components';
import { DepartmentCodesComponent } from './components/configuration/department-codes/department-codes.component';
import { EnvelopeCodesComponent } from './components/configuration/envelope-codes/envelope-codes.component';
import { LetterCodesComponent } from './components/configuration/letter-codes/letter-codes.component';
import { MediaCodesComponent } from './components/configuration/media-codes/media-codes.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "daily", component: DailyComponent },
  { path: "deliverjobs", component: DeliverJobsComponent },
  { path: "configuration", component: ConfigurationComponent },
  { path: "test", component: TestComponent },
  { path: "monthly", component: MonthlyComponent },
  { path: "letter", component: LetterComponent },
  { path: "topark", component: ToParkComponent },
  { path: "departmentcodes", component: DepartmentCodesComponent },
  { path: "envelopecodes", component: EnvelopeCodesComponent },
  { path: "lettercodes", component: LetterCodesComponent },
  { path: "mediacodes", component: MediaCodesComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // { enableTracing: true } // <-- debugging purposes only)
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
