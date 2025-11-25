import { compare } from "bcryptjs";
import prisma from "./prisma";

export async function validateCredentials(email, password) {
    const user = await prisma.user.findUnique({
        where: {email},
    })

    if(!user || !user.password) {
        return null;
    }

    const isValid = await compare(password, user.password);

    if (!isValid) {
        return null;
    }

    const {password: _, ...userWithoutPassword} = user;
    return userWithoutPassword
}