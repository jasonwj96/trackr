import { Component, OnInit } from "@angular/core";
import { Transaction } from "src/app/models/Transaction";

@Component({
  selector: "app-homescreen",
  templateUrl: "./homescreen.component.html",
  styleUrls: ["./homescreen.component.scss"]
})
export class HomescreenComponent implements OnInit {
  transactions: Transaction[];
  activeSubscriptions: Transaction[];
  constructor() {}

  ngOnInit() {
    this.transactions = [];
    this.activeSubscriptions = [];

    let obj: Transaction = new Transaction();
    obj.title = "APPETITO 24";
    obj.category = "Food";
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 7.69;
    this.transactions.push(obj);

    obj = new Transaction();
    obj.title = "NETFLIX.COM";
    obj.category = "Entertainment";
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    this.transactions.push(obj);
    this.activeSubscriptions.push(obj);

    obj = new Transaction();
    obj.title = "RECARGA METROBUS";
    obj.category = "Transport";
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 9.99;
    this.transactions.push(obj);

    obj = new Transaction();
    obj.title = "BANCO GENERAL PLANILLA";
    obj.category = "Income";
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    obj.isIncome = true;
    this.transactions.push(obj);

    obj = new Transaction();
    obj.title = "AMAZON PRIME";
    obj.category = "Miscellaneous";
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    this.transactions.push(obj);
    this.activeSubscriptions.push(obj);

    obj = new Transaction();
    obj.title = "SPOTIFY PREMIUM";
    obj.category = "Music";
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    this.transactions.push(obj);
    this.activeSubscriptions.push(obj);
  }
}
