import Api from "./axios.config";

export const postEventRequest = async (data) => {
  const response = await Api.post("/event-request", data);
  return response.data;
};
