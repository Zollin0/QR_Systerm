const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

router.post('/getUserId', async (req, res, next) => {
    const result = await userService.getUserId();
    res.ResultVO(0, '成功', result);
});

