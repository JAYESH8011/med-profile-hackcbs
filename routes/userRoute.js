const express = require("express")
const {
    updateDetails,
    firstTimeUpdate,
    addDoctorVisit,
    addLabReport,
    updateDoctorVisit,
    deleteDoctorVisit,
    deleteLabReport,
} = require("../controllers/userControllers")
const router = express.Router()
const { requiresAuth } = require("express-openid-connect")

router.route("/updatedetails").get(requiresAuth(), updateDetails)
router.route("/firstupdate").post(requiresAuth(), firstTimeUpdate)
router.route("/adddoctorvisit").post(requiresAuth(), addDoctorVisit)
router.route("/addlabreport").post(requiresAuth(), addLabReport)
router.route("/updatedoctorvisit").post(requiresAuth(), updateDoctorVisit)
router.route("/deletedoctorvisit").delete(requiresAuth(), deleteDoctorVisit)
router.route("/deletelabreport").delete(requiresAuth(), deleteLabReport)

module.exports = router
