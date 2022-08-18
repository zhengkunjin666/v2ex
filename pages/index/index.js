// index.js
Page({
	data: {
		topics: [],
	},
	onLoad(options) {
		this.getData();
	},
	getData() {
		const that = this;
		wx.request({
			url: 'https://www.v2ex.com/api/topics/hot.json',
			// url: 'https://www.v2ex.com/api/v2/nodes/js/topics',
      // header: {
      //   "Authorization": "Bearer 032b2892-6460-42af-bc5e-f40b5e86bc67"
      // },
			success(res) {
				console.log(res);
				that.setData({
					topics: res.data,
				})
			}
		})
	}
})
