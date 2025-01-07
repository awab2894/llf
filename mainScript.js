let xValues = [],
        yValues = [],
        x, y;

    // إدخال القيم
    function insertValue() {
        x = Number(document.getElementById("xInsert").value);
        y = Number(document.getElementById("yInsert").value);
        document.getElementById("xInsert").value = null;
        document.getElementById("yInsert").value = null;

        if (x && y) {
            xValues.push(x);
            yValues.push(y);

            let tableBody = document.getElementById("valuesTableBody");
            let row = document.createElement("tr");

            let xCell = document.createElement("td");
            xCell.textContent = x;
            row.appendChild(xCell);

            let yCell = document.createElement("td");
            yCell.textContent = y;
            row.appendChild(yCell);

            tableBody.appendChild(row);

            clearResult();
        } else if (!x && !y) {
            alert("Insert x and y values");
        } else if (!x) {
            alert("You didn't insert x value");
        } else if (!y) {
            alert("You didn't insert y value");
        }
    }

    // مسح القيم
    function clearValues() {
        xValues = [];
        yValues = [];
        document.getElementById("valuesTableBody").innerHTML = '';
        clearResult();
    }

    // مسح النتيجة
    function clearResult() {
        document.getElementById("result").textContent = `Result will show here`;
        document.getElementById("resultContainer").style.color = 'var(--secondary-color)';
        document.getElementById("result").style.color = 'var(--secondary-color)';
        document.getElementById("resultContainer").style.border = '1px solid var(--secondary-color)';
    }