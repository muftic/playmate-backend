module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("pets", "ownerId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("pets", "ownerId");
  },
};
