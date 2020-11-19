define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : insect1.jpg }, 
					{word : insect2.jpg }, 
					{word : insect3.jpg }, 
					{word : insect4.jpg }, 
					{word : insect5.jpg }, 
					{word : insect6.jpg }, 
					{word : insect7.jpg }, 
					{word : insect8.jpg }, 
					{word : insect1.jpg }, 
					{word : insect2.jpg }, 
					{word : insect3.jpg }, 
					{word : insect4.jpg }]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : flower1.jpg }, 
					{word : flower2.jpg }, 
					{word : flower3.jpg }, 
					{word : flower4.jpg }, 
					{word : flower5.jpg }, 
					{word : flower6.jpg }, 
					{word : flower7.jpg }, 
					{word : flower8.jpg }, 
					{word : flower1.jpg }, 
					{word : flower2.jpg }, 
					{word : flower3.jpg }, 
					{word : flower4.jpg }]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : flower1.jpg}, {word : flower1.jpg}, {word : flower1.jpg}]
		},

		base_url : {//Where are your images at?
			image : https://github.com/trevorkeithjames/AMP-Qualtrics/ampword
		}
	});
});
