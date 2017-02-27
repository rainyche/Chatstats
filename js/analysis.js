Highcharts.chart('container1', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha:45,
            beta: 0
        }
    },
    title:{
    text:''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.1f}Hrs ({point.percentage:.1f}%)</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Time spent',
        data: [
            {
                name: 'Shopping',
                y: 113.7,
                sliced: true,
                selected: true
            },
            ['Video game', 70.8],
            ['Study', 67.5],
            ['Others', 20.7]
        ]
    }]
});
