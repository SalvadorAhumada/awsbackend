'use strict';
const TABLE_NAME = 'executives';
const COLUMNS = 'id,firstname,lastname,email,type,miscData,updatedAt,createdAt';

// ------------------------------------------------------------//

const COLUMNS_MAP = (data) => COLUMNS.split(',').reduce((acc, col, index) => {
  if(col === 'updatedAt' || col === 'createdAt') {
    if(data[index] === 'null') {
       acc[col] = new Date();
    }
  } else {
    acc[col] = data[index] != 'null' ? data[index] : null; 
  }
  return acc;
}, {});

const fs = require('fs');
const csv = require('fast-csv');
const csvFilePath = __dirname + `/csv/${TABLE_NAME}.csv`;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, _Sequelize) => {
/*     const bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10); */
    var x = new Promise(async (resolve, _reject) => {
      var seed = [];
      fs.createReadStream(csvFilePath).pipe(csv.parse()).on('data', function (data) {
        seed.push(COLUMNS_MAP(data))
      }).on('end', function (data) {
        resolve(seed);
      })
    }).then(seed => {
      return queryInterface.bulkInsert(TABLE_NAME, seed, {});
    });
    return x;
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  }
};