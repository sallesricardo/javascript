axios
  .get("https://api.github.com/users/sallesricardo")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (reject) {
    console.warn("Error" + reject);
  });
