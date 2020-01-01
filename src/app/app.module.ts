import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomescreenComponent } from "./components/homescreen/homescreen.component";
import { NavmenuComponent } from "./components/navmenu/navmenu.component";
import { TransactionComponent } from "./components/transaction/transaction.component";

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    NavmenuComponent,
    TransactionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
