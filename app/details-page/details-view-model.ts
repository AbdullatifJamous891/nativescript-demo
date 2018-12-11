import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export class detailsModel extends Observable {
    public email:string ='';
    public name:string ='';
    constructor(obj) {
        super();
        this.email = obj.email;
        this.name = obj.name;
    }
    init(){
        setTimeout(() => {
            this.name = 'opada';
            this.notifyPropertyChange('name', this.name);
        }, 3000);
        
        console.log(this.name)
    }
}