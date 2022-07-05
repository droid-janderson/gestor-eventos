import app from './app';
import "./controllers/index"

app.get("/", (req, res) => {
  res.json("Aplicação funcionando!");
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App running at port http://localhost:${PORT}`));