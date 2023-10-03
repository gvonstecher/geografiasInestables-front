"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 3833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function TiempoDeLectura({ cuerpo  }) {
    const palabrasPorMinuto = 200; // Puedes ajustar este valor según el ritmo de lectura promedio
    const [tiempoLectura, setTiempoLectura] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const palabrasTotales = cuerpo.split(/\s+/).length;
        const tiempoEstimado = Math.ceil(palabrasTotales / palabrasPorMinuto);
        setTiempoLectura(tiempoEstimado);
    }, [
        cuerpo
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-t border-green pt-2 text-lg text-gray-800",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "inline w-3 h-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 35 35",
                    fill: "none",
                    className: "inline",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            clipPath: "url(#clip0_35_273)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    opacity: "0.3",
                                    d: "M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z",
                                    fill: "#00695C"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    opacity: "0.3",
                                    d: "M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z",
                                    fill: "#00695C"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M25.5 0H8V8.75L13.8333 14.5833L8.01458 20.4312L8 29.1667H25.5L25.4854 20.4312L19.6667 14.5833L25.5 8.76458V0ZM22.5833 21.1458V26.25H10.9167V21.1458L16.75 15.3125L22.5833 21.1458ZM22.5833 8.02083L16.75 13.8542L10.9167 8.02083V2.91667H22.5833V8.02083Z",
                                    fill: "#00695C"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                id: "clip0_35_273",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    width: "35",
                                    height: "35",
                                    fill: "white"
                                })
                            })
                        })
                    ]
                })
            }),
            tiempoLectura,
            " min de lectura"
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TiempoDeLectura);


/***/ })

};
;