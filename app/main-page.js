"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var vm = null;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    console.log('----------------- navigatingTo --------------------');
    var page = args.object;
    page.bindingContext = vm = new main_view_model_1.HelloWorldModel(page);
}
exports.navigatingTo = navigatingTo;
function onPageLoaded(args) {
    console.log("Abdullatiiiiiiiiiiiiiiiiiiif Page loaded");
    //fetch data from employee route
    vm.fetch();
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUlGLHFEQUFvRDtBQUNwRCxJQUFJLEVBQUUsR0FBb0IsSUFBSSxDQUFDO0FBRS9CLHdFQUF3RTtBQUN4RSxTQUFnQixZQUFZLENBQUMsSUFBZTtJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUE7SUFDbEUsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFFLEVBQUUsR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUpELG9DQUlDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLElBQWU7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3hELGdDQUFnQztJQUNoQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZixDQUFDO0FBSkQsb0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tIFwiLi9tYWluLXZpZXctbW9kZWxcIjtcbmxldCB2bTogSGVsbG9Xb3JsZE1vZGVsID0gbnVsbDtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tIG5hdmlnYXRpbmdUbyAtLS0tLS0tLS0tLS0tLS0tLS0tLScpXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0PSB2bSA9IG5ldyBIZWxsb1dvcmxkTW9kZWwocGFnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJBYmR1bGxhdGlpaWlpaWlpaWlpaWlpaWlpaWlmIFBhZ2UgbG9hZGVkXCIpO1xuICAgIC8vZmV0Y2ggZGF0YSBmcm9tIGVtcGxveWVlIHJvdXRlXG4gICAgdm0uZmV0Y2goKTtcbn1cblxuIl19