public static void main(String[] args) {

	//Déclaration su Scanner
	Scanner sc = new Scanner(System.in);
	
	//Une variable qui contiendra notre nombre
	int number = 0;
	
	//Tant que le nombre est plus petit que 1 ou plus grand que 10
	while(number < 1 || number > 10){

		//Message pour l'utilisateur
		System.out.println("Saisissez un nombre entre 1 et 10 inclus :");

		//Attente d'une entrée par l'utilisateur et la stocker dans la variable line
		//Attention, elle est de type String pour que l'utilisateur puisse entrer n'importe quoi sans tout faire planter
		String line = sc.nextLine();

		//essayer de ...
		try{

			//... convertir notre String en int
			number = Integer.parseInt(line);

		//Si ça n'a pas marché alors...
		}catch(NumberFormatException e){

			//on remet notre nombre à 0 pour continuer la boucle
			number = 0;
		}
	}

	//Affichage du nombre final
	System.out.println(number);
}