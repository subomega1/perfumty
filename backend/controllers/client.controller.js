import Perfume from "../models/Perfume.js";

// create client perfume
export const createClientPerfume = async (req, res) => {
  try {
    const userId = req.user._id;
    const perfumeData = req.body;
    const newPerfume = new Perfume({ ...perfumeData, userId });
    newPerfume.price = newPerfume.calculatePrice();
    await newPerfume.save();
    res.status(201).json({ message: "Perfume created successfully", perfume: newPerfume });
  } catch (error) {
    console.error("Error creating perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all client perfumes
export const getClientPerfumes = async (req, res) => {
  try {
    const userId = req.user._id;
    const perfumes = await Perfume.find({ userId });
    res.status(200).json({ perfumes });
  } catch (error) {
    console.error("Error fetching client perfumes:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get one client perfume
export const getClientPerfumeById = async (req, res) => {
    try {
      const userId = req.user._id;
      const perfumeId = req.params.id;
      const perfume = await Perfume.findOne({ _id: perfumeId, userId });
  
      if (!perfume) {
        return res.status(404).json({ error: "Perfume not found or unauthorized" });
      }
  
      res.status(200).json({ perfume });
    } catch (error) {
      console.error("Error fetching client perfume:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

// delete client perfume
export const deleteClientPerfume = async (req, res) => {
  try {
    const userId = req.user._id;
    const perfumeId = req.params.id;
    const perfume = await Perfume.findOneAndDelete({ _id: perfumeId, userId });
    if (!perfume) {
      return res.status(404).json({ error: "Perfume not found or unauthorized" });
    }
    res.status(200).json({ message: "Perfume deleted successfully" });
  } catch (error) {
    console.error("Error deleting perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// modify client perfume
export const modifyClientPerfume = async (req, res) => {
  try {
    const userId = req.user._id;
    const perfumeId = req.params.id;
    const updates = req.body;

    const updatedPerfume = await Perfume.findOneAndUpdate(
      { _id: perfumeId, userId },
      updates,
      { new: true }
    );

    if (!updatedPerfume) {
      return res.status(404).json({ error: "Perfume not found or unauthorized" });
    }

    res.status(200).json({ message: "Perfume updated successfully", perfume: updatedPerfume });
  } catch (error) {
    console.error("Error updating perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

