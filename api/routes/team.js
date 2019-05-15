const TeamMember = require("../../models/teamMember");
module.exports = router => {
  router.get("/teams", (req, res) => {
    TeamMember.find()
      .sort({ name: 1 })
      .exec()
      .then(docs => res.status(200).json(docs))
      .catch(err =>
        res
          .status(400)
          .json({ message: "Error while fetching teamMembers", error: err })
      );
  });
  router.post("/teams", (req, res) => {
    const teamMember = new TeamMember(req.body);
    teamMember.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(result);
    });
  });
};
