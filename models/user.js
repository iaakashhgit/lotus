const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: true,
            unique: "email_UNIQUE"
        },
        fullName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        mobile: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        ModifiedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    }, {
        sequelize,
        tableName: 'user',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "email_UNIQUE",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "email" },
                ]
            }
        ]
    });
};
