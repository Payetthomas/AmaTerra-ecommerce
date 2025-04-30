import express, { json } from "express"; 
import cors from "cors"; 
import { router } from "./src/routers/index";


const app = express(); 

app.use(cors({origin: process.env.CORS_ORIGIN || "*"}));

const port = process.env.PORT || 3000; 

app.use(express.json()); 

app.use("/", router);

app.listen(port, () => {
    console.log(`serveur démarré http://localhost:${port}`);
}); 