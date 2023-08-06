// import express from "express";
// import bodyParser from "body-parser";
// import sequelize from "./utils/database.js";
// import notesRoutes from "./routes/notes.js";

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// 	next();
// });

// //test route
// app.get('/', (req, res, next) => {
// 	res.send('Hello World');
// });

// //CRUD routes
// app.use("/notes", notesRoutes);

// //error handling
// app.use((error, req, res, next) => {
// 	console.log(error);
// 	const status = error.statusCode || 500;
// 	const message = error.message;
// 	res.status(status).json({ message: message });
// });

// //sync database
// sequelize
// 	.sync()
// 	.then(result => {
// 		console.log("Database connected");
// 		app.listen(3000);
// 	})
// 	.catch(err => console.log(err));

import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import sequelize from "./utils/database.js";
import notesRoutes from "./routes/notes.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	next();
});

//test route
app.get('/', (req: Request, res: Response) => {
	res.send('Hello World');
});

//CRUD routes
app.use("/notes", notesRoutes);

//error handling
interface ErrorWithStatusCode extends Error {
	statusCode?: number;
}

app.use((error: ErrorWithStatusCode, req: Request, res: Response, next: NextFunction) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	res.status(status).json({ message });
});

//sync database
const startServer = async () => {
	try {
		await sequelize.sync();
		console.log("Database connected");

		app.listen(3000, () => {
			console.log("Server started on port 3000");
		});
	} catch (err) {
		console.log(err);
	}
};

startServer();