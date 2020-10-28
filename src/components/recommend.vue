<template>
<div class="hello">
    <div class="title">推荐歌单</div>
    <div class="box">
        <div class="item" v-for="item in arr" :key="item.id" @click="gequ(item.id)">
            <img :src="item.picUrl" alt="">
            <div class="ting"><span>{{item.playCount}}</span> </div>
            <div>

                <p>{{item.name}}</p>
            </div>
        </div>

    </div>
    <div class="title">最新音乐</div>
    <div class="mc">
        <div class="zuixin" v-for="item in zuixingedan" :key="item.id">
            <div class="zleft">
                <span class="bg"></span>
                <span>{{item.name}}</span>
                <p>{{item.song.artists[0].name}}</p>
            </div>
            <div class="zright">

                <span class="bg"></span>
            </div>
        </div>
    </div>
    <v-footer></v-footer>
</div>
</template>

<script>
import vFooter from "../components/views/footer"
export default {
    components: {
        vFooter
    },
    methods: {
        gequ(id) {
            console.log(id);
            this.$router.push("/songlist/" + id);

        }

    },

    data() {
        return {
            arr: [],
            zuixingedan: []
        }
    },
    mounted() {
        this.$http({
            url: this.$api.recommend
        }).then(res => {

            this.arr = res.data.result;
            console.log(this.arr)
        })

        this.$http({
            url: this.$api.recomleast

        }).then(res => {

            this.zuixingedan = res.data.result;
        })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    margin-top: 4.5rem;
}

.title {
    margin-bottom: 2rem;
    margin-top: 1rem;
    border-left: 3px solid red;
    font-size: 20px;
}

.box {
    display: flex;

    flex-wrap: wrap;
}

.item {
    width: 30%;
    margin-left: 1rem;
    margin-bottom: 1rem;
    position: relative;
}

.ting {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13px;
}

.ting span {
    position: absolute;
    padding-left: 14px;
    top: 0px;
    right: 0px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);
    background-repeat: no-repeat;
    color: #fff;
}

p {
    font-size: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin-top: 5px;
}

.box .item img {
    width: 100%;
}

.zuixin {
    height: 5rem;
    display: flex;
    border-top: 1px solid #ccc;

}

.zleft {
    width: 70%;
    flex: 9;
    position: relative
}

.zleft span {

    font-size: 1.875rem;

}

.zleft p {
    position: absolute;
    font-size: 1.25rem;
    left: 3rem;
    top: 23px;
}

.zleft .bg {
    display: inline-block;
    width: 20px;
    height: 25px;
    background-position: 5px 15px;

}

.zright {
    flex: 1;
    width: 30%;

}

.bg {
    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
    background-size: 166px 97px;
}

.zright span {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-position: -24px 10px;
}
</style>
