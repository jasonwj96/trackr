import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TransactionsscreenComponent } from "./pages/transactionsscreen/transactionsscreen.component";
import { AnalyticsscreenComponent } from "./pages/analyticsscreen/analyticsscreen.component";
import { SettingsscreenComponent } from "./pages/settingsscreen/settingsscreen.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "transactions", component: TransactionsscreenComponent },
  { path: "analytics", component: AnalyticsscreenComponent },
  { path: "settings", component: SettingsscreenComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
