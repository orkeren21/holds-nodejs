import db from "../models";

export function getAllWishlistEntries() {
  return db.wishlistEntries.findAll();
}

export function findWishlistEntryById(id) {
  return db.wishlistEntries.findByPk(id);
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

    return await db.wishlistEntries.create({
      wishlistId: wishlist.id,
      reservableUUID: reservableUUID,
      createdBy: createdBy
    });
  }
}

export function deleteWishlistEntryById(id) {
  return db.wishlistEntries.destroy({
    where: {
      id: id
    }
  });
}
