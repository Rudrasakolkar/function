let cl=console.log;

// JavaScript Practice Tasks – 40 Advanced Exercises
// =======================
// LOOPS & ITERATION
// =======================
// 1. Sum all numbers in an array using a loop. → Example: sumLoop([2,3,6]) → 11
var sumLoop = (arr) => {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

var result1 = sumLoop([2, 3, 6]);
cl(result1);

// 2. Count how many items in an array are greater than 10. → Example: countGreaterThanTen([5,15,22,3]) → 2
var countGreaterThanTen = (arr) => {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            count++;
        }
    }

    return count;
}

var result2 = countGreaterThanTen([5, 15, 22, 3]);
cl(result2);




// 3. Return all even numbers in an array using a for loop. → Example: findEven([1,2,3,4,5]) → [2,4]
var findEven = (arr) => {
    var even = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }

    return even;
}

var result3 = findEven([1, 2, 3, 4, 5]);
cl(result3);


// 4. Find the average value in an array using a loop. → Example: averageLoop([5,8,11]) → 8
var averageLoop = (arr) => {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
}

var result4 = averageLoop([5, 8, 11]);
cl(result4);

// 5. Reverse a string using a loop (no built-in reverse). → Example: reverseLoop("hello") → "olleh"
var reverseLoop = (str) => {
    var reverse = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    return reverse;
}

var result5 = reverseLoop("hello");
cl(result5);

// 6. Print the multiplication table for a number (1 to 10). → Example: multiplicationTable(3) prints 3,6,9,…30
var multiplicationTable = (num) => {
    var result = [];

    for (var i = 1; i <= 10; i++) {
        result.push(num * i);
    }

    return result;
}

var result6 = multiplicationTable(3);
cl(result6);

// 7. Return true if a number appears at least twice in an array. → Example: hasDuplicate([1,2,2,4]) → true
var hasDuplicate = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        }
    }

    return false;
}

var result7 = hasDuplicate([1, 2, 2, 4]);
cl(result7);
// 8. Remove duplicates from an array using a loop. → Example: dedupeLoop([1,2,2,3]) → [1,2,3]
var dedupeLoop = (arr) => {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

var result8 = dedupeLoop([1, 2, 2, 3]);
cl(result8);


// 9. Calculate the factorial of a number using a loop. → Example: factorial(5) → 120
var factorial = (num) => {
    var fact = 1;

    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

var result9 = factorial(5);
cl(result9);

// 10. Count the vowels in a string using a loop. → Example: countVowels("engineer") → 4
var countVowels = (str) => {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
        ) {
            count++;
        }
    }

    return count;
}

var result10 = countVowels("engineer");
cl(result10);


// =======================
// OBJECTS & DATA MANIPULATION
// =======================
// 11. Return the keys of an object as an array. → Example: objectKeys({a:1,b:2}) → ["a","b"]
var objectKeys = (obj) => {
    var keys = [];

    for (var key in obj) {
        keys.push(key);
    }

    return keys;
}

var result11 = objectKeys({a: 1, b: 2});
console.log(result11);

// 12. Merge two objects (no spread syntax). → Example: mergeObjs({x:1},{y:2}) → {x:1, y:2}
var mergeObjs = (obj1, obj2) => {
    var result = {};

    for (var key in obj1) {
        result[key] = obj1[key];
    }

    for (var key in obj2) {
        result[key] = obj2[key];
    }

    return result;
}

var result12 = mergeObjs({x: 1}, {y: 2});
console.log(result12);

// 13. Count properties in an object whose value is a number. → Example: countNumbers({a:1,b:"hi",c:12}) → 2
var countNumbers = (obj) => {
    var count = 0;

    for (var key in obj) {
        if (typeof obj[key] == "number") {
            count++;
        }
    }

    return count;
}

var result13 = countNumbers({a: 1, b: "hi", c: 12});
console.log(result13);

// 14. Extract all string values from an object. → Example: stringsInObj({a:"one",b:2,c:"two"}) → ["one","two"]
var stringsInObj = (obj) => {
    var result = [];

    for (var key in obj) {
        if (typeof obj[key] == "string") {
            result.push(obj[key]);
        }
    }

    return result;
}

