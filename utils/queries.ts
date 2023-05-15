export const mainPage:string = `query Page {
  page(id: 1) {
    data {
      id
      attributes {
        Title
        Section {
          id
          Title
          Uptitle
          Type
          Card {
            id
            Title
            Uptitle
            Description
            Image {
              data {
                id
                attributes {
                  alternativeText
                  url
                  width
                  height
                }
              }
            }
          }
          Description
        }
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