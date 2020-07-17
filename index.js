moment.locale(navigator.userLanguage || navigator.language);
const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

$(document).ready(function () {
    $("#currentDay").text(moment().format("LL"));

    for (let i = 0; i < hours.length; i++) {
        $("#calendarItems").append(createCalendarItem(i)).addClass("time-block");
    }
});

function createCalendarItem(index) {
    return $("<div>")
        .addClass("row input-group hour")
        .attr("id", "calendarItem-" + index)
        .text(hours[index])
        .append(createInput(index))
        .append(createButton(index, "fa-save"))
        .append(createButton(index, "fa-trash"));
}

function createInput(index) {
    return $("<input>")
        .addClass("form-control textarea")
        .attr("id", "saveCalendarItem-" + index)
        .text("input");
}

function createButton(index, icon) {
    return $("<button>")
        .addClass(`btn btn-sm fas ${icon}`)
        .attr("id", "saveCalendarItem-" + index)
        .click(() => saveCalendarItem(index));
}

function saveCalendarItem(calendarItemIndex) {
    console.log("Saving item at " + hours[calendarItemIndex]);
}

