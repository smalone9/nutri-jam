const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirName, "../../client/build/index.html"));
});

module.exports = router;
