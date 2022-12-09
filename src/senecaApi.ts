export async function senecaLogin(email: string, password: string) {
	const req = await fetch(
		"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXmCdeFZFJbQOtl6xupkxZw-lIOKuJQKg",
		{
			body: JSON.stringify({
				email: email,
				password: password,
				returnSecureToken: true
			}),
			method: "POST"
		}
	);

	const data = await req.json();
	return data;
}

export async function farmPoints(accessKey: string) {
	const req = await fetch("https://stats.app.senecalearning.com/api/stats/sessions", {
    method: "POST",
    headers: {
      "access-key": accessKey,
      correlationid: "1670259561865::41c0e6aecd8eaebc1ee4bbe4c006b44d",
      "user-region": "GB",
    },
    body: JSON.stringify(
      {"platform":"seneca-web","clientVersion":"2.8.182","session":{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","sessionType":"adaptive","courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionIds":["9205214a-f244-447e-af77-a3cf556ae0b8"],"contentIds":[],"modulesStudied":8,"modulesTested":6,"modulesCorrect":5,"modulesIncorrect":1,"modulesGaveUp":0,"averageScore":0.8333333333333334,"sessionScore":0.8333333333333334,"timeStarted":"2022-12-09T12:47:05+00:00","timeFinished":"2022-12-09T12:50:01+00:00","startingProficiency":0,"endingProficiency":0.935,"startingCourseProficiency":0.020230170245825727,"endingCourseProficiency":0.0652155172413793,"endingCourseScore":0.0597718253968254,"completed":true,"smartLearningActive":false,"signedOut":false,"wrongModuleIds":["2f3d8314-3caf-48f2-9b69-33a5e775308d"],"totalModulesStudyTime":0},"modules":[{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":0,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"d9121236-3256-4b51-a3c8-691f210e5a94","moduleId":"daf0ab18-6d0f-4d8f-939d-0fbe4843d6c5","moduleType":"concept","testingActive":false,"content":{"gifExamples":false,"randomExampleOrder":false,"title":"Binary Addition","explanation":"We can add two binary numbers in exactly the same way as denary numbers.","examples":[{"title":"Adding two digits","example":"- If we add 0 + 0 we get 0.\n- If we add 1 + 0 (or 0 + 1) we get 1.\n- If we add 1 + 1, then we cannot use the symbol 2. So we need to carry the 1 and put 0 in the current place.","image":{"url":"https://image-v2.cdn.app.senecalearning.com/2018-08/c7c2a77c-8f38-450a-a083-bbfd3f6801d4/plus-sign-add-,f_cover,h_400,w_600.png","fallbackUrl":null}},{"title":"Adding in a third bit","example":"- It might be the case that we have 1 + 1 and also a 1 carried over from the previous column.\n- If this is the case, then we carry the 1 and have 1 left over.\n - So we carry 1 and put 1 in the current place.","image":{"url":"https://image-v2.cdn.app.senecalearning.com/courseImages/physics/4.3.5 - Digital Circuits/binary-min,f_cover,h_400,w_600.jpg","fallbackUrl":null}},{"title":"Overflow errors","example":"- Binary numbers are stored as a fixed length.\n- If a number is carried past the last place column, then this is called an overflow error.\n- Overflow errors can lead to inaccurate results and software crashes.","image":{"url":"https://image-v2.cdn.app.senecalearning.com/2018-08/5186415f-5044-4244-b7d5-e3ee41372c0d/sign-alert-,f_cover,h_400,w_600.jpg","fallbackUrl":null}}]},"userAnswer":{},"score":null,"moduleScore":{},"timeStarted":"2022-12-09T12:48:53+00:00","timeFinished":"2022-12-09T12:48:56+00:00","gaveUp":false,"submitted":false,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":1,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"d9121236-3256-4b51-a3c8-691f210e5a94","moduleId":"43284b35-8dcd-4e03-ae34-fbbb78bb7514","moduleType":"wordfill","testingActive":true,"content":{"words":["Perform the following binary addition:<br/>\n01100110     .<br/>\n01010101+<br/>\n-----------<br/>\n1011",{"otherPermittedWords":[],"word":"1","testing":true},"011   ."],"renderImage":false},"userAnswer":{"words":{"1":"1"}},"score":1,"moduleScore":{"words":{"1":true},"score":1},"timeStarted":"2022-12-09T12:48:56+00:00","timeFinished":"2022-12-09T12:49:05+00:00","gaveUp":false,"submitted":true,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":2,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"d9121236-3256-4b51-a3c8-691f210e5a94","moduleId":"2f3d8314-3caf-48f2-9b69-33a5e775308d","moduleType":"multiple-choice","testingActive":true,"content":{"question":"An overflow error occurs if a number is carried past which place column?","answers":["Last","Second from last","Second","First"],"correctAnswerIndex":0},"userAnswer":{"index":3},"score":0,"moduleScore":{"score":0},"timeStarted":"2022-12-09T12:49:05+00:00","timeFinished":"2022-12-09T12:49:13+00:00","gaveUp":false,"submitted":true,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":3,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"6a0fafe2-d44e-4ae7-800d-66661ea929ea","moduleId":"63c0025e-cea1-415f-9e81-387a8cfca2b4","moduleType":"concept","testingActive":false,"content":{"randomExampleOrder":true,"title":"Binary Shifts","explanation":"A binary shift is a technique for performing multiplication or division on a binary number.","examples":[{"title":"Binary shift","example":"- In a binary shift, each digit is moved one column to the left or the right.\n- Extra 0 bits are added to the start or end of the binary number to fill any missing spaces.","image":{"url":"https://image-v2.cdn.app.senecalearning.com/2018-07/489f501c-2143-4e06-96e9-abf89c790f6e/Code-Encryption-Matrix-Screen-Computer-,f_cover,h_400,w_600.jpg","fallbackUrl":null}},{"title":"Right binary shift","example":"- In a right binary shift, each digit is moved one place to the right.\n - This has the effect of dividing the number by two.\n- You must take care when performing a right shift that no data is shifted off the right hand side. This can cause a loss of accuracy.","image":{"url":"https://image-v2.cdn.app.senecalearning.com/2018-08/299fd687-0b03-4954-a77c-ecdb601d4f38/Security-Encryption-Code-Internet-Computer-,f_cover,h_400,w_600.jpg","fallbackUrl":null}},{"title":"Left binary shift","example":"- In a left binary shift, each digit is moved one place to the left.\n - This has the effect of multiplying the number by two.\n- You must take care, when performing a left shift, that there is no overflow error (where we run out of space to store the last digit of the number).","image":{"url":"https://image-v2.cdn.app.senecalearning.com/2018-06/6ede39b1-6f96-4078-ba64-5d07f569a573/depositphotos_5660618-stock-illustration-binary-code-seamless-pattern,f_cover,h_400,w_600.jpg","fallbackUrl":null}}]},"userAnswer":{},"score":null,"moduleScore":{},"timeStarted":"2022-12-09T12:49:15+00:00","timeFinished":"2022-12-09T12:49:20+00:00","gaveUp":false,"submitted":false,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":4,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"6a0fafe2-d44e-4ae7-800d-66661ea929ea","moduleId":"9801cbe7-9b01-426e-8db7-c5fab143ff37","moduleType":"multiple-choice","testingActive":true,"content":{"question":"What is the result of two left binary shifts on 00110100?","answers":["11010011","10110000","00110011","11010000"],"correctAnswerIndex":3},"userAnswer":{"index":3},"score":1,"moduleScore":{"score":1},"timeStarted":"2022-12-09T12:49:20+00:00","timeFinished":"2022-12-09T12:49:35+00:00","gaveUp":false,"submitted":true,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":5,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"6a0fafe2-d44e-4ae7-800d-66661ea929ea","moduleId":"2f12a551-a4d9-4716-985b-6fff10b75d55","moduleType":"image-description","testingActive":true,"content":{"words":["A binary ",{"otherPermittedWords":[],"word":"shift","testing":true}," is a technique for performing ",{"otherPermittedWords":["timesing"],"word":"multiplication","testing":true}," or division on a binary number."],"imageURL":"https://media.giphy.com/media/26ufmAbJMT0pCOk6c/giphy.mp4","image":{"url":"https://media.giphy.com/media/26ufmAbJMT0pCOk6c/giphy.mp4","fallbackUrl":"https://gif.app.senecalearning.com/media/26ufmAbJMT0pCOk6c/giphy.mp4"},"renderImage":false},"userAnswer":{"words":{"shift":"shift","multiplication":"multiplication"}},"score":1,"moduleScore":{"words":{"shift":true,"multiplication":true},"score":1},"timeStarted":"2022-12-09T12:49:35+00:00","timeFinished":"2022-12-09T12:49:46+00:00","gaveUp":false,"submitted":true,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":6,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"d9121236-3256-4b51-a3c8-691f210e5a94","moduleId":"987aca8f-33f7-4f52-8ed6-45a747eeef6b","moduleType":"wordfill","testingActive":true,"content":{"words":["When adding two 1s, we must carry ",{"otherPermittedWords":[],"word":"1","testing":true}," and place ",{"otherPermittedWords":[],"word":"0"}," in the current place."],"renderImage":false},"userAnswer":{"words":{"1":"1"}},"score":1,"moduleScore":{"words":{"1":true},"score":1},"timeStarted":"2022-12-09T12:49:46+00:00","timeFinished":"2022-12-09T12:49:53+00:00","gaveUp":false,"submitted":true,"completed":true},{"sessionId":"758276a8-863d-4a36-b106-4b6f6943a087","moduleOrder":7,"courseId":"a1ce4570-6e27-11e8-af4b-35cf52f905c2","sectionId":"9205214a-f244-447e-af77-a3cf556ae0b8","contentId":"6a0fafe2-d44e-4ae7-800d-66661ea929ea","moduleId":"763d32a3-67ef-492a-823c-f3a2c7dce49f","moduleType":"wrong-word","testingActive":true,"content":{"select":{"correctWord":"to the left","wrongWord":"downwards","testedWordIndex":22,"sentence":["In"," ","a"," ","left"," ","binary"," ","shift,"," ","each"," ","digit"," ","is"," ","moved"," ","one"," ","place"," ",{"word":"downwards","shouldBeSelected":true},"."," ","This"," ","has"," ","the"," ","effect"," ","of"," ","multiplying"," ","the"," ","number"," ","by"," ","two."]},"multipleChoice":{"answers":["to the right","upwards","to the left"],"correctAnswerIndex":2}},"userAnswer":{"select":{"index":22},"multipleChoice":{"index":2}},"score":1,"moduleScore":{"score":1,"select":{"score":1},"multipleChoice":{"score":1}},"timeStarted":"2022-12-09T12:49:53+00:00","timeFinished":"2022-12-09T12:50:01+00:00","gaveUp":false,"submitted":true,"completed":true}]}
    ),
	});
	
	try {
		return await req.json();
	} catch (any) {
		return {};
	}
}
