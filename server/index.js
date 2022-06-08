import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
    const { inputValue } = req.body;
    console.log(inputValue);
    next();
})


app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
