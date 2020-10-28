<template>
<div class="hello">
    <v-header></v-header>
    <router-view></router-view>

</div>
</template>

<script>
import vHeader from "../components/views/header"

export default {
    components: {
        vHeader

    },
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
