const NodeHelper = require("node_helper");
const request = require("request");

module.exports = NodeHelper.create({
	socketNotificationReceived: function (notification, payload) {
		/*Sends the payload back to broadcast to clients*/
		var self = this;

		request("https://photos.app.goo.gl/6vPWySmZZ6bcesT26", function (error, response, body) {
			self.sendSocketNotification("Image", extractPhotos(body));
		});
	},

	start: function () {}
});

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content) {
	const links = new Set();
	let match;
	while ((match = regex.exec(content))) {
		links.add(match[1]);
	}
	return Array.from(links);
}
