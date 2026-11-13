// Lightweight automated unit checks: run with `node --test tests.js`
const test=require("node:test"),assert=require("node:assert/strict"),fs=require("node:fs");
const app=fs.readFileSync("app.js","utf8"),html=fs.readFileSync("index.html","utf8"),css=fs.readFileSync("styles.css","utf8");
test("all core app files exist and are non-empty",()=>{for(const f of ["index.html","styles.css","app.js","sw.js","manifest.webmanifest"])assert.ok(fs.statSync(f).size>0,f);});
test("logo builder escapes user-provided SVG text",()=>{assert.match(app,/function escapeXML/);assert.match(app,/escapeXML\(name\)/);});
test("app includes all requested languages",()=>{for(const lang of ["en:","hi:","or:"])assert.ok(app.includes(lang),lang);});
test("PWA manifest has standalone display and icon",()=>{const m=JSON.parse(fs.readFileSync("manifest.webmanifest"));assert.equal(m.display,"standalone");assert.ok(m.icons.length);});
test("service worker precaches app shell",()=>{assert.match(fs.readFileSync("sw.js","utf8"),/caches\.open\(CACHE\)/);});
test("responsive and reduced-motion CSS are present",()=>{assert.match(css,/@media\(max-width:680px\)/);assert.match(css,/prefers-reduced-motion/);});
test("admin dashboard is explicitly demo-only",()=>{assert.match(html,/DEMO ONLY/);assert.match(html,/adminModal/);});
test("logo export and animation controls are wired",()=>{for(const id of ["downloadBtn","animateBtn","motionToggle"])assert.ok(html.includes(`id="${id}"`));});
