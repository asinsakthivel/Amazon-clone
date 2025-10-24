import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id; // 👈 userId will be in token payload
      next();
    } catch (err) {
      return res.status(401).json({ error: "Token invalid or expired" });
    }
  }

  if (!token) {
    return res.status(401).json({ error: "Not authorized, token missing" });
  }
};
