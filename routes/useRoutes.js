const express = require('express');
const userModel = require('../models/user');
const app = express();

//add data
app.post('/user', async(req, res) => {
    const u = new userModel(req.body);
    try {
        await u.save();
        res.send(u);
    } catch (error) {
        res.status(500).send(error); 
    }
});
//getAll
app.get('/list', async(req, res) => {
    const u = await userModel.find({});
    try {
        res.send(u);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;

