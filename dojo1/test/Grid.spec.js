var dependencies = [
	'Grid', 'Cellule'
];

define(dependencies, function() {

	describe('in Cellule', function() {


		beforeEach(function() {
		});

		it('the world is a 20x20 grid', function () {
			var grid = new Grid();
			expect(grid.width()===20 && grid.height()===20).toBe(true);

		});

		it('every cells should be dead', function () {
			var grid = new Grid();
			console.log(grid.getAliveCells());
			expect(grid.getAliveCells() === 0).toBe(true);

		});
	});

});