export default `
  type WishlistEntry {
    id: ID!
    wishlistId: Int!
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
    wishlistEntryByWishlistID(wishlistID: ID!): [WishlistEntry]
  }
  type Mutation {
    createWishlist(opportunitySFID: String!): Wishlist!
    deleteWishlist(id: ID!): Int!
    createWishlistEntry(wishlistId: Int, reservableUUID: String!, createdBy: String!, opportunitySFID: String): WishlistEntryResponse
  }
`;