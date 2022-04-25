export interface IFlickrResponse {
  stat: string;
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: IFlickrPhoto[];
    total: number;
  };
}

export interface IFlickrPhoto {
  id: string;
  farm: number;
  isFamily: number;
  isFriend: number;
  isPublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}
