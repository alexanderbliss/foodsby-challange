let express = require('express');
let router = express.Router();
let passport = require('passport');
let path = require('path');

let mondayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://goo.gl/images/zx4Zjs",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://goo.gl/images/4FubwC",
        "cutoff": "9:00:00",
        "dropoff": "11:00:00",
        "soldOut": true,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://goo.gl/images/JbmpiK",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
]

let tuesdayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://goo.gl/images/zx4Zjs",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://goo.gl/images/4FubwC",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": true,
        "isOrderPlaced": true
    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://goo.gl/images/JbmpiK",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": true
    },
]

let wednesdayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://goo.gl/images/zx4Zjs",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": true,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://goo.gl/images/4FubwC",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://goo.gl/images/JbmpiK",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
]
let thursdayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://goo.gl/images/zx4Zjs",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": true
    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://goo.gl/images/4FubwC",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://goo.gl/images/JbmpiK",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": true,
        "isOrderPlaced": false
    },
]
let fridayItems = [
    {
        "deliveryId": 1,
        "storeId": 1,
        "restaurantName": "Green Mill",
        "logoUrl": "https://goo.gl/images/zx4Zjs",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false
    },
    {
        "deliveryId": 2,
        "storeId": 2,
        "restaurantName": "Chipoltle",
        "logoUrl": "https://goo.gl/images/4FubwC",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": false,
        "isPastCutoff": false,
        "isOrderPlaced": true
    },
    {
        "deliveryId": 3,
        "storeId": 3,
        "restaurantName": "Mcdonalds",
        "logoUrl": "https://goo.gl/images/JbmpiK",
        "cutoff": "10:00:00",
        "dropoff": "11:30:00",
        "soldOut": false,
        "sellingOut": true,
        "isPastCutoff": false,
        "isOrderPlaced": false
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