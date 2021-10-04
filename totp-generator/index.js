const OTPAuth = require("otpauth");
module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  const seed = req.query.seed;

  const totp = new OTPAuth.TOTP({
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: seed,
  });
  const code = totp.generate();

  context.res = {
    body: code,
  };
};
