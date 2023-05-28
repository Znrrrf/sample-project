const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

// app.get('/user/coba', (req, res) => {

//     try {
        
//         const {coba} = req.body;

//         res.status(200).send({
//             coba
//         })

//     } catch (error) {
//         res.status(400).send(error)
//     }

// })


const {userRouter, productRouter, authRouter } = require('./routers')

app.use('/user', userRouter);
app.use('/product', productRouter)
app.use('/auth', authRouter)


app.listen(process.env.PORT, () => {
    // db.sequelize.sync({alter : true})
    console.log(`server run on port: 5000...`);
})