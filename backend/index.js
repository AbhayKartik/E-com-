require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./Models/product");
const Cart = require("./Models/cart");
const Order = require("./Models/orders");
const bodyParser = require("body-parser");
const MongoUrl = process.env.MONGO_URL;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
main()
  .then(() => {
    console.log("MongoDb Connected Succesful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MongoUrl);
}

// app.get("/addproduct", async (req, res) => {
//   await Product.insertMany([
//     {
//       url: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg",
//       name: "Slim Fit Jeans",
//       price: 950,
//     },
//     {
//       url: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
//       name: "Ripped Blue Jeans",
//       price: 1100,
//     },
//     {
//       url: "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg",
//       name: "Stretch Fit Jeans",
//       price: 999,
//     },
//     {
//       url: "https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg",
//       name: "Denim Jacket",
//       price: 1200,
//     },
//     {
//       url: "https://images.pexels.com/photos/34604368/pexels-photo-34604368.jpeg",
//       name: "Light Wash Denim",
//       price: 1050,
//     },
//     {
//       url: "https://images.pexels.com/photos/34595238/pexels-photo-34595238.jpeg",
//       name: "Dark Blue Denim",
//       price: 1150,
//     },
//     {
//       url: "https://images.pexels.com/photos/34570045/pexels-photo-34570045.jpeg",
//       name: "Vintage Denim",
//       price: 1300,
//     },

//     {
//       url: "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg",
//       name: "White Cotton Shirt",
//       price: 700,
//     },
//     {
//       url: "https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg",
//       name: "Black Formal Shirt",
//       price: 850,
//     },
//     {
//       url: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg",
//       name: "Blue Check Shirt",
//       price: 780,
//     },
//     {
//       url: "https://images.pexels.com/photos/8311884/pexels-photo-8311884.jpeg",
//       name: "Striped Casual Shirt",
//       price: 820,
//     },
//     {
//       url: "https://images.pexels.com/photos/17281873/pexels-photo-17281873.jpeg",
//       name: "Linen White Shirt",
//       price: 900,
//     },
//     {
//       url: "https://picsum.photos/seed/greentshirt/800/800",
//       name: "Green Half Sleeve Shirt",
//       price: 650,
//     },
//     {
//       url: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg",
//       name: "Red Casual Shirt",
//       price: 800,
//     },

//     {
//       url: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg",
//       name: "Black Graphic T-Shirt",
//       price: 500,
//     },
//     {
//       url: "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
//       name: "White Oversized T-Shirt",
//       price: 550,
//     },
//     {
//       url: "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg",
//       name: "Grey Round Neck T-Shirt",
//       price: 480,
//     },
//     {
//       url: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg",
//       name: "Printed Cotton T-Shirt",
//       price: 620,
//     },
//     {
//       url: "https://images.pexels.com/photos/8146450/pexels-photo-8146450.jpeg",
//       name: "Yellow Casual T-Shirt",
//       price: 590,
//     },
//     {
//       url: "https://images.pexels.com/photos/11515548/pexels-photo-11515548.jpeg",
//       name: "Blue Regular Fit T-Shirt",
//       price: 530,
//     },
//     {
//       url: "https://images.pexels.com/photos/16729452/pexels-photo-16729452.jpeg",
//       name: "Pink Plain T-Shirt",
//       price: 570,
//     },
//     {
//       url: "https://images.pexels.com/photos/13532889/pexels-photo-13532889.jpeg",
//       name: "Navy Crew Neck T-Shirt",
//       price: 610,
//     },

//     {
//       url: "https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg",
//       name: "Denim Jeans Combo Pack",
//       price: 1600,
//     },
//     {
//       url: "https://images.pexels.com/photos/12048380/pexels-photo-12048380.jpeg",
//       name: "Slim Fit Denim",
//       price: 1150,
//     },
//     {
//       url: "https://images.pexels.com/photos/29910762/pexels-photo-29910762.jpeg",
//       name: "Relax Fit Jeans",
//       price: 890,
//     },
//     {
//       url: "https://images.pexels.com/photos/30203136/pexels-photo-30203136.jpeg",
//       name: "Bootcut Jeans",
//       price: 950,
//     },
//     {
//       url: "https://images.pexels.com/photos/33302806/pexels-photo-33302806.jpeg",
//       name: "Blue Classic Jeans",
//       price: 870,
//     },
//     {
//       url: "https://images.pexels.com/photos/11125301/pexels-photo-11125301.jpeg",
//       name: "Tapered Fit Jeans",
//       price: 920,
//     },
//     {
//       url: "https://images.pexels.com/photos/15923467/pexels-photo-15923467.jpeg",
//       name: "Washed Denim Jeans",
//       price: 980,
//     },
//     {
//       url: "https://images.pexels.com/photos/10538702/pexels-photo-10538702.jpeg",
//       name: "Distressed Denim Jeans",
//       price: 1020,
//     },
//   ]);

//   res.send("saved product");
// });

app.get("/products", async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
});

app.get("/cart", async (req, res) => {
  const allCartsItems = await Cart.find({});
  res.json(allCartsItems);
});

app.post("/cart", async (req, res) => {
  let newCart = new Cart({
    productUrl: req.body.productUrl,
    productId: req.body.productId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
  });
  await newCart.save();
  res.send("card added");
});

app.post("/order", async (req, res) => {
  let newOrder = new Order({
    productIds: req.body.productIds,
    name: req.body.name,
    qty: req.body.qty,
    email: req.body.email,
    price: req.body.price,
  });
  await newOrder.save();
  res.send("card added");
});

app.delete("/item/:id", async (req, res) => {
  let { id } = req.params;
  await Cart.findOneAndDelete({ productId: id });
  res.send("item deleted");
});

app.get("/", (req, res) => {
  res.send("Done");
});
app.delete("/cart", async (req, res) => {
  await Cart.deleteMany({});
  res.send("Clear Cart");
});
app.listen(PORT, () => {
  console.log(`App listning on port ${PORT}`);
});
