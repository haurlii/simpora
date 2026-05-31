import "flatpickr/dist/flatpickr.min.css";
import "./bootstrap";

import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
// flatpickr
import flatpickr from "flatpickr";

Alpine.plugin(persist);
window.Alpine = Alpine;
window.flatpickr = flatpickr;
Alpine.start();

flatpickr(".datepickerTwo", {
    mode: "single",
    static: true,
    monthSelectorType: "static",
    dateFormat: "M j, Y",
    defaultDate: null,
    prevArrow:
        '<svg class="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 6L9 12.25L15.25 18.5" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    nextArrow:
        '<svg class="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 19L15 12.75L8.75 6.5" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    onChange: (selectedDates, dateStr, instance) => {
        // eslint-disable-next-line no-param-reassign
        instance.element.value = dateStr.replace("to", "-");
    },
});

// Get the current year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}
