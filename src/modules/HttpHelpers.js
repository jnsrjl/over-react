/*
* Returns array with param amount of images from jsonplaceholder.com
* Restrict amount to [1-50]
*/
export function getPhotos(amount) {
  // Only allow sensible amounts
  if (amount < 1 || amount > 50) {
    return [];
  }
  fetch('https://jsonplaceholder.typicode.com/photos' + '?_limit=' + amount)
    .then(response => {
      // Check data
      if (response.ok) {
        return response.data;
      }
      throw new Error("Network response failed miserably =(");
    })
    .catch(error => {
      console.log("Fetch failed miserably =(\n" + error.message);
    });
}
