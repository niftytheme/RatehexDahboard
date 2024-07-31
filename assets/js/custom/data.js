// Report Chart 1
const reportChart1Options = {
    series: [
        {
            name: 'راضي',
            data: [11, 17, 15, 15, 21, 14, 15]
        }, {
            name: 'جيد جداً',
            data: [13, 23, 20, 8, 13, 27, 33]
        }, {
            name: 'ممتاز',
            data: [44, 55, 41, 67, 89, 43, 78]
        }
    ],
    chart: {
        type: 'bar',
        height: 390,
        width: '100%',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    colors:['#feb019', '#008ffb', '#00e396'],
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['فرع 1', 'فرع 2', 'فرع 3', 'فرع 4', 'فرع 5', 'فرع 6',
            'فرع 7'
        ],
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
            horizontal: 20,
        }
    },
};
const reportChart1 = new ApexCharts(document.querySelector('#report_chart1'), reportChart1Options);
reportChart1.render();

// Report Chart 2
const reportChart2Options = {
    series: [
        {
            name: 'الاسبوع 3',
            data: [11, 17, 15, 15, 21, 14, 15]
        }, {
            name: 'الاسبوع 2',
            data: [13, 23, 20, 8, 13, 27, 33]
        }, {
            name: 'الاسبوع 1',
            data: [44, 55, 41, 67, 89, 43, 78]
        }
    ],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    colors:['#feb019', '#008ffb', '#00e396'],
    stroke: {
        curve: 'straight'
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['اول', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس',
            'سابع'
        ],
    },
    fill: {
        opacity: 0,
        type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        },
    },
    legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
            horizontal: 20,
        }
    },
};
const reportChart2 = new ApexCharts(document.querySelector('#report_chart2'), reportChart2Options);
reportChart2.render();

// Report Chart 4
const reportChart4Options = {
    series: [
        {
            name: 'الاسبوع 3',
            data: [11, 17, 15, 15, 21, 14, 15]
        }, {
            name: 'الاسبوع 2',
            data: [13, 23, 20, 8, 13, 27, 33]
        }, {
            name: 'الاسبوع 1',
            data: [44, 55, 41, 67, 89, 43, 78]
        }
    ],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    colors:['#feb019', '#008ffb', '#00e396'],
    stroke: {
        curve: 'straight'
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['اول', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس',
            'سابع'
        ],
    },
    fill: {
        opacity: 0,
        type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        },
    },
    legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
            horizontal: 20,
        }
    },
};
const reportChart4 = new ApexCharts(document.querySelector('#report_chart4'), reportChart4Options);
reportChart4.render();

// Report Chart 5
const reportChart5Options = {
    series: [
        {
            name: 'الاسبوع 3',
            data: [11, 17, 15, 15, 21, 14, 15]
        }, {
            name: 'الاسبوع 2',
            data: [13, 23, 20, 8, 13, 27, 33]
        }, {
            name: 'الاسبوع 1',
            data: [44, 55, 41, 67, 89, 43, 78]
        }
    ],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    colors:['#feb019', '#008ffb', '#00e396'],
    stroke: {
        curve: 'straight'
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['اول', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس',
            'سابع'
        ],
    },
    fill: {
        opacity: 0,
        type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        },
    },
    legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
            horizontal: 20,
        }
    },
};
const reportChart5 = new ApexCharts(document.querySelector('#report_chart5'), reportChart5Options);
reportChart5.render();

// Report Chart 6
const reportChart6Options = {
    series: [
        {
            name: 'الاسبوع 3',
            data: [11, 17, 15, 15, 21, 14, 15]
        }, {
            name: 'الاسبوع 2',
            data: [13, 23, 20, 8, 13, 27, 33]
        }, {
            name: 'الاسبوع 1',
            data: [44, 55, 41, 67, 89, 43, 78]
        }
    ],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    colors:['#feb019', '#008ffb', '#00e396'],
    stroke: {
        curve: 'straight'
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['اول', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس',
            'سابع'
        ],
    },
    fill: {
        opacity: 0,
        type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        },
    },
    legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
            horizontal: 20,
        }
    },
};
const reportChart6 = new ApexCharts(document.querySelector('#report_chart6'), reportChart6Options);
reportChart6.render();

// Report Chart 3
const reportChart3Options = {
    series: [
        {
            name: 'الاسبوع 3',
            data: [11, 17, 15, 15, 21, 14, 15]
        }, {
            name: 'الاسبوع 2',
            data: [13, 23, 20, 8, 13, 27, 33]
        }, {
            name: 'الاسبوع 1',
            data: [44, 55, 41, 67, 89, 43, 78]
        }
    ],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    colors:['#feb019', '#008ffb', '#00e396'],
    stroke: {
        curve: 'straight'
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    xaxis: {
        categories: ['اول', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس',
            'سابع'
        ],
    },
    fill: {
        opacity: 0,
        type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        },
    },
    legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        itemMargin: {
            horizontal: 20,
        }
    },
};
const reportChart3 = new ApexCharts(document.querySelector('#report_chart3'), reportChart3Options);
reportChart3.render();

