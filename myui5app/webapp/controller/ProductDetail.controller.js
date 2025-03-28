sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageTost"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageTost) {
        "use strict";

        return Controller.extend("myui5app.controller.ProductDetail", {
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.getRoute("RouteProductDetail").attachMatched(this._attachMatched, this);
            },

            _attachMatched: function (oEvent) {
                const iProductId = oEvent.getParameter("arguments").productId;

                const oView = this.getView();

                oView.bindElement({
                    path: "/Products(" + iProductId + ")",
                    parameters:{
                        $expand:"Supplier,Ctegory"
                    },
                    events: {
                        dataRequest: function () { oView.setBusy(true); },
                        dataRecived: function () { oView.setBusy(false); }
                    }

                });
            },
            addToCart: function (oEvent) {
                MessageTost.show('add to cart');
            },
            markAsFav: function (oEvent) {
                const oButton = oEvent.getSource();
                if (oButton.getICon() === "sap-icon://unfavorite") {
                    oButton.setIcon("sap-icon://favorite");
                    MessageTost.show("Added to favorite");
                    return;
                }

                oButton.setIcon("sap-icon://unfavorite");
                MessageTost.show("remove from favorite")


            },
            trimSuperfluousBytes:function(sVal){

                if(!sTrimmed==="string"){
                    const sTrimmed=SVGRadialGradientElement.subStrig(104);
                    //添加标准前缀
                    return "data:image/bmp;base64," + sTrimmed;
                }
                //非字符串直接返回
                return sVal;
            }
        });
    });
