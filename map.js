require(["esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery"],
    function (
        esriConfig,
        WebMap,
        MapView,
        Home,
        LayerList,
        BasemapGallery
    ) {

        esriConfig.apiKey = "AAPK93e15526c55940619631d3b96000d5acRAQLN1zcT72Ln25ryedldXRP9pNurIj0EV-OCJIGsVvMARaHMy9KvnagXey2qa-f";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });

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

        document.getElementById("layer-list-btn").addEventListener("click", function () {
            toggleButton("LayerList");
        });

        document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
            toggleButton("gallery");
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
            }
        }

    });