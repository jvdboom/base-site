import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public menuItemsLeft: MenuItem[] = [];
  public items: MenuItem[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.menuItemsLeft = [];
    this.menuItemsLeft.push({ label: "DeliverJobs", icon: "pi pi-fw pi-pencil", routerLink: ["deliverjobs"] });
    this.menuItemsLeft.push({ label: "TP2", icon: "pi pi-fw pi-pencil", routerLink: ["topark"] });
    this.menuItemsLeft.push({ label: "Test", icon: "pi pi-fw pi-pencil", routerLink: ["test"] });
    this.menuItemsLeft.push({ label: "Home", icon: "pi pi-fw pi-pencil", routerLink: ["home"] });
    this.menuItemsLeft.push({
      label: 'Configuration',
      items: [
        { label: 'Emailcodes', icon: 'pi pi-fw pi-chart-bar', routerLink: ["departmentcodes"] },
        { label: 'Lettercodes', icon: 'pi pi-fw pi-chart-bar', routerLink: ["lettercodes"] },
        { label: 'Envelopecodes', icon: 'pi pi-fw pi-chart-bar', routerLink: ["envelopecodes"] },
        { label: 'Mediacodes', icon: 'pi pi-fw pi-chart-bar', routerLink: ["mediacodes"] }]
      });
    this.menuItemsLeft.push({
      label: 'Documents',
      items: [{ label: 'Letter', icon: 'pi pi-fw pi-chart-bar', routerLink: ["letter"] },
      { label: 'Daily', icon: 'pi pi-fw pi-chart-bar', routerLink: ["daily"] },
      { label: 'Monthly', icon: 'pi pi-fw pi-chart-bar', routerLink: ["monthly"] }]
    });
    // this.menuItemsLeft.push({ label: "Posts", icon: "pi pi-fw pi-trash", routerLink: ["posts"] });
    // this.menuItemsLeft.push({ label: "Search", icon: "pi pi-fw pi-refresh", routerLink: ["search"] });
    // this.menuItemsLeft.push({ label: "ScalerFlow", icon: "pi pi-fw pi-home", routerLink: ["scalerflow"] });
    // this.menuItemsLeft.push({ label: "Job Ticket", icon: "pi pi-fw pi-chart-bar", routerLink: ["jobticket"] });
    // this.menuItemsLeft.push({
    //   label: "Logout",
    //   icon: "fa fa-sign-in-alt",
    //   command: () => {
    //     // this.userSub.unsubscribe();
    //     // this.logout();

    //   }
    // });
    // this.menuItemsLeft.push({ label: "Job Tickets", icon: "fa fa-clipboard", routerLink: ["jobtickets"] });
    // this.menuItemsLeft.push({ label: "Search in Scaler (BETA)", icon: "fa fa-clipboard", routerLink: ["workflows"] });


    // this.items = [
    //   {
    //     label: 'Rapportage',
    //     items: [{ label: 'Daily', icon: 'pi pi-fw pi-chart-bar', routerLink: ["daily"] }]
    //   }];
  }
}
