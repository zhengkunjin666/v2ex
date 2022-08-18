// topics.js
Page({
	data: {
		topics: [],
	},
	onLoad(options) {
		this.getData(options.id);
	},
	getData(id) {
		const that = this;
		wx.request({
			url: 'https://www.v2ex.com/api/topics/show.json?node_id='+id,
			success(res) {
				console.log(res);
				that.setData({
					topics: res.data,
				})
			}
		})
	}
})
