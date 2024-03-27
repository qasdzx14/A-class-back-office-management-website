/*global $, document*/
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    Chart.defaults.global.defaultFontColor = "#75787c";

    const LINECHARTEXMPLE = document.getElementById("lineChartCustom1"),
        BARCHART1 = document.getElementById("barChartCustom1"),
        BARCHART2 = document.getElementById("barChartCustom2"),
        LINECHART1 = document.getElementById("lineChartCustom2"),
        LINECHART2 = document.getElementById("lineChartCustom3"),
        BARCHARTEXMPLE = document.getElementById("barChartCustom3"),
        PIECHARTEXMPLE = document.getElementById("pieChartCustom1"),
        PIECHART = document.getElementById("doughnutChartCustom1"),
        POLARCHARTEXMPLE = document.getElementById("polarChartCustom"),
        RADARCHARTEXMPLE = document.getElementById("radarChartCustom");

    // ------------------------------------------------------- //
    // Line Chart Custom 1
    // ------------------------------------------------------ //
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: "line",
        options: {
            legend: { labels: { fontColor: "#777", fontSize: 12 } },
            scales: {
                xAxes: [
                    {
                        display: false,
                        gridLines: {
                            color: "transparent",
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            max: 120,
                            min: 0,
                            stepSize:5,
                        },
                        display: true,
                        gridLines: {
                            color: "transparent",
                        },
                    },
                ],
            },
        },
        data: {
            labels: ["第一次测试", "第二次测试", "期中考试", "第三次测试", "月考", "第四次测试", "期末考试"],
            datasets: [
                {
                    label: "语文",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(134, 77, 217, 0.88)",
                    borderColor: "rgba(134, 77, 217, 088)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 1,
                    pointBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [98, 80, , , , , ],
                    spanGaps: false,
                },
                {
                    label: "数学",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(98, 98, 98, 0.5)",
                    borderColor: "rgba(98, 98, 98, 0.5)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 1,
                    pointBorderColor: "rgba(98, 98, 98, 0.5)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(98, 98, 98, 0.5)",
                    pointHoverBorderColor: "rgba(98, 98, 98, 0.5)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [81, 94, , , , , ],
                    spanGaps: false,
                },
                {
                    label: "英语",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(17, 77, 217, 017)",
                    borderColor: "rgba(17, 77, 217, 017)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 1,
                    pointBorderColor: "rgba(17, 77, 217, 017)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(17, 77, 217, 017)",
                    pointHoverBorderColor: "rgba(17, 77, 217, 017)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [86, 97, , , , , ],
                    spanGaps: false,
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Bar Chart Custom 1
    // ------------------------------------------------------ //
    var barChartHome = new Chart(BARCHART1, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: true,
                        barPercentage: 0.8,
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            max: 100,
                            min: 0,
                            stepSize:5,
                        },
                        display: true,
                    },
                ],
            },
            legend: {
                display: true,
            },
        },
        data: {
            labels: ["语文", "数学", "英语", "政治", "历史", "物理", "地理", "生物", "化学", "体育"],
            datasets: [
                {
                    label: "班级平均分数",
                    backgroundColor: [
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                    ],
                    borderColor: [
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                        "#EF8C99",
                    ],
                    borderWidth: 0.3,
                    data: [80,94,97,75,75,84,80,90,0,42],
                },
                {
                    label: "年级平均分数",
                    backgroundColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    borderColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    borderWidth: 0.3,
                    data: [94,83,87,76,78,87,73,87,0,38],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Bar Chart Example 2
    // ------------------------------------------------------ //
    var barChartHome = new Chart(BARCHART2, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: true,
                        barPercentage: 0.8,
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            max: 50,
                            min: 0,
                            stepSize:5,
                        },
                        display: true,
                    },
                ],
            },
            legend: {
                display: true,
            },
        },
        data: {
            labels: ["语文", "数学", "英语", "政治", "历史", "物理", "地理", "生物", "化学", "体育"],
            datasets: [
                {
                    label: "班级优秀人数",
                    backgroundColor: [
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                    ],
                    borderColor: [
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                        "#CF53F9",
                    ],
                    borderWidth: 0.3,
                    data: [19, 13, 14, 20, 9, 7, 9, 16, 0, 7],
                },
                {
                    label: "平均各班优秀人数",
                    backgroundColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    borderColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    borderWidth: 0.3,
                    data: [13, 10, 15, 17, 11, 6, 11, 13, 0, 5],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Line Chart Custom 2
    // ------------------------------------------------------ //
    var myLineChart = new Chart(LINECHART1, {
        type: "line",
        options: {
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            max: 100,
                            min: 0,
                            stepSize: 5,
                        },
                        display: true,
                        gridLines: {
                            display: false,
                        },
                    },
                ],
            },
            legend: {
                display: true,
            },
        },
        data: {
            labels: [
                "一测",
                "二测",
                "期中考试",
                "三测",
                "月考",
                "四测",
                "期末考试",
            ],
            datasets: [
                {
                    label: "班级平均分数",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: "#EF8C99",
                    pointBorderColor: "#EF8C99",
                    pointHoverBackgroundColor: "#EF8C99",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "#EF8C99",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [89, 75, , , , , ],
                    spanGaps: false,
                },
                {
                    label: "目标分数",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: "rgba(238, 139, 152, 0.24)",
                    pointBorderColor: "rgba(238, 139, 152, 0.24)",
                    pointHoverBackgroundColor: "rgba(238, 139, 152, 0.24)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "rgba(238, 139, 152, 0.24)",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [85, 88, , , , , ],
                    spanGaps: false,
                },
                {
                    label: "年级平均分数",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: "#FFB6C1",
                    pointBorderColor: "#FFB6C1",
                    pointHoverBackgroundColor: "#FFB6C1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "#FFB6C1",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [80, 76, , , , , ],
                    spanGaps: false,
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Line Chart Custom 3
    // ------------------------------------------------------ //
    var myLineChart = new Chart(LINECHART2, {
        type: "line",
        options: {
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            max: 100,
                            min: 0,
                            stepSize: 5,
                        },
                        display: true,
                        gridLines: {
                            display: false,
                        },
                    },
                ],
            },
            legend: {
                display: true,
            },
        },
        data: {
            labels: [
                "一测",
                "二测",
                "期中考试",
                "三测",
                "月考",
                "四测",
                "期末考试",
            ],
            datasets: [
                {
                    label: "本次优秀人数",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: "#CF53F9",
                    pointBorderColor: "#CF53F9",
                    pointHoverBackgroundColor: "#CF53F9",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "#CF53F9",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [24, 20, , , , , ],
                    spanGaps: false,
                },
                {
                    label: "上次优秀人数",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "transparent",
                    borderColor: "rgba(207, 83, 249, 0.24)",
                    pointBorderColor: "rgba(207, 83, 249, 0.24)",
                    pointHoverBackgroundColor: "rgba(207, 83, 249, 0.24)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "rgba(207, 83, 249, 0.24)",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [0, 24, , , , , ],
                    spanGaps: false,
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var barChartExample = new Chart(BARCHARTEXMPLE, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            color: "transparent",
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            max: 50,
                            min: 0,
                            stepSize: 5,
                        },
                        display: true,
                        gridLines: {
                            color: "transparent",
                        },
                    },
                ],
            },
        },
        data: {
            labels: ["A组", "B组", "C组", "D组", "提高组", "待进组", "努力组"],
            datasets: [
                {
                    label: "本次区间人数",
                    backgroundColor: ["#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9"],
                    hoverBackgroundColor: ["#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9"],
                    borderColor: ["#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9", "#864DD9"],
                    borderWidth: 0.5,
                    data: [13, 10, 14, 13, 13, 17, 20],
                },
                {
                    label: "上次区间人数",
                    backgroundColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    hoverBackgroundColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    borderColor: [
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                        "rgba(98, 98, 98, 0.5)",
                    ],
                    borderWidth: 0.5,
                    data: [16, 13, 11, 10, 16, 18, 16],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Pie Chart Custom 1
    // ------------------------------------------------------ //
    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: "pie",
        options: {
            legend: {
                display: true,
                position: "left",
            },
        },
        data: {
            labels: ["A组", "B组", "C组", "D组"],
            datasets: [
                {
                    data: [13, 10, 14, 13],
                    borderWidth: 0,
                    backgroundColor: ["#723ac3", "#864DD9", "#9762e6", "#a678eb"],
                    hoverBackgroundColor: ["#723ac3", "#864DD9", "#9762e6", "#a678eb"],
                },
            ],
        },
    });

    var pieChartExample = {
        responsive: true,
    };

    // ------------------------------------------------------- //
    // Doughnut Chart Custom
    // ------------------------------------------------------ //
    var myPieChart = new Chart(PIECHART, {
        type: "doughnut",
        options: {
            cutoutPercentage: 80,
            legend: {
                display: true,
                position: "left",
            },
        },
        data: {
            labels: ["提高组", "待进组", "努力组"],
            datasets: [
                {
                    data: [13, 17, 20],
                    borderWidth: [0, 0, 0],
                    backgroundColor: ["#b53dde", "#CF53F9", "#d06cf2"],
                    hoverBackgroundColor: ["#b53dde", "#CF53F9", "#d06cf2"],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Polar Chart
    // ------------------------------------------------------ //
    var chartOptions = {
        scale: {
            gridLines: {
                color: "#3f4145",
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 10,
            },
            pointLabels: {
                fontSize: 12,
            },
        },
        legend: {
            position: "left",
        },
        elements: {
            arc: {
                borderWidth: 0,
                borderColor: "transparent",
            },
        },
    };
    var polarChartExample = new Chart(POLARCHARTEXMPLE, {
        type: "polarArea",
        options: chartOptions,
        data: {
            datasets: [
                {
                    data: [86,71,68,54,86,67,58],
                    backgroundColor: ["#ba3fe4", "#CF53F9", "#d97bf9", "#e28eff","#b53dde", "#CF53f2", "#d06cf2"],
                    label: "My dataset", // for legend
                },
            ],
            labels: ["A组", "B组", "C组", "D组","提高组","待进组","努力组"],
        },
    });

    var polarChartExample = {
        responsive: true,
    };

    // ------------------------------------------------------- //
    // Radar Chart
    // ------------------------------------------------------ //
    var chartOptions = {
        scale: {
            gridLines: {
                color: "#3f4145",
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 20,
            },
            pointLabels: {
                fontSize: 12,
            },
        },
        legend: {
            position: "left",
        },
    };

    var radarChartExample = new Chart(RADARCHARTEXMPLE, {
        type: "radar",
        options: chartOptions,
        data: {
            labels: ["A", "B", "C", "D", "E", "C"],
            datasets: [
                {
                    label: "First dataset",
                    backgroundColor: "rgba(113, 39, 172, 0.4)",
                    borderWidth: 2,
                    borderColor: "#7127AC",
                    pointBackgroundColor: "#7127AC",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#7127AC",
                    data: [65, 59, 90, 81, 56, 55],
                },
                {
                    label: "Second dataset",
                    backgroundColor: "rgba(207, 83, 249, 0.4)",
                    borderWidth: 2,
                    borderColor: "#CF53F9",
                    pointBackgroundColor: "#CF53F9",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#CF53F9",
                    data: [50, 60, 80, 45, 96, 70],
                },
            ],
        },
    });
    var radarChartExample = {
        responsive: true,
    };
});
