<template>
    <drag class="col-xs-12 ali-drag-list" :list="favoriteAppArr" draggable=".moveable" v-bind="dragOptions" :disabled="dragDisable" @start="drag = true" @end="drag = false">
        <div class="col-xs-3 ali-drag-item moveable" v-for="(element,appIndex) in favoriteAppArr" :key="appIndex">
            <div :style="dragStyle" >
                <div v-if="editBtn">
                    <div v-if="!dragDisable" class="ali-badge-position-drag" @click="rmFavorApp(element)">
                        <div class="ali-remove-btn"><hr class="ali-minus" /></div>
                    </div>
                </div>
                <img v-if="iconType === 'img'" class="ali-app-icon" :src="imgIconUrl(element)" style="display: -webkit-inline-box">
                <span v-if="iconType === 'bootstrap'" class="ali-app-icon" :class="bootstrapIconClass(element)" aria-hidden="true"></span>
                <div>{{appName(element)}}</div>
            </div>
        </div>
        <div v-if="favoriteAppArr.length < favoriteCount" class="col-xs-3 ali-drag-item unmoveable" key="blockapp">
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
        },
        appBindFieldName:{
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
        rmFavorApp(item) {
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
        },
        appName(item){
            return item[this.appBindFieldName];
        }
    }
}
</script>

<style scoped>

/* rewrite bootstrap */

.ali-badge-position-drag {
    top: 0px;
    right: 0px;
    padding: 8px;
    position: absolute;
    z-index: 10;
    line-height: normal;
    font-size: 10px;
}


/*********************Draggable Start***********************/
div .ali-drag-list{
    padding:0px;
}

.ali-remove-btn{
    border-radius: 50% !important;
    background-color: red !important;
    min-height: 15px !important;
    min-width: 15px !important;
    padding:0px !important;
    line-height: 15px !important;
    font-size: 14px !important;
    display: inline-block;
    vertical-align: middle;
}

.ali-drag-item{
    /* margin: 5px 0px; */
    padding:5px !important;
    text-align: center;
}

.ali-drag-item>div{
    height: 62px;
}

.ali-app-icon {
    height: 34px !important;
    width: auto !important;
    padding: 0px;
    margin: 3px auto;
    font-size: 30px;
    color: #46a1ff;
    display: table-caption;
    /* display: -webkit-inline-box */
}

.ali-minus{
    margin:7px 0 0 1px !important;
    width: 13px;

}
/*********************Draggable End***********************/

</style>


