require("dotenv").config();

function openContact() {
  window.location = "/contact";
}
function OpenHome() {
  window.location = "/";
}
function OpenAbout() {
  window.location = "/about";
}
function OpenPost() {
  window.location = "/post";
}
function OpenGallery() {
  window.open("/gallery", "_blank");
}
function OpenPost_Defination(title, authorName, date, disc, img) {
  let sessionArray = {title, authorName, date, disc, img};
  // console.log(sessionArray);
  sessionStorage.setItem('postItem', JSON.stringify(sessionArray));
  // console.log("hit");
  window.location = "/post_defination";
}
function redirectFacebook() {
  window.open("https://www.facebook.com/jyotideeep.rsp", "_blank");
}
function redirectInstagram() {
  window.open("https://www.instagram.com/ramswarup_prajapati_/", "_blank");
}
function redirectYoutube() {
  window.open("https://www.youtube.com/@nayasaveraparivar7615", "_blank");
}
function redirectTwitter() {
  window.open("https://twitter.com/NayaParivar", "_blank");
}
function redirectDevloper() {
  window.open("/devloper", "_blank");
}

// get data from the server  and pagination

const baseURL = `${process.env.BASE_URL}/PostTemplate`;

async function getPostData() {
  const res = await fetch(baseURL, {
    method: "POST",
  });
  const data = await res.json();

  // pagination of posts

  const totalData = data.length;
  const totalPages = totalData / 3;
  data.reverse();
  // console.log(data)

  // console.log(totalData);
  // console.log(totalPages);
  refreshPostPage(totalData, data);

  // define total page and current page
  document.getElementById("totalPage").innerHTML = Math.ceil(totalPages);
  const previousBtn = document.getElementById("previousBtn");
  const nextBtn = document.getElementById("nextBtn");

  previousBtn.addEventListener("click", () => {
    if (pageNo > 0 && pageNo < Math.ceil(totalPages)) {
      document.querySelector("#currentPage").innerHTML--;
      refreshPostPage(totalData, data);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (pageNo >= 0 && pageNo < Math.ceil(totalPages) - 1) {
      document.querySelector("#currentPage").innerHTML++;
      refreshPostPage(totalData, data);
    }
  });
}

getPostData();

// refresh post page accouding to pagination

function refreshPostPage(totalData, data) {
  document.querySelector(".post-area").innerHTML = "";
  pageNo = document.querySelector("#currentPage")?.innerHTML
    ? document.querySelector("#currentPage").innerHTML - 1
    : 0;
  startIndex = pageNo * 3;
  endIndex = totalData > startIndex + 3 ? startIndex + 3 : totalData;

  const element = data.slice(startIndex, endIndex);
  element.forEach((e, i) => {
    let { title, authorName, date, summary, disc, img } = e;   

    const PostTemplate = `
                  <div class="post">
                  <div class="left">
                  <div class="title">${title}</div>
                  <div class="meta-data">
                      <div class="author">
                      Author : <span>${authorName}</span>
                      </div>
                      <div class="date">Date : <span>${date}</span></div>
                  </div>
                  <div class="disc">
                      ${summary}
                  </div>
                  <button class="primary-button CTA-button" onclick="OpenPost_Defination( '${title}', '${authorName}', '${date}', '${disc}', '${img}')" >Read More</button>
                  </div>
                  <div class="right">
                  <div class="image-section">
                      <img src="../static/uploads/${img}" alt="post-image" />
                  </div>
                  </div>
                  </div>
              `;
    const postSection = document.querySelector(".post-section .post-area");
    postSection.innerHTML += PostTemplate;
  });
}
