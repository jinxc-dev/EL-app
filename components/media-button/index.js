

// const myaudio = wx.createInnerAudioContext();
Component({
    properties: {
        is_played : {
            type: Number,
            value: 0
        },
        player_string: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: 0
        }
    },

    ready:function () {
        this.setData({
            is_played: 0,
            player_string: this.data.player_string
        });

        // myaudio.onStop(() => {
        //     console.log('Stop');
        // });

        // myaudio.onPlay(() => {
        //     console.log('Play');
        // });
        // myaudio.onEnded(() => {
        //     console.log('Ended');
        // });
        // myaudio.onError((res) => {
        //     console.log(res.errMsg)
        //     console.log(res.errCode)
        // })
    },
    methods:{
        play() {
            this.data.is_played = 1;
            this.setData( {
                is_played: 1
            });
            var file = getApp().getRecordedFile();
            if (this.data.type === "src") {
                //. play source tmpFile;
                file = getApp().getSourceFile();
            }

            var obj = this;
            // myaudio.src = file;
            // console.log(myaudio.src);
            // myaudio.play();

            if (file != null) {
                wx.playVoice({
                    filePath: file,
                    complete: function() {
                        // obj.setData({
                        //     is_played: 0
                        // });
                    }, 
                    success: function() {
                        console.log('xxxxxxxx');
                    },
                    fail() {
                        console.log('fail');
                    }
                });
            } else {
                this.stop();
            } 
        },
        stop() {
            this.setData( {
                is_played: 0
            });
            // myaudio.stop();
            wx.stopVoice();
        }
    }
})