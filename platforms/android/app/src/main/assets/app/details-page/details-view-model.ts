import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";

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
    showSuccess() {
        TNSFancyAlert.showSuccess(
            "Success!",
            "hey "+this.name,
            "Yes they are!"
        ).then(() => {
            console.log('hello world')
            /* user pressed the button */
        }).catch((err)=>{
            console.log(err);
        });
    }
}