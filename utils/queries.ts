export const mainPage:string = `query Page {
  page(id: 1) {
    data {
      id
      attributes {
        Title
      
        sections {
          data {
            id
            attributes {
              Title
              Uptitle
              Description
              Items {
                ... on ComponentCardsCardDefault {
                  id
                  Description
                  Title
                  Uptitle
                }
                ... on ComponentLayoutListItem {
                  id
                  Title
                }
                ... on ComponentLayoutMedia {
                  id
                  alt
                  img: Image {
                    data {
                      id
                      attributes {
                        width
                        url
                        height
                        alternativeText
                      }
                    }
                  }
                }
                ... on ComponentCardsCard {
                  id
                  Description
                  Title
                  List_item {
                    Title
                    id
                  }
                  Link {
                    url
                    id
                    Text
                  }
                  Image {
                    data {
                      id
                      attributes {
                        alternativeText
                        height
                        url
                        width
                      }
                    }
                  }
                }
              }
              Link {
                Text
                id
                url
              }
              Type
              createdAt
              updatedAt
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  }
}
`
export const aboutPage:string = `query Page {
  page(id: 2) {
    data {
      id
      attributes {
        Title
      
        sections {
          data {
            id
            attributes {
              Title
              Uptitle
              Description
              Items {
                ... on ComponentCardsCardDefault {
                  id
                  Description
                  Title
                  Uptitle
                }
                 ... on ComponentCardsCardTeam {
                  id
                  FullName
                  Position
                  
                }
                ... on ComponentLayoutListItem {
                  id
                  Title
                }
                ... on ComponentLayoutMedia {
                  id
                  alt
                  img: Image {
                    data {
                      id
                      attributes {
                        width
                        url
                        height
                        alternativeText
                      }
                    }
                  }
                }
                ... on ComponentCardsCard {
                  id
                  Description
                  Title
                  List_item {
                    Title
                    id
                  }
                  Link {
                    url
                    id
                    Text
                  }
                  Image {
                    data {
                      id
                      attributes {
                        alternativeText
                        height
                        url
                        width
                      }
                    }
                  }
                }
              }
              Link {
                Text
                id
                url
              }
              Type
              createdAt
              updatedAt
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  }
}
`
export const solutionPage:string = `query Page($id: ID) {
  page(id: $id) {
    data {
      id
      attributes {
        Title
      
        sections {
          data {
            id
            attributes {
              Title
              Uptitle
              Description
			  price
              price_period
              Items {
                ... on ComponentCardsCardDefault {
                  id
                  Description
                  Title
                  Uptitle
                }
                ... on ComponentLayoutListItem {
                  id
                  Title
                }
                ... on ComponentLayoutMedia {
                  id
                  alt
                  img: Image {
                    data {
                      id
                      attributes {
                        width
                        url
                        height
                        alternativeText
                      }
                    }
                  }
                }
                ... on ComponentCardsCard {
                  id
                  Description
                  Title
                  List_item {
                    Title
                    id
                  }
                  Link {
                    url
                    id
                    Text
                  }
                  Image {
                    data {
                      id
                      attributes {
                        alternativeText
                        height
                        url
                        width
                      }
                    }
                  }
                }
              }
              Link {
                Text
                id
                url
              }
              Type
              createdAt
              updatedAt
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  }
}
`
