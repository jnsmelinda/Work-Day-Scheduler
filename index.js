const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

$(document).ready(function () {
    $("#currentDay").text(moment().format("LL"));

    for (let i = 0; i < hours.length; i++) {
        $("#calendarItems").append(createCalendarItem(i));
    }
});

function createCalendarItem(index) {
    return $("<div>")
        .attr("id", "calendarItem-" + index)
        .text(hours[index])
        .append(createButton(index));
}

function createButton(index) {
    return $("<button>")
        .addClass("btn btn-primary btn-sm")
        .attr("id", "saveCalendarItem-" + index)
        .text("save")
        .click(() => saveCalendarItem(index));
}

function saveCalendarItem(calendarItemIndex) {
    console.log("Saving item at " + hours[calendarItemIndex]);
}

