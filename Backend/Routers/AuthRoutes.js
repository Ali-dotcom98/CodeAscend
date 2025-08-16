const express = require("express");
const User = require("../Models/User_Model.js")
const bcrypt = require("bcryptjs")
const router = express.Router();
const { GenerateToken, VerifyToken, Protect } = require("../Middleware/Token_Middleware.js")

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, status } = req.body;

        const userexit = await User.findOne({ email });
        if (userexit) {
            return res.status(400).json({ Message: "Email already Registered..." })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.create(
            {
                name,
                email,
                password: hashPassword,
                status
            }
        )

        const payload = { User: user };
        const token = GenerateToken(payload);

        if (user) {
            return res.status(201).json({ Message: "User Added Successfully", user: user, token: token });
        } else {
            return res.status(500).json({ Message: "User creation failed" });
        }

    } catch (error) {
        console.log(error);

        res.status(404).json({ error: error.message })
    }


});
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }


        const isMatch = await bcrypt.compare(password, checkUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        const payload = { User: checkUser };
        const token = GenerateToken(payload);
        return res.status(200).json({
            message: "Authorized",
            user: checkUser,
            token: token
        });


    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/profile", Protect, async (req, res) => {
    try {
        const UserProfile = await User.findById(req.user._id).select("-password");
        if (!UserProfile) {
            res.status(404).json({ message: "User Not Found" })
        }
        console.log(UserProfile);

        res.json({ user: UserProfile });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.post("/profile", () => { });

module.exports = router