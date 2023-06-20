const btn_add = document.getElementById("btn_add");
const btn_reset = document.getElementById("btn_reset");

let firstNameArray = [];
let lastNameArray = [];
let moneyAmountArray = [];

const insertValue = function () {
    const firstName1 = document.getElementById("firstName");
    const lastName1 = document.getElementById("lastName");
    const amount = document.getElementById("amount");

    if (
        firstName1.value != "" &&
        lastName1.value != "" &&
        amount.value.length != 0
    ) {
        firstNameArray.push(firstName1.value);
        lastNameArray.push(lastName1.value);
        moneyAmountArray.push(amount.value);

        document
            .querySelector(".heading")
            .classList.remove("d-none");
        const tr = document.createElement("tr");
        tr.classList.add("table-row");
        document.querySelector(".append-div").append(tr);
        const th = document.createElement("th");
        th.textContent = firstNameArray.length;
        tr.append(th);

        const td = document.createElement("td");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td.textContent = firstName1.value;
        td1.textContent = lastName1.value;
        td2.textContent = amount.value;

        tr.append(td);
        tr.append(td1);
        tr.append(td2);

        firstName1.value = "";
        lastName1.value = "";
        amount.value = "";

        if (firstNameArray.length >= 2) {
            document
                .querySelector(".btn-generate")
                .classList.remove("d-none");
            document
                .querySelector(".btn-generate")
                .classList.add("d-block");
        }
    } else {
        alert("please fiil all the inputed filed properly");
    }
};
document
    .querySelector(".btn-generate")
    .addEventListener("click", function () {
        const randomNo =
            Math.trunc(
                Math.random() * firstNameArray.length
            ) + 1;

        document
            .querySelector(".equb-box")
            .classList.remove("d-none");
        let sum = 0;
        for (let i = 0; i < moneyAmountArray.length; i++) {
            let num = parseFloat(moneyAmountArray[i]);
            if (!isNaN(num)) {
                sum += num;
            }
        }
        console.log(moneyAmountArray, sum);

        const h3 = document.createElement("h3");
        h3.textContent = `congratulation ${
            firstNameArray[randomNo - 1]
        } you got a total of ${sum} birr`;
        document.querySelector(".equb-box").append(h3);
    });

btn_add.addEventListener("click", insertValue);
btn_reset.addEventListener("click", function () {
     firstNameArray = [];
     lastNameArray = [];
     moneyAmountArray = [];

     firstName1.value = "";
     lastName1.value = "";
     amount.value = "";
});
