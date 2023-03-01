const message = document.querySelector(`#message`);

const addMovie = (event) => {
    event.preventDefault();
    let inputfield = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');

    movieTitle.textcontent = inputField.value;
    movieTitle. addEventlistener ('click',crossOffMovie)

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');
    deleteBtn.textcontent = 'x';

    deleteBtn.addEventlistener('click', deleteMovie);

    movie.appendChild(deleteBtn)

    document.querySelector('ul'). appendChild(movie);

    inputField.value = '';
}

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  message.textContent = '${event.target.parentNode.textContent.replace('x', '')} Deleted;
  revealMessage();
}

const crossOffMovie =(event) => {
  event.target.classlist.toggle('checked');

  if(event.target.classList.contains('checked')){
message.textcontent = '${event.target.textcontent} Watched';
  } else {
    message.textContent = '${event.target.textContent} Added Back'
  }

  revealMessage();
}

const revealMessage = () => {
  message.classList.remove('hide');
  setTimeout( () => message.className = 'hide', 1000);
}

document.querySelector('form').addEventlistener('submit', addMovie)