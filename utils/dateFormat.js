const moment = require("moment")

export default function dateFormat(date) {
    return moment(new Date(date), 'MMM D LTS').format()
}