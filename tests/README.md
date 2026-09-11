# Public WebGIS regression checks

Run `npm ci`, `npm test`, and `npm run build`.

`point-markers.test.mjs` contains five existing marker regressions.
`login.test.mjs` adds 29 cases against the actual `BaseLogin.vue` setup function,
using simulated requests, storage, navigation, and time. No tests contact the
real authentication service.

Login coverage includes success, 401/403 credentials errors, other HTTP errors,
malformed/unexpected JSON, network failure, a 15-second request/body timeout,
empty inputs, duplicate submission, session/navigation failures, and successful
retry without refreshing. All 34 tests and the production build pass.

The equivalent Private GIS component also passed an isolated real-browser login
fixture. Public's own handler is covered by these unit tests and build; negative
login cases were not sent to the live service.

`npm run lint` remains blocked by the existing CommonJS `.eslintrc.js` in this
ES-module package. A focused check of `BaseLogin.vue` and `login.test.mjs` passed
using the same configuration loaded explicitly. No lint configuration or
dependency changes are included in the login draft.

The login changes are parked on `fix/login-retry` for later review. Do not merge
or deploy them without separate approval.
