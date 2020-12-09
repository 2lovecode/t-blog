<template>
    <el-row type="flex" justify="center">
        <el-col :span="16" >
        </el-col>
    </el-row>
    
</template>
<script>
const category = require('@/api/category.js')
export default {
    data () {
        return {
            categoryList : [
                {
                    name: ""
                }
            ]
        }
    },
    mounted: function () {
        category.fetchCategories()
    }
}
</script>