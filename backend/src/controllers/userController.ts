import { Request, Response } from "express";
import User from "../models/userModel";

const createUser = async (request: Request, response: Response) => {
  try {
    const { auth0Id } = request.body;
    // Check if the user exists by id
    const user = await User.findOne({ auth0Id: auth0Id });
    if (user) {
      response.status(200).send();
      return;
    }
    // if not, create new user
    const newUser = new User(request.body);
    await newUser.save();
    response.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error creating user!" });
  }
};

const updateUser = async (request: Request, response: Response) => {
  try {
    const { name, addressLine1, city, country } = request.body;
    const user = await User.findById(request.userId);
    if (!user) {
      response.status(404).json({ message: "User not found!" });
      return;
    }
    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;
    await user.save();
    response.send(user);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error updating user!" });
  }
};

export default { createUser, updateUser };
