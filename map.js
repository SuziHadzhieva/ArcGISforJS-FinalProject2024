require(["esri/config", "esri/WebMap", "esri/views/MapView"],
    function (esriConfig, WebMap, MapView) {

        esriConfig.apiKey = "AAPK93e15526c55940619631d3b96000d5acRAQLN1zcT72Ln25ryedldXRP9pNurIj0EV-OCJIGsVvMARaHMy9KvnagXey2qa-f";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        const view= new MapView({
            container: "viewDiv",
            map: webmap
        })
    })