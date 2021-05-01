export async function makeAPI(url) {
  return fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("in api", result);
        return result;
      },
      (error) => {
        return null;
      }
    );
}
