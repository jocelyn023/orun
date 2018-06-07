<template>
	<div class="forgot-password">
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
				<el-row type="flex" justify="start" class="pd-10" >
					<el-col :span="16" :xs="16">
					  	<el-input
							placeholder="请输入验证码"
							prefix-icon="adminIcons adminIcon-yanzhengma1"
							v-model="psw">
						</el-input>
					</el-col>
					<el-col :span="8" :xs="8" class="reg-img">
					  	<img class="reg-img" src="https://www.oschina.net/action/user/captcha"/>
					</el-col>
				</el-row>
				<el-row type="flex" justify="start" class="pd-10" >
					<el-col :span="16" :xs="16">
					  	<el-input
							placeholder="请输入验证码"
							prefix-icon="adminIcons adminIcon-yanzhengma1"
							v-model="psw">
						</el-input>
					</el-col>
					<el-col :span="8" :xs="8" class="btn">
					  	<el-button plain>获取验证码</el-button>
					</el-col>
				</el-row>
				<div class="login-btn">
					<el-button type="success">找回密码</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'forgotPassword',
  data () {
    return {
	  username: '',
	  psw: '',
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
	.btn button{
		width: 100%;
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
