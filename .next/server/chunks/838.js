"use strict";
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gu": () => (/* binding */ GET_PODCAST),
/* harmony export */   "Ix": () => (/* binding */ GET_SECTION_ARTICLES),
/* harmony export */   "K7": () => (/* binding */ GET_PROGRAMS_SLUGS),
/* harmony export */   "Rh": () => (/* binding */ GET_ARTICLE),
/* harmony export */   "Z5": () => (/* binding */ GET_HOME_POSTS),
/* harmony export */   "ZK": () => (/* binding */ GET_AUTORS),
/* harmony export */   "hb": () => (/* binding */ GET_PROGRAM_PODCASTS),
/* harmony export */   "n": () => (/* binding */ GET_ARTICLE_SLUGS),
/* harmony export */   "rd": () => (/* binding */ GET_PODCASTS_SLUGS),
/* harmony export */   "yS": () => (/* binding */ GET_SECTION_SLUGS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_HOME_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
query getHomePosts{
  notas(pagination: {start: 0, limit:4}, sort: "publishedAt:DESC") {
    data{
      id
      attributes{
      	Titulo
        DescripcionCorta
        Cuerpo
        slug
        publishedAt
        ImagenDestacada{
          data{
            attributes{
                url
            }
          }
        }
        categoria_nota{
          data{
            attributes{
              Titulo
              slug
            }
          }
        }
      }
    }
  }
  podcasts (pagination: {start: 0, limit:5}, sort: "publishedAt:DESC"){
    data{
      id,
      attributes{
        Titulo
        DescripcionCorta
        publishedAt
        slug
        Duracion,
        Link
        ImagenDestacada{
          data{
            attributes{
              url
            }
          }
        }
        categoria_podcast{
          data{
            attributes{
              Titulo
              slug
            }
          }
        }
      }
    }
  }
}
`;
const GET_ARTICLE_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getArticleSlugs{
      notas(pagination: {start: 0, limit:-1}, sort: "publishedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
  }`;
const GET_ARTICLE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getArticle($slug: String!) {
    notas(filters: {slug: {eq: $slug}}) {
      data {
        attributes{
          Titulo
          Cuerpo
          slug
          publishedAt
          updatedAt
          ImagenDestacada{
            data{
              attributes{
                  url
                  width
                  height
                  caption
              }
            }
          }
          categoria_nota{
            data{
              attributes{
                Titulo
                slug
              }
            }
          }
          autor{
            data{
              attributes{
                Nombre
                slug
                Foto{
                  data{
                    attributes{
                        url
                        width
                        height
                    }
                  }
                }
              }
            }
          }
          tags{
            data{
              attributes{
                Tag
                slug
              }
            }
          }
        }
      }
    }
  } 
`;
const GET_PODCASTS_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getPodcastSlugs{
      podcasts(pagination: {start: 0, limit:-1}, sort: "publishedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
  }`;
const GET_PODCAST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getPodcast($slug: String!) {  
    podcasts(filters: {slug: {eq: $slug}}) {
      data {
        id
        attributes{
          Titulo
          Cuerpo
          Duracion
          slug
          Link
          publishedAt
          updatedAt
          ImagenDestacada{
            data{
              attributes{
                  url
                  width
                  height
              }
            }
          }
          categoria_podcast{
            data{
              attributes{
                Titulo
                slug
              }
            }
          }
          autor{
            data{
              attributes{
                Nombre
                slug
                Foto{
                  data{
                    attributes{
                        url
                        width
                        height
                    }
                  }
                }
              }
            }
          }
          tags{
            data{
              attributes{
                Tag
              }
            }
          }
        }
      }
    }
  } 
`;
const GET_SECTION_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getSectionSlugs{
      categoriaNotas(pagination: {start: 0, limit:-1}, sort: "publishedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
}`;
const GET_SECTION_ARTICLES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
query getSectionArticles($slug: String!){
  categoriaNotas(filters: {slug: {eq: $slug}}) {
    data {
        attributes{
          Titulo
          slug
          notas{
            data{
              attributes{
                Titulo
                slug
                DescripcionCorta
                Cuerpo
                ImagenDestacada{
                  data{
                    attributes{
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
    }
  }
}`;
const GET_PROGRAMS_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getProgramSlugs{
      categoriaPodcasts(pagination: {start: 0, limit:-1}, sort: "publishedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
}`;
const GET_PROGRAM_PODCASTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
query getProgramPodcasts($slug: String!){
  categoriaPodcasts(filters: {slug: {eq: $slug}}) {
    data {
        attributes{
          Titulo
          slug
          podcasts{
            data{
              attributes{
                Titulo
                slug
                DescripcionCorta
                Link
                Duracion
                ImagenDestacada{
                  data{
                    attributes{
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
    }
  }
}`;
const GET_AUTORS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getAutors{
    autors{
      data{
        attributes{
          Nombre
          Descripcion
          slug
          Foto{
            data{
              attributes{
                  url
                  width
                  height
              }
            }
          }
        }
      }
    }
  }
`;



/***/ })

};
;