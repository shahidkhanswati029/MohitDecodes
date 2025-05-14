// controllers/tutorialController.js
import TutorialModel from "../models/TutorialModel.js";

// Create tutorial
export const createTutorial = async (req, res) => {
  try {
    const tutorial = await TutorialModel.create(req.body);
    res.status(201).json({ success: true, tutorial });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all tutorials
// controllers/tutorialController.js
// controllers/tutorialController.js
export const getAllTutorials = async (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ success: false, message: "Unauthorized access" });
  }

  const tutorials = await TutorialModel.find();
  res.status(200).json({ success: true, tutorials });
};

