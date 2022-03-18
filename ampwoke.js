define(['pipAPI', 'https://trevorkeithjames.github.io/AMP-Qualtrics/fullampscript.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'posWord',  //Will be used in the user feedback 
				nameForLogging : 'posWord', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'multiculturalism' }, 
					{word : 'diversity' }, 
					{word : 'ethnicities' }, 
					{word : 'minorities' }, 
					{word : 'multiculturalism' }, 
					{word : 'diversity' }, 
					{word : 'ethnicities' }, 
					{word : 'minorities' }]
					
			}, 
			{
				nameForFeedback : 'neutralWord',  //Will be used in the user feedback 
				nameForLogging : 'neutralWord', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    	{word : 'shadow' }, 
					{word : 'square' }, 
					{word : 'knot' }, 
					{word : 'glass' }, 
					{word : 'shadow' }, 
					{word : 'square' }, 
					{word : 'knot' }, 
					{word : 'glass' }]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'chair'}, {word : 'lamp'}, {word : 'umbrella'}]
		},

		base_url : {//Where are your images at?
			image : 'https://trevorkeithjames.github.io/AMP-Qualtrics/ampimages'
		}
	});
});
