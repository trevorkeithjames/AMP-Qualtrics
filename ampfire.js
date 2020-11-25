define(['pipAPI', 'https://trevorkeithjames.github.io/AMP-Qualtrics/fullampscript.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'nFire',  //Will be used in the user feedback 
				nameForLogging : 'nFire', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'negfire1.jpg' }, 
					{image : 'negfire2.jpg' }, 
					{image : 'negfire3.jpg' }, 
					{image : 'negfire4.jpg' }, 
					{image : 'negfire5.jpg' }, 
					{image : 'negfire6.jpg' }, 
					{image : 'negfire7.jpg' }, 
					{image : 'negfire8.jpg' }, 
					{image : 'negfire9.jpg' }, 
					{image : 'negfire10.jpg' }, 
					{image : 'negfire11.jpg' }, 
					{image : 'negfire12.jpg' }]

			}, 
			{
				nameForFeedback : 'pFire',  //Will be used in the user feedback 
				nameForLogging : 'pFire', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'posfire1.jpg' }, 
					{image : 'posfire2.jpg' }, 
					{image : 'posfire3.jpg' }, 
					{image : 'posfire4.jpg' }, 
					{image : 'posfire5.jpg' }, 
					{image : 'posfire6.jpg' }, 
					{image : 'posfire7.jpg' }, 
					{image : 'posfire8.jpg' }, 
					{image : 'posfire9.jpg' }, 
					{image : 'posfire10.jpg' }, 
					{image : 'posfire11.jpg' }, 
					{image : 'posfire12.jpg' }]
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
