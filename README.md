# alipay-app-draggable

> a component is the same as alipay what the applet can be draggbale

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 注意

安装完成组件后，需要引入bootstrap组件，否则样式会出现错乱。

## 属性
        favoriteAppArr: {        //偏好app集合
            type: Array,
            required: true,
            default: null
        },
        allAppArr: {            //所有app集合
            type: Array,
            required: false,
            default: null
        },
        dragDisable:{           //拖拽开关
            type: Boolean,
            required: false,
            default: true
        },
        editBtn:{               //编辑按钮显示（删除偏好按钮）
            type: Boolean,
            required: false,
            default: false
        },
        favoriteCount:{         //最大偏好app设置数量
            type: Number,
            required: false,
            default: 11
        },
        iconType:{              //图标类型（暂时支持bootstrap 和 img）
            type:String,
            required:false,
            default:"bootstrap"   //bootstrap,img
        },
        iconBindFieldName:{     //app图标绑定字段
            type:String,
            required:true,
            default:""
        },
        appBindFieldName:{      //app名称绑定字段
            type:String,
            required:true,
            default:""
        }

## 事件

        RmFavorApp      //移除偏好app事件            

