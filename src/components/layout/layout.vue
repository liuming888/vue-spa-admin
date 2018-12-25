
<style lang="scss">
.adminLayout-container {
  width: 100vw;
  height: 100vh;
  font-size: 14px;

  .main-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: #464c5b;
    color: #fff;
    height: 80px !important;
    // line-height:160px;
    font-size: 24px;
  }

  .el-aside {
    background-color: #fcfcfc;
    color: #333;
    text-align: center;
    line-height: 200px;

    .el-menu {
      background: none;
      text-align: left;
      border-right: 0;
    }
  }

  .el-main {
    padding-left: 36px;
    box-sizing: border-box;
  }
}
</style>


<template>
  <div class="adminLayout-container">
    <el-container class="main-container">
      <el-header>
        <header-layout />
      </el-header>

      <el-container>
        <el-aside width="200px">

          <el-menu :default-active="defaultActiveIdx"
            class="el-menu-vertical-demo">

            <template v-for="item of menuConfig">
              <el-submenu v-if="item.childrens"
                :index="item.id"
                :key="item.id">
                <template slot="title">
                  <i :class="item.iconCls"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="childrenItem of item.childrens"
                    :index="childrenItem.id"
                    :key="childrenItem.id"
                    @click="jumpPage(childrenItem.path)">
                    <i :class="childrenItem.iconCls"></i>
                    <span slot="title">{{childrenItem.title}}</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <template v-else>
                <el-menu-item :index="item.id"
                  @click="jumpPage(item.path)"
                  :key="item.id">
                  <i :class="item.iconCls"></i>
                  <span slot="title">{{item.title}}</span>
                </el-menu-item>
              </template>

            </template>

          </el-menu>

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerLayout from "./headerLayout.vue";

// path跟页面路由路径对应
let menuConfig = [
  {
    id: "1",
    title: "工作台",
    iconCls: "el-icon-location",
    path: "/workbench"
  },
  {
    id: "2",
    title: "用户管理",
    iconCls: "el-icon-location",
    path: "/userManagement"
  },
  {
    id: "3",
    title: "订单管理",
    iconCls: "el-icon-location",
    path: "/orderManagement"
  },
  {
    id: "4",
    title: "提现管理",
    iconCls: "el-icon-location",
    childrens: [
      {
        id: "4-1",
        title: "提现审核",
        path: "/cashManagement/withdrawalAudit",
        iconCls: ""
      },
      {
        id: "4-2",
        title: "提现订单",
        path: "/cashManagement/withdrawalOrder",
        iconCls: ""
      }
    ]
  },
  {
    id: "5",
    title: "营销管理",
    iconCls: "el-icon-location",
    childrens: [
      {
        id: "5-1",
        title: "app配置",
        path: "/marketingManagement/appConfig",
        iconCls: ""
      },
      {
        id: "5-2",
        title: "推送管理",
        path: "/marketingManagement/pushManagement",
        iconCls: ""
      }
    ]
  },
  {
    id: "6",
    title: "系统设置",
    iconCls: "el-icon-location",
    childrens: [
      {
        id: "6-1",
        title: "缓存管理",
        path: "/systemSettings/cacheManagement",
        iconCls: ""
      }
    ]
  }
];

export default {
  name: "layout",
  components: {
    headerLayout
  },
  data() {
    return {
      menuConfig
    };
  },
  computed: {
    /**
     * @msg: 当前激活菜单的那项index
     */
    defaultActiveIdx() {
      return this.$route.meta.index;
    }
  },
  methods: {
    jumpPage(path) {
      this.$router.push(path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>



