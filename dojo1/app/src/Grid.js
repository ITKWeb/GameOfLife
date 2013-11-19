var Grid = (function() {

	'use strict';

	function Grid() {
		this.tab = [];

		for (var i = 0; i < 20; i++) {
			this.tab.push([]);
			for (var j = 0 ;j < 20; j++) {
				this.tab[i].push(new Cellule());
			}
		}
	}

	Grid.prototype.width = function() {
		return this.tab.length;
	};

	Grid.prototype.height = function() {
		return this.tab[0].length;
	};
	Grid.prototype.getAliveCells = function() {
		var aliveCells = 0;
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 20; j++) {
				if (this.tab[i][j].isAlive()) {
					aliveCells++;
				}
			}
		}
		return aliveCells;
	};

	return Grid;

})();