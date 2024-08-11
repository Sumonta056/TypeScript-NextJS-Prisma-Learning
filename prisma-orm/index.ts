import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a new user
  // const users = await prisma.user.findMany();

  const user = await prisma.user.findMany({ orderBy: { name: "asc" } });

  console.log(user);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  
