const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query ="insert into users (lastname, firstname, email, gender, birthdate) values(?,?,?,?,?)";
        db.query(query, [data.lastname, data.firstname, data.email, data.gender, data.birthdate], callback);
    }, 
    getAllInformation:(callback) => {
        const query ="select * from users";
        db.query(query, callback);
    }
};

module.exports = information;