document.getElementById('searchButton').addEventListener('click', function() {
    const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your actual API key
    const movieTitle = document.getElementById('searchInput').value;
  
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`)
      .then(response => response.json())
      .then(data => {
        // Display movie data on the UI
        document.getElementById('movieData').innerHTML = `
          <h2>${data.Title}</h2>
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <!-- Add more details as needed -->
        `;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  