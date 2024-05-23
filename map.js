require(["esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Directions",
    "esri/layers/RouteLayer",
    "esri/widgets/ScaleBar"
],

    function (
        esriConfig,
        WebMap,
        MapView,
        Home,
        LayerList,
        BasemapGallery,
        Directions,
        RouteLayer,
        ScaleBar
    ) {

        esriConfig.apiKey = "AAPK93e15526c55940619631d3b96000d5acRAQLN1zcT72Ln25ryedldXRP9pNurIj0EV-OCJIGsVvMARaHMy9KvnagXey2qa-f";

        const routeLayer = new RouteLayer();

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        webmap.layers.add(routeLayer);

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });

        const directionsWidget = new Directions({
            layer: routeLayer,
            apiKey: esriConfig.apiKey,
            view
        });

        view.ui.add(directionsWidget, { position: "bottom-left" });
        view.ui.add("directions-btn", "bottom-left");


        const homeBtn = new Home({
            view
        });

        view.ui.add(homeBtn, "top-left");

        const layerList = new LayerList({
            view
        });
        view.ui.add("layer-list-btn", "top-right");
        view.ui.add(layerList, "top-right");
        view.ui.add("basemap-gallery-btn", "top-right");

        const basemapGallery = new BasemapGallery({
            view
        });

        view.ui.add(basemapGallery, "top-right");

        // const scaleBarWidget = new ScaleBar({
        //   view  
        // });

        document.getElementById("layer-list-btn").addEventListener("click", function () {
            toggleButton("LayerList");
        });

        document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
            toggleButton("gallery");
        });

        document.getElementById("directions-btn").addEventListener("click", function () {
            toggleButton("Directions");
         });

        function toggleButton(element) {
            if (element == "LayerList") {
                const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
                const currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
            } else if (element == "gallery") {
                const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
                const currentPropGallery = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
            } else if  (element == "Directions") {
                const directionsWidgetEL = document.getElementsByClassName("esri-icon-directions")[0];
                const currentPropDirections = directionsWidgetEL.style.getPropertyValue("display");
                directionsWidgetEL.style.setProperty("display", currentPropDirections == "none" ? "block" : "none")
            }
        };


    });
