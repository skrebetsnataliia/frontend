/**
 * @author Nataliia Skrebets 
 */
/**
 *function for processing date
 */
document.querySelector("#submit").onclick = () => {
    let fromDate = document.querySelector("#from_date").value;
    document.querySelector(".output_from_date").innerHTML = fromDate;
    let toDate = document.querySelector("#to_date").value;
    document.querySelector(".output_to_date").innerHTML = toDate;
    fromDate = Date.parse(fromDate);
    toDate = Date.parse(toDate);
    let countDay = (toDate - fromDate) / 86400000;
    let countHour = (toDate - fromDate) / 3600000;
    document.querySelector(".output_dayHours").innerHTML = "Passed " + countDay + " days or " + countHour + " hours";
    console.log(countDay);
    console.log(countHour);
}