//index.js
const app = getApp()
const recorderManager = wx.getRecorderManager();
Page({
	data: {
		info: {
			id: 1,
			title: "What Is Hdmi",
			startedTime: "Aug 12, 2018",
			status: 33
		},
		is_record: false,
		check_status: false,
		is_checked: false
	},
	
	onLoad: function () {	
	},

	recordStart() {
		
		this.data.is_record = true;
		this.setData({
			is_record: true,
			check_status: false
		});
		wx.startRecord({
			success: function(res) {
				getApp().setRecordedFile(res.tempFilePath);
			},
			fail: function(res) {
				//
			}
		});
		// this.

		

		// recorderManager.onStart(() => {
		// 	console.log('recorder start')
		//   })
		//   recorderManager.onPause(() => {
		// 	console.log('recorder pause')
		//   })
		//   recorderManager.onStop((res) => {
		// 	console.log('recorder stop', res)
		// 	const { tempFilePath } = res
		//   })
		//   recorderManager.onFrameRecorded((res, a, c) => {
		// 	const { frameBuffer } = res;
		// 	console.log('OnFramed');
		// 	console.log(res);
		// 	console.log(a);
		// 	console.log('frameBuffer.byteLength', frameBuffer.byteLength)
		//   })
		  
		//   const options = {
		// 	duration: 10000,
		// 	sampleRate: 44100,
		// 	numberOfChannels: 1,
		// 	encodeBitRate: 192000,
		// 	format: 'aac',
		// 	frameSize: 50
		//   }
		  
		//   recorderManager.start(options)

	},
	recordStop() {
		this.data.is_record = false;
		this.check_status = true;
		this.setData({
			is_record: false,
			check_status: true
		});
		wx.stopRecord();
		// recorderManager.stop();

	},
	check() {
		this.setData({
			is_checked: true
		});
	},

	init() {
		this.setData({
			is_record: false,
			check_status:false,
			is_checked: false
		})
	},

	next() {
		this.init();
	}

	
})
