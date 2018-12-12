"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var color_1 = require("tns-core-modules/color");
__export(require("./common"));
var IFancyAlertSupportedTypesAndroid;
(function (IFancyAlertSupportedTypesAndroid) {
    IFancyAlertSupportedTypesAndroid[IFancyAlertSupportedTypesAndroid["INFO"] = 0] = "INFO";
    IFancyAlertSupportedTypesAndroid[IFancyAlertSupportedTypesAndroid["HELP"] = 1] = "HELP";
    IFancyAlertSupportedTypesAndroid[IFancyAlertSupportedTypesAndroid["WRONG"] = 2] = "WRONG";
    IFancyAlertSupportedTypesAndroid[IFancyAlertSupportedTypesAndroid["SUCCESS"] = 3] = "SUCCESS";
    IFancyAlertSupportedTypesAndroid[IFancyAlertSupportedTypesAndroid["WARNING"] = 4] = "WARNING";
})(IFancyAlertSupportedTypesAndroid = exports.IFancyAlertSupportedTypesAndroid || (exports.IFancyAlertSupportedTypesAndroid = {}));
var TNSFancyAlert = (function () {
    function TNSFancyAlert() {
    }
    TNSFancyAlert.showSuccess = function (title, subTitle, closeBtnTitle) {
        return new Promise(function (resolve, reject) {
            var alert = new cn.refactor.lib.colordialog.PromptDialog(app.android.currentContext);
            alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
            alert.setDialogType(IFancyAlertSupportedTypesAndroid.SUCCESS);
            alert.setTitleText(title || "Success!");
            alert.setContentText(subTitle || "");
            alert.setAnimationEnable(true);
            alert.setPositiveListener(closeBtnTitle || "Ok", new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
                onClick: function (dialog) {
                    dialog.dismiss();
                    resolve();
                }
            }));
            alert.show();
        });
    };
    TNSFancyAlert.showError = function (title, subTitle, closeBtnTitle) {
        return new Promise(function (resolve, reject) {
            var alert = new cn.refactor.lib.colordialog.PromptDialog(app.android.currentContext);
            alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
            alert.setDialogType(IFancyAlertSupportedTypesAndroid.WRONG);
            alert.setTitleText(title || "Error!");
            alert.setContentText(subTitle || "");
            alert.setAnimationEnable(true);
            alert.setPositiveListener(closeBtnTitle || "Ok", new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
                onClick: function (dialog) {
                    dialog.dismiss();
                    resolve();
                }
            }));
            alert.show();
        });
    };
    TNSFancyAlert.showNotice = function (title, subTitle, closeBtnTitle) {
        return new Promise(function (resolve, reject) {
            var alert = new cn.refactor.lib.colordialog.PromptDialog(app.android.currentContext);
            alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
            alert.setDialogType(IFancyAlertSupportedTypesAndroid.HELP);
            alert.setTitleText(title || "Notice");
            alert.setContentText(subTitle || "");
            alert.setAnimationEnable(true);
            alert.setPositiveListener(closeBtnTitle || "Ok", new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
                onClick: function (dialog) {
                    dialog.dismiss();
                    resolve();
                }
            }));
            alert.show();
        });
    };
    TNSFancyAlert.showWarning = function (title, subTitle, closeBtnTitle) {
        return new Promise(function (resolve, reject) {
            var alert = new cn.refactor.lib.colordialog.PromptDialog(app.android.currentContext);
            alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
            alert.setDialogType(IFancyAlertSupportedTypesAndroid.WARNING);
            alert.setTitleText(title || "Warning!");
            alert.setContentText(subTitle || "");
            alert.setAnimationEnable(true);
            alert.setPositiveListener(closeBtnTitle || "Ok", new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
                onClick: function (dialog) {
                    dialog.dismiss();
                    resolve();
                }
            }));
            alert.show();
        });
    };
    TNSFancyAlert.showInfo = function (title, subTitle, closeBtnTitle) {
        return new Promise(function (resolve, reject) {
            var alert = new cn.refactor.lib.colordialog.PromptDialog(app.android.currentContext);
            alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
            alert.setDialogType(IFancyAlertSupportedTypesAndroid.INFO);
            alert.setTitleText(title || "Info");
            alert.setContentText(subTitle || "");
            alert.setAnimationEnable(true);
            alert.setPositiveListener(closeBtnTitle || "Ok", new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
                onClick: function (dialog) {
                    dialog.dismiss();
                    resolve();
                }
            }));
            alert.show();
        });
    };
    TNSFancyAlert.showColorDialog = function (title, subTitle, okBtnTitle, cancelBtnTitle, backgroundColor, titleTextColor, contextTextColor, contentImage) {
        return new Promise(function (resolve, reject) {
            var alert = new cn.refactor.lib.colordialog.ColorDialog(app.android.currentContext);
            alert.setTitle(title || "Title");
            alert.setContentText(subTitle || "");
            if (backgroundColor) {
                alert.setColor(new color_1.Color(backgroundColor).android);
            }
            if (titleTextColor) {
                alert.setTitleTextColor(new color_1.Color(titleTextColor).android);
            }
            if (contextTextColor) {
                alert.setContentTextColor(new color_1.Color(contextTextColor).android);
            }
            if (contentImage) {
                alert.setContentImage(contentImage);
            }
            alert.setAnimationEnable(true);
            alert.setPositiveListener(okBtnTitle || "Ok", new cn.refactor.lib.colordialog.ColorDialog.OnPositiveListener({
                onClick: function (dialog) {
                    dialog.dismiss();
                    resolve();
                }
            }));
            if (cancelBtnTitle) {
                alert.setNegativeListener(cancelBtnTitle || "Cancel", new cn.refactor.lib.colordialog.ColorDialog.OnNegativeListener({
                    onClick: function (dialog) {
                        dialog.dismiss();
                        reject();
                    }
                }));
            }
            alert.show();
        });
    };
    TNSFancyAlert.shouldDismissOnTapOutside = false;
    return TNSFancyAlert;
}());
exports.TNSFancyAlert = TNSFancyAlert;
//# sourceMappingURL=fancyalert.js.map