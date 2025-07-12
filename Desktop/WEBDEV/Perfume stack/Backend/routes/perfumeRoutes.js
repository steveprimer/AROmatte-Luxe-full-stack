const express = require("express");
const {
  createPerfume,
  showPerfume,
  deletePerfume,
  updatePerfume,
} = require("../controller/perfumeLogic");
const { signup, login } = require("../controller/userLogics");
const { auth, isAdmin } = require("../middleware/auth");

const router = express.Router();

// create api.............
router.post("/createPerfume", auth, isAdmin, createPerfume);

//show api...........
router.get("/showPerfume", showPerfume);

// delete api...........

router.delete("/deletePerfume/:perfumeId", auth, isAdmin, deletePerfume);

//update api...................

router.put("/updatePerfume/:perfumeId", updatePerfume);

router.post("/login", login);

//signup api............
router.post("/signup", signup);

module.exports = router;
