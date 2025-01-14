import { Request, Response } from "express";
import User from "../models/userModel";

const createUser = async (request: Request, response: Response) => {
  try {
    const { auth0Id } = request.body;
    // Check if the user exists by id
    const user = await User.findOne({ auth0Id: auth0Id });
    if (user) {
      response.status(200).send();
    }
    // if not, create new user
    const newUser = new User(request.body);
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error creating user" });
  }
};

export default { createUser };
