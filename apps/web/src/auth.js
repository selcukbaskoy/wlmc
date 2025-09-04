/**
 * WARNING: This file connects this app to Create's internal auth system. Do
 * not attempt to edit it. Do not import @auth/create or @auth/create
 * anywhere else or it may break. This is an internal package.
 */
import CreateAuth from "@auth/create";
import Credentials from "@auth/core/providers/credentials";

export const { auth } = CreateAuth({
  secret:
    process.env.AUTH_SECRET ||
    "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
    }),
  ],
  pages: {
    signIn: "/account/signin",
    signOut: "/account/logout",
  },
});
