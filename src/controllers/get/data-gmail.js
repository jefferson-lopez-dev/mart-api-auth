import Gmail from "../../schemas/schema-awgap.js";

export const useGetAccount = async (req, res) => {
  const id = req.gmail.id;

  try {
    const gmail_found = await Gmail.findById(id);
    const account = gmail_found;

    return res.json({
      account: {
        gmail: account.gmail,
        password: "encrypted",
        createdAt: account.createdAt,
      },
      message: {
        success: "Your password is encrypted",
        error: null,
      },
      status: 204,
    });
  } catch (error) {
    return res.json({
      account: {},
      message: {
        success: null,
        error: error.message,
      },
      status: 500,
    });
  }
};
