<template>
  <el-header>
    <el-row>
      <el-col :span="8">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-header"
          mode="horizontal"
          router
        >
          <el-menu-item index="1"><div class="logo"></div></el-menu-item>
          <el-menu-item index="/home">社区</el-menu-item>
          <el-menu-item :index="user">管理</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <div class="search">
          <el-input
            placeholder="搜全站..."
            prefix-icon="el-icon-search"
            v-model="input"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="user">
          <el-dropdown @command="userRegist" trigger="click">
            <el-avatar src=""></el-avatar>
            <el-dropdown-menu slot="dropdown" v-if="!$store.state.isLogin">
              <el-dropdown-item command="login">登陆</el-dropdown-item>
              <el-dropdown-item command="regist">注册</el-dropdown-item>
            </el-dropdown-menu>
            <el-dropdown-menu slot="dropdown" v-if="$store.state.isLogin">
              <el-dropdown-item command="user">个人中心</el-dropdown-item>

              <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="createBlog">
          <el-dropdown @command="createBlog" trigger="click">
            <!-- 	<el-button icon="el-icon-plus"></el-button> -->
            <span><i class="el-icon-plus header-icon"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="artical">发布文章</el-dropdown-item>
              <el-dropdown-item command="problem">发布问题</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="siteMsg">
          <el-badge :value="msgNum" :max="99" class="msgNum">
            <span><i class="el-icon-chat-square header-icon"></i></span>
          </el-badge>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "theHeader",
  data() {
    return {
      isLogin: true,
      // avatarImgSrc: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      // avatarImgSrc:'../../assets/img/user.jpg',
      activeIndex: "/home",
      input: "",
      msgNum: 0,
      user: `/user/232/articalList`,
    };
  },
  created() {
    console.log;
  },
  methods: {
    userRegist(command) {
      switch (command) {
        case "login":
          {
            // console.log('login');
            this.$router.push({ name: "login" });
          }
          break;
        case "regist":
          {
            this.$router.push({ name: "regist" });
          }
          break;
        case "logout":
          {
            this.$store.commit("SET_TOKEN", "");
            this.$router.push({ name: "login" });
            // console.log('logout');
          }  
          break;
        case "user":
          {
            this.$router.push({ name: "user" });
          }
          break;
        case "articalList":
          {
            this.$router.push({
              name: "userArticalList",
              params: { userID: "12" },
            });
            // console.log('articalList');
          }
          break;
      }
    },
    createBlog(command) {
      switch (command) {
        case "artical":
          {
            this.$router.push({ name: "createArtical" });
          }
          break;
        case "problem":
          {
            this.$router.push({ name: "createProblem" });
            // this.$router.push({ name: 'regist' });
          }
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@mixin head-navigation-icon {
  float: right;
  margin-right: 20px;
}
.createBlog .header-icon,
.siteMsg .header-icon {
  height: 60px;
  line-height: 60px;
  font-size: 26px;
  font-weight: 800;
  &:hover {
    color: #409eff;
  }
}

.el-menu-header a {
  text-decoration: none;
}

.el-header {
  padding: 0 !important;
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-row {
    border-bottom: solid 1px #e6e6e6;
    .search {
      padding-top: 10px;
      margin: 0 auto;
    }
    .user {
      padding-top: 10px;
      margin: 0 auto;
      .el-avatar {
        outline: none;
      }
      @include head-navigation-icon();
    }
    .createBlog {
      .el-dropdown span {
        outline: none;
      }
      @include head-navigation-icon();
    }
    .siteMsg {
      @include head-navigation-icon();
      .msgNum sup {
        top: 10px;
      }
    }
  }
}

.logo {
  width: 100px;
  height: 100%;
  background-color: gray;
}
</style>
