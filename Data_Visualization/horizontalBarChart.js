/*
    311 Service Requests (millions) in NYC from 2010 to 05/19/2023
    Brooklyn: 9.84
    Queens: 7.7
    Manhattan: 6.45
    Bronx: 6.15
    Staten Island: 1.65
    Unspecified Borough: 1.24

    Data comes from: https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/7ahn-ypff
*/

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island", "Unspecified Borough"],
        datasets: [
            {
                label: "311 Service Requests (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#808080"],
                data: [9.84, 7.7, 6.45, 6.15, 1.65, 1.24]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: '311 Service Requests (millions) in NYC from 2010 to 05/19/2023'
        }
    }
});