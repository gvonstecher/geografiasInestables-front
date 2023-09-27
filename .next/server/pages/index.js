"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NotaCaja)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TiempoDeLectura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3833);




function NotaCaja({ titulo , slug , categoria , cuerpo , imagenDestacada , backendUrl  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: " bg-white rounded-lg drop-shadow-md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/notas/" + slug,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "object-cover h-60 w-full rounded-t-lg",
                        src: backendUrl + imagenDestacada.attributes.url,
                        layout: "responsive",
                        width: 400,
                        height: 225,
                        alt: titulo
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-between p-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                typeof categoria != "undefined" && typeof categoria != null && categoria != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/secciones/" + categoria.attributes.slug,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "uppercase text-light-green font-medium mb-2 font-work",
                                        children: categoria.attributes.Titulo
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/notas/" + slug,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-martel text-xl font-bold",
                                        children: titulo
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pt-4 text-gray-800 text-sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TiempoDeLectura__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                cuerpo: cuerpo
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 7319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PodcastCaja)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/PlayerButtonSm.js


const PlayerButtonSm = ({ duracion =null , onClick  })=>{
    const handleButtonClick = ()=>{
        onClick();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "bg-green hover:bg-dark-green text-white font-noto rounded-full p-4 flex",
                onClick: handleButtonClick,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("rect", {
                            width: "24",
                            height: "24"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M5 3L19 12L5 21V3Z",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    ]
                })
            }),
            typeof duracion != "object" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-3 text-gray-800 text-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: "inline w-2 h-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 35 35",
                            fill: "none",
                            className: "inline",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                    clipPath: "url(#clip0_35_273)",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            opacity: "0.3",
                                            d: "M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z",
                                            fill: "#00695C"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            opacity: "0.3",
                                            d: "M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z",
                                            fill: "#00695C"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M25.5 0H8V8.75L13.8333 14.5833L8.01458 20.4312L8 29.1667H25.5L25.4854 20.4312L19.6667 14.5833L25.5 8.76458V0ZM22.5833 21.1458V26.25H10.9167V21.1458L16.75 15.3125L22.5833 21.1458ZM22.5833 8.02083L16.75 13.8542L10.9167 8.02083V2.91667H22.5833V8.02083Z",
                                            fill: "#00695C"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                                        id: "clip0_35_273",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                            width: "35",
                                            height: "35",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    duracion
                ]
            })
        ]
    });
};
/* harmony default export */ const components_PlayerButtonSm = (PlayerButtonSm);

;// CONCATENATED MODULE: ./components/podcastCaja.js





function PodcastCaja({ titulo , slug , categoria , duracion , link , imagenDestacada , backendUrl , onLoadPlayer  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
            className: " bg-white rounded-lg drop-shadow-md",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/podcasts/" + slug,
                    children: typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada != null && /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: "object-cover h-60 w-full rounded-t-lg",
                        src: backendUrl + imagenDestacada.attributes.url,
                        layout: "responsive",
                        width: 300,
                        height: 200,
                        alt: titulo
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col justify-between p-3 text-center items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components_PlayerButtonSm, {
                            duracion: duracion,
                            onClick: ()=>onLoadPlayer(link)
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/podcasts/" + slug,
                            children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "font-medium",
                                children: titulo
                            })
                        }),
                        typeof categoria != "undefined" && typeof categoria != null && categoria != null && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/programas/" + categoria.attributes.slug,
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-light-green font-medium mb-2 font-work",
                                children: categoria.attributes.Titulo
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Home),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7345);
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5192);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2838);
/* harmony import */ var _components_notaDestacada__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1618);
/* harmony import */ var _components_notaCaja__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7388);
/* harmony import */ var _components_podcastDestacado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2383);
/* harmony import */ var _components_podcastCaja__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const apiUrl = process.env.STRAPIGRAPHQLURL;
const backendUrl = process.env.STRAPIBASEURL;
function Home({ notas , podcasts , backendUrl , onLoadPlayer  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    id: "home-notas",
                    className: "grid grid-cols-3 gap-8 font-martel",
                    children: notas.map((nota, i)=>{
                        if (i === 0) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_notaDestacada__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                titulo: nota.attributes.Titulo,
                                slug: nota.attributes.slug,
                                categoria: nota.attributes.categoria_nota.data,
                                descripcionCorta: nota.attributes.DescripcionCorta,
                                cuerpo: nota.attributes.Cuerpo,
                                imagenDestacada: nota.attributes.ImagenDestacada.data,
                                backendUrl: backendUrl
                            }, i);
                        } else {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_notaCaja__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                titulo: nota.attributes.Titulo,
                                slug: nota.attributes.slug,
                                categoria: nota.attributes.categoria_nota.data,
                                cuerpo: nota.attributes.Cuerpo,
                                imagenDestacada: nota.attributes.ImagenDestacada.data,
                                backendUrl: backendUrl
                            }, i);
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    id: "home-podcasts",
                    className: "grid grid-cols-4 gap-8 font-work mt-10",
                    children: podcasts.map((podcast, i)=>{
                        if (i === 0) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_podcastDestacado__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                titulo: podcast.attributes.Titulo,
                                slug: podcast.attributes.slug,
                                categoria: podcast.attributes.categoria_podcast.data,
                                descripcionCorta: podcast.attributes.DescripcionCorta,
                                duracion: podcast.attributes.Duracion,
                                link: podcast.attributes.Link,
                                imagenDestacada: podcast.attributes.ImagenDestacada.data,
                                backendUrl: backendUrl,
                                onLoadPlayer: onLoadPlayer
                            }, i);
                        } else {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_podcastCaja__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                podcast: podcast,
                                titulo: podcast.attributes.Titulo,
                                slug: podcast.attributes.slug,
                                categoria: podcast.attributes.categoria_podcast.data,
                                descripcionCorta: podcast.attributes.DescripcionCorta,
                                duracion: podcast.attributes.Duracion,
                                link: podcast.attributes.Link,
                                imagenDestacada: podcast.attributes.ImagenDestacada.data,
                                backendUrl: backendUrl,
                                onLoadPlayer: onLoadPlayer
                            }, i);
                        }
                    })
                })
            ]
        })
    });
}
async function getStaticProps() {
    const client = (0,_lib_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* .getApolloClient */ .W)(process.env.STRAPIGRAPHQLURL);
    const { data  } = await client.query({
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__/* .GET_HOME_POSTS */ .Z5
    });
    return {
        props: {
            notas: data.notas.data,
            podcasts: data.podcasts.data,
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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,402,345,838,130,833,947,618], () => (__webpack_exec__(9241)));
module.exports = __webpack_exports__;

})();