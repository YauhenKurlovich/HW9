sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView"
], function (JSONModel, XMLView) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Yauhen",
			lastName: "Kurlovich",
			enabled: true,
			panelHeaderText: "Data Binding Basics"

		});
		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.view.App"
		}).placeAt("content");

	});
});