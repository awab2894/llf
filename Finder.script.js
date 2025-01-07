

    // إيجاد المعادلة
    function findEquation() {
        if (xValues.length >= 2) {
            let xSum = xValues.reduce((sum, val) => sum + val, 0);
            let ySum = yValues.reduce((sum, val) => sum + val, 0);
            let xySum = 0, x2Sum = 0, count = xValues.length, m, n, result;

            for (let i = 0; i < count; i++) {
                xySum += xValues[i] * yValues[i];
                x2Sum += xValues[i] * xValues[i];
            }

            m = (count * xySum - xSum * ySum) / (count * x2Sum - xSum * xSum);
            n = (ySum - m * xSum) / count;

          result = 'f(x) = '
            // تحديد النتيجة بناءً على القيم m و n
            if (m === 0) {
                result += `${n}`;
            } else if (m === 1) {
                result += `x + ${n}`;
            } else if (m === -1) {
                result += `${n} - x`;
            } else {
                result += `${m}x + ${n}`;
            }

            showResult(result);
        } else {
            alert("The minimum number of values for each variable is 2 values");
        }
    }

    // عرض النتيجة
    function showResult(result = "Source code error: you didn't declare the value of the result to be shown !") {
        document.getElementById("result").style.color = `var(--main-color)`;
        document.getElementById("resultContainer").style.border = `1px solid var(--main-color)`;
        document.getElementById("result").textContent = result;
    }