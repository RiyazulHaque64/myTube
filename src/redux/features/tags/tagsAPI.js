import { AXIOS } from "../../../utils/axios";

export const getTags = async () => {
  const response = await AXIOS.get("/tags");
  return response.data;
};
