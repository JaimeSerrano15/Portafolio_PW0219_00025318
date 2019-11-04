var mongoose = require('mongoose');

let database = 'RegistroApi';
let port = '27017';
let host = 'localhost';
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = () => {
	mongoose.Promise = global.Promise;

	mongoose
		.connect(uri, { useNewUrlParser: true })
		.then(() => {
			console.log('La conexión a la BD ha sido exitosa');
		})
		.catch(() => {
			console.log('Ha ocurrido un error');
		});
};

module.exports = {
    connectDB,
};


