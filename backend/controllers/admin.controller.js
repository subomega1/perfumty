import Perfume from "../models/Perfume.js";

// Create a new perfume for an occasion (Admin only)
export const createAdminPerfume = async (req, res) => {
  try {
    const perfumeData = req.body;
    const newPerfume = new Perfume(perfumeData);
    newPerfume.price = newPerfume.calculatePrice();
    await newPerfume.save();
    res.status(201).json({ message: "Perfume created successfully", perfume: newPerfume });
  } catch (error) {
    console.error("Error creating perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a perfume after the occasion (Admin only)
export const deleteAdminPerfume = async (req, res) => {
  try {
    const perfumeId = req.params.id;
    const perfume = await Perfume.findByIdAndDelete(perfumeId);
    if (!perfume) {
      return res.status(404).json({ error: "Perfume not found" });
    }
    res.status(200).json({ message: "Perfume deleted successfully" });
  } catch (error) {
    console.error("Error deleting perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Accept or reject a client's perfume order (Admin only)
export const handlePerfumeOrder = async (req, res) => {
  try {
    const { perfumeId, action } = req.body; // action could be "accept" or "reject"
    const perfume = await Perfume.findById(perfumeId);

    if (!perfume) {
      return res.status(404).json({ error: "Perfume not found" });
    }

    if (action === "accept") {
      perfume.status = "Accepted";
    } else if (action === "reject") {
      perfume.status = "Rejected";
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }

    await perfume.save();
    res.status(200).json({ message: `Perfume order ${action}ed successfully`, perfume });
  } catch (error) {
    console.error("Error handling perfume order:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
