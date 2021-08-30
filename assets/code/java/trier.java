public static int[] trier(int[] tableau){
	for(int i = 0; i < tableau.length - 1; i++){
		for(int j = 0; j < tableau.length - 1; j++){

			if(tableau[j] > tableau[j+1]){
				int temp = tableau[j];
				tableau[j] = tableau[j+1];
				tableau[j+1] = temp;
			}
		}
	}

	return tableau;
}