<template>
	<div class="index">
		<el-container class="index-container">
			<el-aside width="200px">
			  <div class="logo">哈哈哈哈logo就这样</div>
			  <div class="nav">
			  	<el-menu
			  		:default-openeds="openeds"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      background-color="#20222a"
			      text-color="#fff"
			      active-text-color="#fff">
			      <el-submenu index="1-1">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>导航一</span>
			        </template>
			        <el-menu-item-group>
			          <template slot="title">分组一</template>
			          <el-menu-item index="1-1-1">选项1</el-menu-item>
			          <el-menu-item index="1-1-2">选项2</el-menu-item>
			        </el-menu-item-group>
			        <el-menu-item-group title="分组2">
			          <el-menu-item index="1-1-3">选项3</el-menu-item>
			        </el-menu-item-group>
			        <el-submenu index="1-1-4">
			          <template slot="title">选项4</template>
			          <el-menu-item index="1-1-4-1">选项1</el-menu-item>
			        </el-submenu>
			      </el-submenu>
			      <el-menu-item index="2-1">
			        <i class="el-icon-menu"></i>
			        <span slot="title">导航二</span>
			      </el-menu-item>
			      <el-menu-item index="3-1" disabled>
			        <i class="el-icon-document"></i>
			        <span slot="title">导航三</span>
			      </el-menu-item>
			      <el-menu-item index="4-1">
			        <i class="el-icon-setting"></i>
			        <span slot="title">导航四</span>
			      </el-menu-item>
			    </el-menu>
			  </div>
			</el-aside>
			<el-container>
			  <el-header>
			  	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					  <el-menu-item index="1">处理中心</el-menu-item>
					  <el-menu-item index="2">我的工作台</el-menu-item>
					  <el-menu-item index="3">消息中心</el-menu-item>
					  <el-menu-item index="4">订单管理</el-menu-item>
					</el-menu>
			  </el-header>
			  <el-main>Main</el-main>
			</el-container>
		</el-container>	
	</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
	  	activeIndex: '1',
      activeIndex2: '1',
      openeds: ['1', '2', '3']
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)      
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.w100{
		width: 100%;
	}
	.slide{
		width: 200px
	}
	.index-container{
		height: 100vh;
		
		.logo{
			width: 100%;
			height: 60px;
			line-height: 60px;			
		}
		
		.el-header{
	    background-color: #fff;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
	  }
	  
	  .el-aside {
	    background-color: #20222A;
	    color: #fff;
	    text-align: center;
	    box-shadow: 1px 0 2px 0 rgba(0,0,0,.05);
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
	  }
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
	} 
</style>
