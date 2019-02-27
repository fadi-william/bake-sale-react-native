import Axios from "./axios";

const API_HOST = "https://bakesaleforgood.com";

interface IDealResponseModel {
  key: string;
  title: string;
  cause: {
    name: string;
  };
  media: string[];
}

export const fetchInitialDeals = () => {
  return Axios.get<IDealResponseModel>(`${API_HOST}/api/deals`);
};
