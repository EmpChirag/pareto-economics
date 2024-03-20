import Api from "./axios.config";

export const postContactRequest = async (data) => {
  const response = await Api.post("/contact-request", data);
  return response.data;
};
