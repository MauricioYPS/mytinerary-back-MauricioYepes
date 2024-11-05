import "dotenv/config.js"
import '../../config/database.js'
import Activity from "../Activity.js"



let activities = [

    // Tokyo
    {
        name: "Visit the Tokyo Skytree",
        photo: "https://www.tokyo-skytree.jp/enjoy/discover/assets/img/sightseeing/detail/skytree_01.jpg"
    },
    {
        name: "Explore Shibuya Crossing",
        photo: "https://assets.vogue.com/photos/659db809e0e9934642099815/master/w_2560%2Cc_limit/1189690204"
    },
    {
        name: "Shop in Akihabara Electric Town",
        photo: "https://japanball.com/wp-content/uploads/2020/12/Akihabara-from-Wikimedia-Commons-scaled-1.jpg"
    },

    // Paris
    {
        name: "Louvre Museum Tour",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VZB_lCCOnNJi1z2cTvmL1YLIPCEwZf_TkA&s"
    },
    {
        name: "Cruise on the Seine River",
        photo: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kggjcz4ux6mrisbc57ad/ParisBusCityTourandSeineRiverCruise.jpg"
    },
    {
        name: "Stroll in Montmartre",
        photo: "https://bestparisstrolls.com/wp-content/uploads/Main-Stroll-24-Basilique-Sacre-Coeur.jpg"
    },

    // London
    {
        name: "Walk Around Buckingham Palace",
        photo: "https://www.londoninfoguide.com/images/the-buckingham-palace-uk-london.jpg"
    },
    {
        name: "Visit the Tower of London",
        photo: "https://www.findingtheuniverse.com/wp-content/uploads/2021/10/White-Tower-Tower-of-London_by_Laurence-Norah-4.jpg"
    },
    {
        name: "Ride the London Eye",
        photo: "https://media.cntraveler.com/photos/55c8be0bd36458796e4ca38a/16:9/w_1280,c_limit/london-eye-2-cr-getty.jpg"
    },

    // Sydney
    {
        name: "Sydney Harbour Bridge Climb",
        photo: "https://media.cntraveler.com/photos/53da90d9dcd5888e145bd22b/master/pass/sydney-harbor-bridge-climb-wendy-perrin.jpg"
    },
    {
        name: "Bondi Beach Day Out",
        photo: "https://images.squarespace-cdn.com/content/v1/58f742c146c3c424ad7a127c/f3458f28-b66e-4043-b8c1-efe5e03727ff/image-asset.jpg"
    },

    // Rome
    {
        name: "Tour of the Vatican Museums",
        photo: "https://media.cntraveler.com/photos/5a99866499c77f4533dfc047/16:9/w_2560,c_limit/Braccio-Nuovo-Sculpture-Gallery-J9FA8C.jpg"
    },
    {
        name: "Walk Around the Colosseum",
        photo: "https://c8.alamy.com/comp/PCCH37/people-walking-around-the-walls-of-the-colosseum-rome-italy-PCCH37.jpg"
    },
    {
        name: "Throw a Coin in the Trevi Fountain",
        photo: "https://www.romecabs.com/upload/CONF99/20230720/How_to_toss_a_coin_into_Trevi_Fountain_in_Rome_private_excursions.jpg"
    },

    // Shanghai
    {
        name: "Walk Along the Bund",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Bund_2.jpg"
    },
    {
        name: "Explore Yu Garden",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcvebiVnHc8F0VIlTTjB9-OGTCl0IK_lYtA&s"
    },
    {
        name: "Visit Shanghai Tower",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZsXOvl5YVOn2gkK41JbbGCwVH8YCn4ycLQ&s"
    },

    // Buenos Aires
    {
        name: "Tango Show in San Telmo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/San_Telmo_Plaza_Dorrego.JPG/1024px-San_Telmo_Plaza_Dorrego.JPG"
    },
    {
        name: "Walk Through La Boca Neighborhood",
        photo: "https://www.fodors.com/wp-content/uploads/2018/08/HERO-BA-Instagrammable-Neighborhood-La-Boca-18.jpg"
    },
    {
        name: "Explore Recoleta Cemetery",
        photo: "https://media.cntraveler.com/photos/5afde3cf14fc2e4005aaeade/16:9/w_2560,c_limit/La-Recoleta-Cemetery_GettyImages-469767463.jpg"
    },

    // Cape Town
    {
        name: "Hike up Table Mountain",
        photo: "https://media.cntraveler.com/photos/55a029ad7772ff921f95d317/master/w_1600%2Cc_limit/table-mountain-cape-town-hikers.jpg"
    },
    {
        name: "Explore the V&A Waterfront",
        photo: "https://live.southafrica.net/media/155632/1920x8101.jpg?anchor=center&mode=crop&quality=100&width=1920&height=810&bgcolor=white&rnd=131576390290000000"
    },
    {
        name: "Visit Robben Island",
        photo: "https://www.capetown.travel/wp-content/uploads/2022/06/Robben-Island.webp"
    }
];




Activity.insertMany(activities)