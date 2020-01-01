import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomescreenComponent } from "./components/homescreen/homescreen.component";

const routes: Routes = [
  { path: "home", component: HomescreenComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
