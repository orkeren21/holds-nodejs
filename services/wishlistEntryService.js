import db from "../models";
import * as RabbitMQ from "./rabbitmqService"

export function getAllWishlistEntries() {
  return db.wishlistEntries.findAll();
}

export function findWishlistEntryById(id) {
  return db.wishlistEntries.findByPk(id);
}

export function findEntriesByWishlistId(wishlistID){
  return db.wishlistEntries.findAll({ where: {wishlistId: wishlistID}});
}

export async function createWishlistEntry(
  wishlistId,
  reservableUUID,
  createdBy,
  opportunitySFID
) {
  if (wishlistId) {
    return await db.wishlistEntries.create({
      wishlistId: wishlistId,
      reservableUUID: reservableUUID,
      createdBy: createdBy
    });
  } else {
    let wishlist = await db.wishlists.create({
      opportunitySFID: opportunitySFID
    });

    let wishlistEntry = await db.wishlistEntries.create({
      wishlistId: wishlist.id,
      reservableUUID: reservableUUID,
      createdBy: createdBy
    });

    //! Removed the line below since we don't have rabbitmq no more
    //RabbitMQ.publishEntity(wishlistEntry); 

    return wishlistEntry;
  }
}

export function deleteWishlistEntryById(id) {
  return db.wishlistEntries.destroy({
    where: {
      id: id
    }
  });
}
