var dependencies = [
	'Grille'
];

define(dependencies, function() {

	describe('Grille', function() {


		beforeEach(function() {
		});

	
		it('matrix size must be 20x20 and contains only dead cells', function () {
			var grille  = new Grille();
			expect(grille.getNumberOfRows() === 20).toBe(true);
			expect(grille.getNumberOfColumns() === 20).toBe(true);
			expect(grille.getNbOfDeadCells() === 400).toBe(true);
		});
	});

});