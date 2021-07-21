const express = require('express');
const ExpressError = require('./expressError')

const app = express();

app.use(express.json());

app.get('/mean', function mean(req, res, next) {
    const numsString = req.query.nums.split(',');
    let nums = [];
    let value = 0;

    for(let i = 0; i < numsString.length; i++) {
        let value = Number(numsString[i]);
        nums.push(value);
    }

    if(nums.length === 0) {
        value = 0;
    } else {
        for(let x of nums) {
            value += x;
            console.log(value);
        }
    }

    let results = {
        operation: "mean",
        value: value/nums.length
    }

    return res.send(results);
})

app.get('/median', function median(req, res, next) {
    const numsString = req.query.nums.split(',');

    let results = {
        operation: "median",
        value: value
    }

    return res.send(results)
})

app.get('/mode', function mode(req, res, next) {
    const numsString = req.query.nums.split(',');

    let results = {
        operation: "mode",
        value: value
    }

    return res.send(results)
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
  });