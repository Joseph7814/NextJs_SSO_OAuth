import jwt from "jsonwebtoken"

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded) {
      throw new Error("Invalid token format");
    }
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
  }
};
