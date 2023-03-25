<template>
  <div class="spinner-container">
  <div class="spinner">
  <div class="spinner1">
  </div>
</div>
</div>
</template>
<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.spinner {
background-image: linear-gradient(gold 35%,#333);
width: 100px;
height: 100px;
animation: spinning82341 1.7s linear infinite;
text-align: center;
border-radius: 50px;
filter: blur(1px);
box-shadow: 0px -5px 20px 0px gold, 0px 5px 20px 0px #333;
}

.spinner1 {
background-color: white;
width: 100px;
height: 100px;
border-radius: 50px;
filter: blur(10px);
}

@keyframes spinning82341 {
to {
  transform: rotate(360deg);
}
}
</style>
