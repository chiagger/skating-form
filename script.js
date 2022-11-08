const pssw = document.querySelector("#password");
const psswConf = document.querySelector("#password-conf");


psswConf.addEventListener("input", () => {
    if (psswConf.value === pssw.value) {
        psswConf.setCustomValidity("");
    }
    if (psswConf.value != pssw.value) {
        psswConf.setCustomValidity("passwords do not match");
    }
})