"use strict";
exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 2383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PodcastDestacado)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PlayerButtonLg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2130);





function PodcastDestacado({ titulo , slug , categoria , descripcionCorta , duracion , link , imagenDestacada , backendUrl , onLoadPlayer  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "col-span-full bg-white p-5 flex rounded-lg md:p-12 flex-col-reverse md:flex-row drop-shadow-md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex basis-3/5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-between me-3 w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    typeof categoria != "undefined" && typeof categoria != null && categoria != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/programas/" + categoria.attributes.slug,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-light-green font-medium mb-2 font-work uppercase",
                                            children: categoria.attributes.Titulo
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/podcasts/" + slug,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "font-noto text-2xl mb-3",
                                            children: titulo
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "my-3 text-lg font-work text-gray-700",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/podcasts/" + slug,
                                            children: descripcionCorta
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-t border-green pt-2 fonttext-lg text-gray-800",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlayerButtonLg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    duracion: duracion,
                                    onClick: ()=>onLoadPlayer(link)
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "basis-2/5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/podcasts/" + slug,
                        children: typeof imagenDestacada != "undefined" && typeof imagenDestacada != null && imagenDestacada != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "rounded-lg",
                            src: backendUrl + imagenDestacada.attributes.url,
                            alt: titulo,
                            width: 700,
                            height: 420
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getApolloClient)
/* harmony export */ });
/* unused harmony export _createApolloClient */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

let client;
/**
 * getApolloClient
 */ function getApolloClient(uri) {
    if (!client) {
        client = _createApolloClient(uri);
    }
    return client;
}
/**
 * createApolloClient
 */ function _createApolloClient(uri) {
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
            uri: uri
        }),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: "no-cache",
                errorPolicy: "ignore"
            },
            query: {
                fetchPolicy: "no-cache",
                errorPolicy: "all"
            }
        }
    });
}


/***/ })

};
;