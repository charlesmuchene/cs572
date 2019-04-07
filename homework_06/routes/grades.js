const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.end("Wea re atldjfoajt")
})

module.exports = router;