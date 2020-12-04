<template>
  <el-dialog
    title="登录"
    width="20%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    :visible.sync="centerDialogVisible">
    <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="18">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row class="login-input">
          <el-input v-model="ruleForm.username">
            <template slot="prepend">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-row>
        <el-row class="login-input">
          <el-input type="password" v-model="ruleForm.userpass" autocomplete="off">
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-row>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form>
    </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      var validateName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
      };
      return {
        centerDialogVisible: true,
        ruleForm: {
          username: '',
          userpass: ''
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('user/login', this.ruleForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .login-input {
    margin-bottom: 1em;
  }
</style>