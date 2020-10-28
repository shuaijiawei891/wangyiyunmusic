<template>
<div class="hello">
    <div class="headbox">

        <div class="head">

            <div class="header">
                <img class="img1" src="../../../static/img/01.gif" alt="">
                <img class="img2" src="../../../static/img/02.gif" alt="">
            </div>
            <div class="nav">
                <span>
                    <router-link to="/index/recommend" active-class="active" class="title">推荐</router-link>
                </span>
                <span>
                    <router-link to="/index/hot" active-class="active" class="title">热歌榜</router-link>
                </span>
                <span>
                    <router-link to="/index/search" active-class="active" class="title">搜索</router-link>
                </span>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.title {
    font-size: 20px;
}

.headbox {
    position: relative;
    height: 10.5rem;
}

.head {
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
}

.header {
    height: 10rem;
    background-color: #d43c33;
}

.header .img1 {
    float: left;
    margin-top: 3rem;
}

.header .img2 {
    float: right;
    margin-top: 3rem;
}

.nav {
    display: flex;
    height: 3.5rem;
    background-color: #fff;
    border-bottom: 1px solid #E6E6E6;
}

.nav span {
    flex: 1;
    line-height: 3.5rem;
    text-align: center;
    color: #7b7b7b;

}

.nav .active {
    color: red;
    border-bottom: 2px solid red;
}
</style>
