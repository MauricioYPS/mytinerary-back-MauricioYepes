import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from "../Itinerary.js"

let itineraries = [
    {   photo: "https://images.unsplash.com/photo-1558716945-9c75c24e1114",
        price: 200,
        duration: 6,
        likes: 150,
        hashtags: "#tokyo #anime #technology #shopping",
        comments: "Awesome!"
    },
    {
        photo: "https://images.unsplash.com/photo-1549693578-d683be217e58",
        price: 150,
        duration: 4,
        likes: 120,
        hashtags: "#paris #eiffeltower #romantic #art",
        comments: "great! place to visit"
    },
    {
        photo: "https://images.unsplash.com/photo-1508488499042-c48e3c81c74b",
        price: 180,
        duration: 5,
        likes: 130,
        hashtags: "#london #bigben #historic #shopping",
        comments: "nice place to visit"
    },
    {
        photo: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        price: 170,
        duration: 6,
        likes: 110,
        hashtags: "#sydney #operahouse #beach #harbour",
        comments: "Is so fun!"
    },
    {
        photo: "https://images.unsplash.com/photo-1519735795304-16e3a8d4b6c6",
        price: 160,
        duration: 5,
        likes: 140,
        hashtags: "#rome #colosseum #history #italianfood",
        comments: "I'm in love to this city!"
    },
    {
        photo: "https://images.unsplash.com/photo-1558591719-5a8b42c44d65",
        price: 190,
        duration: 6,
        likes: 125,
        hashtags: "#shanghai #skyscrapers #financialhub #asia",
        comments: "What an amazing city!"
    },
    {
        photo: "https://images.unsplash.com/photo-1576090594553-e306d8e56f74",
        price: 140,
        duration: 3,
        likes: 95,
        hashtags: "#buenosaires #tango #architecture #latinamerica",
        comments: "I love this city!"
        },
    {
        photo: "https://images.unsplash.com/photo-1562067271-8494d00b4cc7",
        price: 160,
        duration: 5,
        likes: 115,
        hashtags: "#capetown #tablemountain #scenicviews #africa",
        comments: "I'm in love with this city!"
    }
];

Itinerary.insertMany(itineraries)