const express = require("express"),
      router = express.Router();
router.get("/", (req, res) => {
        res.render("home");
    }

);




router.get("/AsalSayi", (req, res) => {
    res.render("AsalSayi");
}

);
router.get("/PalindromSayi", (req, res) => {
    res.render("PalindromSayi");
}

);
router.get("/KaprekarSayi", (req, res) => {
    res.render("KaprekarSayi");
}

);
router.get("/LasaSayilari", (req, res) => {
    res.render("LasaSayilari");
}

);
router.get("/MersenneSayilari", (req, res) => {
    res.render("Mersenne");
}

);
router.get("/ArmstrongSayi", (req, res) => {
    res.render("ArmstrongSayi");
}

);
router.get("/HarshadSayi", (req, res) => {
    res.render("HarshadSayi");
}

);
router.get("/TauSayisi", (req, res) => {
    res.render("TauSayisi");
}

);
router.get("/SmithSayilari", (req, res) => {
    res.render("SmithSayisi");
}

);
router.get("/MukemmelSayi", (req, res) => {
    res.render("MukemmelSayi");
}

);
router.get("/ZenginSayi", (req, res) => {
    res.render("ZenginSayi");
}

);
router.get("/UcgenselSayi", (req, res) => {
    res.render("ÜçgenselSayi");
}

);
router.get("/DudeneySayisi", (req, res) => {
    res.render("DudeneySayisi");
}

);
router.get("/AdamSayisi", (req, res) => {
    res.render("AdamSayisi");
}

);
router.get("/SeriSayi", (req, res) => {
    res.render("SeriSayi");
}

);




module.exports = router;