// Devices Chart
const devicesChartOptions = {
    series: [{
        name: 'عدد الاجهزة',
        data: [
            {x: 'جهاز 1', y: 0},
            {x: 'جهاز 2', y: 2},
            {x: 'جهاز 3', y: 5},
            {x: 'جهاز 4', y: 3},
            {x: 'جهاز 5', y: 7}
        ],
    }],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        fontFamily: 'Cairo',
        animations: {
            enabled: false
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        opacity: 0,
        type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        }
    },
    tooltip: {
        intersect: true,
        shared: false
    },
    theme: {
        palette: 'palette1'
    },
    grid: {
        show: true,
        strokeDashArray: 1,
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    yaxis: {
        show: true,
        min: 0,
        max: 10,
        tickAmount: 5
    },
    xaxis: {
        show: true,
        min: 0,
        max: 6,
        tickAmount: 10
    }
};
const devicesChart = new ApexCharts(document.querySelector("#devices_chart"), devicesChartOptions);
devicesChart.render();

// Branches Chart
const branchesChartOptions = {
    series: [{
        name: 'عدد الفروع',
        data: [{x: 'فرع 1', y: 5}, {x: 'فرع 2', y: 4}, {x: 'فرع 3', y: 6}, {x: 'فرع 4', y: 4}, {x: 'فرع 5', y: 5}],
    }],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        fontFamily: 'Cairo',
        animations: {
            enabled: false
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        opacity: 0, type: ''
    },
    markers: {
        size: 5, hover: {
            size: 9
        }
    },
    tooltip: {
        intersect: true,
        shared: false
    },
    theme: {
        palette: 'palette1'
    },
    grid: {
        show: true, strokeDashArray: 1, xaxis: {
            lines: {
                show: true
            }
        },
    },
    yaxis: {
        show: true,
        min: 0,
        max: 10,
        tickAmount: 5,
    },
    xaxis: {
        show: true,
        min: 0,
        max: 6,
        tickAmount: 10,
    },
};
const branchesChart = new ApexCharts(document.querySelector("#branches_chart"), branchesChartOptions);
branchesChart.render();

// Products Chart
const productsChartOptions = {
    series: [{
        name: 'عدد المنتجات',
        data: [{x: 'منتج 1', y: 5}, {x: 'منتج 2', y: 4}, {x: 'منتج 3', y: 6}, {x: 'منتج 4', y: 4}, {x: 'منتج 5', y: 5}],
    }],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        fontFamily: 'Cairo',
        animations: {
            enabled: false
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        opacity: 0, type: ''
    },
    markers: {
        size: 5, hover: {
            size: 9
        }
    },
    tooltip: {
        intersect: true,
        shared: false
    },
    theme: {
        palette: 'palette1'
    },
    grid: {
        show: true, strokeDashArray: 1, xaxis: {
            lines: {
                show: true
            }
        },
    },
    yaxis: {
        show: true,
        min: 0,
        max: 10,
        tickAmount: 5,
    },
    xaxis: {
        show: true,
        min: 0,
        max: 6,
        tickAmount: 10,
    },
};
const productsChart = new ApexCharts(document.querySelector("#products_chart"), productsChartOptions);
productsChart.render();

// Employees Chart
const employeesChartOptions = {
    series: [{
        name: 'عدد الموظفين',
        data: [{x: '1', y: 2}, {x: '2', y: 4}, {x: '3', y: 2}, {x: '4', y: 7}, {x: '5', y: 9}],
    }],
    chart: {
        type: 'area',
        height: 300,
        width: '100%',
        fontFamily: 'Cairo',
        animations: {
            enabled: false
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        opacity: 0, type: ''
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        }
    },
    tooltip: {
        intersect: true,
        shared: false
    },
    theme: {
        palette: 'palette1'
    },
    grid: {
        show: true, strokeDashArray: 1, xaxis: {
            lines: {
                show: true
            }
        },
    },
    yaxis: {
        show: true,
        min: 0,
        max: 10,
        tickAmount: 5,
    },
    xaxis: {
        show: true,
        min: 0,
        max: 6,
        tickAmount: 10,
    },
};
const employeesChart = new ApexCharts(document.querySelector("#employees_chart"), employeesChartOptions);
employeesChart.render();

// Pie 1
const pie1Options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        type: 'pie',
        height: 350,
        width: '100%',
        fontFamily: 'Cairo',
        offsetY: 30
    },
    labels: ['ممتاز', 'جيد جداً', 'جيد', 'لا بأس', 'غاضب'],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center'
    }
};
const pie1Chart = new ApexCharts(document.querySelector('#pie_1'), pie1Options);
pie1Chart.render();

// Pie 2
const pie2Options = {
    series: [14, 23, 34, 45, 11],
    chart: {
        type: 'pie',
        height: 350,
        width: '100%',
        fontFamily: 'Cairo',
        offsetY: 30
    },
    labels: ['ممتاز', 'جيد جداً', 'جيد', 'لا بأس', 'غاضب'],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center'
    }
};
const pie2Chart = new ApexCharts(document.querySelector('#pie_2'), pie2Options);
pie2Chart.render();

// Pie 3
const pie3Options = {
    series: [91, 25, 23, 33, 72],
    chart: {
        type: 'pie',
        height: 350,
        width: '100%',
        fontFamily: 'Cairo',
        offsetY: 30
    },
    labels: ['ممتاز', 'جيد جداً', 'جيد', 'لا بأس', 'غاضب'],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center'
    }
};
const pie3Chart = new ApexCharts(document.querySelector('#pie_3'), pie3Options);
pie3Chart.render();

// Pie 4
const pie4Options = {
    series: [33, 25, 43, 63, 12],
    chart: {
        type: 'pie',
        height: 350,
        width: '100%',
        fontFamily: 'Cairo',
        offsetY: 30
    },
    labels: ['ممتاز', 'جيد جداً', 'جيد', 'لا بأس', 'غاضب'],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center'
    }
};
const pie4Chart = new ApexCharts(document.querySelector('#pie_4'), pie4Options);
pie4Chart.render();
