// show.js
Page({
	data: {
		replies: [],
		topic: {},
	},
	onLoad(options) {
		this.getTopics(options.id);
		this.getReplies(options.id);
	},
	getTopics(id) {
		const that = this;
		wx.request({
			url: 'https://www.v2ex.com/api/topics/show.json?id='+id,
			success(res) {
				that.setData({
					topic: res.data[0],
				})
			}
		})
	},
	getReplies(id) {
		const that = this;
		wx.request({
			url: 'https://www.v2ex.com/api/replies/show.json?topic_id='+id,
			success(res) {
				that.setData({
					replies: res.data,
				})
			}
		})
	}
})
