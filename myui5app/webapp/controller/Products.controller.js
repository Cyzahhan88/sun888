sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myui5app.controller.Products", {

            // onInit: function () {

            // },
            // onBeforeRendering: function () {
            //     console.error("A problem occurred!");
            // },

            // onAfterRendering: function () {
            //     debugger
            // }
            handleListItempress: function (oEvent) {

                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                const selectedProductId = oEvent.getSource().getBindContext().getProperty('ProductID');

                oRouter.navTo("RouteProductDetail", {
                    productId: selectedProductId
                });
            }
        });
    });
