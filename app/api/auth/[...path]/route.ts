import { auth } from "@/app/lib/auth";

export const { GET, POST, PUT, DELETE, PATCH } = auth.handler();