var app = app || {};

app.calendarController = (function () {
    function CalendarController(viewBag, model) {
        this.model = model;
        this.viewBag = viewBag;
    }

    CalendarController.prototype.loadLectures = function (selector) {
        var _this = this;
        var date = new Date().toISOString().substr(0, 10);
        this.model.getAllLectures()
            .then(function (data) {
                var result = {
                    lectures: []
                };

                data.forEach(function (lecture) {
                    result.lectures.push({
                        title: lecture.title,
                        start: lecture.start,
                        end: lecture.end,
                        lecturer: lecture.lecturer,
                        id: lecture._id
                    })
                });

                _this.viewBag.showLectures(selector, result);
            })
    };

    CalendarController.prototype.loadMyLectures = function (selector) {
        var _this = this;
        var userId = sessionStorage['userId'];
        this.model.getLecturesByCreatorId(userId)
            .then(function (data) {
                var result = {
                    lectures: []
                };

                data.forEach(function (lecture) {
                    result.lectures.push({
                        title: lecture.title,
                        start: lecture.start,
                        end: lecture.end,
                        lecturer: lecture.lecturer,
                        id: lecture._id
                    })
                });

                _this.viewBag.showMyLectures(selector, result);
            })
    };

    CalendarController.prototype.loadAddLecture = function (selector) {
        this.viewBag.showAddLecture(selector);
    };

    CalendarController.prototype.addLecture = function (data) {
        var result = {
            title: data.title,
            start: data.start,
            end: data.end,
            lecturer: sessionStorage['username']
        };

        this.model.addLecture(result)
            .then(function (success) {
                console.log(success);
            });
    };

    CalendarController.prototype.loadEditLecture = function (selector, data) {
        this.viewBag.showEditLecture(selector, data);
    };

    CalendarController.prototype.editLecture = function (data) {
        data.lectuter = sessionStorage['username'];
        this.model.editLecture(data._id, data)
            .then(function (success) {
                console.log(success);
            })
    };

    CalendarController.prototype.loadDeleteLecture = function (selector, data) {
        this.viewBag.showDeleteLecture(selector, data);
    };

    CalendarController.prototype.deleteLecture = function (lectureId) {
        this.model.deleteLecture(lectureId)
            .then(function (success) {
                window.location.reload();
            });
    };

    return {
        load: function (viewBag, model) {
            return new CalendarController(viewBag, model);
        }
    };
}());
