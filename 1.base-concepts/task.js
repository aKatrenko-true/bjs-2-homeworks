"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    return [-b / (2 * a)];
  }

  const firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
  const secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [firstRoot, secondRoot];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const loanAmount = amount - contribution;

  if (loanAmount <= 0) {
    return 0;
  }

  if (monthlyRate === 0) {
    return Number(loanAmount.toFixed(2));
  }

  const monthlyPayment = loanAmount * (
    monthlyRate
    + monthlyRate / ((1 + monthlyRate) ** countMonths - 1)
  );

  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}
