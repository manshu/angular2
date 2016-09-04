"use strict";
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return ["Project Management Professional", "ITIL", "Course Two", "Course Three"];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map