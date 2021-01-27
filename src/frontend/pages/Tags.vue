<template>
    <el-row type="flex" justify="center">
        <el-col :span="16" v-for="tag in tagList" :key="tag.id">
            <router-link :to="'/tag-articles/'+tag.id">{{ tag.name }}</router-link>
        </el-col>
    </el-row>
</template>
<script>
const tagClient = require('@/api/tag.js')
export default {
    data () {
        return {
            tagList : [
                {
                    id: "",
                    name: "",
                }
            ]
        }
    },
    methods: {
        getTagList() {
            const tank = this
            tagClient.fetchTags().then(function(res) {
                tank.tagList = res.data
            })
        },
    },
    mounted: function () {
        this.getTagList()
    }
}
</script>