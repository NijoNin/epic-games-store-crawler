enum Query {
  Catalog = `
    query searchStoreQuery(
      $allowCountries: String, $category: String, $count: Int, $country: String!,
      $keywords: String, $locale: String, $namespace: String, $itemNs: String,
      $sortBy: String, $sortDir: String, $start: Int, $tag: String, $releaseDate: String) { 
        Catalog { 
          searchStore (allowCountries: $allowCountries, category: $category, count: $count, country: $country
            keywords: $keywords, locale: $locale, namespace: $namespace, itemNs: $itemNs,
            sortBy: $sortBy, sortDir: $sortDir, start: $start, tag: $tag, releaseDate: $releaseDate) {
              elements {
                title id namespace description
                seller {
                  name
                }
                price (country: $country) {
                  totalPrice {
                    discountPrice originalPrice voucherDiscount discount currencyCode
                    currencyInfo {
                      decimals
                    }
                  }
                }
                promotions {
                  promotionalOffers {
                    promotionalOffers {
                      startDate endDate
                    }
                  }
                }
              }
            }
        } 
    } 
  `,
  CatalogTags = `
    query catalogTags($namespace: String, $locale: String, $start: Int, $count: Int) {
      Catalog {
        tags (namespace: $namespace, locale: $locale, start: $start, count: $count) {
          elements {
            aliases id name referenceCount status
          }
        }
      }
    }
  `,
  FreeCatalog = `
    query searchStoreQuery(
      $allowCountries: String, $count: Int, $country: String!,
      $keywords: String, $locale: String, $namespace: String, $itemNs: String,
      $sortBy: String, $sortDir: String, $start: Int, $tag: String, $releaseDate: String) { 
        Catalog { 
          searchStore (allowCountries: $allowCountries, category: "freegames", count: $count, country: $country
            keywords: $keywords, locale: $locale, namespace: $namespace, itemNs: $itemNs,
            sortBy: $sortBy, sortDir: $sortDir, start: $start, tag: $tag, releaseDate: $releaseDate) {
              elements {
                title id namespace description
                keyImages {
                  type url
                }
                seller {
                  name
                }
                productSlug
                price (country: $country) {
                  totalPrice {
                    discountPrice originalPrice voucherDiscount discount currencyCode
                    currencyInfo {
                      decimals
                    }
                  }
                }
                promotions {
                  promotionalOffers {
                    promotionalOffers {
                      startDate endDate
                    }
                  }
                }
              }
            }
        } 
    }
  `,
}

export default Query;
