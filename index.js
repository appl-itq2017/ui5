sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
	"use strict";
	
	new ComponentContainer({
		name: "hts.itq2017.walkthrough",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");
});