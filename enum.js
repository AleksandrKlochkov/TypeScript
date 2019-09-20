"use strict";
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 50] = "Backend";
    Job[Job["Designer"] = 51] = "Designer";
})(Job || (Job = {}));
var job = Job.Backend; // 50
console.log(job);
function throwNewError(err) {
    throw new Error(err);
}
var myNumber = 20;
myNumber = null;
//# sourceMappingURL=enum.js.map