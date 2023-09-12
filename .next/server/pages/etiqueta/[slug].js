"use strict";
(() => {
var exports = {};
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 9655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_etiqueta_slug_js__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_etiqueta_slug_js__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_etiqueta_slug_js__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_etiqueta_slug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_etiqueta_slug_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_etiqueta_slug_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (/* binding */ Notas),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5192);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2838);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7345);
/* harmony import */ var _components_notaDestacada__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1618);
/* harmony import */ var _components_podcastDestacado__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_6__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const client = (0,_lib_apollo_client__WEBPACK_IMPORTED_MODULE_4__/* .getApolloClient */ .W)(process.env.STRAPIGRAPHQLURL);
const backendUrl = process.env.STRAPIBASEURL;
function Notas({ titulo , notas , podcasts , backendUrl , onLoadPlayer  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-4xl font-medium mb-4",
                    children: titulo
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    id: "home-notas",
                    className: "grid gap-8 font-martel",
                    children: [
                        notas.map((nota, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_notaDestacada__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                nota: nota,
                                titulo: nota.attributes.Titulo,
                                slug: nota.attributes.slug,
                                descripcionCorta: nota.attributes.DescripcionCorta,
                                cuerpo: nota.attributes.Cuerpo,
                                imagenDestacada: nota.attributes.ImagenDestacada.data,
                                backendUrl: backendUrl
                            }, i);
                        }),
                        podcasts.map((podcast, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_podcastDestacado__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                titulo: podcast.attributes.Titulo,
                                slug: podcast.attributes.slug,
                                descripcionCorta: podcast.attributes.DescripcionCorta,
                                duracion: podcast.attributes.Duracion,
                                link: podcast.attributes.Link,
                                imagenDestacada: podcast.attributes.ImagenDestacada.data,
                                backendUrl: backendUrl,
                                onLoadPlayer: onLoadPlayer
                            }, i);
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticPaths() {
    const { data  } = await client.query({
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_5__/* .GET_TAGS_SLUGS */ .Fi
    });
    const paths = data.tags.data.map((seccion)=>{
        return {
            params: {
                slug: seccion.attributes.slug
            }
        };
    });
    return {
        paths: paths,
        fallback: "blocking"
    };
}
async function getStaticProps({ params  }) {
    const { data  } = await client.query({
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_5__/* .GET_TAG_POSTS */ .Ct,
        variables: {
            slug: params.slug
        }
    });
    return {
        props: {
            Tag: data.tags.data[0].attributes.Tag,
            notas: data.tags.data[0].attributes.notas.data,
            podcasts: data.tags.data[0].attributes.podcasts.data,
            backendUrl: backendUrl
        },
        revalidate: 60
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,345,838,130,833,947,618], () => (__webpack_exec__(9655)));
module.exports = __webpack_exports__;

})();