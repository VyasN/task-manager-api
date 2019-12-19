const mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).catch((err) => {
        return new Error(`Can't able to connect db`)
    })