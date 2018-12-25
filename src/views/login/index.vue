<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545728088350&di=32e1d4ba52d4d40b72a23bce6b7af6d4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F40%2F82%2Fc11bed88a1cd9c09195d8be18c292afc.jpg)
    no-repeat 0 0/100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.account-info-content {
  width: 500px;
  //   height: 600px;
  background: rgba(255, 255, 255, 0.6);

  .tit {
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    color: #4babe5;
  }
}

.demo-ruleForm {
  padding-left: 30px;
  box-sizing: border-box;
}

.btn-item-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="login-container">
    <div class="account-info-content">
      <h2 class="tit">账号密码登录</h2>

      <el-form :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm">
        <el-form-item label="账号："
          prop="account">
          <el-input type="text"
            v-model="ruleForm.account"
            autocomplete="off"
            style="width:80%;"></el-input>
        </el-form-item>

        <el-form-item label="密码："
          prop="passWord">
          <el-input type="password"
            v-model="ruleForm.passWord"
            autocomplete="off"
            style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item class="btn-item-form">
          <el-button type="primary"
            @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        account: "",
        passWord: ""
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        passWord: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


