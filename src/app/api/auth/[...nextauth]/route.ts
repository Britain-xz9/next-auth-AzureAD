import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import { NextAuthOptions } from "next-auth";

const clientId = process.env.AZURE_AD_CLIENT_ID;
const clientSecret = process.env.AZURE_AD_CLIENT_SECRET;
const tenantId = process.env.AZURE_AD_TENANT_ID;

if (!clientId || !clientSecret || !tenantId) {
  throw new Error("Missing required Azure AD environment variables");
}

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId,
      clientSecret,
      tenantId,
    }),
  ],
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
