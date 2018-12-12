import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { detailsModel } from "./details-view-model"

let det = null;
// Event handler for Page "navigatedTo" event attached in details-page.xml
export function pageloaded(args: EventData): void {
    det.init();
}

export function pageNavigatingTo(args: EventData): void {
    // Get the event sender
    const page: Page = <Page>args.object;
    page.bindingContext = det = new detailsModel(page.navigationContext);
   
}