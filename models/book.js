module.exports = function(sequelize, Sequelize) {
    var BookSchema = sequelize.define('Book', {
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        category: Sequelize.INTEGER
    },{
        timestamps: false
    });
	BookSchema.associate = function (models) {
            BookSchema.belongsTo(models.Category, {
                as: 'categories',
                foreignKey: {
                    name: 'category',
                    allowNull: true
                }
            });
	}
    return BookSchema;
}
