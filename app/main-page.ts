/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
let vm: HelloWorldModel = null;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    console.log('----------------- navigatingTo --------------------')
    let page = <Page>args.object;
    page.bindingContext= vm = new HelloWorldModel(page);
}

export function onPageLoaded(args: EventData) {
    console.log("Abdullatiiiiiiiiiiiiiiiiiiif Page loaded");
    //fetch data from employee route
    vm.fetch();
}

