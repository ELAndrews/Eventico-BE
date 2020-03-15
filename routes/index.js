const { Router } = require('express');
const userRoutes = require("./users")
const eventRoutes = require("./events")
const participantRoutes = require("./participants")

const router = Router();

router.use('/api/users', userRoutes)
// router.use('/api/events', eventRoutes)
// router.use('/api/participants', participantRoutes)

module.exports = router