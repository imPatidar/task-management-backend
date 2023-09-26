module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tasks', {
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    })
}
