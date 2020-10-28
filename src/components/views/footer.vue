<template>
<div class="footer">
    <div class="footbg"></div>
    <div class="foottext">打开app 发现更多好音乐></div>
    <p>网易公司版权所有@1997-2020 杭州乐读科技有限公司运营</p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    width: 100%;
    height: 25rem;
    position: relative;
    background: url(//s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=) no-repeat;

}

.footer .foottext {
    position: absolute;
    top: 40%;
    height: 2.375rem;
    line-height: 2.375rem;
    border: 1px solid #d33a31;
    color: #d33a31;
    border-radius: 26px;
    margin: 19px 32px 5px;
    padding: 10px 50px;
    font-size: 16px;
}

.footer p {
    position: absolute;
    bottom: 1.875rem;
    color: #888;
    margin-left: 32px;
    transform: scale(0.8);
}

.footer .footbg {
    position: absolute;
    top: 20%;
    left: 26%;
    width: 22rem;
    height: 36px;
    background-image: url(../../../static/img/footer.png);
}
</style>
