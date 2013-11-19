var Cellule = (function() {

	'use strict';

	function Cellule(isAlive, list) {
		this.alive = isAlive;
		this.turningAlive = false;
		this.stayingAlive = false;

		if(list.length > 8)
		{
			this.listOfNeighbours = [];
		} 
		else
		{
			this.listOfNeighbours = list;			
		}

	}

	Cellule.prototype.isAlive = function() {
		return this.alive;
	};
	Cellule.prototype.isDead = function() {
		return !this.alive;
	};

	Cellule.prototype.getNumberOfNeighbours = function() {
		return this.listOfNeighbours.length;
	};

	Cellule.prototype.isTurningAlive = function() {
		var numberNeighborAlive	= 0;
		for (var i = 0; i <this.listOfNeighbours.length ; i++) {
			if(this.listOfNeighbours[i].alive===true){
				numberNeighborAlive++;
			}
		}
		if (this.alive === false && numberNeighborAlive===3) {
			this.turningAlive = true;
		}
		return this.turningAlive;
	};

	Cellule.prototype.isStayingAlive = function() {
		var numberNeighborAlive	= 0;
		for (var i = 0; i <this.listOfNeighbours.length ; i++) {
			if(this.listOfNeighbours[i].alive===true){
				numberNeighborAlive++;
			}
		}
		if (this.alive){
			if(numberNeighborAlive>=2 && numberNeighborAlive<=3)
			{
				this.stayingAlive = true;
			}
			else
			{
				this.stayingAlive = false;
				this.alive = false;
			}
		}
		return this.stayingAlive;
	};
	

	return Cellule;

})();