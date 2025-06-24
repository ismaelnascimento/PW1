const express = require("express")
const app = express()
const axios = require("axios")
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.use(express.urlencoded({ extended: true }))

const API_URL = "https://ron-swanson-quotes.herokuapp.com"

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/v2/quotes`)
        console.log(response)
        res.render("index", { quote: response.data[0] })
    } catch {
        res.send("Erro ao acessar a API")
    }
})