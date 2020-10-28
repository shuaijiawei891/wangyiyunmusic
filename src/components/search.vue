<template>
<div class="hello">
    <div class="search">
        <div class="searchtxt">
            <i class="sea"></i>
            <input type="text" value="" placeholder="搜索歌曲，歌手，专辑" v-model="keywrod">
            <i class="close" v-show="keywrod" @click="close"></i>
        </div>
    </div>
    <hr>
    <div class="searchcon" v-show="!keywrod">
        <h3>热门搜索</h3>
        <ul class="list">
            <li class="sitem" v-for="(item,idx) in hotSearch" :key="idx" @click="goill(item.first)">{{item.first}}</li>
        </ul>
    </div>
    <div class="searchcon2" v-show="keywrod">
        <h3>搜索<span>{{keywrod}}</span></h3>
        <ul class="list2">
            <li class="sitem2" v-for="(item,idx) in searchResult" :key="idx"><i></i> <span>{{item.name}}</span></li>
        </ul>
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {
            keywrod: "",
            hotSearch: [],
            searchResult: []
        };
    },
    mounted() {
        this.golist();
    },
    watch: {
        keywrod() {
            if (this.keywrod == "") {
                return;
            } else {
                this.goResult();
            }
        }
    },
    methods: {
        goill(s) {
            this.keywrod = s;
            this.goResult();

        },
        goResult() {
            this.$http({
                url: this.$api.searchResult,
                params: {
                    keywords: this.keywrod,
                    limit: 6
                }
            }).then(res => {
                this.searchResult = res.data.result.songs;
            });
        },
        close() {
            this.keywrod = ""
        },
        golist() {
            this.$http({
                url: this.$api.hots
            }).then(res => {
                this.hotSearch = res.data.result.hots
            });
        }

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    margin-top: 4.5rem;
}

.searchtxt {
    position: relative;
    background-color: #ebecec;
    height: 30px;
    margin: 10px;
    border-radius: 30px;
    padding: 5px 15px;
    line-height: 30px;
}

.searchtxt .sea {
    display: inline-block;
    width: 13px;
    height: 13px;
    position: absolute;
    left: 16px;
    top: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==);

}

.searchtxt input {
    width: 80%;
    height: 26px;
    line-height: 34px;
    padding: 2px 20px;
    font-size: 14px;
    color: #333;
    background-color: #ebecec;
}

.searchtxt .close {
    display: inline-block;
    width: 14px;
    height: 14px;
    position: absolute;
    right: 16px;
    top: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==);
}

.searchcon {
    height: 215px;
}

.searchcon h3 {
    font-size: 12px;
    margin: 12px;
    color: #666;
}

.list .sitem {
    float: left;
    height: 32px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 2px 14px;
    margin: 5px;
    font-size: 14px;
    color: #333;
}

.searchcon2 h3 {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    margin: 2px 0px 2px 10px;
    color: #505daf;
    border-bottom: 1px solid #ccc;
}

.list2 .sitem2 {
    margin-left: 10px;
    display: flex;
}

.list2 .sitem2 i {
    margin: 15px 8px;
    display: inline-block;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=);
}

.list2 .sitem2 span {
    flex: 1;
    display: inline-block;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

}
</style>
