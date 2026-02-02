const express = require("express");

const router = express.Router();
const {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    getJob,
} = require("../controllers/jobs");
const auth = require("../middleware/authentication");

router.route("/").post(auth, createJob).get(auth, getAllJobs);

router
    .route("/:id")
    .get(auth, getJob)
    .delete(auth, deleteJob)
    .patch(auth, updateJob);

module.exports = router;
