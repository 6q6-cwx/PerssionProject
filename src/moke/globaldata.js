import Mock from "mockjs";

//export const data =

Mock.mock("user/baseInfo",
 {
    userName: "chenweixin",
    uidNumber: "10238",
    realName: "chenweixin",
    normal: [],
    menu: [
      {
        children: [],
        code: "wa_permission",
        description: "权限管理菜单",
        id: 4,
        name: "Permissions Management",
        parentId: 1,
        serialNumber: 3,
        type: 1,
        url: "/permissions",
      },
      {
        children: [],
        code: "wa_log",
        description: "日志管理",
        id: 9,
        name: "Operator Management",
        parentId: 1,
        serialNumber: 4,
        type: 1,
        url: "/logs",
      },
    ],
    mail: "chenweixin@abakusglobal.com",
    id: 200,
    department: "",
    function: [
      {
        code: "wap_edit",
        id: 8,
        name: "编辑权限",
        parentId: 5,
        serialNumber: 2,
        type: 2,
        url: "/permission/add,/permission/update,/permission/delete",
      },
    ],
  },
);
Mock.mock("/base",
 {
    username:'jiafeimao'
  },
);
