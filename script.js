const heartCountElement = document.getElementById("heart-count");
const coinCountElement = document.getElementById("coin-count");
const copyNavBtn = document.getElementById("copy-nav-btn");
const callHistoryList = document.getElementById("call-history-list");
const clearBtn = document.getElementById("clear-btn");

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
const callCost = 20;

const heartIcons = document.querySelectorAll(".fa-heart");
heartIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        heartCount = parseInt(heartCount) + 1;
        heartCountElement.innerText = heartCount;
    });
});

const callBtns = document.querySelectorAll('[id$="-call-btn"]');
callBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const card = btn.closest(".card");
        const serviceName = card.getAttribute("data-service-name");
        const serviceNumber = card.getAttribute("data-service-number");

        if (parseInt(coinCount) < callCost) {
            alert("আপনার পর্যাপ্ত কয়েন নেই।");
            return;
        }

        coinCount = parseInt(coinCount) - callCost;
        coinCountElement.innerText = coinCount;

        alert("আপনি " + serviceName + " এ কল করছেন। হটলাইন: " + serviceNumber);

        const now = new Date();
        const timeString = now.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit", hour12: true });

        callHistoryList.innerHTML += `
            <div>
                <p>${serviceName} - ${serviceNumber}</p>
                <small>${timeString}</small>
            </div>
        `;
    });
});

const copyBtns = document.querySelectorAll('[id$="-copy-btn"]');
copyBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const card = btn.closest(".card");
        const serviceNumber = card.getAttribute("data-service-number");

        navigator.clipboard.writeText(serviceNumber).then(function() {
            alert(serviceNumber + " নম্বরটি কপি করা হয়েছে।");
        });

        copyCount = parseInt(copyCount) + 1;
        copyNavBtn.innerText = copyCount + " Copy";
    });
});

clearBtn.addEventListener("click", function() {
    callHistoryList.innerHTML = "";
    alert("কল হিস্টরি মুছে ফেলা হয়েছে।");
});