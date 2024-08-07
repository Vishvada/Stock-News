import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import validator from "email-validator";

const saltRounds = 10;

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

main().catch((error) => {
  console.error("Error in main:", error);
}).finally(async () => {
  await prisma.$disconnect();
});

function validateName(name) {
  return name && name.trim() !== "";
}

function validateEmail(email) {
  return email && validator.validate(email);
}

function validatePassword(password, minLength = 8, maxLength = 100) {
  return password && password.length >= minLength && password.length <= maxLength;
}

export async function addUser(name, email, password) {
  const response = { error: false, message: "" };

  if (!validateName(name)){
    response.error = true;
    response.message = "Name is required.";
    return response;
  }

  if (!validateEmail(email)) {
    response.error = true;
    response.message = "Invalid email address, check again.";
    return response;
  }

  if (!validatePassword(password)) {
    response.error = true;
    response.message = "Password must be between 8 and 100 characters.";
    return response;
  }

  try {
    const checkResult = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (checkResult) {
      response.error = true;
      response.message = "Email already exists. Try logging in.";
    } else {
      const hash = await bcrypt.hash(password, saltRounds);
      const insertResult = await prisma.user.create({
        data: {
          name: name.trim(),
          email: email.trim(),
          password: hash,
        },
      });

      if (insertResult) {
        response.message = "User account created successfully.";
      } else {
        response.error = true;
        response.message = "Failed to create user account.";
      }
    }
  } catch (error) {
    response.error = true;
    response.message = error.message || "An unexpected error occurred";
    console.error("Error in addUser function:", error);
  }

  return response;
}

export async function checkPassword(email, loginPassword) {
  const response = { error: false, message: "" };

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if(user){
      const isMatch = await bcrypt.compare(loginPassword, user.password);
      if(isMatch){
        response.message = "Password is correct";
      } else {
        response.error = true;
        response.message = "Password is incorrect";
      }
    } else {
      
    }
  } catch (err) {
    console.error("Error in checkPassword:", err);
    response.error = true;
    response.message = err.message || "An unexpected error occurred";
  }

  return response;
}

export async function getUser(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        preferred_stocks: true
        // Exclude the password field
      },
    });

    return user || null;
  } catch (err) {
    console.error("Error in getUser:", err);
    throw err;
  }
}

export async function addStock(stockName) {
  try {
    const existingStock = await prisma.stock.findUnique({
      where: { symbol: stockName }
    });

    if (existingStock) {
      return;
    }

    const newStock = await prisma.stock.create({
      data: { symbol: stockName }
    });

    if (newStock) {
      console.log(`Successfully added stock ${stockName}`);
    } else {
      console.error("Failed to add stock");
    }
  } catch (error) {
    console.error("Error in addStock:", error.message);
  }
}


export async function getUserStocks(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { preferred_stocks: true }
    });

    if (!user) {
      return { error: true, message: "User not found" };
    }

    const stockIds = user.preferred_stocks;

    if (!stockIds.length) {
      return { error: false, message: [] };
    }

    const stocks = await prisma.stock.findMany({
      where: { id: { in: stockIds } },
      select: { symbol: true }
    });

    return { error: false, message: stocks.map(stock => stock.symbol) };
  } catch (error) {
    console.error("Error in getUserStocks:", error);
    return { error: true, message: error.message };
  }
}

export async function getAllStocks() {
  try {
    const stocks = await prisma.stock.findMany({
      select: {
        id: true,
        symbol: true
      }
    });
    return { error: false, message: stocks };
  } catch (err) {
    console.error("Error in getAllStocks:", err);
    return { error: true, message: err.message };
  }
}


export async function addUserStocks(email, stockIds) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, preferred_stocks: true }
    });

    if (!user) {
      return { error: true, message: "User not found" };
    }

    let preferredStocks = user.preferred_stocks || [];
    
    preferredStocks = [...new Set([...preferredStocks, ...stockIds])];

    await prisma.user.update({
      where: { id: user.id },
      data: { preferred_stocks: preferredStocks }
    });

    return { error: false, message: "Stocks added successfully" };
  } catch (error) {
    console.error("Error in addUserStocks:", error);
    return { error: true, message: error.message };
  }
}