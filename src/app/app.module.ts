import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components";

// PrimeNG
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from "primeng/panel";
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from "primeng/dropdown";
import { TableModule } from "primeng/table";
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';


import { MonthlyComponent } from "./components/monthly/monthly.component";
import { LetterComponent } from "./components/letter/letter.component";
import { CarService, CosmosRestService } from "./services";
import { TestComponent } from "./components/test/test.component";
import { ConfigurationComponent } from "./components/configuration/configuration.component";
import { ToParkComponent } from "./components/to-park/to-park.component";
import { DailyComponent } from "./components/daily/daily.component";
import { DeliverJobsComponent } from './components/deliver-jobs/deliver-jobs.component';
import { DepartmentCodesComponent } from './components/configuration/department-codes/department-codes.component';
import { LetterCodesComponent } from './components/configuration/letter-codes/letter-codes.component';
import { MediaCodesComponent } from './components/configuration/media-codes/media-codes.component';
import { EnvelopeCodesComponent } from './components/configuration/envelope-codes/envelope-codes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    ConfigurationComponent,
    ToParkComponent,
    DailyComponent,
    MonthlyComponent,
    LetterComponent,
    DeliverJobsComponent,
    DepartmentCodesComponent,
    LetterCodesComponent,
    MediaCodesComponent,
    EnvelopeCodesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    DropdownModule,
    InputTextModule,
    MenubarModule,
    PaginatorModule,
    PanelModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [MessageService, CarService, CosmosRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
