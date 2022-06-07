const express = require('express');
const path = require('path')
const port = 4000;

const app = express();

const users = ["Hashir", "Ahmad", "Farrukh", "Waleed", "Azzmat", "Wajid", "Kamran"];
const students = [
    { name: "Kamran", age: 20 },
    { name: "Azmat", age: 20 }
];

app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");

app.get("/", function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
})

app.get("/users/:userId", function (req, res) {
    const { userId } = req.params;
    const user = users[userId];
    res.status(200).render("index", {
        user: user,
        student: students[userId]
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});