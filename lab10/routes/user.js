const express = require('express');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/add-user', (req, res, next) => {
    const html = `
<form action="/user" method="post">
<input type="text" name="title"><br>
<input type="submit" value="Submit">
</form>`;
    res.send(html);
});
router.get('/user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/add-user');
});
module.exports = router;