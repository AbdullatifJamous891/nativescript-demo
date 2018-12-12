"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var detailsModel = /** @class */ (function (_super) {
    __extends(detailsModel, _super);
    function detailsModel(obj) {
        var _this = _super.call(this) || this;
        _this.email = '';
        _this.name = '';
        _this.email = obj.email;
        _this.name = obj.name;
        return _this;
    }
    detailsModel.prototype.init = function () {
        var _this = this;
        setTimeout(function () {
            _this.name = 'opada';
            _this.notifyPropertyChange('name', _this.name);
        }, 3000);
        console.log(this.name);
    };
    detailsModel.prototype.showSuccess = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Success!", "hey " + this.name, "Yes they are!").then(function () {
            console.log('hello world');
            /* user pressed the button */
        }).catch(function (err) {
            console.log(err);
        });
    };
    return detailsModel;
}(observable_1.Observable));
exports.detailsModel = detailsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlscy12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBRTlELG1FQUE2RTtBQUU3RTtJQUFrQyxnQ0FBVTtJQUd4QyxzQkFBWSxHQUFHO1FBQWYsWUFDSSxpQkFBTyxTQUdWO1FBTk0sV0FBSyxHQUFTLEVBQUUsQ0FBQztRQUNqQixVQUFJLEdBQVMsRUFBRSxDQUFDO1FBR25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7O0lBQ3pCLENBQUM7SUFDRCwyQkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFORyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNwQixLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBQ0Qsa0NBQVcsR0FBWDtRQUNJLHVDQUFhLENBQUMsV0FBVyxDQUNyQixVQUFVLEVBQ1YsTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2hCLGVBQWUsQ0FDbEIsQ0FBQyxJQUFJLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQzFCLDZCQUE2QjtRQUNqQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBa0MsdUJBQVUsR0E0QjNDO0FBNUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcblxuZXhwb3J0IGNsYXNzIGRldGFpbHNNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHB1YmxpYyBlbWFpbDpzdHJpbmcgPScnO1xuICAgIHB1YmxpYyBuYW1lOnN0cmluZyA9Jyc7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW1haWwgPSBvYmouZW1haWw7XG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lO1xuICAgIH1cbiAgICBpbml0KCl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJ29wYWRhJztcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25hbWUnLCB0aGlzLm5hbWUpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSlcbiAgICB9XG4gICAgc2hvd1N1Y2Nlc3MoKSB7XG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoXG4gICAgICAgICAgICBcIlN1Y2Nlc3MhXCIsXG4gICAgICAgICAgICBcImhleSBcIit0aGlzLm5hbWUsXG4gICAgICAgICAgICBcIlllcyB0aGV5IGFyZSFcIlxuICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJylcbiAgICAgICAgICAgIC8qIHVzZXIgcHJlc3NlZCB0aGUgYnV0dG9uICovXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19