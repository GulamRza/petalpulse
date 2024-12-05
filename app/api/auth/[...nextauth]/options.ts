import { prisma } from "@/app/utils/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text", placeholder: "you@example.com" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials) return null;
  
          const { email, password } = credentials;

          const user = await prisma.user.findUnique({
            where: { email }
          });

          if(!user){
            return null;
          }
  
          // Replace with your authentication logic, e.g., database validation
          if (user.password === password) {
            return user;
          }
  
          return null; // Authentication failed
        },
      }),
    ],
    pages: {
      signIn: "/auth/sign-in",
      error: "/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user = {
            id: token.id as string,
            email: token.email,
            name: token.name,
          };
        }
        return session;
      },
    },
  };