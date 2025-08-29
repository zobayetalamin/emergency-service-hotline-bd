let heartCount = 0;
let coinCount = 100;
let copyCount = 0;


const hearts = document.getElementById("heart-count");
const coins= document.getElementById("coin-count");
const copyNavBtn = document.getElementById("copy-nav-btn");
const footer = document.querySelector("footer");
const clearBtn = document.getElementById("clear-btn");

document.querySelectorAll(".fa-heart").forEach(function(icon){
    icon.addEventListener("click", function(){
        heartCount = heartCount + 1;
        hearts.innerText = heartCount;
    });
});
document.getElementById("card-1-copy-btn").addEventListener("click", function(){
    const number = "999";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy" ;
});
document.getElementById("card-1-call-btn").addEventListener("click", function(){
        const name = "জাতীয় জরুরি সেবা";
    const number = "999";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
        return;
    }
        coinCount = coinCount - 20;
            coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-2-copy-btn").addEventListener("click", function(){
    const number = "999";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
}) ;
document.getElementById("card-2-call-btn").addEventListener("click", function(){
    const name = "পুলিশ";
    const number = "999";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
            return ;
    }
    coinCount = coinCount - 20;
       coins.innerText = coinCount;

    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-3-copy-btn").addEventListener("click", function(){
    const number = "999";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
});
document.getElementById("card-3-call-btn").addEventListener("click", function(){
    const name = "ফায়ার সার্ভিস";
    const number = "999";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
            return;
    }
    coinCount = coinCount - 20;
   coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
        footer.appendChild(item);
}) ;
document.getElementById("card-4-copy-btn").addEventListener("click", function(){
    const number = "1994-999999";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
} );

document.getElementById("card-4-call-btn").addEventListener("click", function(){
    const name = "অ্যাম্বুলেন্স";
    const number = "1994-999999";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
            return;
    }
    coinCount = coinCount - 20;
        coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-5-copy-btn").addEventListener("click", function(){
    const number = "109";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
});
document.getElementById("card-5-call-btn").addEventListener("click", function(){
    const name = "নারী ও শিশু সহায়তা";
    const number = "109";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
            return;
    }
    coinCount = coinCount - 20;
        coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-6-copy-btn").addEventListener("click", function(){
    const number = "106";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
}) ;
document.getElementById("card-6-call-btn").addEventListener("click", function(){
    const name = "দুদক";
    const number = "106";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
            return;
    }
    coinCount = coinCount - 20;
        coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-7-copy-btn").addEventListener("click", function(){
    const number = "16216";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
});

document.getElementById("card-7-call-btn").addEventListener("click", function(){
    const name = "বিদ্যুৎ বিভ্রাট";
    const number = "16216";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
        return;
    }
    coinCount = coinCount - 20;
        coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-8-copy-btn").addEventListener("click", function(){
    const number = "16445";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
});
document.getElementById("card-8-call-btn").addEventListener("click", function(){
    const name = "ব্র্যাক";
    const number = "16445";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
        return;
    }
    coinCount = coinCount - 20;
            coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-9s-call-btn").addEventListener("click", function(){
    const name = "বাংলাদেশ রেলওয়ে";
    const number = "163";
    if(coinCount < 20){
        alert("Not enough coins to make a call!");
        return;
    }
    coinCount = coinCount - 20;
   coins.innerText = coinCount;
    alert("Calling " + name + " at " + number);
    const time = new Date().toLocaleTimeString();
    const item = document.createElement("p");
    item.innerText = name + " - " + number + " (Time: " + time + ")";
    footer.appendChild(item);
});
document.getElementById("card-9-copy-btn").addEventListener("click", function(){
    const number = "163";
    navigator.clipboard.writeText(number);
    alert("Copied number: " + number);
    copyCount = copyCount + 1;
    copyNavBtn.innerText = copyCount + " Copy";
});
clearBtn.addEventListener("click", function(){
    footer.querySelectorAll("p").forEach(function(item){
            item.remove();
    }) ;
});