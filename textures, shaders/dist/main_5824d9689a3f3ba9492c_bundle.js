/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 770:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(212);
;// CONCATENATED MODULE: ./shaders/vertex.glsl
/* harmony default export */ const vertex = ("\r\nvarying vec2 vUv;\r\nvarying vec3 vertexNormal;\r\n\r\n\r\nvoid main(){\r\n    vUv = uv;\r\n    vertexNormal =normalize(normalMatrix * normal); \r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n\r\n\r\n\r\n}");
;// CONCATENATED MODULE: ./shaders/fragment.glsl
/* harmony default export */ const fragment = ("\r\nuniform sampler2D globeTexture;\r\nvarying vec2 vUv;\r\nvarying vec3 vertexNormal;\r\n\r\nvoid main(){\r\n    \r\n    float intensity=1.05-dot(vertexNormal,vec3(0.,0.,1.));\r\n    vec3 atmosphere = vec3(0.3,0.6,1.0) * pow(intensity,1.5);\r\n    \r\n    // vec3 atmosphere=vec3(0.,0.,0.);\r\n    gl_FragColor=vec4(texture2D(globeTexture,vUv).xyz+atmosphere,1.);\r\n    \r\n}\r\n");
;// CONCATENATED MODULE: ./shaders/ATMOvertex.glsl
/* harmony default export */ const ATMOvertex = ("\r\nvarying vec3 vertexNormal;\r\n\r\nvoid main(){\r\n    vertexNormal=normalize(normalMatrix * normal);\r\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\r\n    \r\n}");
;// CONCATENATED MODULE: ./shaders/ATMOfragment.glsl
/* harmony default export */ const ATMOfragment = ("\r\nvarying vec3 vertexNormal;\r\n\r\nvoid main(){\r\n    \r\n    float intensity=pow(.6-dot(vertexNormal,vec3(0.,0.,1.)),2.);\r\n    \r\n    gl_FragColor=vec4(.3,.6,1.,1.)*intensity;\r\n    \r\n}\r\n");
;// CONCATENATED MODULE: ./main.js





const camera = new three_module/* PerspectiveCamera */.cPb(75, innerWidth / innerHeight, 0.1, 1000);
const scene = new three_module/* Scene */.xsS();
const renderer = new three_module/* WebGL1Renderer */.b5g({
  antialias: true
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 15);
const loader = new three_module/* TextureLoader */.dpR();
const sphere = new three_module/* Mesh */.Kj0(new three_module/* SphereGeometry */.xo$(5, 50, 50), new three_module/* ShaderMaterial */.jyz({
  // vertexShader: vertexShader,
  // fragmentShader: fragmentShader
  // same as
  vertexShader: vertex,
  fragmentShader: fragment,
  uniforms: {
    globeTexture: {
      value: loader.setCrossOrigin('*').load('https://www.nasa.gov/images/content/135704main_worldview_lg.jpg')
    }
  }
}));
scene.add(sphere);
const atmosphere = new three_module/* Mesh */.Kj0(new three_module/* SphereGeometry */.xo$(6, 50, 50), new three_module/* ShaderMaterial */.jyz({
  vertexShader: ATMOvertex,
  fragmentShader: ATMOfragment,
  blending: three_module/* AdditiveBlending */.WMw,
  side: three_module/* BackSide */._Li
}));
scene.add(atmosphere);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // sphere.rotation.z+=0.01;
  // sphere.rotation.x+=0.01;
  sphere.rotation.y += 0.005;
}
animate();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktextures_shaders"] = self["webpackChunktextures_shaders"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [212], () => (__webpack_require__(770)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;