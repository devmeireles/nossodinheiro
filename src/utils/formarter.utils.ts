import { DateTime } from "luxon";

const getFormatedDate = (inputDate: string): string => {
  return DateTime.fromISO(inputDate).toFormat("dd-MM-yyyy");
};

const getAge = (inputeDate: string): number => {
  const now = DateTime.now();
  const birthdateObj = DateTime.fromISO(inputeDate);
  const age = now.diff(birthdateObj, "years").years;

  return Math.floor(age);
};

const getFormatedCurreny = (input: number): string => {
  const formattedNumber = input.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `R$${formattedNumber}`;
};

const getAverageTicket = (total: number, expensesQtd: number) => {
  const averageVal = total / expensesQtd;
  const averageValFormated = getFormatedCurreny(averageVal);

  return averageValFormated;
};

export { getAge, getAverageTicket, getFormatedCurreny, getFormatedDate };

