/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.09
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "polar.png";

/*Display current map and gamemode?
'true' or 'false'*/
var l_displayMapGamemode = true;

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will use images
'true' or 'false'*/
var l_bgVideo = false;

/*Default available videos:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add your own video backgrounds
Just make sure they are using webm VP8 format 
(Place the videos in the backgrounds/videos folder)*/
var l_background = "bluefall.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Place the files in the backgrounds/images folder)*/
var l_bgImages = [
	"12112.png"
];

/*Random background images order?
'true' or 'false'*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?
'true' or 'false'*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Play music during the loading screen?
'true' or 'false'*/
var l_music = true;

/*Display current music name?
'true' or 'false'*/
var l_musicDisplay = true;

/*Music playlist
Add as many youtube ids or ogg files you want
(Place the ogg files in the music folder)*/
var l_musicPlaylist = [
	{ogg: "DS.ogg", name: "Star Wars Dark side"},
];

/*Random music order?
'true' or 'false'*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 (quietest) and 100 (loudest)*/
var l_musicVolume = 12;

/*Enable custom messages?
'true' or 'false'*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"If you are missing content download it at http://steamcommunity.com/sharedfiles/filedetails/?id=1233398914",
	"Thanks for joining us!",
	"This is a seriousRP server",
	"Check out our forums at polarnetworks.mistforums.com",
];

/*Random message order?
'true' or 'false'*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
