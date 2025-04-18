import Perfume from "../models/Perfume.js";

// create client perfume
export const createClientPerfume = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const {
      top_note,
      middle_note,
      base_note,
      size,
      intensity,
      bottle_material,
      premium_ingredients,
    } = req.body;
    if (
      !top_note ||
      !middle_note ||
      !base_note ||
      !size ||
      !intensity ||
      !bottle_material ||
      !premium_ingredients
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const sizeEnum = Perfume.schema.path("size").options.enum;
    if (!sizeEnum.includes(size)) {
      return res.status(400).json({
        error: `Invalid size value,Allowed values: ${sizeEnum.join(", ")}`,
      });
    }
    const intensityEnum = Perfume.schema.path("intensity").enumValues;
    if (!intensityEnum.includes(intensity)) {
      return res.status(400).json({
        error: `Invalid intensity value,Allowed values: ${intensityEnum.join(
          ", "
        )}`,
      });
    }
    const bottle_materialEnum =
      Perfume.schema.path("bottle_material").enumValues;
    if (!bottle_materialEnum.includes(bottle_material)) {
      return res.status(400).json({
        error: `Invalid bottle_material value,Allowed values: ${bottle_materialEnum.join(
          ", "
        )}`,
      });
    }
    const premium_ingredientsEnum = Perfume.schema.path(
      "premium_ingredients"
    ).enumValues;
    if (!premium_ingredientsEnum.includes(premium_ingredients)) {
      return res.status(400).json({
        error: `Invalid premium_ingredients value,Allowed values: ${premium_ingredientsEnum.join(
          ", "
        )}`,
      });
    }
    let newPerfume = new Perfume({
      userId,
      top_notes: top_note,
      middle_notes: middle_note,
      base_notes: base_note,
      size: size,
      intensity: intensity,
      bottle_material: bottle_material,
      premium_ingredients: premium_ingredients,
    });
    newPerfume.price = newPerfume.calculatePrice();
    await newPerfume.save();
    res.status(201).json({
      message: "Perfume created successfully",
      perfumeId: newPerfume._id,
      perfume: {
        top_notes: newPerfume.top_notes,
        middle_notes: newPerfume.middle_notes,
        base_notes: newPerfume.base_notes,
        size: newPerfume.size,
        intensity: newPerfume.intensity,
        bottle_material: newPerfume.bottle_material,
        premium_ingredients: newPerfume.premium_ingredients,
        price: newPerfume.price,
      },
    });
  } catch (error) {
    console.error("Error creating perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all client perfumes
export const getClientPerfumes = async (req, res) => {
  try {
    const userId = req.userId;

    // Fetch all perfumes for the given user ID
    const perfumes = await Perfume.find({ userId });

    // Transform the perfumes array into the desired format
    const formattedPerfumes = perfumes.map((perfume) => ({
      perfumeId: perfume._id,
      top_notes: perfume.top_notes,
      middle_notes: perfume.middle_notes,
      base_notes: perfume.base_notes,
      size: perfume.size,
      intensity: perfume.intensity,
      bottle_material: perfume.bottle_material,
      premium_ingredients: perfume.premium_ingredients,
      price: perfume.price,
    }));

    // Send the response with the formatted perfumes
    res.status(200).json({ perfumes: formattedPerfumes });
  } catch (error) {
    console.error("Error fetching client perfumes:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get one client perfume
export const getClientPerfumeById = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const perfumeId = req.params.id;
    const perfume = await Perfume.findOne({ _id: perfumeId, userId });

    if (!perfume) {
      return res.status(404).json({ error: "Perfume not found" });
    }

    res.status(200).json({
      perfume: {
        perfumeId: perfume._id,
        top_notes: perfume.top_notes,
        middle_notes: perfume.middle_notes,
        base_notes: perfume.base_notes,
        size: perfume.size,
        intensity: perfume.intensity,
        bottle_material: perfume.bottle_material,
        premium_ingredients: perfume.premium_ingredients,
        price: perfume.price,
      },
    });
  } catch (error) {
    console.error("Error fetching client perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete client perfume
export const deleteClientPerfume = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const perfumeId = req.params.id;
    const perfume = await Perfume.findOneAndDelete({ _id: perfumeId, userId });
    if (!perfume) {
      return res
        .status(404)
        .json({ error: "Perfume not found" });
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
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const perfumeId = req.params.id;
    const updatedPerfume = await Perfume.findOneAndUpdate(
      { _id: perfumeId, userId },
      { new: true }
    );

    if (!updatedPerfume) {
      return res
        .status(404)
        .json({ error: "Perfume not found " });
    }
    const {
      top_note,
      middle_note,
      base_note,
      size,
      intensity,
      bottle_material,
      premium_ingredients,
    } = req.body;
    if (
      !top_note &&
      !middle_note &&
      !base_note &&
      !size &&
      !intensity &&
      !bottle_material &&
      !premium_ingredients
    ) {
      return res.status(400).json({ error: "No fields to update" });
    }
    if (top_note) updatedPerfume.top_notes = top_note;
    if (middle_note) updatedPerfume.middle_notes = middle_note;
    if (base_note) updatedPerfume.base_notes = base_note;
    if (size) {
      const sizeEnum = Perfume.schema.path("size").options.enum;
      if (!sizeEnum.includes(size)) {
        return res.status(400).json({
          error: `Invalid size value,Allowed values: ${sizeEnum.join(", ")}`,
        });
      } else {
        updatedPerfume.size = size;
      }
    }
    if (intensity) {
      const intensityEnum = Perfume.schema.path("intensity").enumValues;
      if (!intensityEnum.includes(intensity)) {
        return res.status(400).json({
          error: `Invalid intensity value,Allowed values: ${intensityEnum.join(
            ", "
          )}`,
        });
      } else {
        updatedPerfume.intensity = intensity;
      }
    }
    if (bottle_material) {
      const bottle_materialEnum =
        Perfume.schema.path("bottle_material").enumValues;
      if (!bottle_materialEnum.includes(bottle_material)) {
        return res.status(400).json({
          error: `Invalid bottle_material value,Allowed values: ${bottle_materialEnum.join(
            ", "
          )}`,
        });
      } else {
        updatedPerfume.bottle_material = bottle_material;
      }
    }
    if (premium_ingredients) {
      const premium_ingredientsEnum = Perfume.schema.path(
        "premium_ingredients"
      ).enumValues;
      if (!premium_ingredientsEnum.includes(premium_ingredients)) {
        return res.status(400).json({
          error: `Invalid premium_ingredients value,Allowed values: ${premium_ingredientsEnum.join(
            ", "
          )}`,
        });
      } else {
        updatedPerfume.premium_ingredients = premium_ingredients;
      }
    }
    updatedPerfume.price = updatedPerfume.calculatePrice();
    await updatedPerfume.save();

    res.status(200).json({
      message: "Perfume updated successfully",
      perfume: {
        perfumeId: updatedPerfume._id,
        top_notes: updatedPerfume.top_notes,
        middle_notes: updatedPerfume.middle_notes,
        base_notes: updatedPerfume.base_notes,
        size: updatedPerfume.size,
        intensity: updatedPerfume.intensity,
        bottle_material: updatedPerfume.bottle_material,
        premium_ingredients: updatedPerfume.premium_ingredients,
        price: updatedPerfume.price,
      },
    });
  } catch (error) {
    console.error("Error updating perfume:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
