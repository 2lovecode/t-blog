<template>
    <div>
        {{ about.author }}
    </div>
</template>
<script>
export default {
    data () {
        return {
            about : {
                author: "刘浩",
                nickname: "2lovecode",
                email: "liu546hao@163.com",
                github: "https://github.com/2lovecode",
                company: "",
            }
        }
    }
}
</script>