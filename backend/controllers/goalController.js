// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};
// @desc Set goal
// @route Set /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  res.status(200).json({ message: "set goal" });
};
// @desc Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};
// @desc Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res, id) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
