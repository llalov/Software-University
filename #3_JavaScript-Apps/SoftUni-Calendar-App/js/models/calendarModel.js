var app = app || {};

app.calendarModel = (function () {
    function CalendarModel(requester) {
        this.requester = requester;
        this.serviceUrl = requester.baseUrl + 'appdata/' + requester.appId + '/lectures/';
    }

    CalendarModel.prototype.getAllLectures = function() {
        var requestUrl = this.serviceUrl;
        return this.requester.get(requestUrl, true);
    };

    CalendarModel.prototype.getLecturesForToday = function(deadline) {
        var requestUrl = this.serviceUrl + '?query={"deadline":"'+deadline + '"}&resolve=_acl.creator';
        return this.requester.get(requestUrl, true);
    };

    CalendarModel.prototype.getLecturesByCreatorId = function(userId) {
        var requestUrl = this.serviceUrl + '?query={"_acl.creator":"'+ userId + '"}';
        return this.requester.get(requestUrl, true);
    };

    CalendarModel.prototype.addLecture = function(data) {
        return this.requester.post(this.serviceUrl, data, true);
    };

    CalendarModel.prototype.editLecture = function(lectureId, data) {
        var requestUrl = this.serviceUrl + lectureId;
        return this.requester.put(requestUrl, data, true);
    };

    CalendarModel.prototype.deleteLecture = function(lectureId) {
        var requestUrl = this.serviceUrl + lectureId;
        return this.requester.delete(requestUrl, true);
    };

    return {
        load: function (requester) {
            return new CalendarModel(requester);
        }
    }
}());
