Highcharts.chart('container2',{
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha:45,
            beta: 0
        }
    },
    title: {
        text: 'Spent most time on what topic'
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
                name: 'Study',
                y: 165.7,
                sliced: true,
                selected: true
            },
            ['Food', 132.6],
            ['Video Games', 87.5],
            ['Sports', 62.7],
            ['Others', 30.8]
        ]
    }]
});
