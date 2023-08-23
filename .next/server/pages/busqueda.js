"use strict";
(() => {
var exports = {};
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 3774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_busqueda_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_busqueda_js__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var private_next_pages_busqueda_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_busqueda_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_busqueda_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Search),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
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
/* harmony import */ var meilisearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9997);
/* harmony import */ var meilisearch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(meilisearch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7345);
/* harmony import */ var _components_notaDestacada__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1618);
/* harmony import */ var _components_podcastDestacado__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2383);
/* harmony import */ var _components_autorDestacado__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_6__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const backendUrl = process.env.STRAPIBASEURL;
function Search({ backendUrl , onLoadPlayer  }) {
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("all");
    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [searchTimeout, setSearchTimeout] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const handleSearch = async ()=>{
        const client = new meilisearch__WEBPACK_IMPORTED_MODULE_5__.MeiliSearch({
            host: process.env.MEILISEARCHURL
        }); // Cambia la URL según tu configuración de MeiliSearch
        let searches = {};
        if (filter === "all") {
            searches = {
                queries: [
                    {
                        indexUid: "nota",
                        q: query,
                        showRankingScore: true
                    },
                    {
                        indexUid: "podcast",
                        q: query,
                        showRankingScore: true
                    },
                    {
                        indexUid: "autor",
                        q: query,
                        showRankingScore: true
                    }
                ]
            };
        } else if (filter === "notas") {
            searches = {
                queries: [
                    {
                        indexUid: "nota",
                        q: query,
                        showRankingScore: true
                    }
                ]
            };
        } else if (filter === "podcasts") {
            searches = {
                queries: [
                    {
                        indexUid: "podcast",
                        q: query,
                        showRankingScore: true
                    }
                ]
            };
        } else if (filter === "autores") {
            searches = {
                queries: [
                    {
                        indexUid: "autor",
                        q: query,
                        showRankingScore: true
                    }
                ]
            };
        }
        try {
            const searchResults = await client.multiSearch(searches);
            // Combina los arrays de hits en uno solo
            const combinedHits = searchResults.results.flatMap((result)=>result.hits.map((hit)=>({
                        ...hit,
                        indexUid: result.indexUid
                    })));
            combinedHits.sort((a, b)=>b._rankingScore - a._rankingScore);
            setResults(combinedHits);
        } catch (error) {
            console.error("Error searching:", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (searchTimeout) {
            clearTimeout(searchTimeout); // Cancela el temporizador anterior
        }
        if (query && filter) {
            const newSearchTimeout = setTimeout(()=>{
                handleSearch(); // Realiza la búsqueda después de un segundo de inactividad
            }, 1000); // Cambia el tiempo de retraso según lo que prefieras
            setSearchTimeout(newSearchTimeout); // Almacena el nuevo temporizador en el estado
        } else {
            setResults([]); // Si no hay consulta, limpia los resultados
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        query,
        filter
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "search",
            className: "grid grid-cols-3 gap-8 font-martel",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-3 bg-white rounded-lg p-12 flex drop-shadow-md items-stretch font-work",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: "grow ",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            placeholder: "Buscar..."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "ms-4 pr-10",
                            onChange: (e)=>setFilter(e.target.value),
                            value: "all",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "all",
                                    children: "Todos"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "notas",
                                    children: "Notas"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "podcasts",
                                    children: "Podcasts"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "autores",
                                    children: "Autores"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "ms-4 bg-dark-green text-white px-4 font-bold",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: "h-5 w-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
                                        clipRule: "evenodd"
                                    })
                                })
                            })
                        })
                    ]
                }),
                results.map((result)=>{
                    switch(result.indexUid){
                        case "nota":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_notaDestacada__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                titulo: result.Titulo,
                                slug: result.Slug,
                                categoria: result.categoria_nota,
                                descripcionCorta: result.DescripcionCorta,
                                imagenDestacada: result.ImagenDestacada[0].url,
                                backendUrl: backendUrl
                            }, result._meilisearch_id);
                        case "podcast":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_podcastDestacado__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                titulo: result.Titulo,
                                slug: result.slug,
                                categoria: result.categoria_nota,
                                descripcionCorta: result.DescripcionCorta,
                                cuerpo: result.Cuerpo,
                                imagenDestacada: result.ImagenDestacada[0].url,
                                duracion: result.duracion,
                                link: result.Link,
                                backendUrl: backendUrl,
                                onLoadPlayer: onLoadPlayer
                            }, result._meilisearch_id);
                        default:
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-3 bg-white rounded-lg p-12 flex drop-shadow-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_autorDestacado__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    nombre: result.Nombre,
                                    slug: result.slug,
                                    descripcion: result.Descripcion,
                                    foto: result.Foto[0].url,
                                    backendUrl: backendUrl
                                }, result._meilisearch_id)
                            }, result._meilisearch_id);
                    }
                })
            ]
        })
    });
}
;
async function getStaticProps() {
    return {
        props: {
            backendUrl
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9997:
/***/ ((module) => {

module.exports = require("meilisearch");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,345,130,618,383,661], () => (__webpack_exec__(3774)));
module.exports = __webpack_exports__;

})();