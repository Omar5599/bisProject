const  authModel  = require('../models/authModel');

const validationResult =require("express-validator").validationResult;


const postSignup= async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { userId, name, username, email, password } = req.body;
      
      // Check if email already exists
      const existingUser = await authModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Create new user
      const newUser = new authModel({ userId, name, username, email, password });
  
      // Save the user to the database
      await newUser.save();
      
      res.status(200).json({ message: 'User signed up successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

const postSignin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find user by email and password
    const user = await authModel.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'User signed in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const postLogout =  (req, res) => {
 
  res.status(200).json({ message: 'User logged out successfully' });
}


const getAllprofile =  async (req, res) => {
  const profiles = await authModel.find();
  return res.send(profiles);
}

const getByid =  async (req, res) => {
  try {
    const profile = await authModel.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}


const updateProfile =  async (req, res) => {
  try {
    const updatedProfile = await authModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    return res.status(200).json(updatedProfile);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteProfile =  async (req, res) => {
  try {
    const deletedProfile = await authModel.findByIdAndDelete(req.params.id);
    if (!deletedProfile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    return res.status(200).json({ msg: "Profile deleted successfully" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}




module.exports = {
    postSignup,
    postSignin,
    postLogout,
    getAllprofile,
    getByid,
    updateProfile,
    deleteProfile
}
