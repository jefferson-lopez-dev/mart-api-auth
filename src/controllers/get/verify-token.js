import Gmail from "../../schemas/schema-awgap.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

export const useVerifyToken = async (req, res) => {
  const { TK_AWGAP } = req.cookies;
  const TOKEN_SECRET = process.env.TOKEN_SECRET;

  if (!TK_AWGAP)
    return res.json({ message: null, status: 401, error: "Invalid TK_AWGAP" });

  jwt.verify(TK_AWGAP, TOKEN_SECRET, async (err, gmail) => {
    if (err) {
      return res.json({ message: null, status: 401, error: "Unauthorized" });
    }

    const gmail_found = await Gmail.findById(gmail.id);
    if (!gmail_found) {
      return res.json({
        message: null,
        status: 401,
        error: "Account not found, Unauthorized",
      });
    }

    return res.json({
      account: {
        id: gmail_found._id,
        gmail: gmail_found.gmail,
        password: "encrypted",
        createdAt: gmail_found.createdAt,
      },
      message: `Correct TK_AWGAP`,
      status: 200,
      error: null,
    });
  });
};
