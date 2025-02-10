import { businessApi } from "@/server/api/axios";

const getAllTransactions = async () => {
  const response = await businessApi.get("/transactions");
  return response.data;
};

export { getAllTransactions };
