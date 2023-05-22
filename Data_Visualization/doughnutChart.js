/* 
    US COVID-19 cases by state:
    California 11,252,509
    Florida 7,580,067
    New York 6,677,719
    Ohio 3,445,294
    Pennsylvania 3,559,331	

    Data comes from https://usafacts.org/visualizations/coronavirus-covid-19-spread-map/
*/

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["California", "Florida", "New York", "Ohio", "Pennsylvania"],
        datasets: [
            {
                label: "Cases (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [11.25, 7.58, 6.67, 3.44, 3.55]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'US COVID-19 cases by state (millions) in 2022'
        }
    }
});