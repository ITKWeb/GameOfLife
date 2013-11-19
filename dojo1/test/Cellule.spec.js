var dependencies = [
	'Cellule'
];

define(dependencies, function() {

	describe('in Cellule', function() {


		beforeEach(function() {
		});

		it('should be dead or alive', function () {
			var cellule = new Cellule();
			expect(cellule.isAlive() && cellule.isDead()).toBe(false);

		});

		it('should have maximum 8 neighbours', function () {
			var cellule = new Cellule();
			expect(cellule.getnbNeighbours() <= 8).toBe(true);
		});

		it('Birth rule test 1', function () {
			var grid = new Grid();
			var cel = grid.get(3,3);

			cel.setAliveNeighbour(0);
			cel.setAliveNeighbour(1);
			cel.setAliveNeighbour(2);
			expect(cel.willBeAlive()).toBe(true);
		});


/*		it('Born rule test 2', function () {
			var cellule = new Cellule();
			cellule.initNeigghbours();
			cellule.getNeighbour("North").setAlive(true);
			cellule.getNeighbour("South").setAlive(true);
			
			expect(cellule.willBeAlive()).toBe(false);
		});

		it('Born rule test 3', function () {
			var cellule = new Cellule();
			cellule.initNeigghbours();
			cellule.getNeighbour("North").setAlive(true);
			cellule.getNeighbour("South").setAlive(true);
			cellule.getNeighbour("East").setAlive(true);
			cellule.getNeighbour("West").setAlive(true);
			expect(cellule.willBeAlive()).toBe(false);
		});
*/
	});
});