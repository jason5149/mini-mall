const moment = require('moment');

function generateUserId() {
  const num = ('' + moment().valueOf()).substr(7, 13);

  return 'm' + num;
}

module.exports = {
  generateUserId,
}