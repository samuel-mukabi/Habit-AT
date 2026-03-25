import { auth } from "@/app/(backend)/lib/auth";

export const { GET, POST, PUT, DELETE, PATCH } = auth.handler();