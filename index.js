// code here, goodluck!!
"use strict";

const prompt = require("prompt-sync")({ sigint: true });

// 1

function getValidNumberInput(promptMessage) {
  while (true) {
    const userInput = prompt(promptMessage);
    const numberValue = Number(userInput);

    if (!isNaN(numberValue)) {
      return numberValue;
    }

    console.log("❌ Input tidak valid! Masukkan angka yang benar.\n");
  }
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    const operator = prompt(promptMessage);

    if (validOperators.includes(operator)) {
      return operator;
    }

    console.log(
      "❌ Operator tidak valid! Gunakan salah satu: +, -, *, /, %, **\n"
    );
  }
}

// 2

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// 3

console.log("Welcome to calculator\n");

while (true) {
  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const operator = getValidOperatorInput("Masukkan operator (+ - * / % **): ");
  const num2 = getValidNumberInput("Masukkan angka kedua: ");

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  // 4

  console.log("\n------------------------------------");
  console.log("Hasil:", result);
  console.log("------------------------------------\n");

  const resultType = typeof result;
  console.log("Tipe data hasil:", resultType, "\n");

  if (resultType === "number") {
    if (result > 0) {
      console.log("➡️ Angka ini **positif**.");
    } else if (result < 0) {
      console.log("➡️ Angka ini **negatif**.");
    } else {
      console.log("➡️ Angka ini **nol (0)**.");
    }

    if (Number.isInteger(result)) {
      console.log("➡️ Ini adalah **integer**.");
    } else {
      console.log("➡️ Ini adalah **floating-point number**.");
    }

    const evenOrOdd = Number.isInteger(result)
      ? result % 2 === 0
        ? "Even (Genap)"
        : "Odd (Ganjil)"
      : "Tidak bisa ditentukan (bukan integer)";
    console.log("➡️ Jenis angka:", evenOrOdd);

    if (result > 0 && result % 2 === 0) {
      console.log("➡️ Angka ini **positif DAN genap** (menggunakan &&).");
    }

    if (result < 0 || result === 0) {
      console.log("➡️ Angka ini **negatif ATAU nol** (menggunakan ||).");
    }
  } else if (resultType === "string") {
    console.log("❗ Pesan Error:", result);
  } else {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  // 5

  const again = prompt("\nHitung lagi? (yes/no): ").toLowerCase();

  if (again === "no") {
    console.log("\nTerima kasih sudah menggunakan kalkulator!");
    break;
  }

  console.log("\n============================================\n");
}
