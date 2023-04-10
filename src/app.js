import express, { response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(422).send("Todos os campos são obrigatórios");
  }

  const newUser = { id: users.length + 1, username, avatar };
  users.push(newUser);
  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;

    const check = users.find((user) => user.username === username);

    if(!check){
        return res.status(401).send("UNAUTHORIZED")
    }

    const newTweet = {username, tweet};

    tweets.push(newTweet);
    res.status(201).send("OK")
});

app.get("/tweets", (req, resp) => {
    
});

const PORT = 5000;
app.listen(PORT, console.log(`Server rodando na porta ${PORT}`));
