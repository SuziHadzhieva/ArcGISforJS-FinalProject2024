require(["esri/config", 
"esri/WebMap", 
"esri/views/MapView", 
"esri/widgets/Home", 
"esri/widgets/LayerList"],
    function (esriConfig, WebMap, MapView, Home, LayerList) {

        esriConfig.apiKey = "AAPK93e15526c55940619631d3b96000d5acRAQLN1zcT72Ln25ryedldXRP9pNurIj0EV-OCJIGsVvMARaHMy9KvnagXey2qa-f";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        const view= new MapView({
            container: "viewDiv",
            map: webmap
        });

        const homeBtn = new Home({
            view
        });

        view.ui.add(homeBtn, "top-left");

        const layerList = new LayerList ({
            view
        }); 
        view.ui.add("layer-list-btn", "top-right");
        view.ui.add(layerList, "top-right");

        document.getElementById("layer-list-btn").addEventListener("click",function(){
            const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
            const currentProp = layerListEl.style.getPropertyValue("display");

            layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
        })
    })