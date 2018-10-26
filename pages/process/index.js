//index.js
const app = getApp()

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
		})
		// this.

	},
	recordStop() {
		this.data.is_record = false;
		this.check_status = true;
		this.setData({
			is_record: false,
			check_status: true
		})

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
