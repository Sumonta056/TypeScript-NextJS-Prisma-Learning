## Resources :

- [Prisma ORM - MongoDB - Typescript](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/connect-your-database-typescript-mongodb)
- [MongoDB Atlas Online](https://www.mongodb.com/products/platform/atlas-database)
- [Prisma Crash Course - Traverse Media](https://www.traversymedia.com/blog/prisma-crash-course)

## Getting Started :

- **Install Prisma CLI**

```bash
npm init -y
```

```bash
npm install typescript ts-node @types/node -D
```

```bash
npx tsc --init
```

```bash
npm i prisma
```

```bash
npx prisma init
```

- **Create a new database in MongoDB Compas and modify `.env` file**

> > DATABASE_URL="mongodb://localhost:27017/prisma-orm"

- **Create a new model in `schema.prisma` file**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id       String    @id @default(auto()) @map("_id") @db.ObjectId //Primary key and auto-generated
  email    String    @unique //Required field and unique
  name     String? //Optional field
  articles Article[] //Relation to Article model
}

model Article {
  id       String  @id @default(auto()) @map("_id") @db.ObjectId //Primary key and auto-generated
  title    String //Required field
  body     String? //Optional field
  aurthor  User    @relation(fields: [authorId], references: [id]) //Relation to User model with foreign key
  authorId String  @db.ObjectId //Foreign key
}
```

- **Generate Prisma Client**

For SQL Database

```bash
npx prisma migrate --name init --preview-feature
```

For MongoDB Database

```bash
npx prisma generate
```

```bash
npx prisma db push
```

- **Create a new user in `index.ts` file**

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      name: "Sumonta Saha",
      email: "sumontasaha80@gmail.com",
    },
  });

  console.log("Created new user: ", user);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

- **Run the script**

```bash
npx ts-node index.ts
```
