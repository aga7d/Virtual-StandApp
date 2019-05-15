const mongoose = require("mongoose");
const StandUp = require("../../models/standups");
module.exports = router => {
  //get 12 most relevant standups
  router.get("/standups", (req, res) => {
    StandUp.find()
      .sort({ createdOn: -1 })
      .limit(12)
      .exec()
      .then(docs => res.status(200).json(docs))
      .catch(err =>
        res
          .status(500)
          .json({ message: "Error finding standup meeting notes", error: err })
      );
  });
  //get by id
  router.get("/standups/:teamMemberId", (req, res) => {
    const qry = {
      teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
    };
    StandUp.find(qry)
      .sort({ createdOn: -1 })
      .exec((err, result) => {
        if (err)
          return res
            .status(400)
            .json({ message: "Error while fetching Standups", error: err });
        res.status(200).json(result);
      });
  });
  // create a standup
  router.post("/standups", (req, res) => {
    const standup = new StandUp(req.body);
    standup.save((err, result) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  });
};
