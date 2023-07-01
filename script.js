function searchCandidates() {
    
    var searchInput = document.querySelector('.search-bar input[type="text"]').value;
  var searchResults = performSearch(searchInput);
   var searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = '';
  
   for (var i = 0; i < searchResults.length; i++) {
      var candidate = searchResults[i];
  
  
      var candidateCard = document.createElement('div');
      candidateCard.classList.add('candidate-card');
  
      
      var candidateName = document.createElement('h3');
      candidateName.innerText = candidate.name;
      candidateCard.appendChild(candidateName);
  
      var candidateLocation = document.createElement('p');
      candidateLocation.innerText = 'Location: ' + candidate.location;
      candidateCard.appendChild(candidateLocation);
  
      var candidateSummary = document.createElement('p');
      candidateSummary.innerText = candidate.summary;
      candidateCard.appendChild(candidateSummary);
  
      var shortlistButton = document.createElement('button');
      shortlistButton.innerText = 'Shortlist';
      candidateCard.appendChild(shortlistButton);
  
      var contactButton = document.createElement('button');
      contactButton.innerText = 'Contact';
      candidateCard.appendChild(contactButton);
  
      var viewProfileButton = document.createElement('button');
      viewProfileButton.innerText = 'View Full Profile';
      candidateCard.appendChild(viewProfileButton);
  
    
      searchResultsContainer.appendChild(candidateCard);
    }
  }
  
  function performSearch(searchTerm) {
   
    var results = [
      {
        name: 'Sai',
        location: 'india',
        summary: 'Experienced software developer with expertise in JavaScript.'
      },
      {
        name: 'Kiran',
        location: 'india',
        summary: 'Skilled UI/UX designer with a keen eye for detail.'
      },
     
    ];
  
    return results;
  }
  