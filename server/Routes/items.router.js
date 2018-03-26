let express = require('express');
let router = express.Router();
let passport = require('passport');
let path = require('path');

let mondayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://i.imgur.com/A52xZqK.jpg",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered" : true
    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://i.imgur.com/i8IUlYH.png",
        "cutoff": "9:00:00",
        "dropoff": "11:00:00",
        "soldOut": true,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": false

    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://i.imgur.com/lYOxRr5.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false,
                "canBeOrdered": true

    },
]

let tuesdayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://i.imgur.com/i8IUlYH.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": true,
        "canBeOrdered": false

    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Green Mill",
        "logoUrl": "https://i.imgur.com/A52xZqK.jpg",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": true

    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://i.imgur.com/lYOxRr5.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": true,
        "isOrderPlaced": false,
                "canBeOrdered": false

    },
]

let wednesdayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://i.imgur.com/lYOxRr5.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": true

    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Green Mill",
        "logoUrl": "https://i.imgur.com/A52xZqK.jpg",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": true,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": false

    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://i.imgur.com/i8IUlYH.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false,
                "canBeOrdered": true

    }
]
let thursdayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://i.imgur.com/A52xZqK.jpg",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": true,
        "canBeOrdered": false

    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://i.imgur.com/lYOxRr5.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": true,
        "isOrderPlaced": false,
        "canBeOrdered": false

    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://i.imgur.com/i8IUlYH.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": true

    },
]
let fridayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://i.imgur.com/A52xZqK.jpg",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": true

    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://i.imgur.com/i8IUlYH.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": true,
        "canBeOrdered": false

    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://i.imgur.com/lYOxRr5.png",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false,
        "canBeOrdered": true,

    },
]

router.get('/monday', function (req, res) {
    console.log('getting monday items', mondayItems);
        res.send(mondayItems);
});

router.get('/tuesday', function (req, res) {
    console.log('getting tuesday items', tuesdayItems);
    res.send(tuesdayItems);
});

router.get('/wednesday', function (req, res) {
    console.log('getting wednesday items', wednesdayItems);
    res.send(wednesdayItems);
});

router.get('/thursday', function (req, res) {
    console.log('getting thursday items', thursdayItems);
    res.send(thursdayItems);
});

router.get('/friday', function (req, res) {
    console.log('getting friday items', fridayItems);
    res.send(fridayItems);
});

module.exports = router;