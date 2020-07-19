const emptyCalendar = [
    { time: "09:00", content: "" },
    { time: "10:00", content: "" },
    { time: "11:00", content: "" },
    { time: "12:00", content: "" },
    { time: "13:00", content: "" },
    { time: "14:00", content: "" },
    { time: "15:00", content: "" },
    { time: "16:00", content: "" },
    { time: "17:00", content: "" }
];

let calendar = JSON.parse(localStorage.getItem("calendar")) || emptyCalendar;


moment.locale(navigator.userLanguage || navigator.language);

$(document).ready(function () {
    $("#currentDay").text(moment().format("LL"));

    for (let i = 0; i < calendar.length; i++) {
        $("#calendarItems").append(createCalendarItem(i)).addClass("time-block");
    }
});

function createCalendarItem(index) {
    return $("<div>")
        .addClass("input-group hour")
        .attr("id", "calendarItem-" + index)
        .text(calendar[index].time)
        .append(createInput(index))
        .append(createSaveButton(index))
        .append(createDeleteButton(index));
}

function createInput(index) {
    return $("<input>")
        .addClass("form-control")
        .attr("id", "input-" + index)
        .val(calendar[index].content);
}

function createSaveButton(index) {
    return $("<button>")
        .addClass("btn btn-sm fas fa-save")
        .attr("id", "saveButton-" + index)
        .click(() => saveCalendarItem(index));
}

function createDeleteButton(index) {
    return $("<button>")
        .addClass("btn btn-sm fas fa-trash")
        .attr("id", "deleteButton-" + index)
        .click(() => deleteCalendarItem(index));
}

function saveCalendarItem(index) {
    calendar[index].content = $("#input-" + index).val();
    saveToLocalStorage();
}

function deleteCalendarItem(index) {
    calendar[index].content = "";
    $("#input-" + index).val("");
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("calendar", JSON.stringify(calendar));
}

