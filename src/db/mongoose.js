const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}`,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })