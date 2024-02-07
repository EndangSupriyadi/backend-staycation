const seeder = require('mongoose-seed');
const mongoose = require('mongoose');

const db = "mongodb://localhost:27017/db_staycation2";

const data = [
    // member
    {
        'model': 'Member',
        'documents': [
            {
                firstName: 'Elfin',
                lastName: 'Sanjaya',
                email: 'elfinsanjaya12@gmail.com',
                phoneNumber: '082377954008'
            },
            {
                firstName: 'Yein',
                lastName: 'Narayana',
                email: 'elfinsanjaya1207@gmail.com',
                phoneNumber: '082377954008'
            }
        ]
    },
    {
        'model': 'Users',
        'documents': [
            {
                username: 'admin',
                password: 'rahasia',
            },
            {
                username: 'superadmin',
                password: 'rahasia',
                role: 'admin'
            },
        ]
    }
];

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        seeder.loadModels([
            "./models/Member",
            "./models/Users"
        ]);
        seeder.clearModels(['Member', 'Users']);
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });
