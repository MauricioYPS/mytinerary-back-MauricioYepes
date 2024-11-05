import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from "../Itinerary.js"

let itineraries = [
    {   
        namePerson: "Natanael Cano",
        photoPerson: "https://example.com/photo-natanael.jpg",
        nameActivity: "Exploring Tokyo's Anime District",
        photoActivity: "https://images.unsplash.com/photo-1558716945-9c75c24e1114",
        price: 5,
        duration: 6,
        likes: 150,
        hashtags: ["#tokyo", "#anime", "#technology", "#shopping"],
        comments: "Awesome!"
    },
    {
        namePerson: "Junior H",
        photoPerson: "https://example.com/photo-juniorh.jpg",
        nameActivity: "Romantic Night at Eiffel Tower",
        photoActivity: "https://images.unsplash.com/photo-1549693578-d683be217e58",
        price: 3,
        duration: 4,
        likes: 120,
        hashtags: ["#paris", "#eiffeltower", "#romantic", "#art"],
        comments: "Great place to visit!"
    },
    {
        namePerson: "Peso Pluma",
        photoPerson: "https://example.com/photo-pesopluma.jpg",
        nameActivity: "Historic London Tour",
        photoActivity: "https://images.unsplash.com/photo-1508488499042-c48e3c81c74b",
        price: 4,
        duration: 5,
        likes: 130,
        hashtags: ["#london", "#bigben", "#historic", "#shopping"],
        comments: "Nice place to visit."
    },
    {
        namePerson: "JOP Fuerza Regida",
        photoPerson: "https://example.com/photo-fuerzaregida.jpg",
        nameActivity: "Sydney Opera House Experience",
        photoActivity: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        price: 2,
        duration: 6,
        likes: 110,
        hashtags: ["#sydney", "#operahouse", "#beach", "#harbour"],
        comments: "So much fun!"
    },
    {
        namePerson: "Vicente Fernandez",
        photoPerson: "https://example.com/photo-losdoscarnales.jpg",
        nameActivity: "Rome Colosseum and Italian Food",
        photoActivity: "https://images.unsplash.com/photo-1519735795304-16e3a8d4b6c6",
        price: 5,
        duration: 5,
        likes: 140,
        hashtags: ["#rome", "#colosseum", "#history", "#italianfood"],
        comments: "I'm in love with this city!"
    },
    {
        namePerson: "Yeison Jimenez",
        photoPerson: "https://example.com/photo-grupofrontera.jpg",
        nameActivity: "Shanghai Skyscraper Tour",
        photoActivity: "https://images.unsplash.com/photo-1558591719-5a8b42c44d65",
        price: 3,
        duration: 6,
        likes: 125,
        hashtags: ["#shanghai", "#skyscrapers", "#asia"],
        comments: "What an amazing city!"
    },
    {
        namePerson: "Tito doblePP",
        photoPerson: "https://example.com/photo-eslabonarmado.jpg",
        nameActivity: "Buenos Aires Tango and Architecture",
        photoActivity: "https://images.unsplash.com/photo-1576090594553-e306d8e56f74",
        price: 1,
        duration: 3,
        likes: 95,
        hashtags: ["#buenosaires", "#tango", "#architecture", "#latinamerica"],
        comments: "I love this city!"
    },
    {
        namePerson: "Ariel Camacho",
        photoPerson: "https://example.com/photo-arielcamacho.jpg",
        nameActivity: "Cape Town Scenic Views",
        photoActivity: "https://images.unsplash.com/photo-1562067271-8494d00b4cc7",
        price: 4,
        duration: 5,
        likes: 115,
        hashtags: ["#capetown", "#tablemountain", "#scenicviews", "#africa"],
        comments: "I'm in love with this city!"
    }
];



Itinerary.insertMany(itineraries)