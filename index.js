const emptyCalendar = [
    {time: "09:00", content: ""},
    {time: "10:00", content: ""},
    {time: "11:00", content: ""},
    {time: "12:00", content: ""},
    {time: "13:00", content: ""},
    {time: "14:00", content: ""},
    {time: "15:00", content: ""},
    {time: "16:00", content: ""},
    {time: "17:00", content: ""}
];

const calendar = JSON.parse(localStorage.getItem("calendar")) || emptyCalendar;
moment.locale(navigator.userLanguage || navigator.language);

$(document).ready(function() {
    $("#currentDay").text(moment().format("LL"));

    for (let i = 0; i < calendar.length; i++) {
        $("#calendarContainer").append(createRow(i));
    }
});

function createRow(index) {
    return $("<div>")
        .attr("id", "row-" + index)
        .addClass(`row time-block ${getTimeIndicator(index, moment().format("HH"))}`)
        .append(createTimeElement(index))
        .append(createTextarea(index))
        .append(createSaveButton(index))
        .append(createTrashButton(index));
}

function createTimeElement(index) {
    return $("<div>")
        .addClass("col-2 col-md-1 hour")
        .text(calendar[index].time);
}

function createTextarea(index) {
    return $("<textarea>")
        .attr("id", "textarea-" + index)
        .addClass("col description")
        .val(calendar[index].content);
}

function getTimeIndicator(index, currentHour) {
    if (calendar[index].time.substring(0, 2) < currentHour) {
        return "past";
    } else if (calendar[index].time.substring(0, 2) > currentHour) {
        return "future";
    } else {
        return "present";
    }
}

function createSaveButton(index) {
    return $("<button>")
        .attr("id", "saveButton-" + index)
        .addClass("col-1 btn fa fa-save saveBtn")
        .click(() => saveCalendarItem(index));
}

function createTrashButton(index) {
    return $("<button>")
        .attr("id", "trashButton-" + index)
        .addClass("col-1 btn fa fa-trash trashBtn")
        .click(() => deleteCalendarItem(index));
}

function saveCalendarItem(index) {
    calendar[index].content = $("#textarea-" + index).val();
    saveToLocalStorage();
}

function deleteCalendarItem(index) {
    calendar[index].content = "";
    $("#textarea-" + index).val("");
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("calendar", JSON.stringify(calendar));
}
