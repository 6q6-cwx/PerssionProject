  
  const menu={
        namespaced: true,
        state: () => ({ 
            menuList:[]
         }),
        actions: {
          getMenus:()=>{
            return[
                {
                    menuTitle:'个人信息',
                    menuKey:'1',
                    icon:'el-icon-user',
                    subMenuList:[
                        {
                            subMenuTitle:'个人信息',
                            subMenuKey:'info',
                            link:'/info'
                        },
                    ]
                    
                },
                {
                    menuTitle:'信息管理',
                    menuKey:'2',
                    icon:'el-icon-setting',
                    subMenuList:[
                        {
                            subMenuTitle:'基本信息',
                            subMenuKey:'baseinfo',
                            link:'/baseinfo'
                        },
                    ]
                },
                {
                    menuTitle:'数据展示',
                    menuKey:'3',
                    icon:'el-icon-s-data',
                    subMenuList:[
                        {
                            subMenuTitle:'数据统计',
                            subMenuKey:'dataShow',
                            link:'/dataShow'
                        },
                    ]
                    
                },
            ]
        }
        },
        mutations: {
          login () {
            console.log('login')
           },
        },
  }

  export default menu
  