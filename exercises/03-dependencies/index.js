import { daysToWeeks, isTuesday, lastDayOfQuarter} from "date-fns";

// daysToWeeks function
const weeksFromDays = daysToWeeks(25);
console.log(weeksFromDays);

// isTuesday function
const isTodayTuesday = isTuesday(new Date(2021, 10, 23));
console.log(isTodayTuesday); // Returns true but is actually not.

// lastDayOfQuarter function
const lastDay = lastDayOfQuarter(new Date(2021, 11, 15, 3, 45, 0))
console.log(lastDay);