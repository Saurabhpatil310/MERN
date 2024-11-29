import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password,10);

    // Create a new user
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    await createdUser.save();

    // Respond with success
    res.status(201).json({ message: "User Created Successfully" , user:{
      fullname: createdUser.fullname,
      email: createdUser.email,
      password: createdUser.password
    }});
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async(req, res) => {
    try {
        const{email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        else{
            res.status(200).json({
                message: "Logged in successfully",
                user: {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email
                },
            })
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};


