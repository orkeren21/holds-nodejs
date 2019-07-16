export default `
  type Wishlist {
    id: ID!
    opportunitySFID: String!
    createdAt: String! 
    updatedAt: String!
    deletedAt: String
  }
  type Query {
    wishlists: [Wishlist!]!
    wishlist(id: ID!): Wishlist!
    wishlist_by_opp(opportunitySFID: String!): Wishlist!
  }
  type Mutation {
    createWishlist(opportunitySFID: String): Wishlist!
    deleteWishlist(id: ID!): Int!
  }
`;