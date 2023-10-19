import { defineStore } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();

const makePotStyle = (custom) => {
  if (!custom) custom = {};
  return Object.assign(
    {
      opacity: 1,
      color: "#00a1bd",
      dashArray: "",
      lineCap: "butt",
      lineJoin: "miter",
      weight: 2.0,
      fill: true,
      fillOpacity: 1,
      fillColor: "rgba(82, 165, 237,0.0)",
    },
    custom
  );
};

const TEMPLATES = {
  tac: {
    style: (feature) => {
      return {
        opacity: 1,
        color: "rgba(95,93,90,0.2)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(0,77,168,0.6)",
      };
    },
  },
  pot: {
    style: (feature) => {
      let props = feature.properties;
      if (props.layer.style && props.layer.label !== "Contour 2021") {
        return props.layer.style(feature);
      }
      if (props.Color == 100) return makePotStyle();
      else if (props.Color == 210) {
        return makePotStyle({
          color: "#7000f0",
          dashArray: "4 3",
        });
      } else {
        return makePotStyle({
          color: "#00000000",
        });
      }
    },
    style_mp: (feature) => {
      if (feature.properties.Color == 130) return makePotStyle();
      else if (feature.properties.Color == 90) {
        return makePotStyle({
          color: "#7000f0",
          dashArray: "4 3",
        });
      } else {
        return makePotStyle({
          color: "#00000000",
        });
      }
    },
    style_ta: (feature) => {
      let props = feature.properties;
      if (props.layer.style && props.layer.label !== "Contour 2021") {
        return props.layer.style(feature);
      }
      if (props.Color == 140) return makePotStyle();
      else if (props.Color == 24) {
        return makePotStyle({
          color: "#7000f0",
          dashArray: "4 3",
        });
      } else {
        return makePotStyle({
          color: "#00000000",
        });
      }
    },
  },
  tce: {
    label: "Trichloroethylene",
    analyte: "Trichloroethylene",
    limits: [5, 50, 100, 400, 1000, 5000, 10000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(0,255,197,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,235,175,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
    style: () => {
      return {
        radius: 6,
        color: "black",
        weight: 1,
      };
    },
  },
  pce: {
    label: "Tetrachloroethylene",
    analyte: "Tetrachloroethylene",
    limits: [5, 25, 250, 2500, 25000, 250000, 500000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(0,255,197,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,235,175,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
    style: () => {
      return {
        radius: 6,
        color: "black",
        weight: 1,
      };
    },
  },
  cis: {
    label: "Dichloroethylene",
    analyte: "cis-1,2-Dichloroethylene",
    limits: [5, 70, 700, 7000, 10000, 70000, 140000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,235,175,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
  vinyl: {
    label: "Vinyl chloride",
    analyte: "Vinyl chloride",
    limits: [2, 20, 200, 1000, 20000, 100000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,235,175,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
  ethane: {
    label: "Ethane",
    analyte: "Ethane",
    limits: [2, 20, 200, 1000, 20000, 100000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,235,175,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
  ethene: {
    label: "Ethene",
    analyte: "Ethene",
    limits: [60, 259, 586, 1240],
    colors: [
      "rgba(56,168,0,1.0)",
      "rgba(139,209,0,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,128,0,1.0)",
      "rgba(255,0,0,1.0)",
    ],
  },
  chromiumVI: {
    label: "Chromium",
    analyte: "Chromium (VI)",
    limits: [0, 12, 56],
    colors: [
      "rgba(56,168,0,1.0)",
      "rgba(139,209,0,1.0)",
      "rgba(255,128,0,1.0)",
      "rgba(255,0,0,1.0)",
    ],
  },
  chromium: {
    label: "Chromium",
    analyte: "Chromium (Total)",
    limits: [100, 3650, 9040, 19000],
    colors: [
      "rgba(56,168,0,1.0)",
      "rgba(139,209,0,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,128,0,1.0)",
      "rgba(255,0,0,1.0)",
    ],
  },
  c13: {
    label: "c13",
    analyte: null,
    limits: [-29, -27, -26, -24, -21],
    colors: [
      "rgba(56,168,0,1.0)",
      "rgba(139,209,0,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,128,0,1.0)",
      "rgba(255,0,0,1.0)",
    ],
  },
  sotce: {
    label: "Trichloroethylene",
    analyte: "Trichloroethylene",
    limits: [12, 100, 1000, 10000, 50000, 100000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,235,175,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
  sodce: {
    label: "Dichloroethylene",
    analyte: "cis-1,2-Dichloroethylene",
    limits: [100, 500, 900],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,128,0,1.0)",
      "rgba(255,0,0,1.0)",
    ],
  },
  sovinyl: {
    label: "Vinyl chloride",
    analyte: "Vinyl chloride",
    limits: [0, 5],
    colors: ["rgba(0,200,0,1.0)", "rgba(255,255,0,1.0)", "rgba(255,0,0,1.0)"],
    tooltip: (feature) => {
      const props = feature.feature.properties;
      return `Well ID: ${props.Well_ID}<br>Result: ${props.Result} μg/kg<br/>Date: ${props.SDate}`;
    },
    units: "μg/kg",
  },
  setce: {
    label: "Trichloroethylene",
    analyte: "Trichloroethylene",
    limits: [0, 44],
    colors: ["rgba(0,200,0,1.0)", "rgba(255,255,0,1.0)", "rgba(255,0,0,1.0)"],
    tooltip: (feature) => {
      const props = feature.feature.properties;
      return `Well ID: ${props.Well_ID}<br>Result: ${props.Result} μg/kg<br/>Date: ${props.SDate}`;
    },
    units: "μg/kg",
  },
  swtce: {
    label: "Trichloroethylene",
    analyte: "Trichloroethylene",
    limits: [1000, 10000, 100000, 500000, 10000000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
  swdce: {
    label: "Dichloroethylene",
    analyte: "cis-1,2-Dichloroethylene",
    limits: [70, 100, 140, 260, 430],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
  swvinyl: {
    label: "Vinyl chloride",
    analyte: "Vinyl chloride",
    limits: [2, 200, 2000, 20000, 200000],
    colors: [
      "rgba(0,255,0,1.0)",
      "rgba(233,255,190,1.0)",
      "rgba(255,255,0,1.0)",
      "rgba(255,170,0,1.0)",
      "rgba(255,0,0,1.0)",
      "rgba(132,0,168,1.0)",
    ],
  },
};

export const useMapStore = defineStore("map-store", {
  state: () => ({
    user: { name: null, expires: new Date() },
    expiration_length: 30, // In minutes
    DETA_NAME: "afp4_public_users",
    DETA_ID: "b0t63pobauv",
    DETA_KEY: "b0t63pobauv_LdEdHLsgrDaLgceVuVbpZjJ6v1bZpsg8",
    returnUrl: "",
    leftDrawerOpen: true,
    templates: TEMPLATES,
    selectedFeature: null,
    sections: {
      chemdata: {
        legend: true,
        color: "black",
        opacity: 1,
        hoverStyle: {
          fillOpacity: 0.8,
          radius: 10,
        },
        units: "μg/L",
        tooltip: (feature) => {
          const props = feature.feature.properties;
          return `Well ID: ${props.Well_ID}<br>Result: ${props.Result} μg/L<br/>Date: ${props.SDate}`;
        },
      },
      transects: {
        legend: false,
        color: "#e0f525",
        fillColor: "#f4d442",
        weight: 5,
        radius: 6,
        hoverStyle: {
          fillOpacity: 0.8,
          radius: 10,
        },
        fillOpacity: 1,
        tooltip: (feature) => {
          return feature.feature.properties.name;
        },
        popup: (feature) => {
          const props = feature.feature.properties;
          return `
            <h6>${props.name}</h6>
            <p><img width="600" height="400" src="${props.urlhtml}" alt="${props.Name}"></p>
          `;
        },
      },
      wells: {
        legend: false,
        color: "black",
        fillColor: "#9eeb34",
        radius: 6,
        opacity: 1,
        fillOpacity: 1,
        weight: 1,
        hoverStyle: {
          fillOpacity: 0.8,
          radius: 10,
        },
        tooltip: (feature) => {
          const props = feature.feature.properties;
          return `Well ID: ${props.Well_ID}`;
        },
      },
      bi: {
        weight: 5,
        color: "#006aff",
        opacity: 0.9,
        hoverStyle: {
          weight: 7,
          color: "#e1e3dc",
        },
      },
      media: {
        color: "#e3eb7a",
        fillColor: "transparent",
        weight: 5,
        radius: 6,
        opacity: 0.9,
        hoverStyle: {
          radius: 10,
          color: "#e1e3dc",
        },
        fillOpacity: 1,
      },
    },
    layers: [
      {
        label: "Plumes",
        icon: "shape_line",
        childs: [
          {
            label: "Flow direction 2020",
            file: "2020Plume_arrowlines.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Flow direction 2020"
              ) {
                return feature.properties.layer.style(feature);
              }
              if (feature.geometry.type !== "Point") {
                return {
                  opacity: 1,
                  color: "rgb(255,2,141)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 3.0,
                  fill: true,
                  fillOpacity: 0,
                  fillColor: "rgba(0,77,168,0.8)",
                };
              } else {
                let props = feature.properties;
                if (props.arrowlabel === "1") {
                  return {
                    icon: L.icon({
                      iconUrl: "static/img/img_arrow_1.png",
                      iconSize: [16, 16],
                      className: "layer_2020Plumn_arrowpoint",
                    }),
                  };
                }
                return {
                  color: "blue",
                };
              }
            },
            options: {
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Flow direction 2020"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
                let props = feature.properties;
                if (props.arrowlabel === "1") {
                  return L.marker(latLng, {
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: "img/img_arrow_1.png",
                      iconSize: [16, 16],
                    }),
                  });
                } else if (props.arrowlabel === "2") {
                  return L.marker(latLng, {
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: "img/img_arrow_2.png",
                      iconSize: [16, 16],
                    }),
                  });
                } else if (props.arrowlabel === "3") {
                  return L.marker(latLng, {
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: "img/img_arrow_3.png",
                      iconSize: [16, 16],
                    }),
                  });
                } else if (props.arrowlabel === "4") {
                  return L.marker(latLng, {
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: "img/img_arrow_4.png",
                      iconSize: [16, 16],
                    }),
                  });
                }
              },
            },
          },
          {
            label: "Contour 2021",
            file: "POT_TA.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Contour 2021"
              ) {
                return feature.properties.layer.style(feature);
              }
              return TEMPLATES.pot.style_ta(feature);
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Contour 2021"
                ) {
                  return feature.properties.layer.style(feature);
                }
                return TEMPLATES.pot.style_ta(feature);
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Contour 2021"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
                let props = feature.properties;
                return L.marker(latLng, {
                  icon: L.divIcon({
                    html: props.text,
                    className: "label contour-label",
                  }),
                });
              },
            },
            template: TEMPLATES.pot,
          },
          {
            label: "Terrace VC 2022",
            file: "Terrace_VC_2022.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Terrace VC 2022"
              ) {
                return feature.properties.layer.style(feature);
              }
              return TEMPLATES.tac.style(feature);
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Terrace VC 2022"
                ) {
                  return feature.properties.layer.style(feature);
                }
                return TEMPLATES.tac.style(feature);
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Terrace VC 2022"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
              },
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
          },
          {
            label: "Terrace VC 2023",
            file: "Terrace_VC_2023.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Terrace VC 2023"
              ) {
                return feature.properties.layer.style(feature);
              }
              return TEMPLATES.tac.style(feature);
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Terrace VC 2023"
                ) {
                  return feature.properties.layer.style(feature);
                }
                return TEMPLATES.tac.style(feature);
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Terrace VC 2023"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
              },
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
          },
          {
            label: "Terrace cDCE 2022",
            file: "Terrace_cDCE_2022.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Terrace cDCE 2022"
              ) {
                return feature.properties.layer.style(feature);
              }
              const _style = Object.create(TEMPLATES.tac.style(feature));
              return Object.assign(_style, {
                color: "rgba(95,93,90,0.2)",
                fillColor: "rgba(168,0,132,0.6)",
              });
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Terrace cDCE 2022"
                ) {
                  return feature.properties.layer.style(feature);
                }
                const _style = Object.create(TEMPLATES.tac.style(feature));
                return Object.assign(_style, {
                  color: "rgba(95,93,90,0.2)",
                  fillColor: "rgba(168,0,132,0.6)",
                });
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Terrace cDCE 2022"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
              },
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
          },
          {
            label: "Terrace cDCE 2023",
            file: "Terrace_cDCE_2023.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Terrace cDCE 2023"
              ) {
                return feature.properties.layer.style(feature);
              }
              const _style = Object.create(TEMPLATES.tac.style(feature));
              return Object.assign(_style, {
                color: "rgba(95,93,90,0.2)",
                fillColor: "rgba(168,0,132,0.6)",
              });
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Terrace cDCE 2023"
                ) {
                  return feature.properties.layer.style(feature);
                }
                const _style = Object.create(TEMPLATES.tac.style(feature));
                return Object.assign(_style, {
                  color: "rgba(95,93,90,0.2)",
                  fillColor: "rgba(168,0,132,0.6)",
                });
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Terrace cDCE 2023"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
              },
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
          },
          {
            label: "Terrace TCE 2022",
            file: "Terrace_TCE_2022.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Terrace TCE 2022"
              ) {
                return feature.properties.layer.style(feature);
              }
              const _style = Object.create(TEMPLATES.tac.style(feature));
              return Object.assign(_style, {
                color: "rgba(95,93,90,0.2)",
                fillColor: "rgba(112,168,0,0.6)",
              });
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Terrace TCE 2022"
                ) {
                  return feature.properties.layer.style(feature);
                }
                const _style = Object.create(TEMPLATES.tac.style(feature));
                return Object.assign(_style, {
                  color: "rgba(95,93,90,0.2)",
                  fillColor: "rgba(112,168,0,0.6)",
                });
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Terrace TCE 2022"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
              },
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
          },
          {
            label: "Terrace TCE 2023",
            file: "Terrace_TCE_2023.json",
            class: "a",
            active: false,
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Terrace TCE 2023"
              ) {
                return feature.properties.layer.style(feature);
              }
              const _style = Object.create(TEMPLATES.tac.style(feature));
              return Object.assign(_style, {
                color: "rgba(95,93,90,0.2)",
                fillColor: "rgba(112,168,0,0.6)",
              });
            },
            options: {
              style: (feature) => {
                if (
                  feature.properties.layer.style &&
                  feature.properties.layer.label !== "Terrace TCE 2023"
                ) {
                  return feature.properties.layer.style(feature);
                }
                const _style = Object.create(TEMPLATES.tac.style(feature));
                return Object.assign(_style, {
                  color: "rgba(95,93,90,0.2)",
                  fillColor: "rgba(112,168,0,0.6)",
                });
              },
              pointToLayer: (feature, latLng) => {
                if (
                  feature.properties.layer.options.pointToLayer &&
                  feature.properties.layer.label !== "Terrace TCE 2023"
                ) {
                  return feature.properties.layer.options.pointToLayer(
                    feature,
                    latLng
                  );
                }
              },
            },
            hoverStyle: {
              weight: 7,
              color: "#e1e1e1",
            },
          },
        ],
      },
      {
        label: "Layer List",
        icon: "layers",
        mode: "single-select",
        childs: [
          {
            label: "TCE in GW > 2000",
            file: "GWTCEafter200044.json",
            class: "chemdata",
            active: false,
            matrix: "GW",
            template: TEMPLATES.tce,
            style: TEMPLATES.tce.style,
          },
          {
            label: "PCE in GW",
            file: "GW_PCE.json",
            class: "chemdata",
            active: false,
            matrix: "GW",
            template: TEMPLATES.pce,
            style: TEMPLATES.pce.style,
          },
          {
            label: "Cis 1,2-DCE in GW > 2000",
            file: "GWcis12DCEafter200036.json",
            class: "chemdata",
            active: false,
            matrix: "GW",
            template: TEMPLATES.cis,
            style: TEMPLATES.tce.style,
          },
          {
            label: "VC in GW",
            file: "GWVC35.json",
            class: "chemdata",
            active: false,
            matrix: "GW",
            template: TEMPLATES.vinyl,
            style: TEMPLATES.tce.style,
          },
          {
            label: "TCE in SW",
            file: "SWTCE20.json",
            class: "chemdata",
            active: false,
            matrix: "SW",
            template: TEMPLATES.swtce,
            style: TEMPLATES.tce.style,
          },
          {
            label: "VC in SW",
            file: "SWVC18.json",
            class: "chemdata",
            active: false,
            matrix: "SW",
            template: TEMPLATES.swvinyl,
            style: TEMPLATES.tce.style,
          },
        ],
      },
      {
        label: "Transects",
        icon: "stacked_line_chart",
        childs: [
          {
            label: "Series 2 - Transect",
            file: "TranLineSeries214.json",
            active: false,
            class: "transects",
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Series 2 - Transect"
              ) {
                return feature.properties.layer.style(feature);
              }
              const props = feature.properties;
              let color;
              if (props.Name === "AA") color = "#f56725";
              else if (props.Name === "BB") color = "#e0f525";
              else if (props.Name === "CC") color = "#1cad21";
              else if (props.Name === "DD") color = "#1c58ad";
              else if (props.Name === "EE") color = "#c149c9";
              else if (props.Name === "FF") color = "#64f5fa";
              else color = "#FF0000";
              return {
                color: color,
                weight: 5,
              };
            },
            options: {
              hoverStyle: {
                weight: 7,
                color: "#e1e1e1",
              },
            },
            template: {
              label: "Transect Series 2",
              legend: true,
              tooltip: (feature) => {
                return `<p>Transect ${feature.feature.properties.Name}</p>`;
              },
              popup: (feature) => {
                const props = feature.feature.properties;
                return `
                  <h6>Transect ${props.Name}</h6>
                  <p>Click <a href="${props.hyperlink}" target="_blank"><b>here</b></a> to open Cross-Section Interactive Page.</p>
                `;
              },
              colorRampType: "category",
              limits: ["AA", "BB", "CC", "DD", "EE", "FF"],
              labels: [
                "Transect AA",
                "Transect BB",
                "Transect CC",
                "Transect DD",
                "Transect EE",
                "Transect FF",
              ],
              colors: [
                "#f56725",
                "#e0f525",
                "#1cad21",
                "#1c58ad",
                "#c149c9",
                "#64f5fa",
              ],
            },
          },
        ],
      },
      {
        label: "Base Infrastructure",
        icon: "fence",
        childs: [
          {
            label: "Meandering Road Creek",
            file: "BIMeanderingRoadCreek7.json",
            active: false,
            class: "bi",
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Meandering Road Creek"
              ) {
                feature.properties.layer.style(feature);
              }
              return {
                weight: 5,
                color: "#006aff",
                opacity: 0.9,
              };
            },
          },
          {
            label: "AFP4 Site Boundaries",
            file: "BIAFP4SBoundaries5.json",
            active: false,
            class: "bi",
            options: {
              tooltip: (feature) => {
                const props = feature.feature.properties;
                return props.FACNO;
              },
            },
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "AFP4 Site Boundaries"
              ) {
                return feature.properties.layer.style(feature);
              }
              return {
                weight: 3,
                color: "#f78205",
                opacity: 0.9,
              };
            },
          },
          {
            label: "Window Area Based on USGS",
            file: "BIWindowArea4.json",
            active: false,
            class: "bi",
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Window Area Based on USGS"
              ) {
                return feature.properties.layer.style(feature);
              }
              return {
                weight: 3,
                color: "#9e0000",
                opacity: 0.9,
              };
            },
          },
          {
            label: "AFP4 Boundary",
            file: "BIAFP4Boundary3.json",
            active: false,
            class: "bi",
            options: {
              tooltip: (feature) => {
                const props = feature.feature.properties;
                return `FACNO: ${props.FACNO}<br>AERA: ${props.AREA}<br>PERIMETER: ${props.PERIMETER}`;
              },
            },
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "AFP4 Boundary"
              ) {
                return feature.properties.layer.style(feature);
              }
              return {
                weight: 3,
                color: "#3bceff",
                opacity: 0.9,
              };
            },
          },
        ],
      },
      {
        label: "Photos / Videos",
        icon: "photo_camera",
        childs: [
          {
            label: "Photos",
            file: "PVRPhotos1.json",
            active: false,
            class: "media",
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Photos"
              ) {
                return feature.properties.layer.style(feature);
              }
              return {
                weight: 5,
                radius: 6,
                color: "#e3eb7a",
              };
            },
            template: {
              tooltip: (feature) => {
                const props = feature.feature.properties;
                return props.Name;
              },
              popup: (feature) => {
                const props = feature.feature.properties;
                return `
                  ${props.Name}<br>
                  <img width="600" height="400" src="${props.urlhtml}">
                `;
              },
            },
          },
          {
            label: "Videos",
            file: "PVRVideos0.json",
            active: false,
            class: "media",
            style: (feature) => {
              if (
                feature.properties.layer.style &&
                feature.properties.layer.label !== "Videos"
              ) {
                return feature.properties.layer.style(feature);
              }
              return {
                weight: 5,
                radius: 6,
                color: "#e3eb7a",
              };
            },
            template: {
              tooltip: (feature) => {
                const props = feature.feature.properties;
                return props.Name;
              },
              popup: (feature) => {
                const props = feature.feature.properties;
                return `
                  ${props.Name}<br>
                  <video width="640" height="360" controls><source src="${props.url}" type="video/mp4"></video>
                `;
              },
            },
          },
        ],
      },
      {
        label: "Registered Images",
        icon: "satellite_alt",
        childs: [
          {
            label: "Terrace Alluvium TCE Plume Map, March 2017",
            file: "TATCE2017March.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.78487, -97.46211],
              [32.75486, -97.41547],
            ],
          },
          {
            label: "Terrace Alluvium cis-1,2-DCE and VC Plume Map, March 2017",
            file: "cDCE12_VC2017March.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.78489, -97.46208],
              [32.75476, -97.41542],
            ],
          },
          {
            label:
              "GW Elevation Contours for Terrace Alluvium and Fill, April 6 - 10, 2015",
            file: "GWContour_TerraceAlluvium_Fill_April2015.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.78546, -97.45857],
              [32.75847, -97.41162],
            ],
          },
          {
            label: "Indoor Air Samping Results",
            file: "VILRFigure2.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.78411, -97.46226],
              [32.75642, -97.41288],
            ],
          },
          {
            label: "Sub slab and Indoor Air Samping Results",
            file: "VILRFigure3.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.78411, -97.46226],
              [32.75642, -97.41288],
            ],
          },
          {
            label: "USGS Isotope TCE Plume",
            file: "TCEPlume.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.77831, -97.45619],
              [32.76159, -97.4344],
            ],
          },
          {
            label:
              "GW Elev Contours for Terrace Alluvium and Fill, March 31 - April 3, 2014",
            file: "AFP4Fig_4.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.78564, -97.45994],
              [32.75612, -97.41157],
            ],
          },
          {
            label: "Thickness of the Alluvial Aquifer",
            file: "Figure8.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.79406, -97.46782],
              [32.74526, -97.39485],
            ],
          },
          {
            label: "Thickness of the Goodland Walnut confining Unit",
            file: "Figure11.jpg",
            active: false,
            class: "geoimage",
            bounds: [
              [32.7953, -97.46948],
              [32.74572, -97.39498],
            ],
          },
          {
            label: "Terrace Alluvium Plume Map, Spring 2020",
            file: "Plumes2020.png",
            active: false,
            class: "geoimage",
            bounds: [
              [32.783074, -97.457694],
              [32.757652, -97.420624],
            ],
          },
        ],
      },
    ],
  }),
  getters: {
    getSelectedFeatureStyle: (state) => {
      const feature = state.selectedFeature.feature;
      const template = state.selectedFeature.options;
      const step = template.limits.find((limit) => {
        return feature.properties.Result <= limit;
      });
      const index = template.limits.indexOf(step);
      const color =
        index !== -1
          ? template.colors[index]
          : template.colors[template.colors.length - 1];
      return Object.assign(template, {
        fillColor: color,
        fillOpacity: 1,
        radius: 6,
        weight: 1,
      });
    },
  },
  actions: {
    async saveLoginState(username) {
      const now = new Date();
      const expires = now.getTime() + this.expiration_length * 60000;
      this.user = {
        name: username,
        expires: expires,
      };
      localStorage.setItem("user", username);
      localStorage.setItem("expires", expires);
    },
    saveLogoutState() {
      this.user = { name: null, expires: new Date() };
      localStorage.setItem("user", null);
      localStorage.setItem("expires", new Date());
    },
  },
});
