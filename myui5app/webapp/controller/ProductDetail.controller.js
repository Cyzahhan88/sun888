sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myui5app.controller.ProductDetail", {
            onInit: function () {
            const oRouter=sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.getRoute("RouteProductDetail").attachMatched(this._attachMatched,this);            
            },

            _attachMatched:function(oEvent){
                const iProductId= oEvent.getParameter("arguments").productId;

               const oView=this.getView();

               oView.bindElement({
                path:"/Products("+ iProductId +")",
                events:{
                    dataRequest:function(){  oView.setBusy(true);},
                    dataRecived:function(){ oView.setBusy(false);}
                }

               });
            }
        });
    });
