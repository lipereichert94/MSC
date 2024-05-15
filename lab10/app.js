const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'css')));

app.use(productRouter);
app.use(userRouter);

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
});
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'viewes', '404.html'));
});
app.listen(8080, () => console.log('listening on 8080...'));