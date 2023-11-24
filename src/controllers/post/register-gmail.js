import { CreateAccessToken } from "../../libs/jwt.js";
import Gmail from "../../schemas/schema-awgap.js";
import bcrypt from "bcrypt";

export const useRegisterGmail = async (req, res) => {
  try {
    const { gmail, password } = req.body;

    const gmail_found = await Gmail.findOne({ gmail });
    if (gmail_found) {
      return res.json({
        message: null,
        status: 401,
        error: "the email already exists",
      });
    }

    const regex = /^[a-zA-Z0-9_.]+$/;
    if (regex.test(gmail_found) === false) {
      return res.json({
        message: null,
        status: 401,
        error: "Gmail contains invalid characters",
      });
    }
    const encrytedPassword = await bcrypt.hash(password, 10);
    const dataGmail = new Gmail({
      gmail: gmail,
      password: encrytedPassword,
    });

    const saveGmail = await dataGmail.save();

    const token = await CreateAccessToken({ id: saveGmail._id });
    res.cookie("TK_AWGAP", token, {
      sameSite: "none",
      secure: true,
      httpOnly: true,
      domain: "mart-pos.vercel.app",
    });

    const account = saveGmail;
    return res.json({
      account: {
        gmail: account.gmail,
        password: "encrypted",
        createdAt: account.createdAt,
      },
      message: "Company created successfully",
      status: 204,
      error: null,
    });
  } catch (error) {
    return res.json({
      message: error.message,
      status: 500,
      error: "Internal error occurred while creating account",
    });
  }
};
