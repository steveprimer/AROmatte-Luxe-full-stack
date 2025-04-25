const perfume = require("../models/perfumeModel");
const path = require("path");
require("dotenv").config();
const nodemailer = require("nodemailer");

const cloudinary = require("cloudinary").v2;

async function fileUploadToCloudinary(filePath, folder) {
  return await cloudinary.uploader.upload(filePath, {
    folder,
    resource_type: "auto",
  });
}

function checkFileType(supportedFile, fileExtension) {
  return supportedFile.includes(fileExtension);
}

async function sendNotification(docs) {
  const transporter = nodemailer.createTransport({
    host: process.env.host,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailResponse = await transporter.sendMail({
    from: "From The Perfume Company",
    to: docs.email,
    html: `<h1>congratulation perfume created successfully</h1> <a href="${docs.image}">Click to View Image</a> `,
    subject: `New perfume created successfully`,
  });

  return mailResponse;
}

async function createPerfume(req, res) {
  try {
    const { name, price, description, stock, email } = req.body;
    const { image } = req.files;

    if (!name || !price || !image || !email || !description || !stock) {
      return res.status(400).json({
        success: false,
        message: "please provide all data for perfume creation",
      });
    }

    const supportedFile = [".jpeg", ".jpg", ".png"];
    const fileExtension = path.extname(image.name);

    if (checkFileType(supportedFile, fileExtension)) {
      console.log("success");
      var cloudinaryResponse = await fileUploadToCloudinary(
        image.tempFilePath,
        "The Perfume Company"
      );

      console.log("cloudinary response", cloudinaryResponse);

      if (!cloudinaryResponse.secure_url) {
        return res.status(500).json({
          success: false,
          message: "Failed to upload image to Cloudinary",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "image file not supported...",
      });
    }

    const response = await perfume.create({
      image: cloudinaryResponse.secure_url,
      name,
      price,
      description,
      stock,
      email,
    });

    if (!response) {
      return res.status(500).json({
        success: false,
        message: "failed to created perfume in mongodb...",
      });
    }

    const emailResponse = await sendNotification(response);
    console.log("email response", emailResponse);

    res.status(200).json({
      success: true,
      message: "perfume created successfully",
      data: response,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
}

const showPerfume = async (req, res) => {
  try {
    const response = await perfume.find();

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "perfume data not found",
        err,
      });
    }

    const isAdmin = req.user?.role === "Admin";

    const perfumeData = response.map((item) => ({
      _id: item._id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      showAdminControls: isAdmin,
    }));

    res.status(200).json({
      success: true,
      message: "perfume fetched successfully",
      response: perfumeData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to get perfume data",
      err,
    });
  }
};

const deletePerfume = async (req, res) => {
  try {
    const { perfumeId } = req.params;

    if (!perfumeId) {
      return res.status(400).json({
        success: false,
        message: "please provide perfume id for deletion",
      });
    }

    const response = await perfume.findByIdAndDelete(perfumeId);

    res.status(200).json({
      success: true,
      message: "perfume deleted successfully",
      response,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to delete perfume data",
      err,
    });
  }
};

const updatePerfume = async (req, res) => {
  try {
    const { perfumeId } = req.params;
    let { name, price, stock, description } = req.body;

    console.log(name, price, stock, description);

    if (!perfumeId) {
      return res.status(400).json({
        success: false,
        message: "please provide perfume id for updation",
      });
    }

    const perfumeData = await perfume.findById(perfumeId);

    if (!perfumeData) {
      return res.status(400).json({
        success: false,
        message: "perfume not found by given Id for updation",
      });
    }

    if (!name) {
      name = perfumeData.name;
    }

    if (!price) {
      price = perfumeData.price;
    }

    if (!stock) {
      stock = perfumeData.stock;
    }

    if (!description) {
      description = perfumeData.description;
    }

    const response = await perfume.findByIdAndUpdate(
      perfumeId,
      { name, price, stock, description },
      { new: true }
    );

    if (!response) {
      return res.status(400).json({
        success: false,
        message: "failed to update perfume data by mongodb",
      });
    }

    res.status(200).json({
      success: true,
      message: "perfume updated successfully",
      response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "failed to update perfume data",
      err,
    });
  }
};

module.exports = { createPerfume, showPerfume, deletePerfume, updatePerfume };
