function calculateGST() {

    const amount =
        parseFloat(
            document.getElementById("amount").value
        );

    const gstRate =
        parseFloat(
            document.getElementById("gstRate").value
        );

    const calculationType =
        document.getElementById("calculationType").value;

    if (isNaN(amount) || amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }

    let baseAmount;
    let gstAmount;
    let totalAmount;

    if (calculationType === "exclusive") {

        baseAmount = amount;

        gstAmount =
            (amount * gstRate) / 100;

        totalAmount =
            baseAmount + gstAmount;

    } else {

        totalAmount = amount;

        baseAmount =
            amount * 100 / (100 + gstRate);

        gstAmount =
            totalAmount - baseAmount;
    }

    document.getElementById("baseAmount").innerText =
        baseAmount.toFixed(2);

    document.getElementById("gstAmount").innerText =
        gstAmount.toFixed(2);

    document.getElementById("totalAmount").innerText =
        totalAmount.toFixed(2);
}

function resetCalculator() {

    document.getElementById("amount").value = "";

    document.getElementById("gstRate").selectedIndex = 2;

    document.getElementById("calculationType").selectedIndex = 0;

    document.getElementById("baseAmount").innerText =
        "0.00";

    document.getElementById("gstAmount").innerText =
        "0.00";

    document.getElementById("totalAmount").innerText =
        "0.00";
}

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        themeBtn.innerText =
            "☀️ Light Mode";

    } else {

        themeBtn.innerText =
            "🌙 Dark Mode";
    }
});