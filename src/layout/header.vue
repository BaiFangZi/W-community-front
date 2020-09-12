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
          <el-menu-item index="1">
            <div class="logo"></div>
          </el-menu-item>
          <el-menu-item index="/home">社区</el-menu-item>
          <el-menu-item :index="user">管理</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <div class="search">
          <el-select v-model="searchType" placeholder="请选择">
            <el-option label="随笔" value="note"></el-option>
            <el-option label="问答" value="problem"></el-option>
          </el-select>
          <el-autocomplete
            :debounce="500"
            v-model="searchText"
            :fetch-suggestions="searchArtical"
            placeholder="请输入内容"
            @select="goArtical"
          >
          </el-autocomplete>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="user">
          <el-dropdown @command="userRegist" trigger="click">
            <el-avatar :src="avatarImgSrc"></el-avatar>
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
              <el-dropdown-item command="note">发布文章</el-dropdown-item>
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
import { searchNote } from "@api/note";
import { searchProblem } from "@api/problem";

export default {
  name: "theHeader",
  data() {
    return {
      // restaurants: [],
      isLogin: false,
      avatarImgSrc: "",
      // avatarImgSrc:'../../assets/img/user.jpg',
      activeIndex: "/home",
      searchText: "",
      searchType: "note",
      msgNum: 0,
      user: `/user/232/noteList`,
    };
  },
  created() {
    this.isLogin = !!localStorage.getItem("token");
    if (this.isLogin) {
      this.avatarImgSrc =
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
    } else {
      this.avatarImgSrc = "";
    }
  },
  mounted() {
    // this.restaurants = this.loadAll();
  },
  methods: {
    userRegist(command) {
      switch (command) {
        case "login":
          {
            // console.log('login');
            this.$router.push({
              name: "login",
            });
          }
          break;
        case "regist":
          {
            this.$router.push({
              name: "regist",
            });
          }
          break;
        case "logout":
          {
            // this.$store.commit("SET_TOKEN", "");
            this.$router.push({
              name: "login",
            });
            // console.log('logout');
          }
          break;
        case "user":
          {
            this.$router.push({
              name: "user",
            });
          }
          break;
        case "noteList":
          {
            this.$router.push({
              name: "userNoteList",
              params: {
                userID: "12",
              },
            });
            // console.log('noteList');
          }
          break;
      }
    },
    createBlog(command) {
      switch (command) {
        case "note":
          {
            this.$router.push({
              name: "createNote",
            });
          }
          break;
        case "problem":
          {
            this.$router.push({
              name: "createProblem",
            });
            // this.$router.push({ name: 'regist' });
          }
          break;
      }
    },
    searchArtical(value, callback) {
      if (value) {
        const searchArtical =
          this.searchType == "note" ? searchNote : searchProblem;
        searchArtical({
          value,
        })
          .then((res) => {
            // let cb = [];
            let results = res.data.data;
            let cb = results.map((item) => {
              return {
                value: item.title,
                _id: item._id,
              };
            });
            callback(cb);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    goArtical(artical) {
      const routerName = this.searchType == "note" ? "viewNote" : "viewProblem";
      this.$router.push({
        name: routerName,
        params: {
          articalId: artical._id,
        },
      });
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

      .el-select {
        width: 21%;

        input {
          // border: 0;
          // border-right: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }

      .el-autocomplete {
        width: 79%;

        input {
          // border: 0;
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
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
