module.exports = (sequelize, DataTypes) => {

    return sequelize.define('wishlist', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            opportunitySFID: {
                type: DataTypes.TEXT
                allowNull: false,
                primaryKey: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            deletedAt: {
              type: DataTypes.DATE,
              allowNull: true
            }
    }, {
        freezeTableName: true,
    });

};