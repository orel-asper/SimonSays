import term from "../../terms";

const Greetings = () => {
    let greeting = '';
    const time = new Date().getHours()
    if (time >= 20 || time < 6) {
        greeting = term('greeting_night');
    } else if (time >= 6 && time < 12) {
        greeting = term('greeting_morning');
    } else if (time >= 12 && time < 18) {
        greeting = term('greeting_afternoon');
    } else if (time >= 18 && time < 20) {
        greeting = term('greeting_evening');
    }
    return greeting;
}

export default Greetings;