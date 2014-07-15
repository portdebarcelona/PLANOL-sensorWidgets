/**
 * @author Oscar Fonts <oscar.fonts@geomati.co>
 */
define(['SOS'], function(SOS) {

	var inputs = ["title", "service", "offering", "feature", "properties", "time_start", "time_end"];
	var propertyNames = null;

	return {
		inputs: inputs,
		init: function(config, renderTo) {
			SOS.setUrl(config.service);
			read();

			function read() {
				var properties = config.properties = isArray(config.properties) ? config.properties : JSON.parse(config.properties);
				var time_range = (config.time_start && config.time_end) ? [config.time_start, config.time_end] : null;
				SOS.getObservation(config.offering, [config.feature], properties, time_range, draw);
			}

			function isArray(obj) {
				return Object.prototype.toString.call(obj) === '[object Array]';
			}

			function draw(observations) {
				function d(n) {
					return n < 10 ? "0" + n : "" + n;
				};

				// Get tabular data from observations
				var data = {};
				for (i in observations) {
					var obs = observations[i];

					var time = new Date(obs.resultTime).toISOString().substring(0,19).replace('T', ' ');
					var property = obs.observableProperty;
					var value = obs.result.hasOwnProperty("value") ? obs.result.value : obs.result;

					if (!data[time]) {
						data[time] = {};
					}
					data[time][property] = value;
				}

				if (observations.length) {
					getPropertyNames(observations[0].procedure, data);
				}
			};

			function getPropertyNames(procedure, data) {
				SOS.describeSensor(procedure, function(description) {
					var properties = description.hasOwnProperty("ProcessModel") ? description.ProcessModel.outputs.OutputList.output : description.System.outputs.OutputList.output;
					properties = properties instanceof Array ? properties : [properties];
					var types = ["Quantity", "Count", "Boolean", "Category", "Text", "ObservableProperty"];
					propertyNames = {};

					function isInArray(value, array) {
						return array.indexOf(value) > -1;
					}

					for (i in properties) {
						var property = properties[i];
						for (i in types) {
							var type = types[i];
							if (property.hasOwnProperty(type)) {
								property.id = property[type].definition;
							}
						}
						if (isInArray(property.id, config.properties)) {
							propertyNames[property.id] = property.name;
						}
					}
					createGrid(data, propertyNames);
				});
			};

			function createGrid(data, propertyNames) {
				console.log(data);
				console.log(propertyNames);

				table = '<table class="table table-striped table-condensed table-hover">';
				table += '<tr>';
				table += '<thead>';
				table += '<th>Result Time</th>';
				for (var i in config.properties) {
					table += '<th>' + propertyNames[config.properties[i]] + '</th>';
				}
				table += '</tr>';
				table += '</thead>';

				var times = Object.keys(data);
				times.sort().reverse();
				for (var i in times) {
					var time = times[i];
					var values = data[time];
					table += '<tr>';
					table += '<th class="time">' + time + '</th>';
					for (var i in config.properties) {
						table += '<td>' + values[config.properties[i]] + '</td>';
					}
					table += '</tr>';
				}
				table += '</table>';

				// Add table contents to document
				var title = config.title ? "<h3>" + config.title + "</h3>" : "";
				renderTo.innerHTML = title + table;
			}
		}
	};

});