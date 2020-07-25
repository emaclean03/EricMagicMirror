/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {//
	address: "0.0.0.0", 	// Address to listen on, can be://
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8000,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
			classes: "dimmable"
		},
		{
			module: "MMM-Traffic",
			position: "top_left",
			classes: "dimmed medium",  //optional, default is "bright medium", only applies to commute info not route_name
			config: {
				api_key: "AIzaSyCxYZsEB7HZIA9gWrTIEU6u7Ta_XAwllr8",
				mode: "driving",
				origin: "12344 Knotty Pine Ct, Spring Hill, FL 34609",
				destination: "8010 Woodland Center Blvd 700, Tampa, FL 33614",
				route_name: "Home to HiVelocity",
				allTime: false,
				startHr: 5,
				endHr: 10,
				changeColor: true,
				showRouteInfo: true,
				showGreen: true,
				hideOffHours: true,
				limitYellow: 5,  // Greater than 5% of journey time due to traffic
				limitRed: 20,  // Greater than 20% of journey time due to traffic
				traffic_model: "best_guess",
				interval: 120000  // 2 minutes
			}
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: "dimmable"
		},
		{
			module: "clock",
			position: "top_bar",
			analogSize: "600px"

		},
		{
			module: "MMM-LiveNotes",
			title: 'Current Notes',
			position: "top_left",
		},
		{
			module: "calendar",
			header: "Eric / Val Calendar",
			position: "top_left",
			classes: "dimmable",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/02aehgncjpof2a6t50futcss7s%40group.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			classes: "dimmable",
			config: {
				location: "Florida",
				locationID: "4173838", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "16b68a43843e159fb9aaf9e3d514fa72"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			classes: "dimmable",
			header: "Weather Forecast",
			config: {
				location: "Florida",
				locationID: "4173838", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "16b68a43843e159fb9aaf9e3d514fa72"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: "dimmable",
			config: {
				feeds: [
					{
						title: "ESPN",
						url: "https://www.espn.com/espn/rss/news"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
