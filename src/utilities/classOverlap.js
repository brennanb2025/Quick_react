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