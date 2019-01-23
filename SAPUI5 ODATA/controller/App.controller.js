sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.db.controller.App", {
		peoplesListFactory: function (sId) {
			var oUIControl;

			oUIControl = this.byId("peoplesExtended").clone(sId);

			return oUIControl;
		}

	});
});