var result14 = stringsInObj({
    a: "one",
    b: 2,
    c: "two"
});

cl(result14);
// 15. Change all keys of an object to uppercase. → Example: keysToUpper({cat:7,dog:4}) → {CAT:7, DOG:4}

var keysToUpper = (obj) => {
    var result = {};

    for (var key in obj) {
        result[key.toUpperCase()] = obj[key];
    }

    return result;
}

var result15 = keysToUpper({
    cat: 7,
    dog: 4
});

console.log(result15);

var sumValues = (obj) => {
    var sum = 0;

    for (var key in obj) {
        sum = sum + obj[key];
    }

    return sum;
}

var result16 = sumValues({
    a: 10,
    b: 20
});

console.log(result16);// 16. Sum the values of all properties in an object. → Example: sumValues({a:10,b:20}) → 30


// 17. Find the largest value in an object’s properties. → Example: maxValue({a:6,b:9,c:3}) → 9
var maxValue = (obj) => {
    var max = -Infinity;

    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key];
        }
    }

    return max;
}

var result17 = maxValue({
    a: 6,
    b: 9,
    c: 3
});

console.log(result17);

// 18. Filter out properties whose value is null. → Example: removeNulls({a:3,b:null}) → {a:3}
var removeNulls = (obj) => {
    var result = {};

    for (var key in obj) {
        if (obj[key] != null) {
            result[key] = obj[key];
        }
    }

    return result;
}

var result18 = removeNulls({
    a: 3,
    b: null
});

console.log(result18);

// 19. Swap the keys and values in an object. → Example: swapObj({one:"1", two:"2"}) → {"1":"one","2":"two"}
var swapObj = (obj) => {
    var result = {};

    for (var key in obj) {
        result[obj[key]] = key;
    }

    return result;
}

var result19 = swapObj({
    one: "1",
    two: "2"
});

console.log(result19);

// 20. Given an array of objects, return those with a property value over 50. → Example: filterObjects([{a:75},{a:42}]) → [{a:75}]
var filterObjects = (arr) => {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].a > 50) {
            result.push(arr[i]);
        }
    }

    return result;
}

var result20 = filterObjects([
    {a: 75},
    {a: 42}
]);

console.log(result20);

