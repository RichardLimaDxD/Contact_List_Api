import { sign } from "jsonwebtoken";

const secretKey: string = "1234";
process.env.SECRET_KEY = secretKey;

export default {
  genToken: (id: number) => {
    return sign({}, secretKey, { subject: id.toString() });
  },
  invalidSignature: sign({}, "invalid_signature"),
  jwtMalformed: "12345",
};
