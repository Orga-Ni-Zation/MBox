const mongoose = require('mongoose');
const User = require('../User/UserModel');
mongoose.connect(`mongodb://localhost/mbox`);

const admin = [ {
    name: "Fernando",
    lastName: "Palma",
    birthday: 1989/03/09,
    username: "ferpalma",
    password: "codo",
    email: "ferpalma21",
    gender: {
      enum: "male"
    },
    role: {
      enum: [
        'admin',
      ],
    }
  },{
    name: "Daniele",
    lastName: "Germani",
    birthday: 1985/10/09,
    username: "danigermani",
    password: "importanti",
    email: "danigermani",
    gender: {
      enum: "male"
    },
    role: {
      enum: [
        'admin',
      ],
    }
  }
];
