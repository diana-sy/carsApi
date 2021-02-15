const db = require('../database');

const car = {
  getAllCars: function(callback) {
    return db.query('select * from car order by idcar desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?'+id, callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (brand,model,yearmodel) values(?,?,?)',
      [car.brand, car.model, car.yearmodel],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where id_car=?', [id], callback);
  },
  update: function(id, car, callback) {
    return db.query(
      'update car set brand=?,model=?, yearmodel=? where id_car=?',
      [car.brand, car.model, car.yearmodel, id],
      callback
    );
  }
};
module.exports = car;