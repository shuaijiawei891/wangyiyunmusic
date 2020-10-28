<template>
<div class="hello">
    <div class="slist">
        <div class="shead">
            <div class="mask"></div>
            <div class="con">
                <div class="conleft">
                    <img src="http://p3.music.126.net/ENMFrUPQMBNygjsqwEy4Ew==/109951165081417407.jpg?param=170y170" />
                    <div class="cont">
                        <span class="ting">
                            12345</span>
                    </div>
                    <span class="slist">歌单</span>
                </div>

                <div class="conright">
                    <div class="context">这是最初摇滚的样子</div>
                    <div class="cbottom">
                        <img src="http://p1.music.126.net/h41_hFVcKhV1ayUdVh8KmQ==/109951165077935439.jpg?imageView=1&type=webp&thumbnail=60x0" alt="">
                        <span>无能中年糟蹋</span>
                    </div>
                </div>
            </div>
            <div class="gray"></div>
        </div>
        <div class="scontent">
            <h3>歌曲列表</h3>

            <div class="zuixin" v-for="(item,idx) in arr" :key="item.id">
                <div class="num">{{idx>8?(idx+1):"0"+(idx+1)}}</div>
                <div class="zleft">

                    <div class="songname">{{item.name}}</div>
                    <span class="bg"></span>
                    <span class="songer" v-for="songer in item.ar" :key="songer.id">{{songer.name}}</span>
                </div>
                <div class="zright">
                    <span class="bg"></span>
                </div>
            </div>

        </div>
        <div class="sfooter">
            <span></span>
            <div class="txt">官方动态歌单</div>
            <div class="btn">查看我的歌单</div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            arr: []
        }
    },
    mounted() {
        this.$http({
            url: this.$api.songlist,
            params: {
                id: this.$route.params.id
            }
        }).then(res => {
            this.arr = res.data.playlist.tracks
            console.log(res)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.slist .shead {
    position: relative;
    padding: 40px 20px;
    width: 100%;
    height: 130px;
    background: url("https://p2.music.126.net/8WlAVyv6tzm9Wqj-v5629A==/109951165401207306.jpg?param=170y170") no-repeat;
    background-size: cover;
    background-position: 50%;
    color: white;

}

.shead {
    height: 20rem;
    overflow: hidden;
    position: relative;
    padding: 30px 10px 20px 30px;
}

.mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-image: url("http://p3.music.126.net/ENMFrUPQMBNygjsqwEy4Ew==/109951165081417407.jpg?param=170y170");
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.5);
    /* 背景变模糊 */
    filter: blur(20px);
}

.con {
    /* 设置层级的时候需要跟定位进行搭配使用 */
    position: relative;
    z-index: 2;
    display: flex;
}

.conleft {
    position: relative;
    width: 126px;
    height: 126px;
}

.conleft img {
    width: 126px;
    height: 126px;
}

.conleft .ting {
    padding-left: 20px;
    position: absolute;
    right: 5px;
    top: 4px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);
    background-repeat: no-repeat;
    color: white;
}

.conleft .cont {
    width: 126px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;
    height: 18px;
    background-color: rgba(0, 0, 0, 0.2);
}

.sli {
    display: block;
    position: absolute;
    z-index: 3;
    top: 10px;
    left: 0;
    padding: 0 8px;
    height: 17px;
    color: #fff;
    font-size: 9px;
    /* 水平方向和垂直方向居中 */
    text-align: center;
    line-height: 17px;
    background-color: rgba(217, 48, 48, 0.8);
    /* 圆角化  border-radius */
    /* 右上角 */
    border-top-right-radius: 17px;
    /* 右下角 */
    border-bottom-right-radius: 17px;
}

.conright {
    flex: 1;
    text-align: left;
    margin-left: 16px;
}

.conright .context {
    font-size: 17px;
    line-height: 1.3;
    color: #fefefe;
}

.conright .cbottom {
    margin-top: 20px;
    color: #ccc;
}

.cbottom img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
}

.slist .gray {
    width: 100%;
    height: 130px;
    padding: 40px 20px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0px;
    top: 0px;
}

.shead .con {
    position: relative;
    z-index: 3;
}

.shead h2 {
    font-size: 18px;
}

h3 {
    font-size: 30px;
}

.shead span {
    display: inline-block;
    font-size: 10px;
    margin: 20px 0px;
    height: 12px;
    line-height: 12px;
    padding: 5px;
    background-color: rgba(204, 284, 203, 0.3);
}

.shead p {
    font-size: 14px;
    line-height: 20px;
    color: rgba(231, 230, 230, 0.9);
}

.zuixin {
    width: 100%;
    height: 5rem;
    display: flex;
    border-top: 1px solid #ccc;

}

.num {
    flex: 1;
    font-size: 25px;
    padding-top: 7px;
    padding-left: 7px;
}

.zleft {
    position: relative;
    width: 70%;
    flex: 8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.zleft span {
    font-size: 1.875rem;

}

.songname {
    padding-top: 5px;
    padding-left: 30px;
    font-size: 15px;
}

.zleft .songer {

    font-size: 1.25rem;
    margin-left: 10px;
    margin-bottom: 5px;
}

.zleft .bg {
    display: inline-block;
    width: 20px;
    height: 16px;
    background-position: 5px 0px;
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

.sfooter {
    height: 60px;
    background-color: white;
    padding: 5px 20px;
    line-height: 60px;
    position: fixed;
    bottom: 0px;
}

.sfooter span {
    display: inline-block;
    width: 34px;
    height: 34px;
    background-image: url(//s3.music.126.net/mobile-new/img/circle_logo.png?9647b49…=);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
}

.sfooter .txt {
    display: inline-block;
    height: 34px;
    font-size: 13px;
    width: 50%;
    line-height: 18px;
    margin: 2px 10px;
    vertical-align: middle;
    color: #666;
}

.sfooter .btn {
    width: 12rem;
    display: inline-block;
    height: 34px;
    line-height: 34px;
    background: red;
    text-align: center;
    border-radius: 18px;
    margin: 2px 0px;
    font-size: 14px;
    color: white;
}
</style>
