"use strict";
(() => {
var exports = {};
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 3066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_podcasts_slug_js__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_podcasts_slug_js__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_podcasts_slug_js__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_podcasts_slug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_podcasts_slug_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_podcasts_slug_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Date_Date)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: external "date-fns/locale"
const locale_namespaceObject = require("date-fns/locale");
;// CONCATENATED MODULE: ./components/Date.js



function Date_Date({ dateString  }) {
    const date = (0,external_date_fns_namespaceObject.parseISO)(dateString);
    return /*#__PURE__*/ jsx_runtime.jsx("time", {
        dateTime: dateString,
        children: (0,external_date_fns_namespaceObject.format)(date, "d LLL, yyyy", {
            locale: locale_namespaceObject.es
        })
    });
}


/***/ }),

/***/ 7248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (/* binding */ Podcast),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2838);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7345);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6167);
/* harmony import */ var _components_PlayerButtonLg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_7__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({
    uri: process.env.STRAPIGRAPHQLURL,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache()
});
const backendUrl = process.env.STRAPIBASEURL;
function Podcast({ podcast , backendUrl , onLoadPlayer  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: " bg-white rounded-lg px-20 py-12 drop-shadow-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/programas/" + podcast.categoria_podcast.data.attributes.slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "uppercase text-light-green font-medium mb-2 font-work",
                            children: podcast.categoria_podcast.data.attributes.Titulo
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-oldStandard text-4xl mb-2",
                        children: podcast.Titulo
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: "mb-1",
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Date__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                dateString: podcast.updatedAt
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "inline rounded-full me-2 object-cover w-6 h-6",
                                src: backendUrl + podcast.autor.data.attributes.Foto.data.attributes.url,
                                alt: podcast.autor.data.attributes.Nombre,
                                width: 36,
                                height: 36
                            }),
                            podcast.autor.data.attributes.Nombre
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto mt-5 w-auto text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "mx-auto",
                                src: backendUrl + podcast.ImagenDestacada.data.attributes.url,
                                alt: podcast.Titulo,
                                width: podcast.ImagenDestacada.data.attributes.width,
                                height: podcast.ImagenDestacada.data.attributes.height
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm",
                                children: podcast.ImagenDestacada.data.attributes.caption
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "content my-6 font-martel text-lg leading-10 text-justify",
                        dangerouslySetInnerHTML: {
                            __html: podcast.Descripcion
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlayerButtonLg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        duracion: podcast.Duracion,
                        onClick: ()=>onLoadPlayer(podcast.Link)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "metaData",
                        className: "border-b border-light-green flex justify-between py-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "font-oldStandard text-2xl ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Etiquetas"
                                    }),
                                    ":",
                                    podcast.tags.data.map((val, i)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "ps-2 hover:text-dark-green",
                                            href: "/etiqueta/" + val.attributes.slug,
                                            children: val.attributes.Tag
                                        }, i);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 35 35",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                                            id: "mask0_97_1984",
                                            maskUnits: "userSpaceOnUse",
                                            x: "0",
                                            y: "0",
                                            width: "35",
                                            height: "35",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                width: "35",
                                                height: "35",
                                                fill: "#D9D9D9"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                            mask: "url(#mask0_97_1984)",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M26.25 32.0827C25.0347 32.0827 24.0017 31.6573 23.151 30.8066C22.3003 29.9559 21.875 28.923 21.875 27.7077C21.875 27.5375 21.8872 27.3613 21.9115 27.179C21.9358 26.9967 21.9722 26.8327 22.0208 26.6868L11.7396 20.7077C11.3264 21.0723 10.8646 21.3579 10.3542 21.5645C9.84375 21.771 9.30903 21.8743 8.75 21.8743C7.53472 21.8743 6.50174 21.449 5.65104 20.5983C4.80035 19.7476 4.375 18.7146 4.375 17.4993C4.375 16.2841 4.80035 15.2511 5.65104 14.4004C6.50174 13.5497 7.53472 13.1243 8.75 13.1243C9.30903 13.1243 9.84375 13.2276 10.3542 13.4342C10.8646 13.6408 11.3264 13.9264 11.7396 14.291L22.0208 8.31185C21.9722 8.16602 21.9358 8.00195 21.9115 7.81966C21.8872 7.63737 21.875 7.46115 21.875 7.29102C21.875 6.07574 22.3003 5.04275 23.151 4.19206C24.0017 3.34136 25.0347 2.91602 26.25 2.91602C27.4653 2.91602 28.4983 3.34136 29.349 4.19206C30.1997 5.04275 30.625 6.07574 30.625 7.29102C30.625 8.50629 30.1997 9.53928 29.349 10.39C28.4983 11.2407 27.4653 11.666 26.25 11.666C25.691 11.666 25.1563 11.5627 24.6458 11.3561C24.1354 11.1495 23.6736 10.8639 23.2604 10.4993L12.9792 16.4785C13.0278 16.6243 13.0642 16.7884 13.0885 16.9707C13.1128 17.153 13.125 17.3292 13.125 17.4993C13.125 17.6695 13.1128 17.8457 13.0885 18.028C13.0642 18.2103 13.0278 18.3743 12.9792 18.5202L23.2604 24.4993C23.6736 24.1348 24.1354 23.8492 24.6458 23.6426C25.1563 23.436 25.691 23.3327 26.25 23.3327C27.4653 23.3327 28.4983 23.758 29.349 24.6087C30.1997 25.4594 30.625 26.4924 30.625 27.7077C30.625 28.923 30.1997 29.9559 29.349 30.8066C28.4983 31.6573 27.4653 32.0827 26.25 32.0827ZM26.25 8.74935C26.6632 8.74935 27.0096 8.60959 27.2891 8.33008C27.5686 8.05056 27.7083 7.70421 27.7083 7.29102C27.7083 6.87782 27.5686 6.53147 27.2891 6.25195C27.0096 5.97244 26.6632 5.83268 26.25 5.83268C25.8368 5.83268 25.4905 5.97244 25.2109 6.25195C24.9314 6.53147 24.7917 6.87782 24.7917 7.29102C24.7917 7.70421 24.9314 8.05056 25.2109 8.33008C25.4905 8.60959 25.8368 8.74935 26.25 8.74935ZM8.75 18.9577C9.16319 18.9577 9.50955 18.8179 9.78906 18.5384C10.0686 18.2589 10.2083 17.9125 10.2083 17.4993C10.2083 17.0862 10.0686 16.7398 9.78906 16.4603C9.50955 16.1808 9.16319 16.041 8.75 16.041C8.33681 16.041 7.99045 16.1808 7.71094 16.4603C7.43142 16.7398 7.29167 17.0862 7.29167 17.4993C7.29167 17.9125 7.43142 18.2589 7.71094 18.5384C7.99045 18.8179 8.33681 18.9577 8.75 18.9577ZM26.25 29.166C26.6632 29.166 27.0096 29.0263 27.2891 28.7467C27.5686 28.4672 27.7083 28.1209 27.7083 27.7077C27.7083 27.2945 27.5686 26.9481 27.2891 26.6686C27.0096 26.3891 26.6632 26.2493 26.25 26.2493C25.8368 26.2493 25.4905 26.3891 25.2109 26.6686C24.9314 26.9481 24.7917 27.2945 24.7917 27.7077C24.7917 28.1209 24.9314 28.4672 25.2109 28.7467C25.4905 29.0263 25.8368 29.166 26.25 29.166Z",
                                                fill: "#00695C"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
async function getStaticPaths() {
    const { data  } = await client.query({
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_6__/* .GET_PODCASTS_SLUGS */ .rd
    });
    const paths = data.podcasts.data.map((podcast)=>{
        return {
            params: {
                slug: podcast.attributes.slug
            }
        };
    });
    return {
        paths: paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { data  } = await client.query({
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_6__/* .GET_PODCAST */ .Gu,
        variables: {
            slug: params.slug
        }
    });
    return {
        props: {
            podcast: data.podcasts.data[0].attributes,
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
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,345,838,130], () => (__webpack_exec__(3066)));
module.exports = __webpack_exports__;

})();