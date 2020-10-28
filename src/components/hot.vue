<template>
<div class="hello">
    <div class="hot">
        <div class="hotop">
            <div class="hota">
                <div class="hoticon bg">
                    <p>更新日期：{{date | formatTime}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="song">
        <div class="zuixin" v-for="(item,index) in arr" :key="item.id">
            <div class="num">{{index+1 > 10 ? (index+1):"0"+(index+1)}}</div>
            <div class="zleft">

                <div class="songname">{{item.name}}</div>
                <span class="bg"></span>
                <span class="songer" v-for="songer in item.ar" :key="songer.id">{{songer.name}} &nbsp;</span>
            </div>
            <div class="zright">
                <span class="bg"></span>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {
            arr: [],
            date: []
        }
    },
    mounted() {
        this.$http({
            url: "/music/playlist/detail",
            params: {
                id: 3778678
            }
        }).then(res => {

            this.arr = res.data.playlist.tracks

        })

        this.$http({
            url: this.$api.listtime
        }).then(res => {

            this.date = res.data.list[3].updateTime;

        })

    },
    filters: {
        formatTime: function (time) {
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            return `${month}月${day}日`;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    margin-top: 4.5rem;
}

.hot .hotop {
    position: relative;
}

.hot .hota {
    padding-top: 40%;
    background-image: url(../../static/img/hot_music_bg.jpg);
    background-repeat: no-repeat;
    background-size: contain;
}

.hot .hota .hoticon {
    position: absolute;
    left: 25px;
    top: 30px;
    width: 142px;
    height: 67px;
    background-position: -24px -30px;
}

.hot .bg {
    background-image: url(../../static/img/index_icon.jpg);
    background-size: 166px 97px;
}

.hot .hota p {
    position: absolute;
    bottom: -26px;
    left: 25px;
    color: white;
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
</style>
