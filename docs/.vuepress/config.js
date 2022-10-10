
module.exports = {
    title: 'WebBlog',
    description: 'WebBlog 前端笔记',
    theme: 'reco',
    head: [['link', { rel: 'shortcut icon', href: '/logo.png', type: "image/x-icon" }]], // 增加一个自定义的 favicon
    // base: '/',
    base: '/web-blog/',
    // 自定义主题配置
    themeConfig: {
        logo: '/logo.png',
        subSidebar: 'auto',
        // 一级导航栏配置
        nav: [{
            text: '首页',
            link: '/'
        },
        {
            text: '教程',
            link: '/guide/'
        },

        { text: 'Github', link: 'https://github.com/xiaohuooo' },
        { text: 'CSDN', link: 'https://blog.csdn.net/qq_55172460', target: '_blank' },
        { text: '掘金', link: 'https://juejin.cn/user/558968298809645', target: '_self', rel: '' },

        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Chinese',
                link: '/language/chinese/'
            },
            {
                text: 'Japanese',
                link: '/language/japanese/'
            }
            ]
        }
        ],
        navbar: true,
        // 配置markdown语法
        markdown: {
            // markdown-it-anchor 的选项
            anchor: {
                permalink: false
            },
            // markdown-it-toc 的选项
            toc: {
                includeLevel: [1, 2, 3] // 使用标题的级别
            },
            lineNumbers: true
        },
        // 二级导航sliderbar 配置
        sidebar: {
            collapsable: false,
            // 多个路由下都有slider 注意数据结构统一
            '/guide/': [{
                title: 'CSS',
                collapsable: true,

                children: [
                    "css/start",
                ]
            }, {
                title: "JS",
                collapsable: true,

                children: [
                    'js/start',
                    'js/start1',
                    'js/start2',
                    'js/start3',
                ]
            }, {
                title: "HTML",
                collapsable: true,

                children: [
                    'html/start',
                    'html/start1'
                ]
            }, {
                title: "React",
                collapsable: true,

                children: [
                    'react/start'
                ]
            }, {
                title: 'TS',
                collapsable: true,

                children: [
                    'ts/start',
                    'ts/start1'
                ]
            }, {
                title: '浏览器',
                collapsable: true,

                children: [
                    'browser/start'
                ]
            },
            {
                title: "DOM",
                collapsable: true,

                children: [
                    'dom/start'
                ]
            }]

        }


        // sidebarDepth: 2//侧边栏自动提取文章的几层标题

    },
    //默认的 lang
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    plugins: {
        // '@vuepress/back-to-top': true,
        '@vuepress/last-updated': true,
        '@vuepress-reco/vuepress-plugin-bulletin-popover': {
            width: '200px', // 默认 260px
            title: '消息提示',
            body: [
                {
                    type: 'title',
                    content: '添加小虎好友入前端交流群',
                    style: 'text-aligin: center;'
                },
                {
                    type: 'image',
                    src: '/hb.jpg',
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '打赏',
                    link: '/donate/'
                }
            ]
        }
    }
}