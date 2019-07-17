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
  type Query {
    wishlists: [Wishlist!]!
    wishlist(id: ID!): Wishlist!
    wishlist_by_opp(opportunitySFID: String!): Wishlist!
    wishlistEntries: [WishlistEntry!]!
  }
  type Mutation {
    createWishlist(opportunitySFID: String!): Wishlist!
    deleteWishlist(id: ID!): Int!
    createWishlistEntry(wishlistId: Int, reservableUUID: String!, createdBy: String!, opportunitySFID: String): WishlistEntry
  }
`;