var Grille = (function() {

	'use strict';

	function Grille() {

		this.numberOfRows = 20; 
		this.numberOfColumns = 20; 
		this.cells = [];
		for (var i=0; i<this.numberOfColumns;i++) {
			var tab=[];
			for (var j = 0; j < this.numberOfRows; j++) {
				tab.push(new Cellule(false,[]));
			}
			this.cells.push(tab);
		}
		 
	}

	Grille.prototype.getNumberOfRows = function() {
		return this.numberOfRows;
	};
	Grille.prototype.getNumberOfColumns = function() {
		return this.numberOfColumns;
	};
	Grille.prototype.getNbOfDeadCells = function() {
		var nbDeadCells = 0;
		for (var i = 0; i < this.cells.length; i++) {
			for (var j = 0; j < this.cells[i].length; j++) {
				if (this.cells[i][j].isDead()) {
					nbDeadCells++;
				}
			}
		}
		return nbDeadCells;
	};

	return Grille;

})();