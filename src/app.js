import express , {json} from "express";
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import receitas from "./routes/receita.js";
import chalk from "chalk";

const app = express();

app.use(json());
app.use("/",index);
app.use("/receitas",receitas);

db.on("erro",console.log.bind(console, "errode conexao"));
db.once("open",() => {
    console.log(chalk.white.bgRgb(255, 0, 127).bold("conexao com o banco feita com sucesso"));
});

export default app;