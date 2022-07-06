import Express from "express";
import { getUser, createUser } from "../../helpers/users.js";

let app = Express();
app.use(Express.json());

app.get("/", async (req, res) => {
  try {
    let obj = req.query;
    let result = await getUser(obj);
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    res.status(e.code || 500).json({ success: false, error: e.message });
  }
});

app.post("/", async (req, res) => {
  try {
    let user = req.body;
    let result = await createUser(user);
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    res.status(e.code || 500).json({ success: false, error: e.message });
  }
});

export default app;
