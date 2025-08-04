import { clerkClient as _clerk } from "@clerk/nextjs/server";

export const clerk = async () => await _clerk();   // always returns ClerkClient
