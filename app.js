import express from 'express'
import cors from 'cors'
const app = express()

import dotenv from 'dotenv'
import mongoose from 'mongoose'

import RentalListing from './models/RentalListing.js'
import UserInfo from './models/UserInfo.js'

import { calculateStayDuration } from './util.js';


app.use(cors())
dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true}))

const uri = process.env.DB_CONNECT;

// online
// mongoose.connect('mongodb+srv://alphastar1:FGpKmV3QhibXWp0d@learningtodoapp.5yrlobc.mongodb.net/?retryWrites=true&w=majority&appName=learningtodoapp')
//                 .then(() =>{
//                     console.log("Connection succefully")
//                 })
//                 .catch((err) => {
//                     console.error(`No connection ${err}`)
//                 })

// online
mongoose.connect(uri)
                .then(() =>{
                    console.log("Connected successfully to DB")
                })
                .catch((err) => {
                    console.error(`No connection ${err}`)
                })

// offline
// mongoose.connect('mongodb+srv://alphastar1:FGpKmV3QhibXWp0d@learningtodoapp.5yrlobc.mongodb.net/?retryWrites=true&w=majority&appName=learningtodoapp')
//                 .then(() =>{
//                     console.log("Connection succefully")
//                 })
//                 .catch((err) => {
//                     console.error(`No connection ${err}`)
//                 })

//add new rental
app.post("/addNewRental",async (req, res) => {
    
    
    const RentalListingData1 = new RentalListing({
        location:"Toronto,Canada",
        image:"https://jayeshmax.github.io/airbnb1.jpg",
        price:10000,
        description:"Cozy retreat with modern amenities, nestled in serene surroundings, and conveniently located for easy access to transportation and essentials",
        


    });

    const RentalListingData2 = new RentalListing({
        location:"Ontario,Canada",
        image:"https://jayeshmax.github.io/airbnb2.jpg",
        price:15000,
        description:"Spacious luxury with stunning views, vibrant neighborhood with cultural attractions, and close proximity to restaurants and public transit.",
        


    });

    const RentalListingData3 = new RentalListing({
        location:"Alberta,Canada",
        image:"https://jayeshmax.github.io/airbnb3.jpg",
        price:11000,
        description:"Charming abode amidst picturesque scenery, ideal for nature enthusiasts, and conveniently located near local shops and cafes.",
        


    });

    const RentalListingData4 = new RentalListing({
        location:"Vienna,Austria",
        image:"https://jayeshmax.github.io/airbnb4.jpg",
        price:16000,
        description:"Contemporary comfort in a stylish retreat, amidst the buzz of the city, with easy access to landmarks and services.",
        


    });

    const RentalListingData5 = new RentalListing({
        location:"Berlin,Germany",
        image:"https://jayeshmax.github.io/airbnb5.jpg",
        price:7000,
        description:"Elegance and sophistication in a prime urban dwelling, offering tranquility amidst bustling surroundings, and seamless connectivity to attractions and business districts.",
        


    });

    const RentalListingData6 = new RentalListing({
        location:"Warsaw,Poland",
        image:"https://jayeshmax.github.io/airbnb6.jpg",
        price:17000,
        description:"Chic urban living in a trendy apartment, located in a dynamic neighborhood, with nearby metro stations and convenience stores.",
        


    });

    const RentalListingData7 = new RentalListing({
        location:"Bucharest,Romania",
        image:"https://jayeshmax.github.io/airbnb7.jpg",
        price:18000,
        description:"Quaint cottage nestled in nature's embrace, offering a retreat from city life, with easy access to local markets and public transport.",
        


    });

    const RentalListingData8 = new RentalListing({
        location:"Birmingham,United Kingdom",
        image:"https://jayeshmax.github.io/airbnb8.jpg",
        price:8000,
        description:"Luxurious penthouse boasting breathtaking views, situated in a sophisticated locale with upscale dining and entertainment options within walking distance.",
        


    });

    const RentalListingData9 = new RentalListing({
        location:"Dallas,USA",
        image:"https://jayeshmax.github.io/airbnb9.jpg",
        price:14000,
        description:"Modern loft in a trendy district, perfect for inspiration, with proximity to subway stations and trendy cafes.",
        


    });

    const RentalListingData10 = new RentalListing({
        location:"Austin,USA",
        image:"https://jayeshmax.github.io/airbnb10.jpg",
        price:20000,
        description:"Secluded hideaway offering tranquility amidst natural beauty, with essential services and local gems nearby.",
        


    });
    try {
        let result = await RentalListingData1.save();
        let result1 = await RentalListingData2.save();
        let result2 = await RentalListingData3.save();
        let result3 = await RentalListingData4.save();
        let result4 = await RentalListingData5.save();
        let result5 = await RentalListingData6.save();
        let result6 = await RentalListingData7.save();
        let result7 = await RentalListingData8.save();
        let result8 = await RentalListingData9.save();
        let result9 = await RentalListingData10.save();
        // let result = await TodoTask.deleteMany({content : "heloo: test"})
        // let result = await TodoTask.find({"content":"heloo: test"})
        res.send({"done:":result})
    } catch (err) {
        res.send({"error":err})
    }

    // const UserInfoData = new UserInfo({ 
    //     userName:"user1",
    //     password:"pass1",
    //     favorite:["6601326b22b66fedbe7d48f8"]
    // });
    // try {
    //     let result = await UserInfoData.save();
    //     // let result = await TodoTask.deleteMany({content : "heloo: test"})
    //     // let result = await UserInfo.find({"_id":"6601325d1cde644d845a2cd3"})
    //     console.log(result)
    //     res.send({"done:":result.userName})
    // } catch (err) {
    //     res.send({"error":err})
    // }


});


