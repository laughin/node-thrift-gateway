
const userCode = {

  ERROR_USER_NAME: { code: 20000, desc: '用户名格式为6-16位的小写字母，包括-、_' },

  ERROR_EMAIL: { code: 20001, desc: '请输入正确的邮箱地址' },

  ERROR_PASSWORD: { code: 20002, desc: '密码长度应该为6-16' },

  ERROR_PASSWORD_CONFORM: { code: 20003, desc: '两次密码不一致' },

  FAIL_EMAIL_IS_EXIST: { code: 20004, desc: '邮箱已被注册' },

  FAIL_USER_NAME_IS_EXIST: { code: 20005, desc: '用户名已被注册' },

  FAIL_USER_NAME_OR_PASSWORD_ERROR: { code: 20006, desc: '用户名或登录密码错误' },

  FAIL_USER_NO_LOGIN: { code: 20007, desc: '用户未登录' },

  FAIL_USER_NO_EXIST: { code: 20008, desc: '用户不存在' },

}


module.exports = userCode
