function showTab(tabId) {
    document.querySelectorAll(".p-6").forEach((tab) => {
      tab.classList.add("hidden");
    });
  
    document.getElementById(tabId).classList.remove("hidden");
  }
  
  function convertweight() {
     const value = document
       .getElementById("weightValue")
       .value.split(",")
       .map(Number);
     const direction = document.getElementById("weightDir").value;
     let result;
     if (direction === "lbstokgs") {
      result = value.map((v) => (v * 0.453592).toFixed(3)).join(", ") + " kg";
     } else if (direction === "kgstolbs") {
       result = value.map((v) => (v / 0.453592).toFixed(3)).join(", ") + " lbs";
     }
     document.getElementById("weightResult").innerText = result;
   }
  
   function convertTemperature() {
     const value = document
       .getElementById("temperatureValue")
       .value.split(",")
       .map(Number);
     const direction = document.getElementById("temperatureDir").value;
     let result;
     if (direction === "cToF") {
       result = value.map((v) => ((v * 9) / 5 + 32).toFixed(3)).join(", ") + " °F";
    } else if (direction === "fToC") {
      result =
       value.map((v) => (((v - 32) * 5) / 9).toFixed(3)).join(", ") + " °C";
     }
     document.getElementById("temperatureResult").innerText = result;
   }
  
   function convertDistance() {
     const value = document
       .getElementById("distanceValue")
       .value.split(",")
       .map(Number);
     const direction = document.getElementById("distanceDir").value;
     let result;
     if (direction === "MiletoKm") {
       result = value.map((v) => (v * 1.60934).toFixed(3)).join(", ") + " km";
     } else if (direction === "KmtoMile") {
       result = value.map((v) => (v / 1.60934).toFixed(3)).join(", ") + " miles";
     }
     document.getElementById("distanceResult").innerText = result;
   }
  