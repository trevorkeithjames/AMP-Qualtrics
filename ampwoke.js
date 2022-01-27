define(['pipAPI', 'https://trevorkeithjames.github.io/AMP-Qualtrics/fullampscript.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'negWord',  //Will be used in the user feedback 
				nameForLogging : 'negWord', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'multiculturalism' }, 
					{word : 'diversity' }, 
					{word : 'ethnicities' }, 
					{word : 'minorities' }, 
					{word : 'maggot' }, 
					{word : 'poison' }, 
					{word : 'rotten' }, 
					{word : 'waste' }, 
					{word : 'shadow' }, 
					{word : 'square' }, 
					{word : 'knot' }, 
					{word : 'glass' }]

			}, 
			{
				nameForFeedback : 'posWord',  //Will be used in the user feedback 
				nameForLogging : 'posWord', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'multiculturalism' }, 
					{word : 'diversity' }, 
					{word : 'ethnicities' }, 
					{word : 'minorities' }, 
					{word : 'paradise' }, 
					{word : 'music' }, 
					{word : 'nature' }, 
					{word : 'treasure' }, 
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
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://trevorkeithjames.github.io/AMP-Qualtrics/ampimages'
		}
	});
});
