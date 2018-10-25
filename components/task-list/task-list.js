
Component({
    properties:{
        list:{
            type:Array,
            value:[]
        },
        url: {
            type:String,
            value:""
        }
    },
    ready:function () {
        this.setData({
            list:this.data.list,
            url: this.data.url
        })
    },
    methods:{
    }
})