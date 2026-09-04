import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

// Exercise the actual SFC callbacks without mounting Leaflet or a browser.
const source = readFileSync(new URL("../src/pages/MainMap.vue", import.meta.url), "utf8");
const style = source.slice(source.indexOf("    const getFeatureStyle ="), source.indexOf("    const overlays ="));
const marker = source.slice(source.indexOf("    const pointToLayer ="), source.indexOf("    const geoJsons ="));
const pointToLayer = runInNewContext(`${style}\n${marker}\npointToLayer`, {
  $store: { sections: { chemistry: { weight: 1 }, well: { radius: 4 } } },
  template: undefined,
  circle: (latLng, options) => ({ kind: "circle", latLng, options }),
});

for (const [result, color] of [[0, "green"], [3, "green"], [10, "yellow"], [100, "red"]]) {
  test(`result ${result} uses a circle with its legend color`, () => {
    const location = [32.77, -97.43];
    const feature = { properties: { Result: result, layer: {
      class: "chemistry", template: { limits: [5, 50], colors: ["green", "yellow", "red"] },
    } } };
    const actual = pointToLayer(feature, location);
    assert.equal(actual.kind, "circle");
    assert.equal(actual.latLng, location);
    assert.equal(actual.options.fillColor, color);
    assert.equal(actual.options.riseOnHover, true);
  });
}

test("non-analytical wells retain their section style", () => {
  const actual = pointToLayer({ properties: { layer: { class: "well" } } }, [32, -97]);
  assert.equal(actual.kind, "circle");
  assert.equal(actual.options.radius, 4);
});
