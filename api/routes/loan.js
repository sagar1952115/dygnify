const router = require("express").Router();
const Loan = require("../models/loanapp");

// Save Loan Application
router.post("/", async (req, res) => {
  const newLoan = new Loan(req.body);
  try {
    const savedLoan = await newLoan.save();
    res.status(200).json(savedLoan);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;