sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.db.controller.App", {
		peoplesListFactory: function (sId) {
			var oUIControl;

			oUIControl = this.byId("peoplesExtended").clone(sId);

			return oUIControl;
        },
        onItemSelected: function(oEvent) {
            var oSelectedItem = oEvent.getSource();
         
            var oContext = oSelectedItem.getBindingContext("peoples");
           
            var sPath = oContext.getPath();
       
			var oProductDetailsPanel = this.byId("productDetailsPanel");
			oProductDetailsPanel.bindElement({ path: sPath, model: "peoples" });

        }

	});
});