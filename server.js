import app from "./src/app.js";
import chalk from "chalk";

const port = 8080;

app.listen(port, () => {
    console.log(
        chalk.blue.bgBlue.bold(`servidor esta rodando na porta , ${port}`)
    );
});