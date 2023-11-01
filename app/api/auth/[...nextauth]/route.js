import NextAuth from "next-auth/next";
import GoogleProider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	async session({ session }) {},
	async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
