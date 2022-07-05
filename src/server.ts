import app from './app';
import "./controllers/user.controller"

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App running at port http://localhost:${PORT}`));