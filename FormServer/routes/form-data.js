var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var http = require('http');

const formStorage = path.join(__dirname, '../public/form-storage/')

router.post('/', function (req, res, next) {
    const formJson = JSON.stringify(req.body, null, 2);
    const fileName = path.join(formStorage, 'form1Data.json');
    fs.writeFile(fileName, formJson, e => { console.error(e); });

    try {
        console.log(`Flow for Form ${req.body.formId}`);
        const postOps = {
            host: 'localhost',
            port: 8000,
            path: `/${req.body.formId}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formJson
        };
        console.log(`Post Options`, postOps);
        http.request(postOps);
    } catch(e) {
        console.error(e);
    }

    res.send({ success: true });

});

module.exports = router;
