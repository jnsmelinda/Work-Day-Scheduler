const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

$(document).ready(function () {
    let date = $("#currentDay").text(moment().format("MMMM Do YYYY"));

    for (let i = 0; i < hours.length; i++) {
        const item = document.createElement("div");
        $(item).attr("id", "calendarItem-" + i);
        $(item).text(hours[i]);


        const button = document.createElement("button");
        button.id = "saveCalendarItem-" + i;
        button.classList = "btn btn-primary btn-sm";
        button.textContent = "save";
        button.onclick = () => saveCalendarItem(i);
        item.appendChild(button);

        document.getElementById("calendarItems").appendChild(item);
    }

    // $("li").each(function(i, element) {
    //     const item = document.createElement("div");


    //     $(element).text(hours[i]);
    // });
});

function saveCalendarItem(calendarItemIndex) {
    console.log("Saving item at " + hours[calendarItemIndex]);
}

