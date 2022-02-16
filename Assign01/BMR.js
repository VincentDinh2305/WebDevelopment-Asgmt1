function brm1() {
    var bmr, Gender, calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;
    var actLv01 = document.getElementById("actLv01");
    var actLv02 = document.getElementById("actLv02");
    var actLv03 = document.getElementById("actLv03");
    var actLv04 = document.getElementById("actLv04");
    var actLv05 = document.getElementById("actLv05");
    (actLv01.checked) ? (calories += 1.2) : (calories += 0);
    (actLv02.checked) ? (calories += 1.375) : (calories += 0);
    (actLv03.checked) ? (calories += 1.55) : (calories += 0);
    (actLv04.checked) ? (calories += 1.725) : (calories += 0);
    (actLv05.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age) : bmr = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age) : bmr = 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age);
    GrandCalories = bmr + calories;
    document.write(Gender);
    document.write("<p>Your BMR is " + bmr + ".</p>");
    document.write("<p>Calories is " + GrandCalories + ".</p>");
}
document.getElementById("submit").addEventListener("click", brm1, false);

function bmr2() {
    var bmr, Gender, calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;
    var actLv01 = document.getElementById("actLv01");
    var actLv02 = document.getElementById("actLv02");
    var actLv03 = document.getElementById("actLv03");
    var actLv04 = document.getElementById("actLv04");
    var actLv05 = document.getElementById("actLv05");
    (actLv01.checked) ? (calories += 1.2) : (calories += 0);
    (actLv02.checked) ? (calories += 1.375) : (calories += 0);
    (actLv03.checked) ? (calories += 1.55) : (calories += 0);
    (actLv04.checked) ? (calories += 1.725) : (calories += 0);
    (actLv05.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
    (Gender == "Female") ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);
    GrandCalories = bmr + calories;
    document.write(Gender);
    document.write("<p>Your BMR is " + bmr + ".</p>");
    document.write("<p>Calories is " + GrandCalories + ".</p>");
}
document.getElementById("submit").addEventListener("click", brm2, false);

