const express = require('express');
const path = require('path');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'viewes', 'product.html'));
    });

router.get('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/add-product');
});
module.exports = router;