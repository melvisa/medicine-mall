window.$homeMenu = {
    path:'/home',
    id:'home',
    title:'首页',
    icon: 'md-home'
};
window.$menu = [
    {
        path:'/sys',
        id:'sys',
        title:'系统设置',
        icon:'md-settings',
        auth:'sys',
        showChildren:false,
        children:[
            {
                path:'/sys/admin',
                id:'sys-admin',
                title:'用户设置',
                icon:'md-person',
                auth:'sys:admin'
            },
            {
                path:'/sys/role',
                id:'sys-role',
                title:'角色设置',
                icon:'ios-man',
                auth:'sys:role'
            },
            {
                path:'/sys/permission',
                id:'sys-permission',
                title:'权限设置',
                icon:'md-lock',
                auth:'sys:permission'
            }
        ]

    },
    {
        path:'/item',
        id:'item',
        title:'商品管理',
        icon:'md-list',
        auth:'item',
        showChildren:false,
        children:[
            {
                path:'/item/list',
                id:'item-list',
                title:'商品列表',
                icon:'ios-basket',
                auth:'item:list'
            },
            {
                path:'/item/category',
                id:'item-category',
                title:'商品类目管理',
                icon:'ios-list-box-outline',
                auth:'item:category'
            },
            {
                path:'/item/brand',
                id:'item-brand',
                title:'商品品牌管理',
                icon:'ios-list',
                auth:'item:brand'
            }
        ]
    },
    {
        path:'/user',
        id:'user',
        title:'客户管理',
        icon:'md-people',
        auth:'user',
        showChildren:false,
        children:[
            {
                path:'/user/list',
                id:'user-list',
                title:'客户列表',
                icon:'ios-person',
                auth:'user:list'
            },
            {
                path:'/user/level/list',
                id:'user-level-list',
                title:'客户等级',
                icon:'md-ribbon',
                auth:'user:level:list'
            }
        ]
    },
    {
        path:'/order',
        id:'order',
        title:'订单管理',
        icon:'md-clipboard',
        auth:'order',
        showChildren:false,
        children:[
            {
                path:'/order/list',
                id:'android-clipboard',
                title:'所有订单',
                icon:'ios-paper-outline',
                auth:'order:list'
            }
        ]
    },
    {
        path:'/refund',
        id:'refund',
        title:'退款管理',
        icon:'md-cube',
        auth:'refund',
        showChildren:false,
        children:[
            {
                path:'/refund/list',
                id:'refund-list',
                title:'所有退款单',
                icon:'md-filing',
                auth:'refund:list'
            },
            {
                path:'/refund/reason/list',
                id:'refund-reason-list',
                title:'退款原因管理',
                icon:'ios-list',
                auth:'refund:list'
            }
        ]
    },
    {
        path:'/user',
        id:'coupon',
        title:'优惠券管理',
        icon:'md-card',
        auth:'coupon',
        showChildren:false,
        children:[
            {
                path:'/user/coupon',
                id:'coupon-list',
                title:'优惠券类别',
                icon:'ios-list',
                auth:'coupon:list'
            },
            {
                path:'/user/couponRecord',
                id:'coupon-listRecord',
                title:'领取记录列表',
                icon:'ios-list',
                auth:'coupon:listRecord'
            }
        ]
    },
    {
        path:'/promotion',
        id:'promotion',
        title:'促销活动',
        icon:'logo-yen',
        auth:'promotion',
        showChildren:false,
        children:[
            {
                path:'/promotion/list',
                id:'promotion-list',
                title:'促销活动列表',
                icon:'logo-usd',
                auth:'promotion:list'
            },
            {
                path:'/promotion/group',
                id:'promotion-group-list',
                title:'团购模板',
                icon:'ios-list',
                auth:'promotion:group'
            },
            {
                path:'/promotion/groupInfo',
                id:'group-info-list',
                title:'拼团列表',
                icon:'ios-list',
                auth:'promotion:groupInfo'
            }
        ]
    },
];
