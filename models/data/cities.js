import "dotenv/config.js"
import '../../config/database.js'
import Cities from "../City.js"

let cities = [
    {
      name: "Tokyo",
      photo: "https://images8.alphacoders.com/501/501447.jpg",
      country: "Japan",
      continent: "Asia",
      description: "Tokyo is Japans bustling capital, known for its skyscrapers, shopping, and vibrant culture.",
      badge: "Metropolis"
    },
    {
      name: "New York",
      photo: "https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428.jpg?w=2880&h=1920",
      country: "United States",
      continent: "North America",
      description: "New York City is a global hub for finance, culture, and entertainment, often called 'The Big Apple'.",
      badge: "Global City"
    },
    {
      name: "Paris",
      photo: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
      country: "France",
      continent: "Europe",
      description: "Paris, the capital of France, is famed for its fashion, art, and the iconic Eiffel Tower.",
      badge: "Romantic City"
    },
    {
      name: "London",
      photo: "https://www.universitymagazine.ca/wp-content/uploads/2018/06/London.jpg",
      country: "United Kingdom",
      continent: "Europe",
      description: "London is a historic and diverse city, known for its iconic landmarks like Big Ben and Buckingham Palace.",
      badge: "Cultural Hub"
    },
    {
      name: "Sydney",
      photo: "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg",
      country: "Australia",
      continent: "Australia",
      description: "Sydney is Australia's largest city, famous for its Opera House and stunning harbour.",
      badge: "Coastal Beauty"
    },
    {
      name: "Dubai",
      photo: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/11/04/16360277117015.jpg",
      country: "United Arab Emirates",
      continent: "Asia",
      description: "Dubai is a city known for its luxury shopping, ultramodern architecture, and vibrant nightlife.",
      badge: "Luxury Destination"
    },
    {
      name: "Rome",
      photo: "https://lp-cms-production.imgix.net/2024-07/AdobeStock40207802.jpeg?w=1440&h=810&fit=crop&auto=format&q=75",
      country: "Italy",
      continent: "Europe",
      description: "Rome is the capital of Italy, known for its nearly 3,000 years of globally influential art, architecture, and culture.",
      badge: "Historic City"
    },
    {
      name: "Shanghai",
      photo: "https://images.squarespace-cdn.com/content/v1/63f8b23b0626755198127ae3/1677503985851-ZZIR59T4GDLQU7KI7HJJ/shanghai-0-thebund-01.jpg",
      country: "China",
      continent: "Asia",
      description: "Shanghai is China's largest city, a global financial hub with modern skyscrapers and colonial architecture.",
      badge: "Financial Hub"
    },
    {
      name: "Berlin",
      photo: "https://i.natgeofe.com/n/b234ec7d-a988-4b75-9e65-749ddcbea7a0/citylife_berlin_2B4H3T1_web.jpg",
      country: "Germany",
      continent: "Europe",
      description: "Berlin, Germanys capital, is rich with history, from the Berlin Wall to its vibrant art scene.",
      badge: "Historic City"
    },
    {
      name: "Buenos Aires",
      photo: "https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg",
      country: "Argentina",
      continent: "South America",
      description: "Buenos Aires is the capital of Argentina, known for its European-style architecture and tango dance.",
      badge: "Cultural Capital"
    },
    {
      name: "Cape Town",
      photo: "https://www.andbeyond.com/wp-content/uploads/sites/5/cape-town-aerial-view-greenpoint-stadium.jpg",
      country: "South Africa",
      continent: "Africa",
      description: "Cape Town is a port city on South Africas southwest coast, beneath the iconic Table Mountain.",
      badge: "Scenic Beauty"
    },
    {
      name: "Moscow",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_square_Moscow_cityscape_%288309148721%29.jpg/1200px-Red_square_Moscow_cityscape_%288309148721%29.jpg",
      country: "Russia",
      continent: "Europe",
      description: "Moscow is Russia's capital, famous for its architecture, including the Kremlin and Red Square.",
      badge: "Historic Capital"
    },
    {
      name: "Mexico City",
      photo: "https://a.eu.mktgcdn.com/f/100004519/pO-r3qoPr4M6KyIxlwEU9FPSlfp-Xay_MeGP0DIdWfY.jpg",
      country: "Mexico",
      continent: "North America",
      description: "Mexico City, the capital of Mexico, is known for its Templo Mayor and vibrant modern culture.",
      badge: "Cultural Landmark"
    },
    {
      name: "Istanbul",
      photo: "https://www.agoda.com/wp-content/uploads/2024/02/Istanbul-Turkey.jpg",
      country: "Turkey",
      continent: "Europe",
      description: "Istanbul is a transcontinental city, rich in history, connecting Europe and Asia.",
      badge: "Cultural Crossroads"
    },
    {
      name: "Toronto",
      photo: "https://images.adsttc.com/media/images/650b/778f/b136/681e/6817/1ee7/large_jpg/toronto-architecture-city-guide-30-modern-and-contemporary-attractions-in-canadas-largest-city_37.jpg?1695250340",
      country: "Canada",
      continent: "North America",
      description: "Toronto is Canada's largest city, known for its diverse culture and iconic CN Tower.",
      badge: "Multicultural City"
    }
  ];

  Cities.insertMany(cities)