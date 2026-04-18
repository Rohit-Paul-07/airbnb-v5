const router = require("express").Router();
const Feedback = require("../models/Feedback");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

router.post("/", auth, upload.single("image"), async (req, res) => {
  const { listingId, bookingId, rating, comment } = req.body;
  const fb = await Feedback.create({
    listing: listingId,
    booking: bookingId,
    guest: req.user.id,
    rating: Number(rating) || 5,
    comment,
    image: req.file ? `/uploads/${req.file.filename}` : undefined,
  });
  res.json(fb);
});

router.get("/listing/:id", async (req, res) => {
  const items = await Feedback.find({ listing: req.params.id })
    .populate("guest", "name")
    .sort({ createdAt: -1 });
  res.json(items);
});

module.exports = router;
