
Component({
    properties: {
        is_played : {
            type: Number,
            value: 0
        },
        player_string: {
            type: String,
            value: ""
        }
    },

    ready:function () {
        this.setData({
            is_played: 0,
            player_string: this.data.player_string
        });
    },
    methods:{
        play() {
            this.data.is_played = 1;
            this.setData( {
                is_played: 1
            })
        },
        stop() {
            this.setData( {
                is_played: 0
            })
        }
    }
})