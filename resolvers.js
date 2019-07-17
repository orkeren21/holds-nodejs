export default {
    Wishlist: {
        WishlistEntries: (parent, args, context, info) => parent.getWishlistEntries(),
    },
    Query: {
        wishlists: (parent, _ , { db }, info) => db.wishlists.findAll(),
        wishlist: (parent, { id }, { db }, info) => db.wishlists.findByPk(id),
        wishlist_by_opp: (parent, { opportunitySFID }, { db }, info) => db.wishlists.findOne({where: {opportunitySFID: opportunitySFID}}),
        wishlistEntries: (parent, _ , { db }, info) => db.wishlistEntries.findAll(),
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
        }),
        createWishlistEntry: (parent, { wishlistId, reservableUUID, createdBy, opportunitySFID }, { db }, info) => {
            if(wishlistId){
                db.wishlistEntries.create({
                    wishlistId: wishlistId,
                    reservableUUID: reservableUUID,
                    createdBy: createdBy
                })
            }
            else{
                db.wishlists.create({
                    opportunitySFID: opportunitySFID
                }).then((wishlist) => {
                    db.wishlistEntries.create({
                    wishlistId: wishlist.id,
                    reservableUUID: reservableUUID,
                    createdBy: createdBy
                    });
                });
            }
        }
    }
};