export default `
"An Entry for a Wishlist, relates to a reservable"
  type WishlistEntry {
    id: ID!
    wishlistId: Int!
    """
    A [UUID 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) of a Spaceman Reservable
    """
    reservableUUID: String!
    createdBy: String!
    createdAt: String! 
    updatedAt: String
  }
  type Wishlist {
    id: ID!
    opportunitySFID: String!
    createdAt: String! 
    updatedAt: String!
    deletedAt: String
    WishlistEntries: [WishlistEntry]!
  }

  type WishlistEntryResponse {
    success: Boolean!
    message: String
    wishlistEntry: WishlistEntry
  }


  type Query {
    wishlists: [Wishlist!]!
    wishlist(id: ID!): Wishlist!
    wishlistByOpp(opportunitySFID: String!): Wishlist!
    wishlistEntries: [WishlistEntry!]!
  }
  type Mutation {
    createWishlist(opportunitySFID: String!): Wishlist!
    deleteWishlist(id: ID!): Int!
    createWishlistEntry(wishlistId: Int, reservableUUID: String!, createdBy: String!, opportunitySFID: String): WishlistEntryResponse
  }
`;