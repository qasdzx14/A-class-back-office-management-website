"use strict";

document.addEventListener("DOMContentLoaded", function () {
    Chart.defaults.global.defaultFontColor = "#75787c";

    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var legendState = true;
    if (window.outerWidth < 576) {
        legendState = false;
    }

    const LINECHART = document.getElementById("lineChart");
    var homeLineChart = new Chart(LINECHART, {
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
                            max: 18,
                            min: 1,
                            reverse: true,
                        },
                        display: true,
                        gridLines: {
                            display: false,
                        },
                    },
                ],
            },
            legend: {
                display: legendState,
            },
        },
        data: {
            labels: ["七年级上学期", "七年级下学期", "八年级上学期", "八年级下学期", "第一次中考", "九年级上学期", "九年级下学期", "一二模", "第二次中考"],
            datasets: [
                {
                    label: "班级排名波动情况",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "transparent",
                    borderColor: "#864DD9",
                    pointBorderColor: "#864DD9",
                    pointHoverBackgroundColor: "#864DD9",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [4, 9, 2, , , , , , ],
                    spanGaps: false,
                },
                {
                    label: "示范排名波动情况",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "transparent",
                    borderColor: "#EF8C99",
                    pointBorderColor: "#EF8C99",
                    pointHoverBackgroundColor: "#EF8C99",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [1, 1, 1, , , , , , ],
                    spanGaps: false,
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    const BARCHARTEXMPLE1 = document.getElementById("barChartExample1");
    var barChartExample = new Chart(BARCHARTEXMPLE1, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: false,
                        gridLines: {
                            color: "#eee",
                        },
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        gridLines: {
                            color: "#eee",
                        },
                    },
                ],
            },
        },
        data: {
            labels: ["缺考", "30~50", "50~60", "60~70", "70~80", "80~90", "100~120"],
            datasets: [
                {
                    label: "班级区间分数人数",
                    backgroundColor: [
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                    ],
                    hoverBackgroundColor: [
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                        "rgba(134, 77, 217, 0.57)",
                    ],
                    borderColor: [
                        "rgba(134, 77, 217, 1)",
                        "rgba(134, 77, 217, 1)",
                        "rgba(134, 77, 217, 1)",
                        "rgba(134, 77, 217, 1)",
                        "rgba(134, 77, 217, 1)",
                        "rgba(134, 77, 217, 1)",
                        "rgba(134, 77, 217, 1)",
                    ],
                    borderWidth: 1,
                    data: [2, 0, 2, 6, 15, 23, 12],
                },
                {
                    label: "平均区间人数",
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                    ],
                    hoverBackgroundColor: [
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                    ],
                    borderWidth: 1,
                    data: [1, 1, 2, 7, 14, 27, 9],
                },
                
            ],
        },
    });

    // ------------------------------------------------------- //
    // Line Chart 1
    // ------------------------------------------------------ //
    const LINECHART1 = document.getElementById("lineChart1");
    var myLineChart1 = new Chart(LINECHART1, {
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
                            max: 40,
                            min: 10,
                            stepSize: 0.1,
                        },
                        display: false,
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
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
            ],
            datasets: [
                {
                    label: "班级高失分题目情况",
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
                    data: [20, 21, 25, 20, 24, 18, 20, 23, 19, 22, 25, 19, 24, 23, 22, 17, 20, 17, 20, 26, 22],
                    spanGaps: false,
                },
                {
                    label: "平均高失分题目情况",
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
                    data: [24, 20, 23, 19, 22, 20, 22, 21, 21, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20],
                    spanGaps: false,
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    const BARCHARTEXaMPLE2 = document.getElementById("barChartExample2");
    var barChartExample = new Chart(BARCHARTEXaMPLE2, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: false,
                        gridLines: {
                            color: "#eee",
                        },
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        gridLines: {
                            color: "#eee",
                        },
                    },
                ],
            },
        },
        data: {
            labels: ["语文", "数学", "英语", "地理", "历史", "政治", "生物"],
            datasets: [
                {
                    label: "班级各科平均成绩",
                    backgroundColor: [
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                    ],
                    hoverBackgroundColor: [
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                    ],
                    borderColor: [
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                        "rgba(75, 75, 75, 0.7)",
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
                {
                    label: "学校各科平均成绩",
                    backgroundColor: [
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                    ],
                    hoverBackgroundColor: [
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                        "rgba(238, 139, 152, 0.7)",
                    ],
                    borderColor: [
                        "rgba(238, 139, 152, 1)",
                        "rgba(238, 139, 152, 1)",
                        "rgba(238, 139, 152, 1)",
                        "rgba(238, 139, 152, 1)",
                        "rgba(238, 139, 152, 1)",
                        "rgba(238, 139, 152, 1)",
                        "rgba(238, 139, 152, 1)",
                    ],
                    borderWidth: 1,
                    data: [35, 40, 60, 47, 88, 27, 30],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Pie Chart 1
    // ------------------------------------------------------ //
    const PIECHARTHOME1 = document.getElementById("pieChartHome1");
    var myPieChart = new Chart(PIECHARTHOME1, {
        type: "doughnut",
        options: {
            cutoutPercentage: 90,
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["优秀", "正常", "良好", "需加强"],
            datasets: [
                {
                    data: [17, 23, 7, 3],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: ["#6933b9", "#8553d1", "#a372ec", "#be9df1"],
                    hoverBackgroundColor: ["#6933b9", "#8553d1", "#a372ec", "#be9df1"],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Pie Chart 2
    // ------------------------------------------------------ //
    const PIECHARTHOME2 = document.getElementById("pieChartHome2");
    var myPieChart = new Chart(PIECHARTHOME2, {
        type: "doughnut",
        options: {
            cutoutPercentage: 90,
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["优秀", "正常", "良好", "需加强"],
            datasets: [
                {
                    data: [80, 70, 100, 60],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: ["#9528b9", "#b046d4", "#c767e7", "#e394fe"],
                    hoverBackgroundColor: ["#9528b9", "#b046d4", "#c767e7", "#e394fe"],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Pie Chart 3
    // ------------------------------------------------------ //
    const PIECHARTHOME3 = document.getElementById("pieChartHome3");
    var myPieChart = new Chart(PIECHARTHOME3, {
        type: "doughnut",
        options: {
            cutoutPercentage: 90,
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["优秀", "正常", "良好", "需加强"],
            datasets: [
                {
                    data: [120, 90, 77, 95],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: ["#da4d60", "#e96577", "#f28695", "#ffb6c1"],
                    hoverBackgroundColor: ["#da4d60", "#e96577", "#f28695", "#ffb6c1"],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Sales Bar Chart 1
    // ------------------------------------------------------ //
    const SALESBARCHART1 = document.getElementById("salesBarChart1");
    var barChartHome = new Chart(SALESBARCHART1, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: false,
                        barPercentage: 0.2,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["外出", "维修", "节日", "活动", "资料", "捐款", "申请", "其他", "余额", "本月预计额度"],
            datasets: [
                {
                    label: "Data Set 1",
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
                    ],
                    borderWidth: 0.2,
                    data: [297, 83, 46, 41, 100, 50, 100, 41, 242, 750],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Sales Bar Chart 21
    // ------------------------------------------------------ //
    const SALESBARCHART2 = document.getElementById("salesBarChart2");
    var barChartHome = new Chart(SALESBARCHART2, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: false,
                        barPercentage: 0.2,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["个人申请使用", "团体申请使用", "活动申请使用", "节日申请使用", "维修申请使用", "资料申请使用", "退回额度", "其他使用", "共申请人数", "余额"],
            datasets: [
                {
                    label: "Data Set 1",
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
                    ],
                    borderWidth: 0.2,
                    data: [10, 15, 8, 3, 14, 10, 15, 5, 5, 20],
                },
            ],
        },
    });

    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    const VISITPIECHART = document.getElementById("visitPieChart");
    var pieChartExample = new Chart(VISITPIECHART, {
        type: "pie",
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["外出公务", "班级其他使用", "维修费用", "余额"],
            datasets: [
                {
                    data: [0.297, 0.378, 0.083, 0.242],
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
});
