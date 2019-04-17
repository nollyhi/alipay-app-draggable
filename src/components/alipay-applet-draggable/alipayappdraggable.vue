<template>
    <drag class="col-xs-12 drag-list" :list="favoriteAppArr" draggable=".moveable" v-bind="dragOptions" :disabled="dragDisable" @start="drag = true" @end="drag = false">
        <div class="col-xs-3 drag-item moveable" v-for="(element,appIndex) in favoriteAppArr" :key="appIndex">
            <div :style="dragStyle" >
                <div v-if="editBtn">
                    <div v-if="!dragDisable" class="badge-position-drag" @click="RmFavorApp(element)">
                        <div class="badge">一</div>
                    </div>
                </div>
                <img v-if="iconType === 'img'" class="app-icon" :src="imgIconUrl(element)" style="display: -webkit-inline-box">
                <span v-if="iconType === 'bootstrap'" class="app-icon" :class="bootstrapIconClass(element)" aria-hidden="true"></span>
                <div>{{element.name}}</div>
            </div>
        </div>
        <div v-if="favoriteAppArr.length < favoriteCount" class="col-xs-3 drag-item unmoveable" key="blockapp">
            <div :style="dragStyle" style="height: 62px;border: dotted;border-color: gainsboro;background:#000;">
            </div>
        </div>
    </drag>
</template>

<script>
import drag from 'vuedraggable'
export default {
    name:"alipayappletdraggable",
    components:{
        drag
    },
    data(){
        return {

        }
    },
    props:{
        favoriteAppArr: {
            type: Array,
            required: true,
            default: null
        },
        allAppArr: {
            type: Array,
            required: false,
            default: null
        },
        dragDisable:{
            type: Boolean,
            required: false,
            default: true
        },
        editBtn:{
            type: Boolean,
            required: false,
            default: false
        },
        favoriteCount:{
            type: Number,
            required: false,
            default: 11
        },
        iconType:{
            type:String,
            required:false,
            default:"bootstrap"   //bootstrap,img
        },
        iconBindFieldName:{
            type:String,
            required:true,
            default:""
        }
    },
    computed:{
        dragOptions() {
            return {
                animation: 300,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            };
        },
        dragStyle() {
            if (this.dragDisable) {
                return "background-color:#fff";
            } else {
                return "background-color:#eee";
            }
        },

    },
    methods:{
        RmFavorApp(item) {
            this.$emit('RmFavorApp',item);
        },
        bootstrapIconClass(item){
            if(this.iconType === 'bootstrap'){
                return item[this.iconBindFieldName]||"glyphicon glyphicon-search";
            }
        },
        imgIconUrl(item){
            if(this.iconType === 'img'){
                return item[this.iconBindFieldName];
            }
        }
    }
}
</script>

<style>
/* rewrite bootstrap */

.badge-position-drag {
    top: 1px;
    right: 1px;
    padding: 2px 6px;
    position: absolute;
    z-index: 10;
}

a{
    text-decoration: none !important;
}

/*********************Draggable Start***********************/
div .drag-list{
    padding:0px;
}

.badge{
    border-radius: 50% !important;
    background-color: red !important;
    min-height: 15px !important;
    min-width: 15px !important;
    padding:0px !important;
    line-height: 15px !important;
}

.drag-item{
    /* margin: 5px 0px; */
    padding:5px !important;
}

.drag-item>div{
    height: 62px;
}

.app-icon {
    height: 34px !important;
    width: auto !important;
    padding: 0px;
    margin: 3px auto;
    font-size: 30px;
    color: #46a1ff;
    display: table-caption;
    /* display: -webkit-inline-box */
}
/*********************Draggable End***********************/

</style>


