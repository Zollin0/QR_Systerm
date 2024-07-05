const userDao = require('../dao/userDao');

exports.getUserId = async () => {
    const userId = await userDao.getUserId();
    return userId;
};

