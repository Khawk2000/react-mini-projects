import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const checkUser = async () => {
  const user = await currentUser();

  //Check for current logged in clerk user
  if (!user) {
    return null;
  }

  //Check if the user is already in db
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  //If user is in db
  if (loggedInUser) {
    return loggedInUser;
  }

  //If not in db create new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
