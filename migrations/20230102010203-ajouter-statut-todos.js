"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("todos", "statut", {
      type: Sequelize.STRING,
      defaultValue: "EN_COURS",
      allowNull: false
    })
    // Il manque quelque chose ici...  A vous de l'ajouter !
    // Indice : vous aurez besoin de await queryInterface.sequelize.query(...)
    await queryInterface.Sequelize.query(
      `UPDATE todos SET status = 'EN RETARD' WHERE id = ?` ,
      {
        replacements: [job.data.idTodo]
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("todos", "statut")
  }
}
