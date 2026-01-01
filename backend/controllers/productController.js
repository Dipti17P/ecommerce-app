import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add Product Controller
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Log incoming files for debugging
    console.log("Files received:", req.files);

    // Extract images from multer upload
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    if (images.length === 0) {
      return res.status(400).json({ success: false, message: "No images uploaded" });
    }

    // Upload to Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (file) => {
        if (!file.path) {
          throw new Error("File path missing in multer upload");
        }
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Prepare product data
    const productData = {
      name,
      description,
      price: Number(price),
      image: imagesUrl,
      category,
      subCategory,
      sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes || "[]"),
      bestseller: bestseller === "true",
      date: Date.now(),
    };

    console.log("🛍 Product Data to Save:", productData);

    // Save to MongoDB
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully", product });
  } catch (error) {
    console.error("Error in addProduct:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}

// Placeholder for other routes
const listProducts = async (req, res) => {
  try {
    
    const products = await productModel.find({});
    res.json({success:true,products})

  } catch (error) {
    console.error("Error in addProduct:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"Product removed"})
  } catch (error) {
    console.error("Error in addProduct:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
const singleProduct = async (req, res) => {
  try {
    const { productId }=req.body
    const product = await productModel.findById(productId)
    res.json({success:true,product})
  } catch (error) {
    console.error("Error in addProduct:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}

export { addProduct, listProducts, removeProduct, singleProduct };
