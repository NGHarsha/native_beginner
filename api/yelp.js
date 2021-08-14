import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer zRXmzzBJJfikKeAtJ8SLgrBmclm9s_mOjrm-RsofcKuo4n3-Dln4WrXZkthmt3Jxa1XlpAXgtJX5iUwx2ztVIj52W5tdwM178-xNWWEUPUFNFggTewUYIMld6mcTYXYx",
  },
});
