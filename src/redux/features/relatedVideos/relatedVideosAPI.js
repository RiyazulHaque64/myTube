import { AXIOS } from "../../../utils/axios";

export const getRelatedVideos = async ({ id, tags }) => {
  let queryString = "";
  tags.length > 0 &&
    tags.map((tag) => {
      queryString = queryString + "tags_like=" + tag + "&";
    });
  const limit = 4;
  const response = await AXIOS.get(
    `/videos?${queryString}id_ne=${id}&_limit=${limit}`
  );
  return response.data;
};
