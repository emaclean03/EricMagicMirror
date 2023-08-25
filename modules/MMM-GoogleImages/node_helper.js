const NodeHelper = require("node_helper");
const request = require("request");
const { Log } = require("../../module-types");

module.exports = NodeHelper.create({
	socketNotificationReceived: function (notification, payload) {
		/*Sends the payload back to broadcast to clients*/
		var self = this;

		/*request("https://photos.app.goo.gl/6vPWySmZZ6bcesT26", function (error, response, body) {
			console.log("PHOTO: ", extractPhotos(body));
			self.sendSocketNotification("Image", extractPhotos(body));
		});*/

		fetch("https://photos.app.goo.gl/6vPWySmZZ6bcesT26").then((response) => {
			Log.log("Response: ", response);
			self.sendNotification("Image", extractPhotos(response.body));
		});
	},

	start: function () {}
});

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content) {
	const links = new Set();
	let match;
	while ((match = regex.exec(content))) {
		links.add(match[1]);
	}
	return Array.from(links);
}
