import Vlog from "../models/vlog.model.js";

export const createVlogFunction = async (req, res) => {
  try {
    const { title, body, imageUrl } = req.body;
    const loggedInUserId = req.user._id.toString();
    if (!title || !body || !imageUrl) {
      res.status(400).send({
        success: false,
        message: "please provide all fields",
      });
      return;
    }
    //create post or vlog for job
    const vlog = await Vlog.create({
      title,
      body,
      imageUrl,
      createdBy: loggedInUserId,
    });
    res.status(201).send({
      success: true,
      message: "vlog is successfully created",
      vlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating all blog , controller",
    });
  }
};

export const getAllVlogsFunction = async (req, res) => {
  try {
    const vlogs = await Vlog.find();
    if (!vlogs) {
      res.status(404).send({
        success: false,
        message: "There is no blogs here",
      });
      return;
    }

    //send all vlogs
    res.send(vlogs);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all blog , controller",
    });
  }
};
