document.getElementById("predictButton").addEventListener("click", function() {
    const input = document.getElementById("newsInput").value;
    const prediction = Math.random() < 0.5 ? "Depressed" : "Not Depressed"; // Random prediction
    document.getElementById("predictionResult").textContent = `Prediction: ${prediction}`;
  });
  

document.getElementById("uploadButton").addEventListener("click", function() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const csvData = e.target.result;
        const rows = csvData.split("\n");
        const predictions = [];
  
        for (const row of rows) {
          const columns = row.split(",");
          const newsText = columns[0].trim(); // Assuming the news text is in the first column
  
          // Perform prediction on 'newsText'
          const prediction = Math.random() < 0.5 ? "Fake" : "Not Fake"; // Random prediction
          predictions.push({ newsText, prediction });
        }
  
        displayFilePredictions(predictions);
      };
  
      reader.readAsText(file);
    } else {
      alert("Please select a CSV file.");
    }
  });
  
  function displayFilePredictions(predictions) {
    const filePredictionResult = document.getElementById("filePredictionResult");
    filePredictionResult.innerHTML = "File Predictions:<br>";
  
    for (const prediction of predictions) {
      const result = document.createElement("p");
      result.textContent = `${prediction.newsText}: ${prediction.prediction}`;
      filePredictionResult.appendChild(result);
    }
  }

  document.getElementById("predictButton").addEventListener("click", function() {
    // Code for the single news prediction
    // ...
  });
  
  document.getElementById("uploadButton").addEventListener("click", function() {
    // Code for handling file upload and predictions
    // ...
  });
  