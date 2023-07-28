const sessionString = JSON.parse(sessionStorage.getItem('postItem'));

document.querySelector('#title').innerHTML = `${sessionString.title}`;
document.querySelector('#authorName').innerHTML = sessionString.authorName;
document.querySelector('#date').innerHTML = sessionString.date;
document.querySelector('#disc').innerHTML = sessionString.disc;
document.querySelector('#img').src = `../static/uploads/${sessionString.img}`;