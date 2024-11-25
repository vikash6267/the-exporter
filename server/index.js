const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload")

// env configration 
dotenv.config();

// rest object  
const app = express();


// connect to db 
connectDB();
// middleware 
app.use(express.json())
app.use(cors());


app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
cloudinaryConnect();

// routes 
app.use("/api/v1/product", require("./routes/productRoute"))
app.use("/api/v1/contact", require("./routes/contactRoute"))
app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/blog", require("./routes/blogRoute"))
app.use("/api/v1/hero", require("./routes/heroRoute"))

app.get('/proxy', async (req, res) => {
    const url = req.query.url;
  
    if (!url) {
      return res.status(400).json({ error: 'URL parameter is missing or invalid.' });
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      res.json(data); // Forward the JSON response to the client
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Error fetching data from the provided URL.' });
    }
  });

  
app.use("/", (req, res) => {
    res.send("Ha bhai chal rha hu. Uski tarha tere ko chod kar thodi jaunga 😀")
})
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})
