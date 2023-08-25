(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4234:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Martel_0dff49', '__Martel_Fallback_0dff49'","fontStyle":"normal"},
	"className": "__className_0dff49"
};


/***/ }),

/***/ 6415:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Noto_Sans_d53fa6', '__Noto_Sans_Fallback_d53fa6'","fontWeight":500,"fontStyle":"normal"},
	"className": "__className_d53fa6"
};


/***/ }),

/***/ 9627:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Old_Standard_TT_aa4f88', '__Old_Standard_TT_Fallback_aa4f88'","fontWeight":400,"fontStyle":"normal"},
	"className": "__className_aa4f88"
};


/***/ }),

/***/ 2019:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Work_Sans_d174fa', '__Work_Sans_Fallback_d174fa'","fontStyle":"normal"},
	"className": "__className_d174fa"
};


/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"pages\\_app.js","import":"Old_Standard_TT","arguments":[{"subsets":["latin"],"weight":["400"]}],"variableName":"old_Standard"}
var target_path_pages_app_js_import_Old_Standard_TT_arguments_subsets_latin_weight_400_variableName_old_Standard_ = __webpack_require__(9627);
var target_path_pages_app_js_import_Old_Standard_TT_arguments_subsets_latin_weight_400_variableName_old_Standard_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_Old_Standard_TT_arguments_subsets_latin_weight_400_variableName_old_Standard_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"pages\\_app.js","import":"Martel","arguments":[{"subsets":["latin"],"weight":["400","600"]}],"variableName":"martel"}
var target_path_pages_app_js_import_Martel_arguments_subsets_latin_weight_400_600_variableName_martel_ = __webpack_require__(4234);
var target_path_pages_app_js_import_Martel_arguments_subsets_latin_weight_400_600_variableName_martel_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_Martel_arguments_subsets_latin_weight_400_600_variableName_martel_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"pages\\_app.js","import":"Work_Sans","arguments":[{"subsets":["latin"],"weight":["400","500"]}],"variableName":"work"}
var target_path_pages_app_js_import_Work_Sans_arguments_subsets_latin_weight_400_500_variableName_work_ = __webpack_require__(2019);
var target_path_pages_app_js_import_Work_Sans_arguments_subsets_latin_weight_400_500_variableName_work_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_Work_Sans_arguments_subsets_latin_weight_400_500_variableName_work_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"pages\\_app.js","import":"Noto_Sans","arguments":[{"subsets":["latin"],"weight":["500"]}],"variableName":"noto"}
var target_path_pages_app_js_import_Noto_Sans_arguments_subsets_latin_weight_500_variableName_noto_ = __webpack_require__(6415);
var target_path_pages_app_js_import_Noto_Sans_arguments_subsets_latin_weight_500_variableName_noto_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_Noto_Sans_arguments_subsets_latin_weight_500_variableName_noto_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./components/PersistentPlayer.js

const PersistentPlayer = ({ src  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "content fixed bottom-0 w-full bg-dark-green max-h-48",
            dangerouslySetInnerHTML: {
                __html: src
            }
        })
    });
};
/* harmony default export */ const components_PersistentPlayer = (PersistentPlayer);

;// CONCATENATED MODULE: ./pages/_app.js









function App({ Component , pageProps  }) {
    const [playerSource, setPlayerSource] = (0,external_react_.useState)(null);
    const handleLoadPlayer = (source)=>{
        setPlayerSource(source);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            jsx_runtime.jsx((style_default()), {
                id: "7417e07a9cf85c4",
                dynamic: [
                    (target_path_pages_app_js_import_Old_Standard_TT_arguments_subsets_latin_weight_400_variableName_old_Standard_default()).style.fontFamily,
                    (target_path_pages_app_js_import_Martel_arguments_subsets_latin_weight_400_600_variableName_martel_default()).style.fontFamily,
                    (target_path_pages_app_js_import_Work_Sans_arguments_subsets_latin_weight_400_500_variableName_work_default()).style.fontFamily,
                    (target_path_pages_app_js_import_Noto_Sans_arguments_subsets_latin_weight_500_variableName_noto_default()).style.fontFamily
                ],
                children: `:root{--font-old_standard:${(target_path_pages_app_js_import_Old_Standard_TT_arguments_subsets_latin_weight_400_variableName_old_Standard_default()).style.fontFamily};--font-martel:${(target_path_pages_app_js_import_Martel_arguments_subsets_latin_weight_400_600_variableName_martel_default()).style.fontFamily};--font-work:${(target_path_pages_app_js_import_Work_Sans_arguments_subsets_latin_weight_400_500_variableName_work_default()).style.fontFamily};--font-noto:${(target_path_pages_app_js_import_Noto_Sans_arguments_subsets_latin_weight_500_variableName_noto_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps,
                onLoadPlayer: handleLoadPlayer,
                className: style_default().dynamic([
                    [
                        "7417e07a9cf85c4",
                        [
                            (target_path_pages_app_js_import_Old_Standard_TT_arguments_subsets_latin_weight_400_variableName_old_Standard_default()).style.fontFamily,
                            (target_path_pages_app_js_import_Martel_arguments_subsets_latin_weight_400_600_variableName_martel_default()).style.fontFamily,
                            (target_path_pages_app_js_import_Work_Sans_arguments_subsets_latin_weight_400_500_variableName_work_default()).style.fontFamily,
                            (target_path_pages_app_js_import_Noto_Sans_arguments_subsets_latin_weight_500_variableName_noto_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_PersistentPlayer, {
                src: playerSource
            })
        ]
    });
}
async function getServerSideProps() {
    const dataSecciones = await fetch(backendUrl + "/api/categoria-notas");
    const secciones = await dataSecciones.json();
    const dataProgramas = await fetch(backendUrl + "/api/categoria-podcasts");
    const programas = "sdfsdf";
    return {
        props: {
            secciones: secciones,
            programas: programas
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8090)));
module.exports = __webpack_exports__;

})();