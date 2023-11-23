import { CreateAccessToken } from "../../libs/jwt.js";
import Gmail from "../../schemas/schema-awgap.js";
import bcrypt from "bcrypt";

export const useLoginGmail = async (req, res) => {
  try {
    const { gmail, password } = req.body;

    const gmail_found = await Gmail.findOne({ gmail });
    if (!gmail_found) {
      return res.json({
        message: null,
        status: 404,
        error: "Gmail not found, please try again",
      });
    }

    const isMatch = await bcrypt.compare(password, gmail_found.password);
    if (!isMatch) {
      return res.json({
        message: null,
        status: 401,
        error: "Invalid creadentials, try again",
      });
    }

    const token = await CreateAccessToken({ id: gmail_found._id });
    res.cookie("TK_AWGAP", token);

    const account = gmail_found;
    return res.json({
      account: {
        gmail: account.gmail,
        password: "encrypted",
        createdAt: account.createdAt,
      },
      message: "Hi, Welcome to Mart POS👋",
      status: 204,
      error: null,
    });
  } catch (error) {
    return res.json({
      message: null,
      status: 500,
      error: "Internal error occurred while creating account",
    });
  }
};
