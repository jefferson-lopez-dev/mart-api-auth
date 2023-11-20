export const useLogoutAccount = async (req, res) => {
  res.cookie("TK_AWGAP", "", { expires: new Date(0) });
  return res.json({
    account: {},
    message: "Closed section in your account",
    status: 200,
    error: null,
  });
};
