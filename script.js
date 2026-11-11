// ==========================================
// CHALLENGE 1: Chai and Mandazi Counter
// ==========================================
console.log("--- Challenge 1  ---");

// Loop from 1 to 30 counting and checking canteen multiples
for (let i = 1; i <= 30; i++) {
    // Check both multiples first
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Chai & Mandazi");
    } else if (i % 3 === 0) {
        console.log("Chai");
    } else if (i % 5 === 0) {
        console.log("Mandazi");
    } else {
        console.log(i);
    }
}


// ==========================================
// CHALLENGE 2: Savings Challenge
// ==========================================
console.log("\n--- Challenge 2  ---");

let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

// Loop while total savings are less than the goal
while (total < goal) {
    total += saving;
    
    let message = Month ${month}: saved KES ${saving}, total KES ${total};
    
    // Add extra message for big savings months
    if (saving >= 500) {
        message += " - Big month!";
    }
    
    console.log(message);
    
    // Increment month and monthly saving amount for the next iteration
    if (total < goal) {
        month++;
        saving += 50;
    }
}

console.log(Goal reached in month ${month} with KES ${total}!);


// ==========================================
// CHALLENGE 3: Report Card 
// ==========================================
console.log("\n--- Challenge 3 ---");

let marks = [78, 45, -5, 92, 60, 101, 55, 38];

let validCount = 0;
let passCount = 0;
let failCount = 0;
let totalMarks = 0;
let highestMark = -Infinity;
let highestStudent = "";

// Loop through each mark in the array
for (let i = 0; i < marks.length; i++) {
    let currentMark = marks[i];
    let studentNum = i + 1;

    // Check if mark is invalid (out of 0-100 range)
    if (currentMark < 0 || currentMark > 100) {
        console.log(Student ${studentNum}: invalid mark, skipped);
        continue; 
    }

    // Track valid marks data
    validCount++;
    totalMarks += currentMark;

    // Find the highest mark
    if (currentMark > highestMark) {
        highestMark = currentMark;
        highestStudent = Student ${studentNum};
    }

    // Determine grade using if / else if statements
    let grade = "";
    let status = "";

    if (currentMark >= 80) {
        grade = "A";
    } else if (currentMark >= 70) {
        grade = "B";
    } else if (currentMark >= 60) {
        grade = "C";
    } else if (currentMark >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Determine pass or fail status
    if (currentMark >= 50) {
        status = "Pass";
        passCount++;
    } else {
        status = "Fail";
        failCount++;
    }

    console.log(Student ${studentNum}: ${currentMark} - Grade ${grade} (${status}));
}

// Calculate the average of valid marks
let average = totalMarks / validCount;

// Print final summary
console.log("--------------------");
console.log(Valid marks: ${validCount});
console.log(Passed: ${passCount});
console.log(Failed: ${failCount});
console.log(Average: ${average.toFixed(1)});
console.log(Highest: ${highestMark} (${highestStudent}));
