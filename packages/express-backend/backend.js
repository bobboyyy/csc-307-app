// backend.js
import express from "express";
import cors from "cors";
import userService from "./user-services.js";


const app = express();
const port = 8000;

app.use(cors());


app.use(express.json());

app.get("/users", (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    userService.getUsers(name, job)
        .then((result) => {
            res.send({ users_list: result });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    userService.findUserById(id)
        .then((result) => {
            if (!result) {
                res.status(404).send("Resource not found.");
            } else {
                res.send(result);
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
});

app.post("/users", (req, res) => {
    const userToAdd = req.body;
    userService.addUser(userToAdd)
        .then((savedUser) => {
            res.status(201).send(savedUser);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    userService.removeUserById(id)
        .then((result) => {
            if (!result) {
                res.status(404).send("Resource not found.");
            } else {
                res.status(204).send();
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});