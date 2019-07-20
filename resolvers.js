import { logger } from "./utils/logger";
import { rollbar } from "./utils/rollbar";

export default {
    Wishlist: {
        WishlistEntries: (parent, args, context, info) => parent.getWishlistEntries(),
    },
    Query: {
        wishlists: (parent, _ , { db }, info) => { 
            logger.info("Called get All Wishlists Query");
            rollbar.log("hello world");
            return db.wishlists.findAll(); 
            },
        wishlist: (parent, { id }, { db }, info) => db.wishlists.findByPk(id),
        wishlistByOpp: (parent, { opportunitySFID }, { db }, info) => db.wishlists.findOne({where: {opportunitySFID: opportunitySFID}}),
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
        createWishlistEntry: async (parent, { wishlistId, reservableUUID, createdBy, opportunitySFID }, { db }, info) => {
            logger.info("createWishlistEntry called");
            if(wishlistId){
                return db.wishlistEntries.create({
                    wishlistId: wishlistId,
                    reservableUUID: reservableUUID,
                    createdBy: createdBy
                })
            }
            else{
                let wishlist = await db.wishlists.create({
                    opportunitySFID: opportunitySFID
                });
                return db.wishlistEntries.create({
                    wishlistId: wishlist.id,
                    reservableUUID: reservableUUID,
                    createdBy: createdBy
                    });
            }
        }
    }
};