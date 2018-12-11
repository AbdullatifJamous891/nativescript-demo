"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
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
    return detailsModel;
}(observable_1.Observable));
exports.detailsModel = detailsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlscy12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBRzlEO0lBQWtDLGdDQUFVO0lBR3hDLHNCQUFZLEdBQUc7UUFBZixZQUNJLGlCQUFPLFNBR1Y7UUFOTSxXQUFLLEdBQVMsRUFBRSxDQUFDO1FBQ2pCLFVBQUksR0FBUyxFQUFFLENBQUM7UUFHbkIsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQzs7SUFDekIsQ0FBQztJQUNELDJCQUFJLEdBQUo7UUFBQSxpQkFPQztRQU5HLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBa0MsdUJBQVUsR0FnQjNDO0FBaEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIGRldGFpbHNNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHB1YmxpYyBlbWFpbDpzdHJpbmcgPScnO1xuICAgIHB1YmxpYyBuYW1lOnN0cmluZyA9Jyc7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZW1haWwgPSBvYmouZW1haWw7XG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lO1xuICAgIH1cbiAgICBpbml0KCl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJ29wYWRhJztcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25hbWUnLCB0aGlzLm5hbWUpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSlcbiAgICB9XG59Il19