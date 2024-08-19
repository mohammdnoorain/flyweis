require("dotenv").config();

const bankSchema = require("../Modal/bankDetailsSchema.js");
const ekycSchema = require("../Modal/ekycSchema.js")
const nomineeSchema = require("../Modal/nomineeSchema.js")
const rmSchema = require("../Modal/rmSchema.js");
const investmentSchema = require("../Modal/investmentSchema.js");
const transactionSchema = require("../Modal/transactionSchema.js");

const RegisterBankDetails = async (req, res) => {
  try {
    const { account_holder_name, account_number, ifsc_code } = req.body;
    const { id } = req.params;
    const user = await bankSchema.findOne({ user_id: id });
    if (user) {
      const filter = { user_id: id };
      const update = {
        $set:
        {

          account_holder_name: account_holder_name,
          account_number: account_number,
          ifsc_code: ifsc_code

        }
      };
      const options = { new: true };
      const updatedUser = await bankSchema.findOneAndUpdate(filter, update, options);
      return res.status(200).send({ updatedUser: updatedUser, exist: true, message: "Bank data updated" });


    }
    const registerbankdetails = new bankSchema({
      user_id: id,
      account_holder_name: account_holder_name,
      account_number: account_number,
      ifsc_code: ifsc_code
    });

    const result = await registerbankdetails.save();

    return res.status(201).send({ success: true, result, message: "Bank Data Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};

const getBankDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const bankdata = await bankSchema.findOne({ user_id: id });
    if (!bankdata) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }



    return res.send({
      success: true,
      bankdata: bankdata,

      message: "bank data sended  successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};



const RegisterEkycDetails = async (req, res) => {
  try {
    const { aadhar_card_number, pan_card_number, date_of_birth, permanent_address, what_you_do } = req.body;
    const { id } = req.params;
    const user = await ekycSchema.findOne({ user_id: id });
    if (user) {
      const filter = { user_id: id };
      const update = {
        $set:
        {

          aadhar_card_number: aadhar_card_number,
          pan_card_number: pan_card_number,
          date_of_birth: date_of_birth,
          permanent_address: permanent_address,
          what_you_do: what_you_do,
        }
      };
      const options = { new: true };
      const updatedUser = await ekycSchema.findOneAndUpdate(filter, update, options);
      return res.status(200).send({ updatedUser: updatedUser, exist: true, message: "Bank data updated" });


    }
    const registerekycdetails = new ekycSchema({
      user_id: id,
      aadhar_card_number: aadhar_card_number,
      pan_card_number: pan_card_number,
      date_of_birth: date_of_birth,
      permanent_address: permanent_address,
      what_you_do: what_you_do,
    });

    const result = await registerekycdetails.save();

    return res.status(201).send({ success: true, result, message: "ekyc  Data Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};

const getEkycDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const ekycdata = await ekycSchema.findOne({ user_id: id });
    if (!ekycdata) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }



    return res.send({
      success: true,
      bankdata: ekycdata,

      message: "ekyc data sended  successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
const RegisterNomineeDetails = async (req, res) => {
  try {
    const { nominee_name, relation_with_you, nominee_phone, nominee_email, nominee_aadhaar_number } = req.body;
    const { id } = req.params;
    const user = await nomineeSchema.findOne({ user_id: id });
    if (user) {
      const filter = { user_id: id };
      const update = {
        $set:
        {

          nominee_name: nominee_name,
          relation_with_you: relation_with_you,
          nominee_phone: nominee_phone,
          nominee_email: nominee_email,
          nominee_aadhaar_number: nominee_aadhaar_number,
        }
      };
      const options = { new: true };
      const updatedUser = await nomineeSchema.findOneAndUpdate(filter, update, options);
      return res.status(200).send({ updatedUser: updatedUser, exist: true, message: "Bank data updated" });


    }
    const registernomineecdetails = new nomineeSchema({
      user_id: id,
      nominee_name: nominee_name,
      relation_with_you: relation_with_you,
      nominee_phone: nominee_phone,
      nominee_email: nominee_email,
      nominee_aadhaar_number: nominee_aadhaar_number,
    });

    const result = await registernomineecdetails.save();

    return res.status(201).send({ success: true, result, message: "ekyc  Data Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};
const getNomineeDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const nomineedata = await nomineeSchema.findOne({ user_id: id });
    if (!nomineedata) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }



    return res.send({
      success: true,
      nomineedata: nomineedata,

      message: "nominee data sended  successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};






const RegisterRmDetails = async (req, res) => {
  try {
    const { relationship_manager_name, phone_number, email_id } = req.body;
    const { id } = req.params;
    const user = await rmSchema.findOne({ user_id: id });
    if (user) {
      const filter = { user_id: id };
      const update = {
        $set:
        {

          relationship_manager_name: relationship_manager_name,
          phone_number: phone_number,
          email_id: email_id,
        }
      };
      const options = { new: true };
      const updatedUser = await rmSchema.findOneAndUpdate(filter, update, options);
      return res.status(200).send({ updatedUser: updatedUser, exist: true, message: "Bank data updated" });


    }
    const registerRmdetails = new rmSchema({
      user_id: id,
      relationship_manager_name: relationship_manager_name,
      phone_number: phone_number,
      email_id: email_id,
    });

    const result = await registerRmdetails.save();

    return res.status(201).send({ success: true, result, message: "ekyc  Data Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};
const getRmDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const rmdata = await rmSchema.findOne({ user_id: id });
    if (!rmdata) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }



    return res.send({
      success: true,
      relational_manager_data: rmdata,

      message: "rm  data sended  successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const RegisterBalabceDetails = async (req, res) => {
  try {
    const { current_invested, current_profit, current_profit_balance } = req.body;
    const { id } = req.params;
    const user = await investmentSchema.findOne({ user_id: id });
    if (user) {
      const filter = { user_id: id };
      const update = {
        $set:
        {

          current_invested: current_invested,
          current_profit: current_profit,
          current_profit_balance: current_profit_balance,
        }
      };
      const options = { new: true };
      const updatedUser = await investmentSchema.findOneAndUpdate(filter, update, options);
      return res.status(200).send({ updatedUser: updatedUser, exist: true, message: "Bank data updated" });


    }
    const registerBalancedetails = new investmentSchema({
      user_id: id,
      current_invested: current_invested,
      current_profit: current_profit,
      current_profit_balance: current_profit_balance,
    });

    const result = await registerBalancedetails.save();

    return res.status(201).send({ success: true, result, message: "ekyc  Data Registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};

const getBalanceDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const investmentdata = await investmentSchema.findOne({ user_id: id });
    if (!investmentdata) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }



    return res.send({
      success: true,
      investmentdata: investmentdata,

      message: "All balance   data sended  successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};






const RegisterTransactionDetails = async (req, res) => {
  try {
    const { withdrawal_amount, credit_amount } = req.body;
    const { id } = req.params;

    const user = await transactionSchema.findOne({ user_id: id });
    if (user) {
      const filter = { user_id: id };
      const update = {
        $push: {
          withdrawal_amount: { $each: withdrawal_amount },
          credit_amount: { $each: credit_amount },
        },
      };
      const options = { new: true };
      const updatedUser = await transactionSchema.findOneAndUpdate(filter, update, options);
      return res.status(200).send({ updatedUser: updatedUser, exist: true, message: "Bank data updated" });
    }

    const registerTransactionHistorydetails = new transactionSchema({
      user_id: id,
      withdrawal_amount: withdrawal_amount,
      credit_amount: credit_amount,
    });

    const result = await registerTransactionHistorydetails.save();
    return res.status(201).send({ success: true, result, message: "Transaction data registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error." });
  }
};
const getTransactionDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const transactiondata = await transactionSchema.findOne({ user_id: id });
    if (!transactiondata) {
      return res.send({
        success: false,
        message: "DATA not present",
      });
    }



    return res.send({
      success: true,
      transactiondata: transactiondata,

      message: "All transaction   data sended  successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};



module.exports = {

  RegisterBankDetails,
  getBankDetails,
  RegisterEkycDetails,
  getEkycDetails,
  RegisterNomineeDetails,
  getNomineeDetails,
  RegisterRmDetails,
  getRmDetails,
  RegisterBalabceDetails,
  getBalanceDetails,
  RegisterTransactionDetails,
  getTransactionDetails
}
