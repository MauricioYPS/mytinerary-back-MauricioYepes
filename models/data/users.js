import 'dotenv/config.js'
import '../../config/database.js'
import User from "../User.js"

let users = [
   {
      name: 'Diego',
      lastName: 'Ponce',
      email: '2KU0B@example.com',
      password: '123456',
      photoUrl: 'https://example.com/photo-diego.jpg',
      country: 'Colombia'
   },
   {
      name: 'Mauricio',
      lastName: 'Yepes',
      email: '2KU0B@example.com',
      password: '123456',
      photoUrl: 'https://example.com/photo-mauricio.jpg',
      country: 'Colombia'   
   }
]

User.insertMany(users)