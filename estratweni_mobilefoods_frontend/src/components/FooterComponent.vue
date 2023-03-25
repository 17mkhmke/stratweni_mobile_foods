<template>
    <section class="footer">
        <div class="box-container">
            <!-- <div class="box">
                <h3>about us</h3>
                <p>We are a social enterprise that started as a small business selling muffins and has now grown to owning 4 food trailers. They employ both full-time and part-time staff, with a focus on hiring youth from the community to provide job experience and upskill them. They sell fast food items like sausage rolls, beef burgers, hot chips, and soft drinks, and aim to expand and create more job opportunities while providing personalized customer service with fresh, quality, and affordable food</p>
            </div> -->
            <div class="box">
                <h3>branch location</h3>
                <a href="https://www.google.com/maps/dir/-33.977333,18.5041251/Estratweni+Mobile+Foods,+1486+Giyogiyo+St,+Browns+Farms,+Cape+Town,+7750/@-33.9937645,18.5086385,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcc452cdf41eca1:0x97b06d05577fa49d!2m2!1d18.5849723!2d-34.0093902">1486 Giyogiyo St<br> Browns Farms<br> Cape Town <br> 7750</a>
            </div>
            <div class="box">
                <h3>Follow Us</h3>
                <a href="https://www.facebook.com/Mobilefoodscc">Facebook</a>
                <a href="https://www.tiktok.com/@estratwenimobilefoods">TikTok</a>
                <a href="https://www.instagram.com/estratwenimobilefoods/">instagram</a>
            </div>
        </div><br><br>
        <h1 class="credit">Made with <i class="fa-solid fa-heart"></i> by <span>Mkhuseli Mkeyiya</span> &copy;Copyright reserved 2023</h1>
    </section>
</template>
<script>
export default {
}
</script>
<style scoped>
.footer {
    background: #333;
}
.footer .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    height: 30vh;
}
.footer .box-container .box{
    padding: 0.5rem 0;
    flex:1 1 2rem;
}
.footer .box-container .box h3{
    font-size: 1.5rem;
    padding: 2rem 0;
    color: #fff;
}
.footer .box-container .box p{
    font-size: 0.5rem;
    padding: 0.5rem 0;
    color: #eee;
}
.footer .box-container .box a{
    display: block;
    font-size: 1rem;
    padding: 0.5rem 0;
    color: #eee;
}
.footer .box-container .box a:hover{
    color:gold;
    text-decoration: underline;
}
.footer .credit{
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: normal;
    color: #fff;
    border-top: 0.2rem solid rgba(255, 255, 255, 0.912);
}
.footer .credit span{
    color:gold
}
</style>
