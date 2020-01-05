import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavmenuComponent } from "./components/navmenu/navmenu.component";
import { TransactionComponent } from "./components/transaction/transaction.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TransactionsscreenComponent } from "./pages/transactionsscreen/transactionsscreen.component";
import { AnalyticsscreenComponent } from "./pages/analyticsscreen/analyticsscreen.component";
import { SettingsscreenComponent } from "./pages/settingsscreen/settingsscreen.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavmenuComponent,
    TransactionComponent,
    TransactionsscreenComponent,
    AnalyticsscreenComponent,
    SettingsscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
