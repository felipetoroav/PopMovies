const KEY = 'c77aa4b1';

// const DefaultMovies = ["Spider-man+homecoming", "Batman", "Aquaman", "Shazam", "Avengers", "Avengers+infinity+war", "Antman", "Black+panter", "Wonder+woman", "Hulk"];

// let pelis = [];

async function fetchMovies (movie) {
  // debugger
  const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${KEY}`);
  const data = await response.json();

  try {
    // pelis.push(data)
    return data;
    console.log(data)
  } catch(error) {
    console.error(error)
  }
}

// function getMovies () {
//   DefaultMovies.forEach(element => {
//     fetchMovies(element)
//   });

//   return (pelis)
// }

class api extends React.Component {
  state = {
    pelis: [],
    DefaultMovies: ["Spider-man+homecoming", "Batman", "Aquaman", "Shazam", "Avengers", "Avengers+infinity+war", "Antman", "Black+panter", "Wonder+woman", "Hulk"],
  }

  conponentDidMount() {
    fetchMovies("Batman");
  }

  fetchMovies = async (movie) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${KEY}`);
    const data = await response.json();

    try {
      this.setState({ pelis: data})
    } catch(error) {
      console.error(error)
    }
  }

}
