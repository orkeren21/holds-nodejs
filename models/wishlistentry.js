import { logger } from "../utils/logger";

'use strict';
module.exports = (sequelize, DataTypes) => {
  const WishlistEntry = sequelize.define('wishlistEntries', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,     
    },
    reservableUUID: {
      type: DataTypes.UUID,
      allowNull: false,      
    },
    createdBy: {
      type: DataTypes.STRING,
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
  },
  {
    freezeTableName: true,
  });

  return WishlistEntry;
};