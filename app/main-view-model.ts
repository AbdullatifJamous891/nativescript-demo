import { Observable } from "tns-core-modules/data/observable";
import { getJSON } from "tns-core-modules/http/http";
import { Page } from "tns-core-modules/ui/page/page";
import { topmost } from "tns-core-modules/ui/frame";

export class HelloWorldModel extends Observable {
    public items : any[] = [];
    public page :Page;
    constructor(page) {
        super();
        this.page = page;
    }
    
  

    public fetch(){
        getJSON("http://192.168.1.41:1337/employee")
            .then((r: any) => {
                console.log('respooooooonse', r);
                this.set("items", r);
            }, (e) => {
                console.log(e);
            });
    }
    public listViewItemTap(args): void {
        // Navigate to the details page with context set to the data item for specified index
        const frame = topmost();
        frame.navigate({
            moduleName: "details-page/details-page",
            context: args.view.bindingContext
        });
    }
}
