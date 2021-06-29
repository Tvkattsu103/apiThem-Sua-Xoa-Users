const express = require('express');
const url = "mongodb+srv://test:test@newcluster.vqa57.mongodb.net/dbapiThemSuaXoa?retryWrites=true&w=majority"
const useRoutes = require('./routes/useRoutes');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

app.use(useRoutes);
app.listen(3000, () => {console.log("Server is running on port 3000")});