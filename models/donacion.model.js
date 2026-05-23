const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Donacion = sequelize.define('Donacion', {
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        // seguidorId: quien dona
        seguidorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // creadorId: quien recibe
        creadorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Donacion;
};
