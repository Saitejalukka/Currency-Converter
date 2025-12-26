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

export default makeApiCallToGetData;
