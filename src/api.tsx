
import type { ResponseType } from "./types";

const API_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

export const getCurrencyRates = async (): Promise<ResponseType> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch currency exchange rates");
  }

  const result: ResponseType = await response.json();

  return result;
};
