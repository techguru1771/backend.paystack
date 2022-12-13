import { expressjwt } from "express-jwt";

require ("dotenv").config();
export const requiresignin = expressjwt ({
    secret:process.env.TOKEN_SECRET,
    algorithms:["HS256"],
    userProperty:"auth",
}).unless({
    path:["api/signin"]
})