const mongoose = require('mongoose');
const User = require('../api/User/UserModel');
mongoose.connect(`mongodb://localhost/mbox`);

const admins = [ {
    name: "Fernando",
    lastName: "Palma",
    username: "ferpalma",
    password: "dedo",
    email: "ferpalma21",
    gender: "male",
    role: 'admin',
  },{
    name: "Daniele",
    lastName: "Germani",
    username: "danigermani",
    password: "importanti",
    email: "danigermani",
    gender: "male",
    role: 'admin'
  }
];

User.create(admins, (err, admins) => {
  if (err){ throw(err); }
  console.log("Success", admins);
  mongoose.connection.close();
});
