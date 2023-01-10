import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from "@angular/material/button";
import {DashComponent} from './dash/dash.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AddressFormComponent} from './address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {CaseComponent} from './pages/case/case.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {WorkbasketComponent} from './pages/workbasket/workbasket.component';
import {HomeComponent} from './pages/home/home.component';
import {DTableComponent} from './pages/dash/d-table/d-table.component';
import {DChartComponent} from './pages/dash/d-chart/d-chart.component';
import {MatTableModule} from "@angular/material/table";
import {AplIntakeComponent} from './pages/case/apl-intake/apl-intake.component';
import {AplAdjudicationComponent} from './pages/case/apl-adjudication/apl-adjudication.component';
import {AplHearingComponent} from './pages/case/apl-hearing/apl-hearing.component';
import {AplClosureComponent} from './pages/case/apl-closure/apl-closure.component';
import {AplTasksComponent} from './pages/case/apl-tasks/apl-tasks.component';
import {CaseOpenComponent} from './pages/case/case-open/case-open.component';
import {HeaderComponent} from './version_b/layout/header/header.component';
import {MainShellComponent} from './version_b/layout/main-shell/main-shell.component';
import {MenuItemComponent} from './version_b/layout/menu-item/menu-item.component';
import {PageHeaderComponent} from './version_b/layout/page-header/page-header.component';
import {ReportComponent} from './pages/report/report.component';
import {AppealComponent} from './version_b/appeal/appeal.component';
import {TaskComponent} from './version_b/task/task.component';
import {RptComponent} from './version_b/rpt/rpt.component';
import {WbComponent} from './version_b/wb/wb.component';
import {IntakeWbComponent} from './version_b/wb/intake-wb/intake-wb.component';
import {AdjudWbComponent} from './version_b/wb/adjud-wb/adjud-wb.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {DTaskComponent} from './pages/dash/d-task/d-task.component';
import {DIcComponent} from './pages/dash/d-ic/d-ic.component';
import {TaskCorrComponent} from './pages/tasks/task-corr/task-corr.component';
import {TaskIcComponent} from './pages/tasks/task-ic/task-ic.component';
import {MychartComponent} from './mychart/mychart.component';
import {NgChartsConfiguration, NgChartsModule} from "ng2-charts";
import {TaskHomeComponent} from "./pages/tasks/task-home/task-home.component";
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from './shared/modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AddressPegaComponent} from './address-pega/address-pega.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ModalUpdateComponent} from './shared/modal-update/modal-update.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavComponent,
    AddressFormComponent,
    CaseComponent,
    WorkbasketComponent,
    HomeComponent,
    DTableComponent,
    DChartComponent,
    AplIntakeComponent,
    AplAdjudicationComponent,
    AplHearingComponent,
    AplClosureComponent,
    AplTasksComponent,
    CaseOpenComponent,
    HeaderComponent,
    MainShellComponent,
    MenuItemComponent,
    PageHeaderComponent,
    ReportComponent,
    AppealComponent,
    TaskComponent,
    RptComponent,
    WbComponent,
    IntakeWbComponent,
    AdjudWbComponent,
    DTaskComponent,
    DIcComponent,
    TaskCorrComponent,
    TaskIcComponent,
    TaskHomeComponent,
    MychartComponent,
    MyLineChartComponent,
    ModalComponent,
    AddressPegaComponent,
    ContactComponent,
    ModalUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    NgChartsModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [{provide: NgChartsConfiguration, useValue: {generateColors: true}}],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}
