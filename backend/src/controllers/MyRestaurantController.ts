import { Request, Response } from "express";
import Restaurant from "../models/restaurantModel";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const createMyRestaurant = async (request: Request, response: Response) => {
  try {
    const { userId } = request; // Gets userId from middleware
    const existingRestaurant = await Restaurant.findOne({ user: userId }); // Checks if user already has a restaurant (Only 1 restaurant per user)
    if (existingRestaurant) {
      response.status(409).json({ message: "User restaurant already exists!" });
      return;
    }
    const image = request.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
    const restaurant = new Restaurant(request.body); // Creates new Restaurant document using the data sent from the body
    restaurant.imageUrl = uploadResponse.url;
    restaurant.user = new mongoose.Types.ObjectId(request.userId);
    restaurant.lastUpdated = new Date();
    await restaurant.save();
    response.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error creating restaurant!" });
  }
};

const getMyRestaurant = async (request: Request, response: Response) => {
  try {
    const { userId } = request;
    const restaurant = await Restaurant.findOne({ user: userId });

    if (!restaurant) {
      response.status(404).json({ message: "Restaurant not found!" });
      return;
    }
    response.status(200).json(restaurant);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error fetching restaurant!" });
  }
};

export default { createMyRestaurant, getMyRestaurant };
