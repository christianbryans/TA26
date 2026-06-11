import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const email = 'andi.hidayat96@gmail.com';
  const user = await prisma.user.findUnique({ where: { email } });
  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
