define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'insect1' }, 
					{word : 'insect2' }, 
					{word : 'insect3' }, 
					{word : 'insect4' }, 
					{word : 'insect5' }, 
					{word : 'insect6' }, 
					{word : 'insect7' }, 
					{word : 'insect8' }, 
					{word : 'insect1' }, 
					{word : 'insect2' }, 
					{word : 'insect3' }, 
					{word : 'insect4' }]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'flower1' }, 
					{word : 'flower2' }, 
					{word : 'flower3' }, 
					{word : 'flower4' }, 
					{word : 'flower5' }, 
					{word : 'flower6' }, 
					{word : 'flower7' }, 
					{word : 'flower8' }, 
					{word : 'flower1' }, 
					{word : 'flower2' }, 
					{word : 'flower3' }, 
					{word : 'flower4' }]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'flower1'}, {word : 'flower1'}, {word : 'flower1'}]
		},

		base_url : {//Where are your images at?
			image : https://github.com/trevorkeithjames/AMP-Qualtrics/ampword
		}
	});
});
