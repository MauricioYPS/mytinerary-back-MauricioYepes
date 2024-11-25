import 'dotenv/config.js'
import '../../config/database.js'
import Countries from "../Country.js"

const countries = [
    { name: "United States" },
    { name: "Canada" },
    { name: "Mexico" },
    { name: "Brazil" },
    { name: "Argentina" },
    { name: "United Kingdom" },
    { name: "Germany" },
    { name: "France" },
    { name: "Italy" },
    { name: "Spain" },
    { name: "India" },
    { name: "China" },
    { name: "Japan" },
    { name: "Australia" },
    { name: "South Africa" }
];

Countries.insertMany(countries)