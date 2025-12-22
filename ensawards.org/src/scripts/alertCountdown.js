import { millisecondsInSecond } from "date-fns/constants";
import { differenceInDays, intervalToDuration } from "date-fns";

const mobileBreakpointInPixels = 640;

function updateCountdown(root) {
    const isMobile = window.innerWidth < mobileBreakpointInPixels;

    // mobile display
    const mobileTimerWrapper = root.querySelector("#mobileTimerWrapper");

    // desktop display
    const timerWrapper = root.querySelector("#timerWrapper");
    const daysDisplay = root.querySelector("#daysLeft");
    const hoursDisplay = root.querySelector("#hoursLeft");
    const minutesDisplay = root.querySelector("#minutesLeft");

    // datetime variables
    const nowUnixTimestamp = Date.now() / millisecondsInSecond;
    const eventUnixTimestamp = Number(root.dataset.timestamp);
    const threshold = Number(root.dataset.threshold);

    if (nowUnixTimestamp < eventUnixTimestamp) {
        root.style.display = "flex";
    } else {
        // When the event has finished this banner won't be displayed
        root.style.display = "none";
        return;
    }

    if (nowUnixTimestamp > eventUnixTimestamp - threshold) {
        const eventTimestamp = eventUnixTimestamp * millisecondsInSecond;
        const newDuration = intervalToDuration({
            start: new Date(),
            end: new Date(eventTimestamp),
        });

        // calculate remaining days, hours, minutes, seconds
        const daysLeft = differenceInDays(new Date(eventTimestamp), new Date());
        const hoursLeft = newDuration.hours ? newDuration.hours : 0;
        const minutesLeft = newDuration.minutes ? newDuration.minutes : 0;
        const secondsLeft = newDuration.seconds ? newDuration.seconds : 0;

        // for mobile layouts display only the largest available unit
        if (isMobile) {
            handleMobileDisplay(
                root,
                daysLeft,
                hoursLeft,
                minutesLeft,
                secondsLeft,
            );
        }
        // otherwise display days, hours, minutes
        else {
            timerWrapper.style.display = "flex";
            mobileTimerWrapper.style.display = "none";

            daysDisplay.innerText = String(daysLeft);
            hoursDisplay.innerText = String(hoursLeft);
            minutesDisplay.innerText = String(minutesLeft);
        }
    } else {
        // When the eventUnixTimestamp is further than threshold of days away
        // The explicit countdown won't be displayed
        timerWrapper.style.display = "none";
    }
}

function handleMobileDisplay(
    root,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
) {
    // desktop display
    const timerWrapper = root.querySelector("#timerWrapper");

    // mobile display
    const mobileTimerWrapper = root.querySelector("#mobileTimerWrapper");
    const singleUnitsDisplay = root.querySelector("#unitsLeft");

    timerWrapper.style.display = "none";
    mobileTimerWrapper.style.display = "flex";

    if (daysLeft > 0) {
        singleUnitsDisplay.innerText = `${daysLeft} days`;
        return;
    }

    if (hoursLeft > 0) {
        singleUnitsDisplay.innerText = `${hoursLeft} hours`;
        return;
    }

    if (minutesLeft > 0) {
        singleUnitsDisplay.innerText = `${minutesLeft} mins`;
        return;
    }

    singleUnitsDisplay.innerText = `${secondsLeft} secs`;
}

function tick() {
    const countdownRoots = document.querySelectorAll("#countdownAlertRoot");
    countdownRoots.forEach(updateCountdown);
}

// refresh the countdown every second due to necessity
// of monitoring screen width for mobile adaptations
document.addEventListener("astro:page-load", () => {
    setInterval(tick, millisecondsInSecond);
});