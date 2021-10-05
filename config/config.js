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
			module: "clock",
			position: "top_bar",
			analogSize: "600px"
		},
		{
			module: "MMM-LiveNotes",
			title: 'Current Notes',
			position: "top_right",
		},
		{
			module: "MMM-GoogleImages",
			albumURL: "this is a url",
			position: "bottom_bar",
		},
		{
			module: "calendar",
			header: "My Calendar",
			position: "top_left",
			classes: "dimmable",
			maxTitleLength: 5,
			wrapEvents:true,
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						maximumNumberOfDays: 7,
						url: "https://calendar.google.com/calendar/ical/terrymac0421%40gmail.com/private-4d81bab575633c97a7de6f6b1104afc4/basic.ics"
						//url: "https://calendar.google.com/calendar/embed?src=family01068811041469020433%40group.calendar.google.com&ctz=America%2FNew_York"
					}
				]
			}
		},{
			module: "calendar",
			header: "ProIRB Calendar",
			position: "top_left",
			classes: "dimmable",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						maximumNumberOfDays: 7,
						//url: "https://calendar.google.com/calendar/ical/02aehgncjpof2a6t50futcss7s%40group.calendar.google.com/public/basic.ics"
						url: "https://calendar.google.com/calendar/ical/3a9pd2dfo6cd8m3q0lgh0k7cns%40group.calendar.google.com/private-3cbfa7b23625cc1ad7b642865e573f80/basic.ics"
					}
				]
			}
		},
		{
			module: 'MMM-iFrame-Ping',
			position: 'top_left',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				url: "http://192.168.1.11:81/ui3.html?user=admin&pw=Iphone3gs!", //url to display
				height:"100%",
				width:"100%",
				autoRefresh: false, //set to false for video
				updateInterval: 1, //in min. Only if autoRefresh: true
				displayLastUpdate: true,
				width: "100%", // Optional. Default: 100%
				height: "400px", //Optional. Default: 100px
				scrolling: "no"
			}
		},
		/*{
			module: "calendar",
			header: "Eric's work",
			position: "top_left",
			classes: "dimmable",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						maximumNumberOfDays: 14,
						url: "https://app.wheniwork.com/calendar/fd00d0f168232b83c9afddd19138a545ed1ef9db.ics"
					}
				]
			}
		},*/
		{
			module: "currentweather",
			position: "top_right",
			classes: "dimmable",
			config: {
				location: "Florida",
				locationID: "4148986", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
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
				locationID: "4148986", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "16b68a43843e159fb9aaf9e3d514fa72"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: "dimmable",
			config: {
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		/*{
			module: "MMM-MyStandings",
			position: "top_left",
			config: {
				updateInterval: 60 * 60 * 1000, // every 60 minutes
				rotateInterval: 1 * 60 * 1000, // every 1 minute
				sports: [
					{ league: "MLB", groups: ["American League East", "American League Central", "American League West", "National League East", "National League Central", "National League West"] },
					{ league: "NHL", groups: ["Atlantic Division", "Metropolitan Division", "Central Division", "Pacific Division"] },
					{ league: "MLS", groups: ["Eastern Conference", "Western Conference"] },
				],
				nameStyle: "short",
				showLogos: true,
				useLocalLogos: true,
				showByDivision: true,
				fadeSpeed: 2000,
			}
		},*/
		{
			module: 'MMM-ModuleScheduler',
			config: {
				// SHOW ALL MODULES EXCEPT clock AND calender BETWEEN 06:00 AND 22:00
				global_schedule: {from: '0 05 * * *', to: '0 21 * * *', dimLevel:'23'},

			}
		},


	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