//sign up user
app.post("/signup1", async (req,res) =>{
    try {
        let result = await UserInfo.find({"userName":req.body.userName})
        
        
        if(result.length === 0){
            res.send({
                "id":"user id not found",
                "isLogin":false
            })
            res.end()
            return ;
        }

        if(result[0].userName == req.body.userName && result[0].password == req.body.password){
            res.send({
                "id":result[0]._id,
                "isLogin":true
            })
            res.end()
            return ;
        }else{
            res.send({
                "id":null,
                "isLogin":false
            })
            res.end()
            return;
        }

    } catch (err) {
        res.send(`${err}`)
    }
})

//login user
app.post("/login", async (req, res) => {
    
    try {
        let result = await UserInfo.find({"userName":req.body.userName})
        
        
        if(result.length === 0){
            res.send({
                "id":"user id not found",
                "isLogin":false
            })
            res.end()
            return ;
        }

        if(result[0].userName == req.body.userName && result[0].password == req.body.password){
            res.send({
                "id":result[0]._id,
                "isLogin":true
            })
            res.end()
            return ;
        }else{
            res.send({
                "id":null,
                "isLogin":false
            })
            res.end()
            return;
        }

    } catch (err) {
        res.send(`${err}`)
    }
});


//show all the listing
app.post("/showAllListing", async (req, res) => {
    try{
        let result = await RentalListing.find()
        console.log(result)
        res.json(result)
        res.end()
    }catch(err){
        console.log(error)
        res.end()
        
    }
})

//get info about listing
app.post("/infoAboutListing", async (req, res) => {
    try {
        let result = await RentalListing.findOne({"_id": req.body._id})
        res.json(result)
        console.log(result + "================")
        res.end()
    } catch (err) {
        res.json(err)
        res.end()
    }
})

//book the listing
app.post("/bookListing", async (req,res) => {
    try {
        let booking = {
            "fromDay": req.body.fromDate,
            "fromMonth": req.body.fromMonth,
            "fromYear": req.body.fromYear,
            "toDay": req.body.toDate,
            "toMonth": req.body.toMonth,
            "toYear": req.body.toYear
        };

        let stayDuration = calculateStayDuration(booking);



        const filter = { _id: req.body.rentalListing };
        const update = { 
            is_rented_by: req.body.userId,
            from_date: req.body.fromDate,
            from_month: req.body.fromMonth,
            from_year: req.body.fromYear,
            to_date: req.body.toDate,
            to_month: req.body.toMonth,
            to_year: req.body.toYear,
            day_difference: stayDuration,
        };

        let result = await RentalListing.findOneAndUpdate(filter,update)
        res.json(result)
        res.end()
    } catch (err) {
        res.json(error)
        res.end()
    }
})

//list my booking's
app.post("/myBooking",async (req,res) =>{
    try {
        let result = await RentalListing.find({"is_rented_by":req.body._id})
        res.json(result)
        res.end()
        
    } catch (err) {
        res.json(err)
        res.end()
    }
})

app.post("/signUp",async (req,res) =>{
    try {
        let UserInfo1 = new UserInfo({
            userName: req.body.userName,
            password:req.body.password
        });

        let result = await UserInfo1.save();
        
        res.json(result)
        res.end()
        
    } catch (err) {
        res.json(err)
        res.end()
    }
})

// app.post("/addFavorite", async(req,res)=>{
//     try {

//         const filter = { _id: req.body._id };
//         const update = { 
//         let result = await RentalListing.find({"is_rented_by":req.body._id})
            
//         };

//         let result = await RentalListing.findOneAndUpdate(filter,update)
//         res.json(result)
//         res.end()
//     } catch (err) {
//         res.json(error)
//         res.end()
//     }
// })

app.listen(3000, () =>{
    console.log("Server running at 3000")
})