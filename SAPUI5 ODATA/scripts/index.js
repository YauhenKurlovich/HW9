sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        var url = "https://services.odata.org/V4/TripPinServiceRW/People?$select=FirstName,LastName,Gender";
		var oModel = new JSONModel(url);
		sap.ui.getCore().setModel(oModel, "peoples");

		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.i18n.i18n"
		});

		sap.ui.getCore().setModel(oResourceModel, "i18n");

        var oView = new XMLView({
			viewName: "sap.ui.demo.view.App"
        }).placeAt("content");
        
        var oView2 = new XMLView({
			viewName: "sap.ui.demo.view.App2"
		}).placeAt("content");

		sap.ui.getCore().getMessageManager().registerObject(oView, true);

		oView.placeAt("content");
	});
});