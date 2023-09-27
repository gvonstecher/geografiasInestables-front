"use strict";
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NavMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(379);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NavMenu__WEBPACK_IMPORTED_MODULE_7__]);
_components_NavMenu__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Layout = ({ children =null  })=>{
    const [playerSource, setPlayerSource] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const handleButtonClick = (source)=>{
        setPlayerSource(source);
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Geograf\xedas Inestables"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "/hamburguer.js",
                        async: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "container relative  mx-auto flex items-center w-full drop-shadow-md z-10 justify-between lg:px-8",
                                "aria-label": "Global",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/",
                                            className: "m-0 pt-2 pb-0 inline-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Geografias Inestables"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    className: "h-16 w-auto ",
                                                    src: "/gi-logo.png",
                                                    alt: "Geograf\xedas Inestables",
                                                    width: 160,
                                                    height: 70
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "navbar-burger flex items-center text-blue-600 p-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/menu.svg",
                                                className: "h-12 w-12"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "hidden lg:flex text-xl lg:gap-x-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    section: "podcasts"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    section: "notas"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/musica",
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "px-2",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                        clipPath: "url(#clip0_33_288)",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                opacity: "0.3",
                                                                                d: "M10.0098 19C11.1143 19 12.0098 18.1046 12.0098 17C12.0098 15.8954 11.1143 15 10.0098 15C8.9052 15 8.00977 15.8954 8.00977 17C8.00977 18.1046 8.9052 19 10.0098 19Z",
                                                                                fill: "black"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z",
                                                                                fill: "black"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                                            id: "clip0_33_288",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                width: "24",
                                                                                height: "24",
                                                                                fill: "white"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        "Musica"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/busqueda",
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "px-2",
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
                                                        }),
                                                        "Buscar"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "navbar-menu relative z-50 hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                        id: "mobile-menu",
                                        className: "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: "/",
                                                        className: "mr-auto pt-2 pb-0 inline-block",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "sr-only",
                                                                children: "Geografias Inestables"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                className: "h-16 w-auto ",
                                                                src: "/gi-logo.png",
                                                                alt: "Geograf\xedas Inestables",
                                                                width: 160,
                                                                height: 70
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "navbar-close",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            className: "h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M6 18L18 6M6 6l12 12"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                section: "podcasts"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                section: "notas"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/musica",
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "px-2",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "24",
                                                                            height: "24",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                    clipPath: "url(#clip0_33_288)",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                            opacity: "0.3",
                                                                                            d: "M10.0098 19C11.1143 19 12.0098 18.1046 12.0098 17C12.0098 15.8954 11.1143 15 10.0098 15C8.9052 15 8.00977 15.8954 8.00977 17C8.00977 18.1046 8.9052 19 10.0098 19Z",
                                                                                            fill: "black"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                            d: "M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z",
                                                                                            fill: "black"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                                                        id: "clip0_33_288",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                            width: "24",
                                                                                            height: "24",
                                                                                            fill: "white"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    "Musica"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/busqueda",
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "px-2",
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
                                                                    }),
                                                                    "Buscar"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mb-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded",
                                                                href: "#",
                                                                children: "Home"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-auto",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "pt-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl",
                                                                href: "#",
                                                                children: "Sign in"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl",
                                                                href: "#",
                                                                children: "Sign Up"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "my-4 text-xs text-center text-gray-400",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Copyright \xa9 2021"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "flex-grow container mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-4 py-12",
                            children: typeof children === "function" ? children(openModal) : children
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "w-full py-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container text-center mx-auto",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "#",
                                    className: "m-0 py-2 inline-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Geografias Inestables"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: "h-16 w-auto ",
                                            src: "/gi-logo.png",
                                            alt: "Geograf\xedas Inestables",
                                            width: 160,
                                            height: 70
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex w-auto justify-center py-2 gap-10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "53",
                                                height: "53",
                                                viewBox: "0 0 53 53",
                                                fill: "none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                    filter: "url(#filter0_d_293_258)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M26.5 0C29.6071 0 32.5268 0.589286 35.2589 1.76786C37.9911 2.94643 40.375 4.55357 42.4107 6.58929C44.4464 8.625 46.0536 11.0089 47.2321 13.7411C48.4107 16.4732 49 19.3929 49 22.5C49 25.6071 48.4107 28.5268 47.2321 31.2589C46.0536 33.9911 44.4464 36.375 42.4107 38.4107C40.375 40.4464 37.9911 42.0536 35.2589 43.2321C32.5268 44.4107 29.6071 45 26.5 45C23.3929 45 20.4732 44.4107 17.7411 43.2321C15.0089 42.0536 12.625 40.4464 10.5893 38.4107C8.55357 36.375 6.94643 33.9911 5.76786 31.2589C4.58929 28.5268 4 25.6071 4 22.5C4 19.3929 4.58929 16.4732 5.76786 13.7411C6.94643 11.0089 8.55357 8.625 10.5893 6.58929C12.625 4.55357 15.0089 2.94643 17.7411 1.76786C20.4732 0.589286 23.3929 0 26.5 0ZM13.8571 28.3393L20.6071 23.5179L13.8571 18.6964V28.3393ZM39.1429 30.4821L30.8929 24.5893L26.5 27.75L22.0536 24.5893L13.8571 30.4821V33.75H39.1429V30.4821ZM39.1429 18.6964L32.3929 23.5179L39.1429 28.3393V18.6964ZM39.1429 11.25H13.8571V14.5179L26.5 23.5179L39.1429 14.5179V11.25Z",
                                                        fill: "black"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "53",
                                                height: "53",
                                                viewBox: "0 0 53 53",
                                                fill: "none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                    filter: "url(#filter0_d_293_264)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M26.4731 0C29.5914 0 32.5125 0.591398 35.2366 1.77419C37.9606 2.95699 40.3441 4.56093 42.3871 6.58602C44.4301 8.61111 46.043 10.9857 47.2258 13.7097C48.4086 16.4337 49 19.3548 49 22.4731C49 25.5914 48.4086 28.5125 47.2258 31.2366C46.043 33.9606 44.4301 36.3441 42.3871 38.3871C40.3441 40.4301 37.9606 42.043 35.2366 43.2258C32.5125 44.4086 29.5914 45 26.4731 45C23.3548 45 20.4337 44.4086 17.7097 43.2258C14.9857 42.043 12.6111 40.4301 10.586 38.3871C8.56093 36.3441 6.95699 33.9606 5.77419 31.2366C4.5914 28.5125 4 25.5914 4 22.4731C4 19.3548 4.5914 16.4337 5.77419 13.7097C6.95699 10.9857 8.56093 8.61111 10.586 6.58602C12.6111 4.56093 14.9857 2.95699 17.7097 1.77419C20.4337 0.591398 23.3548 0 26.4731 0ZM37.6559 17.6344C38.6953 16.8459 39.6093 15.8961 40.3979 14.7849C39.8961 15 39.3853 15.1792 38.8656 15.3226C38.3459 15.466 37.7993 15.5735 37.2258 15.6452C37.7993 15.2867 38.3011 14.8477 38.7312 14.328C39.1613 13.8082 39.466 13.2437 39.6452 12.6344C39.1075 12.9211 38.552 13.181 37.9785 13.414C37.405 13.647 36.8136 13.8172 36.2043 13.9247C35.7025 13.4229 35.1111 13.0108 34.4301 12.6882C33.7491 12.3656 32.9964 12.2043 32.172 12.2043C31.4194 12.2043 30.7115 12.3477 30.0484 12.6344C29.3853 12.9211 28.8118 13.3154 28.328 13.8172C27.8441 14.319 27.4588 14.9014 27.172 15.5645C26.8853 16.2276 26.7419 16.9355 26.7419 17.6882C26.7419 17.9032 26.7509 18.1183 26.7688 18.3333C26.7867 18.5484 26.8136 18.7455 26.8495 18.9247C24.5914 18.8172 22.4946 18.2616 20.5591 17.2581C18.6237 16.2545 16.9749 14.9104 15.6129 13.2258C15.1111 14.0502 14.8602 14.9642 14.8602 15.9677C14.8602 16.8996 15.0842 17.7688 15.5323 18.5753C15.9803 19.3817 16.5627 20.0358 17.2796 20.5376C16.3477 20.466 15.5233 20.233 14.8065 19.8387V19.8925C14.8065 21.2545 15.2276 22.4283 16.0699 23.414C16.9122 24.3996 17.9606 25.0179 19.2151 25.2688C18.9642 25.3405 18.7222 25.3943 18.4892 25.4301C18.2563 25.466 18.0143 25.4839 17.7634 25.4839C17.5842 25.4839 17.414 25.4749 17.2527 25.457C17.0914 25.4391 16.9211 25.4122 16.7419 25.3763C17.1004 26.4516 17.7366 27.3477 18.6505 28.0645C19.5645 28.7814 20.6308 29.1398 21.8495 29.1398C20.9176 29.8925 19.8692 30.4749 18.7043 30.8871C17.5394 31.2993 16.3297 31.5054 15.0753 31.5054C14.8244 31.5054 14.5914 31.4964 14.3763 31.4785C14.1613 31.4606 13.9462 31.4337 13.7312 31.3979C14.9498 32.1864 16.267 32.7957 17.6828 33.2258C19.0986 33.6559 20.5771 33.871 22.1183 33.871C24.6272 33.871 26.8495 33.3961 28.7849 32.4462C30.7204 31.4964 32.3423 30.2778 33.6505 28.7903C34.9588 27.3029 35.9534 25.6362 36.6344 23.7903C37.3154 21.9444 37.6559 20.1254 37.6559 18.3333V17.6344Z",
                                                        fill: "black"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "53",
                                                height: "53",
                                                viewBox: "0 0 53 53",
                                                fill: "none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                    filter: "url(#filter0_d_293_260)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M26.4732 0C29.584 0 32.5072 0.589988 35.2426 1.76996C37.978 2.94994 40.3647 4.559 42.4029 6.59714C44.441 8.63528 46.0501 11.0131 47.23 13.7306C48.41 16.4482 49 19.3623 49 22.4732C49 25.584 48.41 28.5072 47.23 31.2426C46.0501 33.978 44.441 36.3647 42.4029 38.4029C40.3647 40.441 37.978 42.0501 35.2426 43.23C32.5072 44.41 29.584 45 26.4732 45C23.3623 45 20.4482 44.41 17.7306 43.23C15.0131 42.0501 12.6353 40.441 10.5971 38.4029C8.559 36.3647 6.94994 33.978 5.76996 31.2426C4.58999 28.5072 4 25.584 4 22.4732C4 19.3623 4.58999 16.4482 5.76996 13.7306C6.94994 11.0131 8.559 8.63528 10.5971 6.59714C12.6353 4.559 15.0131 2.94994 17.7306 1.76996C20.4482 0.589988 23.3623 0 26.4732 0ZM34.9476 9.81526H30.174C29.2443 9.81526 28.3862 9.97616 27.5995 10.298C26.8129 10.6198 26.1246 11.0489 25.5346 11.5852C24.9446 12.1216 24.4887 12.7294 24.1669 13.4088C23.8451 14.0882 23.6841 14.7676 23.6841 15.447V18.2896H19.447V23.8677H23.6841V35.1311H29.3159V23.8677H33.4994V18.2896H29.3159V16.8415C29.3159 16.4124 29.4857 16.0727 29.8254 15.8224C30.1651 15.5721 30.4601 15.447 30.7104 15.447H34.9476V9.81526Z",
                                                        fill: "black"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "53",
                                                height: "53",
                                                viewBox: "0 0 53 53",
                                                fill: "none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                    filter: "url(#filter0_d_293_262)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M26.2581 27.4731C25.5771 27.4731 24.9409 27.3477 24.3495 27.0968C23.7581 26.8459 23.2384 26.4964 22.7903 26.0484C22.3423 25.6004 21.9928 25.0717 21.7419 24.4624C21.491 23.853 21.3656 23.2079 21.3656 22.5269C21.3656 21.8459 21.491 21.2097 21.7419 20.6183C21.9928 20.0269 22.3423 19.5072 22.7903 19.0591C23.2384 18.6111 23.7581 18.2616 24.3495 18.0108C24.9409 17.7599 25.5771 17.6344 26.2581 17.6344C27.6201 17.6344 28.776 18.1093 29.7258 19.0591C30.6756 20.009 31.1505 21.1649 31.1505 22.5269C31.1505 23.2079 31.0251 23.853 30.7742 24.4624C30.5233 25.0717 30.1738 25.6004 29.7258 26.0484C29.2778 26.4964 28.7581 26.8459 28.1667 27.0968C27.5753 27.3477 26.9391 27.4731 26.2581 27.4731ZM34.1075 22.5269C34.1075 22.2043 34.0896 21.8728 34.0538 21.5323C34.0179 21.1918 33.9642 20.8781 33.8925 20.5914H36.0968V31.3979C36.0968 31.6846 36.0072 31.9176 35.828 32.0968C35.6487 32.276 35.4158 32.3656 35.129 32.3656H17.3871C17.1004 32.3656 16.8674 32.276 16.6882 32.0968C16.509 31.9176 16.4194 31.6846 16.4194 31.3979V20.5914H18.6237C18.552 20.8781 18.4982 21.1918 18.4624 21.5323C18.4265 21.8728 18.4086 22.2043 18.4086 22.5269C18.4086 23.6022 18.6147 24.6237 19.0269 25.5914C19.4391 26.5591 19.9946 27.4014 20.6935 28.1183C21.3925 28.8351 22.2258 29.3996 23.1935 29.8118C24.1613 30.224 25.1828 30.4301 26.2581 30.4301C27.3333 30.4301 28.3548 30.224 29.3226 29.8118C30.2903 29.3996 31.1237 28.8351 31.8226 28.1183C32.5215 27.4014 33.0771 26.5591 33.4892 25.5914C33.9014 24.6237 34.1075 23.6022 34.1075 22.5269ZM26.4731 0C29.5914 0 32.5125 0.591398 35.2366 1.77419C37.9606 2.95699 40.3441 4.56093 42.3871 6.58602C44.4301 8.61111 46.043 10.9857 47.2258 13.7097C48.4086 16.4337 49 19.3548 49 22.4731C49 25.5914 48.4086 28.5125 47.2258 31.2366C46.043 33.9606 44.4301 36.3441 42.3871 38.3871C40.3441 40.4301 37.9606 42.043 35.2366 43.2258C32.5125 44.4086 29.5914 45 26.4731 45C23.3548 45 20.4337 44.4086 17.7097 43.2258C14.9857 42.043 12.6111 40.4301 10.586 38.3871C8.56093 36.3441 6.95699 33.9606 5.77419 31.2366C4.5914 28.5125 4 25.5914 4 22.4731C4 19.3548 4.5914 16.4337 5.77419 13.7097C6.95699 10.9857 8.56093 8.61111 10.586 6.58602C12.6111 4.56093 14.9857 2.95699 17.7097 1.77419C20.4337 0.591398 23.3548 0 26.4731 0ZM39.0538 12.6882C39.0538 11.8638 38.767 11.1649 38.1936 10.5914C37.6201 10.0179 36.9211 9.73118 36.0968 9.73118H16.4194C15.595 9.73118 14.8961 10.0179 14.3226 10.5914C13.7491 11.1649 13.4624 11.8638 13.4624 12.6882V32.3656C13.4624 33.19 13.7491 33.8889 14.3226 34.4624C14.8961 35.0358 15.595 35.3226 16.4194 35.3226H36.0968C36.9211 35.3226 37.6201 35.0358 38.1936 34.4624C38.767 33.8889 39.0538 33.19 39.0538 32.3656V12.6882ZM35.129 12.6882C35.4158 12.6882 35.6487 12.7867 35.828 12.9839C36.0072 13.181 36.0968 13.4229 36.0968 13.7097V16.6667C36.0968 16.9534 36.0072 17.1864 35.828 17.3656C35.6487 17.5448 35.4158 17.6344 35.129 17.6344H32.172C31.8853 17.6344 31.6434 17.5448 31.4462 17.3656C31.2491 17.1864 31.1505 16.9534 31.1505 16.6667V13.7097C31.1505 13.4229 31.2491 13.181 31.4462 12.9839C31.6434 12.7867 31.8853 12.6882 32.172 12.6882H35.129Z",
                                                        fill: "black"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "h-px my-8 bg-dark-green border-0 drop-shadow"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "                                                      \xa9 Copyright TitanSol. Todos los derechos reservados | ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/acerca-de",
                                            className: "underline",
                                            children: "Acerca de Geograsf\xedas Inestables"
                                        }),
                                        " | ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/politicas-de-privacidad",
                                            className: "underline",
                                            children: "Pol\xedtica de privacidad"
                                        }),
                                        " | ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/terminos-y-condiciones",
                                            className: "underline",
                                            children: "T\xe9rminos y Condiciones"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NavMenu = ({ section  })=>{
    const [navLinks, setNavLinks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let apiUrl = "";
    let tituloSeccion = "";
    let icon = "";
    let baseUrl = "";
    if (section == "notas") {
        apiUrl = "http://139.177.206.94:1337" + "/api/categoria-notas";
        baseUrl = "/secciones/";
        tituloSeccion = "Notas";
        icon = `<i className="px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_86_135" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_86_135)">
                <path d="M4 18.5208C3.45 18.5208 2.97917 18.3319 2.5875 17.9541C2.19583 17.5763 2 17.1222 2 16.5917V5.01657H4V16.5917H19V18.5208H4ZM8 14.6625C7.45 14.6625 6.97917 14.4736 6.5875 14.0958C6.19583 13.718 6 13.2638 6 12.7333V1.1582H23V12.7333C23 13.2638 22.8042 13.718 22.4125 14.0958C22.0208 14.4736 21.55 14.6625 21 14.6625H8ZM8 12.7333H21V3.08738H8V12.7333ZM10 9.83952H14V5.01657H10V9.83952ZM15 9.83952H19V7.91034H15V9.83952ZM15 6.94575H19V5.01657H15V6.94575Z" fill="#1C1B1F"/>
                </g>
            </svg>
        </i>`;
    } else {
        apiUrl = "http://139.177.206.94:1337" + "/api/categoria-podcasts";
        tituloSeccion = "Podcasts";
        baseUrl = "/programas/";
        icon = `<i className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_86_134)">
                    <path d="M4 12H7C7.53043 12 8.03914 12.2107 8.41421 12.5858C8.78929 12.9609 9 13.4696 9 14V19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V14C15 13.4696 15.2107 12.9609 15.5858 12.5858C15.9609 12.2107 16.4696 12 17 12H20C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z" fill="#212134"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_86_134">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </i>`;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Fetch data from your API here
        fetch(apiUrl).then((response)=>{
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then((data)=>{
            setNavLinks(data.data);
            setLoading(false);
        }).catch((error)=>{
            setError("Error fetching data. Please try again later.");
            setLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: error
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        as: "div",
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                className: "inline-flex w-full justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "content pe-2",
                        dangerouslySetInnerHTML: {
                            __html: icon
                        }
                    }),
                    " ",
                    tituloSeccion
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                className: "absolute mt-5 origin-top-right divide-y divide-gray-100 rounded-md bg-header-rgb shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                children: navLinks.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: baseUrl + link.attributes.slug,
                                className: `${active ? "bg-green text-white" : "bg-white text-black"} group flex w-full items-center px-4 py-3 text-sm whitespace-nowrap`,
                                children: link.attributes.Titulo
                            })
                    }, link.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;