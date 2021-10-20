import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-to-park',
  templateUrl: './to-park.component.html',
  styleUrls: ['./to-park.component.css']
})
export class ToParkComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: "info", summary: "Info", detail: "To Parks" });
  }

}
