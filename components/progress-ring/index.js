
Component({
    properties:{
        value: {
            type: Number,
            value:0
        }
    },
    ready:function () {
        this.setData({
            value:this.data.value
        });
        var rpx = (wx.getSystemInfoSync().windowWidth / 375).toFixed(2);
        var ctx = wx.createCanvasContext('ring', this);
        var r = 38 * rpx;
        var p = 50 * rpx;

        var w_progress = (this.data.value / 100) * 2 * Math.PI;

        ctx.setLineWidth(20 * rpx);

        ctx.font = "bolder 30px impact sans-serif";
        ctx.setFillStyle("#182C4F");
        ctx.setFontSize(20 * rpx);
        ctx.setTextAlign("center");
        ctx.fillText(this.data.value + "%", p, p + 8 * rpx);
        ctx.fill();

        ctx.beginPath();
        ctx.setStrokeStyle("#182C4F");
        ctx.arc(p, p, r, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.setStrokeStyle("#0C66FF");        
        ctx.arc(p, p, r, -Math.PI / 2, w_progress - Math.PI / 2,  false);
        ctx.stroke();        
        ctx.draw();        
    },
    methods:{

    }
})