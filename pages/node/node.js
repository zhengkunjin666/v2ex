// node.js
Page({
	data: {
		nodes: [],
	},
	onLoad(options) {
		this.getData();
	},
	getData() {
		const that = this;
		wx.request({
			url: 'https://www.v2ex.com/api/nodes/all.json',
			success(res) {
				that.setData({
					nodes: res.data,
				})
			}
		})
	}
})
