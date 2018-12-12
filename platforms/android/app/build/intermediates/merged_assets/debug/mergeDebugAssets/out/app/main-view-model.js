"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var http_1 = require("tns-core-modules/http/http");
var frame_1 = require("tns-core-modules/ui/frame");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(page) {
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.page = page;
        return _this;
    }
    HelloWorldModel.prototype.fetch = function () {
        var _this = this;
        http_1.getJSON("http://192.168.1.41:1337/employee")
            .then(function (r) {
            console.log('respooooooonse', r);
            _this.set("items", r);
        }, function (e) {
            console.log(e);
        });
    };
    HelloWorldModel.prototype.listViewItemTap = function (args) {
        // Navigate to the details page with context set to the data item for specified index
        var frame = frame_1.topmost();
        frame.navigate({
            moduleName: "details-page/details-page",
            context: args.view.bindingContext
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1EQUFxRDtBQUVyRCxtREFBb0Q7QUFFcEQ7SUFBcUMsbUNBQVU7SUFHM0MseUJBQVksSUFBSTtRQUFoQixZQUNJLGlCQUFPLFNBRVY7UUFMTSxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBSXRCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNyQixDQUFDO0lBSU0sK0JBQUssR0FBWjtRQUFBLGlCQVFDO1FBUEcsY0FBTyxDQUFDLG1DQUFtQyxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxVQUFDLENBQU07WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLHlDQUFlLEdBQXRCLFVBQXVCLElBQUk7UUFDdkIscUZBQXFGO1FBQ3JGLElBQU0sS0FBSyxHQUFHLGVBQU8sRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDWCxVQUFVLEVBQUUsMkJBQTJCO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7U0FDcEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUFxQyx1QkFBVSxHQTJCOUM7QUEzQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBnZXRKU09OIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cC9odHRwXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHB1YmxpYyBpdGVtcyA6IGFueVtdID0gW107XG4gICAgcHVibGljIHBhZ2UgOlBhZ2U7XG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIH1cbiAgICBcbiAgXG5cbiAgICBwdWJsaWMgZmV0Y2goKXtcbiAgICAgICAgZ2V0SlNPTihcImh0dHA6Ly8xOTIuMTY4LjEuNDE6MTMzNy9lbXBsb3llZVwiKVxuICAgICAgICAgICAgLnRoZW4oKHI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb29vb29vb25zZScsIHIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwiaXRlbXNcIiwgcik7XG4gICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBsaXN0Vmlld0l0ZW1UYXAoYXJncyk6IHZvaWQge1xuICAgICAgICAvLyBOYXZpZ2F0ZSB0byB0aGUgZGV0YWlscyBwYWdlIHdpdGggY29udGV4dCBzZXQgdG8gdGhlIGRhdGEgaXRlbSBmb3Igc3BlY2lmaWVkIGluZGV4XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdG9wbW9zdCgpO1xuICAgICAgICBmcmFtZS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcImRldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2VcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=