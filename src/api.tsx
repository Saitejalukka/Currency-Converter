import axios, { AxiosError } from "axios";
import React from "react";

type ResponseType = {
	usd: Record<string, number>;
};

export const makeApiCallToGetData = async (): Promise<ResponseType> => {
	try {
		const { data } = await axios.get<ResponseType>(
			"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
		);
		return data;
	} catch (error) {
		const axiosErrorResponse = error as AxiosError<{ message: string }>;
		throw new Error(axiosErrorResponse.response?.data?.message || "API Error");
	}
return (
		<div className="flex flex-col">
			<label htmlFor="amount_usd" className="text-sm text-black mb-1">
				Enter USD amount:
			</label>
		</div>
	)
};

<<<<<<< HEAD
export default makeApiCallToGetData;
=======
export default makeApiCallToGetData;
>>>>>>> 8b80b06a33a2053908e60997f103eee2facf84de
