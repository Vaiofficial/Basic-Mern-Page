const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//connection establishment

require("../DB/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello world from routerjs`);
});

//REGISTRATION ROUTE

//USING PROMISES

// router.post("/register",(req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "plz fill the required credentials" });
//   }
//   //agar email phle se exist karta hai to register nahi hoga.

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already exist" });
//       }
//       //agar exist nahi karta hai to new document create karo database mai.
//       const user = new User({
//         name,
//         email,
//         phone: phone,
//         work: work,
//         password: password,
//         cpassword: cpassword,
//       });
//       //database mai save kar rhe hai.
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "failed to registered" })
//         );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//USING ASYNC

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill the required credentials" });
  }
  //agar email phle se exist karta hai to register nahi hoga.
  try {
    //so ye curd operation jo h (findOne) promise return karta hai therefore humko await karna hoga.
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "passwords are not matching" });
    } else {
      //agar exist nahi karta hai to new document create karo database mai.
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      //we are also hashing the password

      const userRegistered = await user.save();

      if (userRegistered) {
        res.status(201).json({ message: "user registered successfully" });
      } else {
        res.status(500).json({ error: "failed to registered" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//CREATING A LOGIN ROUTE

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    //empty check
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the credentials" });
    }
    //credentials check (email)
    //agar match hota hai to userLogin mai pura document aajyga user ka jo database mai store hai else null store hoga isme.
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      //password check
      const isMatch = await bcrypt.compare(password, userLogin.password);

      //yaha hum token ko get kar rhe hai.
      const token = await userLogin.generateAuthToken();
      console.log(token);

      //jo bhi token generate hui usko cookie mai store kiye.

      res.cookie("jwttoken", token ,{
        expires:new Date(Date.now()+2589200000),
        httpOnly:true
      });

      if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials" });
      } else {
        res.status(200).json({ message: "user login successfully" });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
