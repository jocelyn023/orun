<template>
	<div class="login" v-cloak>
		<div class="login-wrap">			
			<div class="login-main">
				<div class="title">
					<p>layui</p>
				</div>
				<p class="title-des">layui</p>
				<div class="pd-10">
					<el-input
					    placeholder="用户名"
					    prefix-icon="el-icon-search"
					    v-model="username">
					</el-input>
				</div>
				<div class="pd-10">
					<el-input
					    placeholder="密码"
					    prefix-icon="adminIcons adminIcon-mima"
					    v-model="psw">
					</el-input>
				</div>
				<el-row type="flex" justify="start" >
					<el-col :span="16" :xs="16">
					  	<el-input
							placeholder="请输入验证码"
							prefix-icon="adminIcons adminIcon-yanzhengma1"
							v-model="reg">
						</el-input>
					</el-col>
					<el-col :span="8" :xs="8" class="reg-img">
					  	<img class="reg-img" src="https://www.oschina.net/action/user/captcha"/>
					</el-col>
				</el-row>
				<el-row type="flex" justify="start" align="middle" class="el-row-pd">
					<el-col :span="12">
					  	<!-- `checked` 为 true 或 false -->
  						<el-checkbox v-model="checked">记住密码</el-checkbox>
					</el-col>
					<el-col :span="12" class="tr">
						<router-link to="/forgotPassword">忘记密码?</router-link>
					</el-col>
				</el-row>
				<div class="login-btn">
					<el-button type="success" @click="loginBtnFn">登录</el-button>
				</div>
				<el-row type="flex" justify="start" align="middle" class="pd-20">
					<el-col :span="18">
					  	社交账号登入
					  	<a class="adminIcons adminIcon-QQ"></a>
					  	<a class="adminIcons adminIcon-weixin-copy"></a>
					  	<a class="adminIcons adminIcon-weibo"></a>
					</el-col>
					<el-col :span="6" class="tr">
						<router-link to="/register">注册账号</router-link>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      psw: '',
      reg: '',
      checked: false
    }
  },
  methods: {
  	loginBtnFn: function () {
  		let that = this
  		let url = `11111`
  		let loginUrl = url + `?username=` + that.username + `&psw=` + that.psw + `&reg=` + that.reg
  		console.log(loginUrl)
  	},
  	rememberPsdFn: function () {
  		let that = this
  		that.checked = !that.checked
  		if (!that.checked) {
  			that.setCookieFn('1', '2', '3')
  		}
  	},
  	loadCookieFn: function () {
			
  	},
  	getCookieFn: function (cookieName) {
  		if (document.cookie.length > 0) { 
        let cookieStart = document.cookie.indexOf(cookieName + `=`)
        if (cookieStart !== -1) {
        	cookieStart = cookieStart + cookieName.length+1
        	let cookieEnd = document.cookie.indexOf(`;`, cookieStart)
        	if (cookieEnd === -1) {
        		cookieEnd = document.cookie.length
        		return unescape(document.cookie.substring(cookieStart, cookieEnd))
        	}           	  
        }  
    	}  
    	return ''
  	},
    setCookieFn: function (cookieName, value, expiremMinutes) {  
	    var exdate = new Date() 
	    exdate.setTime(exdate.getTime() + expiremMinutes * 60 * 1000) 
	    document.cookie = cookieName + `=` + escape(value)+((expiremMinutes == null) ? '' : `;expires=` + exdate.toGMTString())
    },
    delCookieFn: function (cookieName) {
	    var exp = new Date()
	    exp.setTime(exp.getTime() - 1)
	    var cval = this.getCookie(cookieName) 
	    if (cval !== null) {
	      document.cookie = cookieName + `=` + cval + `;expires=` + exp.toGMTString()
	    }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	[v-cloak] { display: none }
	.pd-10{
		padding-bottom: 15px;
	}
	.pd-20{
		padding: 20px 0;
	}
	.tr{
		text-align: right;
	}
	.el-row-pd{
		padding-top: 20px;
		padding-bottom: 20px;
		padding-right: 5px;
		box-sizing: border-box;
	}
	.login-wrap{
		padding: 110px 0;		
		.login-main{
			margin: 0 auto;
			width: 375px; 
			
			.title{
				margin-bottom: 10px;
			    font-weight: 300;
			    font-size: 30px;
			    color: #000;
				text-align: center;				
			}
			.title-des{
				padding: 10px 0 20px;
				font-size: 20px;
				color: #ccc;
				text-align: center;
			}
			.reg-img{
				height: 40px;
				box-sizing: border-box;
				border: 1px solid #f2f2f2;
				border-radius: 5px;
				img{
					width: 100%;
					height: 100%
				}
			}
			.login-btn{
				width: 100%;
				button{
					width: 100%;
				}
			}
			.pd-20{
				.adminIcons{
					font-size: 24px;
					cursor: pointer;
				}
				.adminIcon-QQ{
					color: #3492ED;
				}
				.adminIcon-weixin-copy{
					color: #4DAF29
				}
				.adminIcon-weibo{
					color: #CF1900
				}
			}
			
		}
	}
	@media screen and (max-width: 768px){
		.login-wrap{
			.login-main{
				width: 300px;
			}
		}		
	}
</style>
