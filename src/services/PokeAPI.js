export const getPokeRootApi = async (rootUrl) => {
  const response = await fetch(`${rootUrl}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

  return response;
};

export const getPokeValuesApi = async (rootUrl, urlParams = "") => {
  const response = await fetch(`${rootUrl}${urlParams}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));

  return response;
};
