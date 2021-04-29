import "dotenv/config";
import express from "express";
import { setQueues, UI } from "bull-board";

import UserController from "./app/controllers/UserController";
import Queue from "./app/lib/Queue";

const app = express();
setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());
app.post("/users", UserController.store);

app.use("/admin/queues", UI);

app.listen(8080, () => {
  console.log("Server running on the port 8080");
});
