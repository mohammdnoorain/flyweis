const express = require("express");
const appcontroller = require("../Controller/appController.js")

const appRoutes = express.Router();

appRoutes.post("/register-bankDetails/:id", appcontroller.RegisterBankDetails);
appRoutes.get("/bankDetails/:id", appcontroller.getBankDetails);

appRoutes.post("/register-nomineeDetails/:id", appcontroller.RegisterNomineeDetails);
appRoutes.get("/nomineeDetails/:id", appcontroller.getNomineeDetails);
//
appRoutes.post("/register-ekycDetails/:id", appcontroller.RegisterEkycDetails);
appRoutes.get("/ekycDetails/:id", appcontroller.getEkycDetails);

appRoutes.post("/register-rmDetails/:id", appcontroller.RegisterRmDetails);
appRoutes.get("/rmDetails/:id", appcontroller.getRmDetails);

appRoutes.post("/register-currentbalance/:id", appcontroller.RegisterBalabceDetails);
appRoutes.get("/currentbalance/:id", appcontroller.getBalanceDetails);

appRoutes.post("/register-transactionhistory/:id", appcontroller.RegisterTransactionDetails);
appRoutes.get("/transactionhistory/:id", appcontroller.getTransactionDetails);




module.exports = {
  appRoutes
};
