<template>
	<div class="register" v-cloak>
		<div class="login-wrap">			
			<div class="login-main">
				<div class="title">
					<p>layui</p>
				</div>
				<p class="title-des">layui</p>
				<div class="pd-10">
					<el-input
					    placeholder="手机号"
					    prefix-icon="el-icon-mobile-phone"
					    v-model="msg.tel">
					</el-input>
				</div>
				<el-row type="flex" justify="start" class="pd-10">
					<el-col :span="16" :xs="16">
					  	<el-input
							placeholder="验证码"
							prefix-icon="adminIcons adminIcon-yanzhengma1"
							v-model="msg.regMsg">
						</el-input>
					</el-col>
					<el-col :span="8" :xs="8" class="btn">
					  	<el-button plain>获取验证码</el-button>
					</el-col>
				</el-row>
				<div class="pd-10">
					<el-input
					    placeholder="密码"
					    prefix-icon="adminIcons adminIcon-mima"
					    v-model="msg.psw"
					    type="password">
					</el-input>
				</div>
				<div class="pd-10">
					<el-input
					    placeholder="确认密码"
					    prefix-icon="adminIcons adminIcon-mima"
					    v-model="msg.pswRepeat"
					    type="password">
					</el-input>
				</div>
				<div class="pd-10">
					<el-input
					    placeholder="昵称"
					    prefix-icon="adminIcons adminIcon-yonghu"
					    v-model="msg.nickName">
					</el-input>
				</div>
				<el-row type="flex" justify="start" align="middle" class="el-row-pd">
					<el-col :span="12">
					  	<!-- `checked` 为 true 或 false -->
  						<el-checkbox v-model="checked">同意用户协议</el-checkbox>
					</el-col>
				</el-row>
				<div class="login-btn">
					<el-button type="success">注册</el-button>
				</div>
				<el-row type="flex" justify="start" align="middle" class="pd-20">
					<el-col :span="16">
					  	社交账号登入
					  	<a class="adminIcons adminIcon-QQ"></a>
					  	<a class="adminIcons adminIcon-weixin-copy"></a>
					  	<a class="adminIcons adminIcon-weibo"></a>
					</el-col>
					<el-col :span="8" class="tr">
						<router-link to="/">用已有账号登录</router-link>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    	msg: {
    		tel: '',
	  		regMsg: '',
	  		pswRepeat: '',
	  		psw: '',
	  		nickName: ''
    	},	  
	  	checked: false
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
	.btn button{
		width: 100%
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
