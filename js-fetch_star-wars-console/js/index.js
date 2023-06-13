console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      console.log(data["results"][2]["eye color"]);
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred");
  }
}

fetchData();
