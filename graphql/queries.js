import { gql } from '@apollo/client';

const GET_HOME_POSTS = gql`
query getHomePosts{
  notas(pagination: {start: 0, limit:4}, sort: "updatedAt:DESC") {
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
  podcasts (pagination: {start: 0, limit:5}, sort: "updatedAt:DESC"){
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


const GET_ARTICLE_SLUGS = gql`
    query getArticleSlugs{
      notas(pagination: {start: 0, limit:-1}, sort: "updatedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
  }`;

const GET_ARTICLE = gql`
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


const GET_PODCASTS_SLUGS = gql`
    query getPodcastSlugs{
      podcasts(pagination: {start: 0, limit:-1}, sort: "updatedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
  }`;


const GET_PODCAST = gql`
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

const GET_SECTION_SLUGS = gql`
    query getSectionSlugs{
      categoriaNotas(pagination: {start: 0, limit:-1}, sort: "updatedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
}`;

const GET_SECTION_ARTICLES = gql`
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
        }
    }
  }
}`;


const GET_PROGRAMS_SLUGS = gql`
    query getProgramSlugs{
      categoriaPodcasts(pagination: {start: 0, limit:-1}, sort: "updatedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
}`;

const GET_PROGRAM_PODCASTS = gql`
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
    }
  }
}`;

const GET_AUTORS = gql`
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

const GET_TAGS_SLUGS = gql`
    query getTagsSlugs{
      tags(pagination: {start: 0, limit:-1}, sort: "updatedAt:DESC") {
        data{
          id
          attributes{
            slug
          }
        }
      }
}`;


const GET_TAG_POSTS = gql`
query getTagsPosts($slug: String!) {
  tags( filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        Tag
        slug
        notas (sort: "createdAt:desc"){
          data {
            attributes {
              Titulo
              slug
              DescripcionCorta
              Cuerpo
              createdAt
              ImagenDestacada {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
        podcasts (sort: "createdAt:desc"){
          data {
            attributes {
              Titulo
              slug
              DescripcionCorta
              Link
              Duracion
              createdAt
              ImagenDestacada {
                data {
                  attributes {
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
}
`;



  export { 
    GET_HOME_POSTS, 
    GET_ARTICLE_SLUGS, 
    GET_ARTICLE, 
    GET_PODCASTS_SLUGS,
    GET_PODCAST,
    GET_SECTION_SLUGS,
    GET_SECTION_ARTICLES,
    GET_PROGRAMS_SLUGS,
    GET_PROGRAM_PODCASTS,
    GET_AUTORS,
    GET_TAGS_SLUGS,
    GET_TAG_POSTS
  };