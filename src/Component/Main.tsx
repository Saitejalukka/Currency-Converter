
import { useEffect, useState } from "react";
import { getCurrencyRates } from "../api";
import type { ResponseType } from "../types";
import bgImage from "../assets/global-virtual-currency-sign-techno-concept-background-design_1017-52482.jpg";

function Main() {
  const [apiResponse, setApiResponse] =
    useState<ResponseType | null>(null);

  const [convertTo, setConvertTo] = useState("INR");

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await getCurrencyRates();
        setApiResponse(response);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchRates();
  }, []);

  // Display loading until API response arrives
  if (!apiResponse) {
    return <p>Loading currency exchange rates...</p>;
  }

  // Access currency rates safely
  const rate = apiResponse.usd[convertTo.toLowerCase()];

  return (
	<div 
	className="bg-cover bg-center w-[100vw] h-[100vh]"
	style={{ backgroundImage: `url(${bgImage})` }}>
    <div>
      <h1>USD Currency Converter</h1>

      <p>Date: {apiResponse.date}</p>

      <p>USD to {convertTo}: {rate ?? "Rate unavailable"}</p>

      <select
        value={convertTo}
        onChange={(e) => setConvertTo(e.target.value)}
      >
        {Object.keys(apiResponse.usd).map((currencyCode) => (
          <option key={currencyCode} value={currencyCode.toUpperCase()}>
            {currencyCode.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
	</div>
  );
}

export default Main;
