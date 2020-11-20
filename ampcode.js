define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'insect1.jpg' }, 
					{image : 'insect2.jpg' }, 
					{image : 'insect3.jpg' }, 
					{image : 'insect4.jpg' }, 
					{image : 'insect5.jpg' }, 
					{image : 'insect6.jpg' }, 
					{image : 'insect7.jpg' }, 
					{image : 'insect8.jpg' }, 
					{image : 'insect9.jpg' }, 
					{image : 'insect10.jpg' }, 
					{image : 'insect11.jpg' }, 
					{image : 'insect12.jpg' }]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'flower1.jpg' }, 
					{image : 'flower2.jpg' }, 
					{image : 'flower3.jpg' }, 
					{image : 'flower4.jpg' }, 
					{image : 'flower5.jpg' }, 
					{image : 'flower6.jpg' }, 
					{image : 'flower7.jpg' }, 
					{image : 'flower8.jpg' }, 
					{image : 'flower9.jpg' }, 
					{image : 'flower10.jpg' }, 
					{image : 'flower11.jpg' }, 
					{image : 'flower12.jpg' }]
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
