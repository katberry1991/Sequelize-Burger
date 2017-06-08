// Our Burger controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last week's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var db = require("../models");
// edit burger model to match sequelize

// post route to create burgers
exports.create = function(req, res) {
  // edited burger create to add in a burger_name
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    // pass the result of our call
  .then(function(dbBurger) {
      // log the result to our terminal/bash window
    console.log(dbBurger);
      // redirect
    res.redirect("/");
  });
};

// put route to devour a burger
exports.update = function(req, res) {
  // update one of the burgers
  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });
};
