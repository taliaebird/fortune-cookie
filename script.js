function onClick(e) {
  e.preventDefault();

  const url = 'https://api.adviceslip.com/advice';

  fetch(url)
    .then(function(response) {
      if(response.status!=200) {
        return {
          slip : {
              advice : "Error calling the Fortune Cookie API. No cookie for you."
            }
          }
        }
      return response.json();
    }).then(function(json) {
      console.log(json.slip.advice);
      info = json.slip.advice;
      if (info === null) {
        return;
      }
      text = "<div class='fortune'>"+info+"</div>";
      document.getElementById('result').innerHTML = text;
    })
}

document.getElementById('button').addEventListener('click', onClick);
