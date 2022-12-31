import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashComponent} from "./dash/dash.component";
import {CaseComponent} from "./pages/case/case.component";
import {WorkbasketComponent} from "./pages/workbasket/workbasket.component";
import {NavComponent} from "./nav/nav.component";
import {AplIntakeComponent} from "./pages/case/apl-intake/apl-intake.component";
import {AplAdjudicationComponent} from "./pages/case/apl-adjudication/apl-adjudication.component";
import {AplHearingComponent} from "./pages/case/apl-hearing/apl-hearing.component";
import {AplClosureComponent} from "./pages/case/apl-closure/apl-closure.component";
import {CaseOpenComponent} from "./pages/case/case-open/case-open.component";
import {AplTasksComponent} from "./pages/case/apl-tasks/apl-tasks.component";
import {MainShellComponent} from "./version_b/layout/main-shell/main-shell.component";
import {HomeComponent} from "./version_b/home/home.component";
import {IntakeWbComponent} from "./version_b/wb/intake-wb/intake-wb.component";
import {AdjudWbComponent} from "./version_b/wb/adjud-wb/adjud-wb.component";
import {TaskCorrComponent} from "./pages/tasks/task-corr/task-corr.component";
import {TaskIcComponent} from "./pages/tasks/task-ic/task-ic.component";
import {TaskHomeComponent} from "./pages/tasks/task-home/task-home.component";
import {ContactComponent} from "./pages/contact/contact.component";

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'home'
//   },
//   {
//     path: '',
//     component: MainShellComponent,
//     children: [
//       {
//         path: 'home',
//         component: HomeComponent
//       },
//       {
//         path: 'intake',
//         component: IntakeWbComponent
//       },
//       {
//         path: 'adjudication',
//         component: AdjudWbComponent
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'home', component: NavComponent},
  {path: 'dash', component: DashComponent},
  {path: 'wb', component: WorkbasketComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'appeal', component: CaseOpenComponent},
  {
    path: 'appeal/:id', component: CaseComponent, children: [
      {path: '', component: CaseOpenComponent},
      {path: 'intake', component: AplIntakeComponent},
      {path: 'adjudication', component: AplAdjudicationComponent},
      {path: 'hearing', component: AplHearingComponent},
      {path: 'closure', component: AplClosureComponent},
      {path: 'tasks', component: AplTasksComponent},
      {path: '**', component: CaseComponent}
    ]
  },
  {
    path: 'task/:id', component: TaskHomeComponent, children: [
      {path: '', component: TaskHomeComponent},
      {path: 'corr', component: TaskCorrComponent},
      {path: 'ic', component: TaskIcComponent},
      {path: '**', component: TaskHomeComponent}
    ]
  },
  {path: '**', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
