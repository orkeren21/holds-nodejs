import db from "../models";
import { logger } from "../utils/logger";
import { rollbar } from "../utils/rollbar";

export function getAllWishlists() {
  logger.info("Called get All Wishlists Query");
  return db.wishlists.findAll();
}

export function findWishlistById(id) {
  logger.info("Called find Wishlist By Id");
  return db.wishlists.findByPk(id);
}

export function findWishlistByOpportunityId(opportunitySFID) {
  logger.info("Called find Wishlist By Opportunity Id");
  return db.wishlists.findOne({ where: { opportunitySFID: opportunitySFID } });
}

export function createWishlist(opportunitySFID) {
  logger.info("Called Create Wishlist");
  return db.wishlists.create({
    opportunitySFID: opportunitySFID
  });
}

export function deleteWishlistById(id) {
  logger.info("Called delete Wishlist By Id");
  return db.wishlists.destroy({
    where: {
      id: id
    }
  });
}

export function deleteWishlistByOpportunityId(opportunitySFID) {
  logger.info("Called find Wishlist By Opportunity SF ID");
  return db.wishlists.destroy({
    where: {
      opportunitySFID: opportunitySFID
    }
  });
}
