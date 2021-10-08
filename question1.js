const os = require("os");
console.log("OS CPU Architecture: " + os.arch());
console.log("Free Memory Of The System : " + os.freemem()/(1024*1024*1024)+" GB");
console.log("Total Memory Of The System : "+os.totalmem()/(1024 * 1024 * 1024)+" GB");
console.log("OS Platform : "+os.platform());
console.log("Current User is : ")
console.log(os.userInfo());

