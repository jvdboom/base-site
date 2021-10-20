import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { IMediaCode } from "src/app/models";
import { CosmosRestService } from "src/app/services";

@Component({
  selector: "app-media-codes",
  templateUrl: "./media-codes.component.html",
  styleUrls: ["./media-codes.component.css"]
})
export class MediaCodesComponent implements OnInit {

  public mediaCodes: IMediaCode[] = [];

  constructor(private messageService: MessageService, private cosmosRestService: CosmosRestService) { }

  ngOnInit(): void {
    this.messageService.add({ severity: "info", summary: "Info", detail: "MediaCodes" });
    this.getConfiguration();
  }

  getConfiguration():void {
    this.cosmosRestService.getConfiguration()
      .subscribe(configuration => {
        this.mediaCodes = configuration.MediaCodes.sort((a: any, b: any) => {
          var nameA: number = +a.MediaCode;
          var nameB: number = +b.MediaCode;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      });
  }

  handleClick(aEvent: MouseEvent) {}

}
