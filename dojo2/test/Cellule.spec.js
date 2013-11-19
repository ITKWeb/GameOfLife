var dependencies = [
	'Cellule'
];

define(dependencies, function() {

	describe('Cellule', function() {


		beforeEach(function() {
		});

		it('should be dead or alive', function () {
			var cellule = new Cellule(true,[]);
			expect(cellule.isAlive() && !cellule.isDead()).toBe(true);
			cellule = new Cellule(false,[]);
			expect(!cellule.isAlive() && cellule.isDead()).toBe(true);
		});

		it('should have at most eight neighbours', function () {
			var cellule  = new Cellule(true, ['a']);
			expect(cellule.getNumberOfNeighbours()<=8).toBe(true);
			cellule = new Cellule(false, ['a','a','a','a','a','a','a','a','a','a']);
			expect(cellule.getNumberOfNeighbours()<=8).toBe(true);
		});
		it('matrix size must be 20x20 of dead cells', function () {
			var cellule  = new Cellule(true, ['a']);
			expect(cellule.getNumberOfNeighbours()<=8).toBe(true);
			cellule = new Cellule(false, ['a','a','a','a','a','a','a','a','a','a']);
			expect(cellule.getNumberOfNeighbours()<=8).toBe(true);
		});

		it('a dead cell with exactly 3 alive neighbours turns alive ', function () {
			var deadCel = new Cellule(false, []);
			var aliveCel = new Cellule(true, []);

			var cellule  = new Cellule(false, [aliveCel, aliveCel, aliveCel]);
			expect(cellule.isTurningAlive()).toBe(true);

			cellule  = new Cellule(false, [deadCel, deadCel, deadCel]);
			expect(cellule.isTurningAlive()).toBe(false);

			cellule  = new Cellule(false, [aliveCel, aliveCel]);
			expect(cellule.isTurningAlive()).toBe(false);


		});

		it('a cell is staying alive if it has 2 or 3 alive neighbours', function () {
			var deadCel = new Cellule(false, []);
			var aliveCel = new Cellule(true, []);

			var cellule  = new Cellule(true, [aliveCel, aliveCel, aliveCel]);
			expect(cellule.isStayingAlive()).toBe(true);

			cellule  = new Cellule(true, [aliveCel, aliveCel, deadCel]);
			expect(cellule.isStayingAlive()).toBe(true);

			

		});

		it('a cell is dying if not staying alive', function () {
			var deadCel = new Cellule(false, []);
			var aliveCel = new Cellule(true, []);

			var cellule  = new Cellule(true, [aliveCel, aliveCel, aliveCel, aliveCel]);
			expect(cellule.isStayingAlive()).toBe(false);

			cellule  = new Cellule(true, [aliveCel, deadCel, deadCel]);
			expect(cellule.isStayingAlive()).toBe(false);
			expect(cellule.isAlive()).toBe(false);

		});

	});

});