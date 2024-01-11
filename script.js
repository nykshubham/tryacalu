function calculateCarbon() {
  const url = document.getElementById('urlInput').value;

  // Make the API request using the Netlify serverless function
  fetch(`/.netlify/functions/netlify-function?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      // Display the result
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <p>URL: ${data.url}</p>
        <p>Green Hosting: ${data.green ? 'Yes' : 'No'}</p>
        <p>Bytes Transferred: ${data.bytes}</p>
        <p>Cleaner Than: ${data.cleanerThan}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching Website Carbon data:', error);
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = 'Error fetching Website Carbon data.';
    });
}
