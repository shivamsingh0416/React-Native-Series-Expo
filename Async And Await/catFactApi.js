const APIURL = "https://catfact.ninja/fact";
fetch(APIURL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.fact);
  })
  .catch((err) => {
    console.log("Error Network", err);
  });

  /** Here is api which gives cat facts randoms cat facts */