const express = require("express");
const app = express()
require("dotenv").config()
const expressJwt = require("express-jwt")
const morgan = require("morgan")
const path = require("path")
const mongoose = require("mongoose")
const cardRoutes = require('./routes/cardRoutes')
const stackRoutes = require('./routes/stackRoutes')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const reviewRoutes = require('./routes/reviewRoutes')
const PORT = process.env.PORT || 4500
app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/flashCards", 
    { useNewUrlParser: true, useCreateIndex: true }, 
    (err) => {
        if (err) {
            throw err
        }
        console.log("successfully connected to mongodb")
    }
)

app.use("/api", expressJwt({ secret: process.env.SECRET }))

app.use("/auth", authRoutes)
app.use('/api/stacks', stackRoutes)
app.use('/api/cards', cardRoutes)
app.use("/api/profile", profileRoutes)
app.use('/reviews', reviewRoutes)

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`we are now listening to port ${ PORT }`)
})