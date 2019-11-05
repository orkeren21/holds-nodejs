import { logger } from "../utils/logger";

module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('wishlists', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            opportunitySFID: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
                onUpdate : DataTypes.NOW,
            },
            deletedAt: {
              type: DataTypes.DATE,
              allowNull: true,
            }
    }, 
    {
        freezeTableName: true,
    });

    Wishlist.associate = (models) => {
        Wishlist.hasMany(models.wishlistEntries);
    }

    return Wishlist;
};