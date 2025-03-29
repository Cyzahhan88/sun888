sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myui5app.controller.Sales", {
            onInit: function () {

            },
            onAfterRendering:function(){
                const oVizFrame=this.oVizFrame=this.getView().byId("idVizFrame");

                const oPopover=this.getView().byId("idPopover");

                Popover.connect(oVizFrame.getVizUid());
            }
        });
    });
