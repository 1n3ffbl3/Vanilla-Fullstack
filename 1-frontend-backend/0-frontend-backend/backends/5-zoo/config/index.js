let path = require('path');

module.exports = {
	PORT: 3001,
	DBs: {
		terrestrial: path.join(__dirname, "../dbs/terrestrial.json"),
		aquatic: path.join(__dirname, "../dbs/aquatic.json")
	},
	ANIMALS: {
		swallows: "terrestrial",
		orcas: "aquatic",
		kangaroos: "terrestrial"
	}
}
