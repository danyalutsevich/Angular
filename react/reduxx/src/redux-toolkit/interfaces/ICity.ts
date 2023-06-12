interface ICity {
  name: string;
  about: string;
  theMostFamousLandmark: { name: string; photos: string[] };
  landmarks: { name: string; photo: string }[];
  photos: string[];
}

export default ICity;
