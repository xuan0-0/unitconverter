function convertLength() {
    var fromValue = document.getElementById("fromValue").value
    var fromUnit = document.getElementById("fromUnit").value
    var toUnit = document.getElementById("toUnit").value

    if (fromUnit == "meters" && toUnit == "meters") {
        document.getElementById("toValue").value = fromValue
    }
    else if (fromUnit == "meters" && toUnit == "centimeters") {
        document.getElementById("toValue").value = fromValue * 100
    }
    else if (fromUnit == "meters" && toUnit == "kilometers") {
        document.getElementById("toValue").value = fromValue / 1000
    }
    else if (fromUnit == "meters" && toUnit == "millimeters") {
        document.getElementById("toValue").value = fromValue * 1000
    }
    else if (fromUnit == "centimeters" && toUnit == "meters") {
        document.getElementById("toValue").value = fromValue / 100
    }
    else if (fromUnit == "centimeters" && toUnit == "centimeters") {
        document.getElementById("toValue").value = fromValue
    }
    else if (fromUnit == "centimeters" && toUnit == "kilometers") {
        document.getElementById("toValue").value = fromValue / 100000
    }
    else if (fromUnit == "centimeters" && toUnit == "millimeters") {
        document.getElementById("toValue").value = fromValue * 10
    }
    else if (fromUnit == "kilometers" && toUnit == "metres") {
        document.getElementById("toValue").value = fromValue * 1000
    }
    else if (fromUnit == "kilometers" && toUnit == "centimeters") {
        document.getElementById("toValue").value = fromValue * 100000
    }
    else if (fromUnit == "kilometers" && toUnit == "kilometers") {
        document.getElementById("toValue").value = fromValue
    }
    else if (fromUnit == "kilometers" && toUnit == "millimeters") {
        document.getElementById("toValue").value = fromValue * 1000000
    }
    else if (fromUnit == "milimeters" && toUnit == "meters") {
        document.getElementById("toValue").value = fromValue / 1000
    }
    else if (fromUnit == "milimeters" && toUnit == "centimeters") {
        document.getElementById("toValue").value = fromValue / 10
    }
    else if (fromUnit == "milimeters" && toUnit == "kilometeres") {
        document.getElementById("toValue").value = fromValue / 1000000
    }
    else if (fromUnit == "milimeters" && toUnit == "millimeters") {
        document.getElementById("toValue").value = fromValue
    }

}

function convertMass() {
    var fromValue = document.getElementById("fromValue").value
    var fromUnit = document.getElementById("fromUnit").value
    var toUnit = document.getElementById("toUnit").value

    if (fromUnit == "kilogrames" && toUnit == "kilograms") {
        document.getElementById("toValue").value = fromValue
    }
    else if (fromUnit == "kilogrames" && toUnit == "grams") {
        document.getElementById("toValue").value = fromValue * 1000
    }
    else if (fromUnit == "grames" && toUnit == "kilograms") {
        document.getElementById("toValue").value = fromValue / 1000
    }
    else if (fromUnit == "grames" && toUnit == "grams") {
        document.getElementById("toValue").value = fromValue
    }
}

    function convertTime() {
        var fromValue = document.getElementById("fromValue").value
        var fromUnit = document.getElementById("fromUnit").value
        var toUnit = document.getElementById("toUnit").value
        
    if (fromUnit == "hours" && toUnit == "hours") {
        document.getElementById("toValue").value = fromValue
    }
    else if (fromUnit == "hours" && toUnit == "minutes") {
        document.getElementById("toValue").value = fromValue * 60
    }
    else if (fromUnit == "hours" && toUnit == "seconds") {
        document.getElementById("toValue").value = fromValue * 3600
    }
    else if (fromUnit == "minutes" && toUnit == "hours") {
        document.getElementById("toValue").value = fromValue / 60
    }
    else if (fromUnit == "minutes" && toUnit == "minutes") {
        document.getElementById("toValue").value = fromValue
    }
    else if (fromUnit == "minutes" && toUnit == "seconds") {
        document.getElementById("toValue").value = fromValue * 60
    }
    else if (fromUnit == "seconds" && toUnit == "hours") {
        document.getElementById("toValue").value = fromValue / 3600
    }
    else if (fromUnit == "seconds" && toUnit == "minutes") {
        document.getElementById("toValue").value = fromValue / 60
    }
    else if (fromUnit == "seconds" && toUnit == "seconds") {
        document.getElementById("toValue").value = fromValue
    }
}