import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/company.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:3301/company");

app.post("/saveEmployee", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/clearEmployees", async (req, res) => {
  try {
    await Employee.deleteMany({});
    res.status(200).send({ message: "All employees deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(5500, () => {
  console.log("Server live at http://localhost:5500");
});
