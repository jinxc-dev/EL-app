//app.js
App({
	onLaunch: function () {
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 登录
		wx.login({
			success: res => {

			}
		})
		// 获取用户信息
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: res => {
							this.globalData.userInfo = res.userInfo

							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			}
		})
	},
	setRecordedFile(file) {
		this.globalData.recordedFile = file
	},

	getRecordedFile() {
		return this.globalData.recordedFile;
	},

	getSourceFile() {
		return this.globalData.sourceFile;
	},
	globalData: {
		userInfo: null,
		recordedFile: null,
		sourceFile: null
	}
})