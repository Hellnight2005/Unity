import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongo";
import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user }: { user: { email?: string | null; name?: string | null; image?: string | null } }) {
            await connectToDatabase();
            await User.updateOne(
                { email: user.email },
                {
                    $setOnInsert: { name: user.name ?? undefined, image: user.image ?? undefined },
                    $set: { lastLoginAt: new Date() },
                },
                { upsert: true }
            );
            return true;
        },
        async session({ session }) {
            return session;
        },
    },
    session: { strategy: "jwt" },
    adapter: MongoDBAdapter(clientPromise as any),
};


