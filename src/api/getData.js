import axios from 'axios';

export default function getData(baseUrl, schemaType, params, setData) {
  axios
    .get(`${baseUrl}/${schemaType}`, {
      params: params,
    })
    .then(response => {
      console.log('getData', response);
      setData &&
        setData(prevData => {
          if (prevData.results) prevData.results = [...prevData.results, response.data.results];
          return response.data;
        });
      return response.data;
    })
    .catch(error => {
      console.log(`We had trouble fetching ${schemaType}`);
    });
}
