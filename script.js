const express = require("express");
const app = express();
const PORT = 4000;


app.get('/api/v1/',(req, res)=>{
    const fakeApiData = {
        "products": [
          {
            "id": 1,
            "name": "Premium Wireless Headphones",
            "price": 129.99,
            "description": "Experience high-quality sound with these premium wireless headphones. Features noise cancellation and up to 20 hours of battery life.",
            "image": "https://example.com/images/headphones.jpg",
            "stock": 50
          },
          {
            "id": 2,
            "name": "Smart Fitness Tracker",
            "price": 79.99,
            "description": "Track your fitness goals with this smart fitness tracker. Monitor your heart rate, steps, calories burned, and more.",
            "image": "https://example.com/images/fitness_tracker.jpg",
            "stock": 100
          },
          {
            "id": 3,
            "name": "Ultra HD 4K Smart TV",
            "price": 899.99,
            "description": "Immerse yourself in stunning visuals with this Ultra HD 4K Smart TV. Stream your favorite shows and movies with ease.",
            "image": "https://example.com/images/smart_tv.jpg",
            "stock": 20
          }
        ]
      };
      
      fakeApiData.products.forEach(product => {
        console.log("Product ID:", product.id);
        console.log("Name:", product.name);
        console.log("Price:", product.price);
        console.log("Description:", product.description);
        console.log("Image URL:", product.image);
        console.log("Stock:", product.stock);
        console.log("\n");
      });
      
      
    
})


app.listen(PORT,() =>{
    console.log(`sever is runing on  http://localhost:${PORT}/`);
})