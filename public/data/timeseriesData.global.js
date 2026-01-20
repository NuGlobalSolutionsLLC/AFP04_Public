import dataset from "./timeseriesData.js";

// Keep compatibility with existing app code that expects a global `tcedata` array.
// `timeseriesData.js` is an ES module that default-exports an object like:
//   { timeseriesData: [...] }
globalThis.tcedata = dataset?.timeseriesData ?? [];
globalThis.timeseriesData = globalThis.tcedata;

