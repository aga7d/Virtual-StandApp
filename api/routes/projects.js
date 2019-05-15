const Project = require("../../models/project");
module.exports = router => {
  router.get("/projects", (req, res) => {
    Project.find({ isActive: { $eq: true } })
      .sort({ name: 1 })
      .exec()
      .then(docs => res.status(200).json(docs))
      .catch(err =>
        res
          .status(400)
          .json({ message: "Error while fetching projets", error: err })
      );
  });
  router.post("/projects", (req, res) => {
    const project = new Project(req.body);
    project.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(result);
    });
  });
};
