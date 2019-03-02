import Axios from "./axios";

const API_HOST = "https://bakesaleforgood.com";

// Shared Interfaces.

export interface User {
  avatar: string;
  name: string;
}

export interface Cause {
  name: string;
}

// Deals API Request.

export interface IDealItemResponseModel {
  key: string;
  title: string;
  price: number;
  cause: Cause;
  media: string[];
}

interface IDealsResponseModel extends Array<IDealItemResponseModel> {}

export const fetchInitialDeals = () => {
  return Axios.get<IDealsResponseModel>(`${API_HOST}/api/deals`);
};

// Deal API Request with a search term.

export const fetchDealsWithSearch = (searchTerm: string) => {
  if (searchTerm == "") {
    return fetchInitialDeals();
  }

  return Axios.get<IDealsResponseModel>(
    `${API_HOST}/api/deals?searchTerm=${searchTerm}`
  );
};

// Deal API Request.

export interface IDealDetailsResponseModel {
  key: string;
  dealType: string;
  title: string;
  price: number;
  makerPercentage: number;
  cause: Cause;
  description: string;
  tags: string;
  charity: null;
  charityName: string;
  charityDescription: string;
  charityWebsite: string;
  availableQuantity: number;
  geoLocation: string;
  url: string;
  user: User;
  media: string[];
}

export const fetchDealDetails = (dealId: string) => {
  return Axios.get<IDealDetailsResponseModel>(
    `${API_HOST}/api/deals/${dealId}`
  );
};
