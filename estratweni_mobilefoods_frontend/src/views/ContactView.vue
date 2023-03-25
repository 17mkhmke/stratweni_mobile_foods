<template>
  <div class="container">
      <div class="contact-box">
          <div class="left"></div>
          <div class="right">
              <form action="https://formspree.io/f/xvonbvkk" method="POST">
                  <h2 class="text-white">Contact Us</h2>
                  <input type="text" class="field" name="name" placeholder="Your Name" required>
                  <input type="text" class="field" name="email" placeholder="Your Email" required>
                  <input type="text" class="field" name="contact" placeholder="Phone" required>
                  <textarea placeholder="Message Us" name="text" class="field"></textarea>
                  <button type="submit" class="btn">Send</button>
              </form>
          </div>
      </div>
  </div>
</template>
<style scoped>
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}

body {
height: 100vh;
width: 100%;
/* background gradient */
background: #4b4b4b;
background: linear-gradient(90deg,#c4c4c4 50%, #4b4b4b 50%);
}

.container {
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 100px;
}

.container:after {
content: '';
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
/* image - carousel???*/
/* background: url(https://i.postimg.cc/7Z4nXrq5/pexels-darina-belonogova-8788658.jpg) no-repeat center; */
/* background: url(https://i.postimg.cc/DZ4Gnx2V/Free-Sample-By-Wix.jpg) center; */
background-size: cover;
filter: blur(1000px);
z-index: -1;
}

.contact-box {
max-width: 850px;
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-content: center;
align-items: center;
text-align: center;
background-color: #333;
box-shadow: 0px 0px 19px 5px lightgoldenrodyellow;
}

.left {
background: url(https://i.postimg.cc/MTbFfZrk/DALL-E-2023-03-14-16-04-46-fast-food-background-picture-for-a-contact-page.png) no-repeat center;
background-size: cover;
height: 100%;
}

.right {
padding: 25px 40px;
}

h2 {
position: relative;
padding: 0 0 10px;
margin-bottom: 10px;
}

h2:after {
content: '';
position: absolute;
left: 50%;
bottom: 0;
transform: translateX(-50%);
height: 4px;
width: 50px;
border-radius: 2px;
background-color: gold;
}

.field {
width: 100%;
border: 2px solid rgba(0, 0, 0, 0);
outline: none;
background-color: lightgoldenrodyellow;
padding: 0.5rem 1rem;
font-size: 1.1rem;
margin-bottom: 22px;
transition: .3s;
}

.field:hover {
background-color: rgba(0, 0, 0, 0.1);
}

/* message */
textarea {
min-height: 150px;
}

.btn {
width: 100%;
padding: 0.5rem 1rem;
background-color: gold;
border-radius: 16px;
color: white;
font-size: 1.1rem;
border: none;
outline: none;
cursor: pointer;
transition: .3s;
}

.btn:hover {
background-color:gold;
color: white;
transition: 1.5s;
}

.field:focus {
border: 2px solid gold;
background-color :#c4c4c4;
transition: 1.5s;
}

/* MEDIA QUERY */
@media screen and (max-width: 880px) {
.contact-box {
  grid-template-columns: 1fr;
}

.left {
  height: 200px;
}
}
</style>
