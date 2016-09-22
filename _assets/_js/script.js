//CHANGE ABOUT ME IMAGE
		/*var myImage = document.getElementById("aboutImage");

		var imageArray = ["_assets/_media/reno.png", "_assets/_media/bunny.png", 
		"_assets/_media/kayak.png", "_assets/_media/mydogs.png", "_assets/_media/hamburger.png", 
		"_assets/_media/ffdr.png", "_assets/_media/blue.png", "_assets/_media/ozzie.png", 
		"_assets/_media/sunflowers.png","_assets/_media/wicked.png"];
		var imageIndex = 0;

		function changeImage() {
			myImage.setAttribute("src",imageArray[imageIndex]);
			imageIndex++;
			if (imageIndex >= imageArray.length) {
				imageIndex = 0;
			}
		}

		// setInterval is also in milliseconds
		var intervalHandle =setInterval(changeImage,5000);

		myImage.onclick = function(){
			clearInterval(intervalHandle);
		}
		*/

//TOGGLE PROJECTS
	//NEWSPAPER
		function showSatNew(id){
			var satNew = document.getElementById("sat-new");
			if (satNew.style.display == "block"){
				satNew.style.display="none";
			}
			else{
				satNew.style.display="block";
			}
		}
	//DANTE'S INFERNO
		function showDante(id){
			var dante = document.getElementById("dante");
			if (dante.style.display == "block"){
				dante.style.display="none";
			}
			else{
				dante.style.display="block";
			}
		}
	//QUIZ
		function showQuiz(id){
			var quiz = document.getElementById("quiz");
			if (quiz.style.display == "block"){
				quiz.style.display="none";
			}
			else{
				quiz.style.display="block";
			}
		}
	//HOUR OF CODE
		function showHoC(id){
			var hoC = document.getElementById("hoc");
			if (hoC.style.display == "block"){
				hoC.style.display="none";
			}
			else{
				hoC.style.display="block";
			}
		}
	//CUE SPS
		function showCueSps(id){
			var cueSps = document.getElementById("cuesps");
			if (cueSps.style.display == "block"){
				cueSps.style.display="none";
			}
			else{
				cueSps.style.display="block";
			}
		}
	//SWCTA SITE
		function showSwcta(id){
			var swcta = document.getElementById("swcta");
			if (swcta.style.display == "block"){
				swcta.style.display="none";
			}
			else{
				swcta.style.display="block";
			}
		}
	//SWCTA WP SITE
		function showSwctaWP(id){
			var swctawp = document.getElementById("swctawp");
			if (swctawp.style.display == "block"){
				swctawp.style.display="none";
			}
			else{
				swctawp.style.display="block";
			}
		}
	//SELF PORTRAIT
		function showPortrait(id){
			var portrait = document.getElementById("portrait");
			if (portrait.style.display == "block"){
				portrait.style.display="none";
			}
			else{
				portrait.style.display="block";
			}
		}
	//INFOGRAPHIC
		function showInfographic(id){
			var infographic = document.getElementById("infographic");
			if (infographic.style.display == "block"){
				infographic.style.display="none";
			}
			else{
				infographic.style.display="block";
			}
		}
	//SKETCHBOOK PRO
		function showSPP(id){
			var spp = document.getElementById("spp");
			if (spp.style.display == "block"){
				spp.style.display="none";
			}
			else{
				spp.style.display="block";
			}
		}
	//NACTE
		function showNacte(id){
			var nacte = document.getElementById("nacte");
			if (nacte.style.display == "block"){
				nacte.style.display="none";
			}
			else{
				nacte.style.display="block";
			}
		}
	//HOLIDAY CARD
		function showHolidayCard(id){
			var card = document.getElementById("card");
			if (card.style.display == "block"){
				card.style.display="none";
			}
			else{
				card.style.display="block";
			}
		}
	//FINE ART
		function showFineArt(id){
			var fineArt = document.getElementById("fineart");
			if (fineArt.style.display == "none"){
				fineArt.style.display="block";
			}
			else{
				fineArt.style.display="none";
			}
		}
	//FABLE
		function showFable(id){
			var fable = document.getElementById("fable");
			if (fable.style.display == "block"){
				fable.style.display="none";
			}
			else{
				fable.style.display="block";
			}
		}
	//BRIAN HEAD
		function showBrianhead(id){
			var brianhead = document.getElementById("brianhead");
			if (brianhead.style.display == "block"){
				brianhead.style.display="none";
			}
			else{
				brianhead.style.display="block";
			}
		}
	//SHOOTER GAME
		function showShooterGame(id){
			var shooterGame = document.getElementById("shootergame");
			if (shooterGame.style.display == "block"){
				shooterGame.style.display="none";
			}
			else{
				shooterGame.style.display="block";
			}
		}
	//THEME  PROJECT
		function showTheme(id){
			var theme = document.getElementById("theme");
			if (theme.style.display == "block"){
				theme.style.display="none";
			}
			else{
				theme.style.display="block";
			}
		}
	//MARKETING EDUCATION
		function showMarketingEducation(id){
			var marketingEducation = document.getElementById("marketingeducation");
			if (marketingEducation.style.display == "block"){
				marketingEducation.style.display="none";
			}
			else{
				marketingEducation.style.display="block";
			}
		}
	//LVGEA
		function showLvgea(id){
			var lvgea = document.getElementById("lvgea");
			if (lvgea.style.display == "block"){
				lvgea.style.display="none";
			}
			else{
				lvgea.style.display="block";
			}
		}
	//TYPOGRAPHY POSTER
		function showtype(id){
			var type = document.getElementById("type");
			if (type.style.display == "block"){
				type.style.display="none";
			}
			else{
				type.style.display="block";
			}
		}
	//3D PRINTING
		function show3D(id){
			var threeD = document.getElementById("threeD");
			if (threeD.style.display == "block"){
				threeD.style.display="none";
			}
			else{
				threeD.style.display="block";
			}
		}

