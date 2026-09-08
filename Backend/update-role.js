import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const email = 'andi.hidayat96@gmail.com';
  
  const updatedUser = await prisma.user.update({
    where: { email },
    data: { role: 'customer' }
  });
  
  console.log(`Updated ${email} role to: ${updatedUser.role}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
