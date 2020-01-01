import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomescreenComponent } from "./pages/homescreen/homescreen.component";
import { TransactionsscreenComponent } from "./pages/transactionsscreen/transactionsscreen.component";
import { AnalyticsscreenComponent } from "./pages/analyticsscreen/analyticsscreen.component";
import { SettingsscreenComponent } from "./pages/settingsscreen/settingsscreen.component";

const routes: Routes = [
  { path: "home", component: HomescreenComponent },
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
