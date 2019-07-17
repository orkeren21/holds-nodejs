export default {
    Wishlist: {
        WishlistEntries: (parent, args, context, info) => parent.getWishlistEntries(),
    },
    Query: {
        wishlists: (parent, _ , { db }, info) => db.wishlists.findAll(),
        wishlist: (parent, { id }, { db }, info) => db.wishlists.findByPk(id),
        wishlist_by_opp: (parent, { opportunitySFID }, { db }, info) => db.wishlists.findOne({where: {opportunitySFID: opportunitySFID}}),
    },
    Mutation: {
        createWishlist: (parent, { opportunitySFID }, { db }, info) =>
        db.wishlists.create({
            opportunitySFID: opportunitySFID
        }),
        deleteWishlist: (parent, {id}, { db }, info) =>
        db.wishlists.destroy({
            where: {
            id: id
            }
        })
    }
};