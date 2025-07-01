const express = require("express")
const app = express()
const axios = require("axios")

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

const API_KEY = "6HD1zNXsZtUBNFesYgHHCOOXi6pcl2q5Y5qKS3Ol"
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}&start_date=2025-04-01&end_date=2025-07-01`)
        const title = "Milky Way"

        if (response.data.length > 0) {
            const filteredData = response.data.filter(item => {
                return item.copyright == null
            })
            console.log(filteredData)
            res.render("index", { data: filteredData, title: title })
        }
    } catch (e) {
        res.send("Error trying get the Milky Way images")
    }
})