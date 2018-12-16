var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

const formStorage = path.join(__dirname, '../public/form-storage/')

/* GET users listing. */
router.get('/', function (req, res, next) {
    const fileName = path.join(formStorage, 'form1.json');
    const buffer = fs.readFileSync(fileName, e => { console.error(e); });

    res.contentType('json');
    res.send(buffer);
});

router.post('/', function (req, res, next) {
    const formJson = JSON.stringify(req.body, null, 2);
    const fileName = path.join(formStorage, 'form1.json');
    console.log('Write File', fileName);
    fs.writeFile(fileName, formJson, e => { console.error(e); });
    res.send({ success: true });
});

module.exports = router;