// =======================
// DATES & TIME
// =======================
// 21. Return today’s date as "YYYY-MM-DD". → Example: today() → "2025-08-12"
var today = () => {
    var date = new Date();

    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

var result21 = today();
console.log(result21);


// 22. Calculate age based on a birth date string. → Example: getAge("1998-05-23") → 27
var getAge = (birthDate) => {
    var birth = new Date(birthDate);
    var todayDate = new Date();

    var age = todayDate.getFullYear() - birth.getFullYear();

    if (
        todayDate.getMonth() < birth.getMonth() ||
        (
            todayDate.getMonth() == birth.getMonth() &&
            todayDate.getDate() < birth.getDate()
        )
    ) {
        age--;
    }

    return age;
}

var result22 = getAge("1998-05-23");
console.log(result22);


// 23. Find how many days between two dates. → Example: daysBetween("2025-08-01","2025-08-12") → 11
var daysBetween = (date1, date2) => {
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    var difference = secondDate - firstDate;

    return difference / (1000 * 60 * 60 * 24);
}

var result23 = daysBetween("2025-08-01", "2025-08-12");
console.log(result23);

// 24. Return the day of the week for a date. → Example: dayOfWeek("2025-08-12") → "Tuesday"
var dayOfWeek = (date) => {
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var d = new Date(date);

    return days[d.getDay()];
}

var result24 = dayOfWeek("2025-08-12");
console.log(result24);

// 25. Check if a date is in the past. → Example: isPast("2021-01-01") → true
var isPast = (date) => {
    var givenDate = new Date(date);
    var todayDate = new Date();

    return givenDate < todayDate;
}

var result25 = isPast("2021-01-01");
console.log(result25);

// 26. Add 10 days to a date string. → Example: addDays("2025-08-01",10) → "2025-08-11"
var addDays = (date, days) => {
    var d = new Date(date);

    d.setDate(d.getDate() + days);

    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

var result26 = addDays("2025-08-01", 10);
console.log(result26);
// 27. Convert a date string to JavaScript Date object. → Example: stringToDate("2025-08-12") → Date object
var stringToDate = (date) => {
    return new Date(date);
}

var result27 = stringToDate("2025-08-12");
console.log(result27);

// 28. Return the current time as "HH:MM:SS". → Example: currentTime() → "22:07:00"
var currentTime = () => {
    var date = new Date();

    var hour = String(date.getHours()).padStart(2, "0");
    var minute = String(date.getMinutes()).padStart(2, "0");
    var second = String(date.getSeconds()).padStart(2, "0");

    return hour + ":" + minute + ":" + second;
}

var result28 = currentTime();
console.log(result28);

// 29. Check if a year is a leap year. → Example: isLeapYear(2024) → true
var isLeapYear = (year) => {
    if (year % 400 == 0) {
        return true;
    }

    if (year % 100 == 0) {
        return false;
    }

    if (year % 4 == 0) {
        return true;
    }

    return false;
}

var result29 = isLeapYear(2024);
console.log(result29);

// 30. Find what month (number) a date string is in. → Example: getMonth("2025-08-12") → 8
var getMonth = (date) => {
    var d = new Date(date);

    return d.getMonth() + 1;
}

var result30 = getMonth("2025-08-12");
console.log(result30);


// =======================
// REAL-LIFE CALCULATIONS
// =======================
// 31. Calculate Body Mass Index (BMI) from weight (kg) and height (m). → Example: bmi(70,1.75) → 22.86


// 32. Convert Celsius to Fahrenheit. → Example: toFahrenheit(30) → 86
var bmi = (weight, height) => {
    var result = weight / (height * height);

    return result.toFixed(2);
}

var result31 = bmi(70, 1.75);
console.log(result31);

// 33. Calculate interest earned (simple interest). → Example: interest(1000,5,2) → 100

var toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

var result32 = toFahrenheit(30);
console.log(result32);

// 34. Format a number as currency. → Example: toCurrency(1485.78) → "$1,485.78"
var toCurrency = (num) => {
    return "$" + num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

var result34 = toCurrency(1485.78);
console.log(result34);

// 35. Return tax amount for income bracket (basic logic). → Example: tax(50000) → 5000
var tax = (income) => {
    if (income <= 50000) {
        return income * 10 / 100;
    }    

    return income * 20 / 100;
}     

var result35 = tax(50000);
console.log(result35);

// 36. Estimate delivery time in days (shipping + processing). → Example: deliveryEstimate(3,2) → 5
var deliveryEstimate = (shipping, processing) => {
    return shipping + processing;
}

var result36 = deliveryEstimate(3, 2);
console.log(result36);
// 37. Calculate grade percentage from points earned and total. → Example: calculateGrade(85,100) → 85
var calculateGrade = (earned, total) => {
    return (earned / total) * 100;
}

var result37 = calculateGrade(85, 100);
console.log(result37);

// 38. Return the average rating from an array of ratings. → Example: averageRating([4,5,3,5]) → 4.25
var averageRating = (ratings) => {
    var sum = 0;

    for (var i = 0; i < ratings.length; i++) {
        sum = sum + ratings[i];
    }

    return sum / ratings.length;
}

var result38 = averageRating([4, 5, 3, 5]);
console.log(result38);

// 39. Convert kilometers to miles. → Example: kmToMiles(10) → 6.2137
var kmToMiles = (km) => {
    return km * 0.62137;
}

var result39 = kmToMiles(10);
console.log(result39);

// 40. Calculate the tip for a bill given a percentage. → Example: tip(250,15) → 37.5
var tip = (bill, percentage) => {
    return bill * percentage / 100;
}

var result40 = tip(250, 15);
console.log(result40);