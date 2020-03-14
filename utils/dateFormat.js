const moment = require("moment")

const dateFormat = date => {
    return moment(new Date(date), 'MMM D LTS').format()
}

module.exports = dateFormat;