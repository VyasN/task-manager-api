const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}`,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).catch((err) => {
        return new Error(`Can't able to connect db`)
    })