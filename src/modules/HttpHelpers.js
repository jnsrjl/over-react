/*
* Returns array with param amount of images from jsonplaceholder.com
* Restrict amount to [1-50]
*/
export function getPhotos(amount) {
  // Only allow sensible amounts
  if (amount < 1 || amount > 50) {
    return [];
  }

  const base = "https://jsonplaceholder.typicode.com/photos";

  return fetch(base + '?_limit=' + amount)
    .then(response => {
      // Check data
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response failed miserably =(");
    })
    .then(json => {
      // Remove http: / https: from uris
      json.forEach((item) => removeHttp(item));
      return json;
    })
    .catch(error => {
      console.log("Fetch failed miserably =( : " + error.message);
    });
}

function removeHttp(obj) {
  if ("url" in obj) {
    let indexA = -1;
    indexA = obj.url.indexOf(":");

    if (indexA !== -1) {
      obj.url = obj.url.substring(indexA + 1);
    }
  }

  if ("thumbnailUrl" in obj) {
    let indexB = -1;
    indexB = obj.thumbnailUrl.indexOf(":");

    if (indexB !== -1) {
      obj.thumbnailUrl = obj.thumbnailUrl.substring(indexB + 1);
    }
  }
}
