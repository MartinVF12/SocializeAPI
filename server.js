const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('Could not connect to MongoDB', err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
