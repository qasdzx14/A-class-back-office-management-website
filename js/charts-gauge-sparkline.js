"use strict";

// Event listener to ensure DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize gauge elements
    var gauge1 = document.getElementById("gauge1"),
        gauge2 = document.getElementById("gauge2"),
        gauge3 = document.getElementById("gauge3"),
        gauge4 = document.getElementById("gauge4");

    // Common gauge options
    var gaugeOptions = {
        angle: 0,
        lineWidth: 0.06,
        radiusScale: 1,
        pointer: {
            length: 0.6,
            strokeWidth: 0.035,
            color: "#fff"
        },
        fontSize: 20,
        limitMax: false,
        limitMin: false,
        colorStart: "#6F6EA0",
        strokeColor: "#eee",
        generateGradient: false,
        scaleOverride: true,
        highDpiSupport: true
    };

    // Gauge 1 specific options and initialization
    gaugeOptions.colorStop = "#864DD9";
    var gauge1Instance = new Donut(gauge1).setOptions(gaugeOptions);
    gauge1Instance.maxValue = 3000;
    gauge1Instance.setMinValue(0);
    gauge1Instance.set(Math.floor(3000 * Math.random()));
    gauge1Instance.setTextField(document.getElementById("gauge1Value"));

    // Gauge 2 specific options and initialization
    gaugeOptions.colorStop = "#CF53F9";
    var gauge2Instance = new Donut(gauge2).setOptions(gaugeOptions);
    gauge2Instance.maxValue = 3000;
    gauge2Instance.setMinValue(0);
    gauge2Instance.set(Math.floor(3000 * Math.random()));
    gauge2Instance.setTextField(document.getElementById("gauge2Value"));

    // Gauge 3 specific options and initialization
    gaugeOptions.colorStop = "#e95f71";
    var gauge3Instance = new Donut(gauge3).setOptions(gaugeOptions);
    gauge3Instance.maxValue = 3000;
    gauge3Instance.setMinValue(0);
    gauge3Instance.set(Math.floor(3000 * Math.random()));
    gauge3Instance.setTextField(document.getElementById("gauge3Value"));

    // Gauge 4 specific options and initialization
    gaugeOptions.colorStop = "#7127AC";
    var gauge4Instance = new Donut(gauge4).setOptions(gaugeOptions);
    gauge4Instance.maxValue = 3000;
    gauge4Instance.setMinValue(0);
    gauge4Instance.set(Math.floor(3000 * Math.random()));
    gauge4Instance.setTextField(document.getElementById("gauge4Value"));

    // Function to update gauge values periodically
    setInterval(function() {
        gauge1Instance.set(Math.floor(3000 * Math.random()));
        gauge2Instance.set(Math.floor(3000 * Math.random()));
        gauge3Instance.set(Math.floor(3000 * Math.random()));
        gauge4Instance.set(Math.floor(3000 * Math.random()));
    }, 5000);

    // Utility function to find parent element by tag name
    function findParentByTagName(element, tagName) {
        if (element.tagName === tagName) return element;
        while ((element = element.parentNode) && element.tagName !== tagName);
        return element;
    }

    // Event handlers for sparkline tooltips
    var sparklineTooltipHandlers = {
        onmousemove: function(event, data) {
            var tooltip = findParentByTagName(event.target, "svg").nextElementSibling;
            var date = new Date(data.date).toUTCString().replace(/^.*?, (.*?) \d{2}:\d{2}:\d{2}.*?$/, "$1");
            tooltip.hidden = false;
            tooltip.textContent = `${date}: ${data.value.toFixed(2)} USD`;
            tooltip.style.top = `${event.offsetY}px`;
            tooltip.style.left = `${event.offsetX + 20}px`;
        },
        onmouseout: function() {
            findParentByTagName(event.target, "svg").nextElementSibling.hidden = true;
        }
    };

    // Function to generate random data for sparklines
    function generateRandomData() {
        var data = [];
        for (var i = 0; i < 20; i++) {
            data.push(50 * Math.random());
        }
        return data;
    }

    // Initialize sparklines for Bitcoin and Ethereum with static data
    sparkline.sparkline(document.querySelector(".btc"), [
        { name: "Bitcoin", date: "2017-01-01", value: 967.6 },
        { name: "Bitcoin", date: "2017-02-01", value: 957.02 },
        // Additional data points...
    ], sparklineTooltipHandlers);

    sparkline.sparkline(document.querySelector(".eth"), [
        { name: "Ethereum", date: "2017-01-01", value: 8.3 },
        { name: "Ethereum", date: "2017-02-01", value: 10.57 },
        // Additional data points...
    ], sparklineTooltipHandlers);

    // Initialize static and random sparklines
    document.querySelectorAll(".sparkline-static").forEach(function(element) {
        sparkline.sparkline(element, generateRandomData());
    });

    setInterval(function() {
        document.querySelectorAll(".sparkline-random").forEach(function(element) {
            sparkline.sparkline(element, generateRandomData());
        });
    }, 3000);
});
