/**
 * @author Oscar Fonts <oscar.fonts@geomati.co>
 */
define(['sos-data-access', 'locale-date'], function(data_access, ld) {
    "use strict";

    var inputs = ["title", "service", "offering", "feature", "properties", "time_start", "time_end"];

    var template = [
        '<div class="table widget">',
            '<h3></h3>',
            '<div class="table-responsive"></div>',
        '</div>'
    ].join('');

    return {
        inputs: inputs,

        init: function(config, el) {

            // Render template
            el.innerHTML = template;
            el.querySelector("h3").innerHTML = config.title;
            var table = el.querySelector(".table-responsive");

            // Setup SOS data access
            var data = data_access(config, redraw);
            data.read();

            // Update view
            function redraw(data) {
                // Get tabular data from observations
                var measures = {};
                var properties = {};
                for (var i in data) {
                    var measure = data[i];

                    // Add value in a time-indexed "measures" object
                    var time = measure.time.getTime();
                    if (!measures[time]) {
                        measures[time] = {};
                    }
                    measures[time][measure.property] = measure.value;

                    // Add property to a "properties" object, including uom
                    if (!properties[measure.property]) {
                        properties[measure.property] = measure.uom;
                    }
                }

                createTable(measures, properties);
            }

            function createTable(measures, properties) {
                var html = '<table class="table table-striped table-condensed table-hover table-bordered">';
                html += '<thead>';
                html += '<tr>';
                html += '<th>Result Time</th>';
                for (var name in properties) {
                    var uom = properties[name];
                    html += '<th>' + name + " (" + uom + ')</th>';
                }
                html += '</tr>';
                html += '</thead>';

                var times = Object.keys(measures);
                times.sort().reverse();
                for (var i in times) {
                    var time = times[i];
                    var values = measures[time];
                    html += '<tr>';
                    html += '<th class="time">' + ld.display(new Date(parseInt(time))) + '</th>';
                    for (var property in properties) {
                        html += '<td>' + values[property] + '</td>';
                    }
                    html += '</tr>';
                }
                html += '</table>';
                table.innerHTML = html;
            }
        }
    };
});