var Cellule = (function() {

	'use strict';

	function Cellule() {
		this.status = false;
		this.listNeighbours = [];
	}

	Cellule.prototype.isAlive = function() {
		return this.status;
	};
	Cellule.prototype.isDead = function() {
		return this.isAlive() === false;
	};
	Cellule.prototype.getnbNeighbours = function() {
		return this.listNeighbours.length;
	};

	Cellule.prototype.setAliveNeighbour(i){
		

	};

	Cellule.prototype.set = function() {
		

		this.listNeighbours[0] = new Cellule();

		return this.listNeighbours.length;
	};
	return Cellule;

})();