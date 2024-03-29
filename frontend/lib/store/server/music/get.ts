import axios from "@/lib/api/axios";
import { musicApiResSchema } from "./schema";
import { musicSelector } from "./selector";

const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export const getMusics = async () => {
  const response = await axios.get(
    `${API_URL}/api/musics?pagination[page]=1&pagination[pageSize]=7&populate=*`
  );

  const modifedData = musicSelector(musicApiResSchema.parse(response.data));

  return modifedData;
};
