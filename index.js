import express from "express";
import cors from "cors";
import useRoutes from "./routes/books.js";

const app = express()
const PORT = 1685

app.use(cors());
app.use(express.json());

app.use("/", useRoutes)

app.listen(PORT, ()=>{
    console.log(`Disponivel em http://localhost:${PORT}`)
})
