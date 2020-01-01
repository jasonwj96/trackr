import { Component, OnInit, Input } from "@angular/core";
import { Transaction } from "src/app/models/Transaction";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.scss"]
})
export class TransactionComponent implements OnInit {
  @Input() data: Transaction;
  transactionIconClass: string;
  titleCharLimit: number = 18;

  constructor() {}

  ngOnInit() {
    this.transactionIconClass =
      this.data.category.toLocaleLowerCase() + " icon";

    if (this.data.title.length > this.titleCharLimit) {
      this.data.title = this.data.title.substr(0, this.titleCharLimit) + "...";
    }
  }
}
