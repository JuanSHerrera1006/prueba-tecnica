import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.post("/", (req, res, next) => {
    const { inputValue } = req.body;
    console.log(`El dato recibido es: ${inputValue}`)
    next();
});

app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
