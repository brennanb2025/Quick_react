const OverlapCourses = (course1, course2) => {
    return course1.term === course2.term && overlapDay(course1.meets, course2.meets);
}

export const AnyOverlap = (course, courses) => {
    return courses.filter(c => OverlapCourses(course, c)).length != 0;
}

const overlapDay = (course1, course2) => {
    if(course1.search('M') != -1 && course2.search('M') != -1 && 
            overlapTimes(course1, course2)) {
        return true;
    }
    if(course1.search('Tu') != -1 && course2.search('Tu') != -1 &&
            overlapTimes(course1, course2)) {
        return true;
    }
    if(course1.search('W') != -1 && course2.search('W') != -1 &&
            overlapTimes(course1, course2)) {
        return true;
    }
    if(course1.search('Th') != -1 && course2.search('Th') != -1 &&
            overlapTimes(course1, course2)) {
        return true;
    }
    if(course1.search('F') != -1 && course2.search('F') != -1 &&
            overlapTimes(course1, course2)) {
        return true;
    }
    return false;
}

const overlapTimes = (t1, t2) => {
    const t1range = t1.split(" ")[1].split("-"); //eg 9:30-5:00
    const t2range = t2.split(" ")[1].split("-");

    const startTime1 = getTimeDecimal(t1range[0]);
    const endTime1 = getTimeDecimal(t1range[1]);

    const startTime2 = getTimeDecimal(t2range[0]);
    const endTime2 = getTimeDecimal(t2range[1]);

    return !(startTime1 >= endTime2 || startTime2 >= endTime1);
}

const getTimeDecimal = (time) => {
    const timeSplit = time.split(":");
    return parseFloat(timeSplit[0]) + parseFloat(timeSplit[1]/60.0);
}


const validateTime = (time) => {
    return /^([0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
}

const validateDay = (day) => {
    //check not more than 1 match of each
    let totalSize = 0;
    const m = (day.match(/M/g) || []);
    if(m.length > 1) {
        return false;
    } else if(m.length === 1) {
        totalSize++;
    }
    const tu = (day.match(/Tu/g) || []);
    if(tu.length > 1) {
        return false;
    } else if(tu.length === 1) {
        totalSize+=2;
    }
    const w = (day.match(/W/g) || []);
    if(w.length > 1) {
        return false;
    } else if(w.length === 1) {
        totalSize++;
    }
    const th = (day.match(/Th/g) || []);
    if(th.length > 1) {
        return false;
    } else if(th.length === 1) {
        totalSize+=2;
    }
    const f = (day.match(/F/g) || []);
    if(f.length > 1) {
        return false;
    } else if(f.length === 1) {
        totalSize++;
    }
    //at least 1 match
    return totalSize === day.length && (m.length == 1 || tu.length == 1 || w.length == 1 || th.length == 1 || f.length == 1);
}

export const validateMeets = (time) => {
    //empty string or "dayofweek x:yz-x:yz", dayofweek=MTuWThF, 0<=x<=23 0<=y<=5 0<=z<=9
    if(time.length === 0) {
        return true;
    }
    const splitSpace = time.split(" ");
    if(!splitSpace.length == 2) {
        return false;
    }
    const dayOfWeek = splitSpace[0];
    if(!validateDay(dayOfWeek)) {
        return false;
    }

    const times = splitSpace[1].split("-")
    if(!times.length === 2) {
        return false;
    }
    
    if(validateTime(times[0]) && validateTime(times[1])) {
        return getTimeDecimal(times[0]) < getTimeDecimal(times[1]);
    } else {
        return false;
    }
}