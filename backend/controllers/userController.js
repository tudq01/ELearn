const asyncHandler = require('express-async-handler');
const express = require('express')
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');
const refresh = require('./refreshController')



// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
exports.authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {res.status(401).json({message:"Wrong email"})}
   
   
    if (!await user.matchPassword(password)) {
        res.status(401).json({message:"Wrong password"})
    } 

    let refreshToken = await refresh.createToken(user);
    const accessToken = generateToken(user._id);

    res.status(200).cookie('accessToken', accessToken, {
        domain:'localhost:3000',
        sameSite: 'none',
        httpOnly: true,
     
    })
    .cookie('refreshToken', refreshToken, {
        domain: 'localhost:3000',
            sameSite: 'none',
            httpOnly: true,
           
        })
    .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: accessToken,
        refreshToken: refreshToken,
        photo:user.photo
    });

    
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
exports.registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({message:"User exists"});
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
         
        });
    } else {
        res.status(400).json({ message: "Invalid user data" })
        throw new Error('Invalid user data');
    }
});



