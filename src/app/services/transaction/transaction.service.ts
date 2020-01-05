import { Injectable } from "@angular/core";
import { Transaction } from "src/app/models/Transaction";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  constructor() {}

  getTransactions(): Transaction[] {
    const transactions: Transaction[] = [];

    let obj: Transaction = new Transaction();
    obj.title = "APPETITO 24";
    obj.category = 1;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 7.69;
    transactions.push(obj);

    obj = new Transaction();
    obj.title = "NETFLIX.COM";
    obj.category = 0;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    transactions.push(obj);

    obj = new Transaction();
    obj.title = "RECARGA METROBUS";
    obj.category = 2;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 9.99;
    transactions.push(obj);

    obj = new Transaction();
    obj.title = "BANCO GENERAL PLANILLA";
    obj.category = 3;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    obj.isIncome = true;
    transactions.push(obj);

    obj = new Transaction();
    obj.title = "AMAZON PRIME";
    obj.category = 4;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    transactions.push(obj);

    obj = new Transaction();
    obj.title = "SPOTIFY PREMIUM";
    obj.category = 5;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    transactions.push(obj);

    return transactions;
  }

  getActiveSubscriptions(): Transaction[] {
    const activeSubscriptions: Transaction[] = [];
    let obj: Transaction = new Transaction();

    obj = new Transaction();
    obj.title = "NETFLIX.COM";
    obj.category = 0;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    activeSubscriptions.push(obj);

    obj = new Transaction();
    obj.title = "AMAZON PRIME";
    obj.category = 4;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    activeSubscriptions.push(obj);

    obj = new Transaction();
    obj.title = "SPOTIFY PREMIUM";
    obj.category = 5;
    obj.creationDate = `${new Date().toLocaleDateString()}`;
    obj.amount = 12.99;
    activeSubscriptions.push(obj);

    return activeSubscriptions;
  }
}
