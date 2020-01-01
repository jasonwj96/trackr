import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navmenu",
  templateUrl: "./navmenu.component.html",
  styleUrls: ["./navmenu.component.scss"]
})
export class NavmenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let path = location.pathname.split("/").pop();
    path = path.substring(0, 1).toUpperCase() + path.substring(1);
    const buttons = Array.from(document.getElementsByClassName("navmenu-btn"));

    if (path === "") {
      buttons[0].classList.add("selected");
    } else {
      buttons.forEach(button => {
        Array.from(button.childNodes).forEach(node => {
          if (node.textContent === path) {
            button.classList.add("selected");
          }
        });
      });
    }
  }

  selectButton(event: any) {
    const selectedBtn = event.target;
    const buttons = Array.from(document.getElementsByClassName("navmenu-btn"));

    buttons.forEach(button => {
      button.classList.remove("selected");
    });

    selectedBtn.classList.add("selected");
  }
}
