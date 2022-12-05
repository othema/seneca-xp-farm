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
    body: JSON.stringify({
      platform: "seneca-web",
      clientVersion: "2.8.146",
      session: {
        sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
        sessionType: "adaptive",
        courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
        sectionIds: ["93bc5e30-4c35-4e69-a59a-a63dd650d506"],
        contentIds: [],
        modulesStudied: 8,
        modulesTested: 6,
        modulesCorrect: 6,
        modulesIncorrect: 0,
        modulesGaveUp: 0,
        averageScore: 1,
        sessionScore: 1,
        timeStarted: "2022-12-05T16:56:16+00:00",
        timeFinished: "2022-12-05T16:59:21+00:00",
        startingProficiency: 0,
        endingProficiency: 1,
        startingCourseProficiency: 0.02014187805657508,
        endingCourseProficiency: 0.0571551724137931,
        endingCourseScore: 0.0523313492063492,
        completed: true,
        smartLearningActive: false,
        signedOut: false,
        wrongModuleIds: [],
        totalModulesStudyTime: 0,
      },
      modules: [
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 0,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "73f3ffe1-8ec5-430f-97fe-0a2e0b507143",
          moduleId: "b492a0b2-f9ae-449c-a083-ce3fe6735d81",
          moduleType: "concept",
          testingActive: false,
          content: {
            randomExampleOrder: true,
            title: "Benefits of Networks",
            explanation:
              "A network is a collection of connected computers. These computers can communicate by sending data between themselves. There are many reasons that we might choose to set up a network:",
            examples: [
              {
                title: "Resource sharing",
                example:
                  "- Resources can be shared:\n - E.g. Printers.\n - E.g. Scanners.\n - E.g. Internet connections.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/courseImages/physics/Edexcel/7 electricity/photocopying,f_cover,h_400,w_600.jpg",
                  fallbackUrl: null,
                },
              },
              {
                title: "Managing computers",
                example:
                  "- A network manager can manage other computers over a network by:\n - Updating software.\n - Fixing problems.\n - Help users e.g. resetting passwords.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/courseImages/physics/AQA New Modules/7.4.1/magnifying glass,f_cover,h_400,w_600.jpg",
                  fallbackUrl: null,
                },
              },
              {
                title: "Data exchange",
                example:
                  "- Data can be sent between computers without the need for external storage.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/2018-06/f43e53b5-3a4b-4683-894b-da5e6ac1cc89/board-electronics-computer-data-processing-50711,f_cover,h_400,w_600.jpeg",
                  fallbackUrl: null,
                },
              },
            ],
          },
          userAnswer: {},
          score: null,
          moduleScore: {},
          timeStarted: "2022-12-05T16:57:30+00:00",
          timeFinished: "2022-12-05T16:57:48+00:00",
          gaveUp: false,
          submitted: false,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 1,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "73f3ffe1-8ec5-430f-97fe-0a2e0b507143",
          moduleId: "535cf590-d06a-4648-96fc-45142bb84b25",
          moduleType: "list",
          testingActive: true,
          content: {
            pretest: "NEVER",
            list: {
              statement: "Resources commonly shared within a network include:",
              values: [
                {
                  value: [
                    {
                      otherPermittedWords: ["printer"],
                      word: "printers",
                      caps: "Printers",
                    },
                  ],
                  testing: false,
                },
                {
                  value: [
                    {
                      otherPermittedWords: ["scanner"],
                      word: "scanners",
                      caps: "Scanners",
                    },
                  ],
                  testing: false,
                },
                {
                  value: [
                    {
                      otherPermittedWords: [],
                      word: "internet",
                      caps: "Internet",
                    },
                    " connections",
                  ],
                  testing: true,
                },
              ],
            },
          },
          userAnswer: { multipleChoice: { index: null }, list: ["internet"] },
          score: 1,
          moduleScore: {
            score: 1,
            multipleChoice: { score: 0 },
            list: { score: 1, hits: [false, false, true] },
          },
          timeStarted: "2022-12-05T16:57:48+00:00",
          timeFinished: "2022-12-05T16:58:02+00:00",
          gaveUp: false,
          submitted: true,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 2,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "73f3ffe1-8ec5-430f-97fe-0a2e0b507143",
          moduleId: "80f71ea0-f0f6-4dd2-b53d-6140f91139e1",
          moduleType: "wordfill",
          testingActive: true,
          content: {
            words: [
              "A network is a collection of ",
              {
                otherPermittedWords: ["linked", "joined", "combined"],
                word: "connected",
                testing: true,
              },
              " computers.",
            ],
            renderImage: false,
          },
          userAnswer: { words: { connected: "connected" } },
          score: 1,
          moduleScore: { words: { connected: true }, score: 1 },
          timeStarted: "2022-12-05T16:58:02+00:00",
          timeFinished: "2022-12-05T16:58:07+00:00",
          gaveUp: false,
          submitted: true,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 3,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "fe30db68-f7cf-45e6-aa7d-bb325bc84833",
          moduleId: "4f1233b3-bba4-4156-a9a7-df43476cf2fb",
          moduleType: "concept",
          testingActive: false,
          content: {
            randomExampleOrder: true,
            title: "Network Performance",
            explanation:
              "There are many factors which affect the overall performance on a network:",
            examples: [
              {
                title: "Choice of hardware",
                example:
                  "- The choice of cabling and other networking hardware can have a big impact on the speed of a network.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/courseImages/biology/1.1.2 - Cell specialisation/cables-1080555_640-min,f_cover,h_400,w_600.jpg",
                  fallbackUrl: null,
                },
              },
              {
                title: "Bandwidth",
                example:
                  "- Bandwidth is defined as the quantity of data that is able to be transferred in a set amount of time.\n- Higher bandwidths mean that the performance potential of the network is higher.\n- Bandwidth is shared between all active users, so performance can decrease if there are too many users.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/2018-07/0a18813c-bd29-4490-a4cf-2818a9d61ce0/Broadband-Bandwidth-Fibre-Optic-Cables-Computer-,f_cover,h_400,w_600.jpg",
                  fallbackUrl: null,
                },
              },
              {
                title: "Wired vs wireless",
                example:
                  "- Wired networks are usually much faster and more reliable.\n- Wireless performance depends on how well a computer can pick up the signal but is rarely better than a wired connection would be.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/courseImages/physics/1.5.1 Energy Changes/wires - Edited-min,f_cover,h_400,w_600.jpg",
                  fallbackUrl: null,
                },
              },
              {
                title: "Topology",
                example:
                  "- The topology of the network (how the computers are laid out and connected together) can have a large impact on the network performance.",
                image: {
                  url: "https://image-v2.cdn.app.senecalearning.com/courseImages/chemistry/2.3.3 - Carbon structures/board-730797_640-min,f_cover,h_400,w_600.jpg",
                  fallbackUrl: null,
                },
              },
            ],
          },
          userAnswer: {},
          score: null,
          moduleScore: {},
          timeStarted: "2022-12-05T16:58:11+00:00",
          timeFinished: "2022-12-05T16:58:21+00:00",
          gaveUp: false,
          submitted: false,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 4,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "fe30db68-f7cf-45e6-aa7d-bb325bc84833",
          moduleId: "c8bf84cc-9c3c-48c1-981e-da4df32acafe",
          moduleType: "grid",
          testingActive: true,
          content: {
            title: "Terms relating to network performance:",
            definitions: [
              {
                word: "Bandwidth",
                text: "The amount of data that can be transferred in a given time.",
                testing: true,
              },
              {
                word: "Topology",
                text: "How the computers are laid out and connected together.",
                testing: false,
              },
            ],
          },
          userAnswer: { definitions: { Bandwidth: "bandwith" } },
          score: 1,
          moduleScore: { definitions: { Bandwidth: true }, score: 1 },
          timeStarted: "2022-12-05T16:58:21+00:00",
          timeFinished: "2022-12-05T16:58:31+00:00",
          gaveUp: false,
          submitted: true,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 5,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "fe30db68-f7cf-45e6-aa7d-bb325bc84833",
          moduleId: "8fc2ea2c-4fa3-4d3f-91dd-517fd93700d7",
          moduleType: "exact-list",
          testingActive: true,
          content: {
            statement:
              "What is the name used to describe how the computers are laid out and connected together?",
            values: [
              {
                value: [
                  {
                    otherPermittedWords: [
                      "the topology",
                      "a topology",
                      "network",
                      "a network",
                      "the network",
                    ],
                    word: "topology",
                    caps: "Topology",
                  },
                ],
              },
            ],
            numRequiredAnswers: 1,
          },
          userAnswer: ["topology"],
          score: 1,
          moduleScore: {
            score: 1,
            hits: [true],
            correctOrderedValues: [
              {
                value: [
                  {
                    otherPermittedWords: [
                      "the topology",
                      "a topology",
                      "network",
                      "a network",
                      "the network",
                    ],
                    word: "topology",
                    caps: "Topology",
                  },
                ],
              },
            ],
            incorrectValues: [],
          },
          timeStarted: "2022-12-05T16:58:31+00:00",
          timeFinished: "2022-12-05T16:58:41+00:00",
          gaveUp: false,
          submitted: true,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 6,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "73f3ffe1-8ec5-430f-97fe-0a2e0b507143",
          moduleId: "3a91db75-a0c9-49d3-b1bf-6557d2c2f6ec",
          moduleType: "list",
          testingActive: true,
          content: {
            pretest: "NEVER",
            list: {
              statement: "Network administrators can:",
              values: [
                {
                  value: [
                    "Update ",
                    {
                      otherPermittedWords: ["programs", "applications"],
                      word: "software",
                    },
                  ],
                  testing: false,
                },
                {
                  value: [
                    {
                      otherPermittedWords: ["correct", "solve"],
                      word: "fix",
                      caps: "Fix",
                    },
                    " problems",
                  ],
                  testing: true,
                },
                {
                  value: [
                    {
                      otherPermittedWords: ["support"],
                      word: "help",
                      caps: "Help",
                    },
                    " users",
                  ],
                  testing: true,
                },
              ],
            },
          },
          userAnswer: {
            multipleChoice: { index: null },
            list: ["fix", "help"],
          },
          score: 1,
          moduleScore: {
            score: 1,
            multipleChoice: { score: 0 },
            list: { score: 1, hits: [false, true, true] },
          },
          timeStarted: "2022-12-05T16:58:41+00:00",
          timeFinished: "2022-12-05T16:59:03+00:00",
          gaveUp: false,
          submitted: true,
          completed: true,
        },
        {
          sessionId: "b5f47715-8536-4a2f-ba32-df374e294ea0",
          moduleOrder: 7,
          courseId: "a1ce4570-6e27-11e8-af4b-35cf52f905c2",
          sectionId: "93bc5e30-4c35-4e69-a59a-a63dd650d506",
          contentId: "fe30db68-f7cf-45e6-aa7d-bb325bc84833",
          moduleId: "7e5c2f15-37bc-40bd-8959-d36094b64fc7",
          moduleType: "wordfill",
          testingActive: true,
          content: {
            words: [
              "Bandwidth is shared between all ",
              {
                otherPermittedWords: ["current", "online", "connected"],
                word: "active",
                testing: true,
              },
              " users, so ",
              {
                otherPermittedWords: ["speed"],
                word: "performance",
                testing: true,
              },
              " can decrease if there are too many users.",
            ],
            imageURL:
              "https://image-v2.cdn.app.senecalearning.com/2018-07/0a18813c-bd29-4490-a4cf-2818a9d61ce0/Broadband-Bandwidth-Fibre-Optic-Cables-Computer-,f_cover,h_250,w_1024.jpg",
            renderImage: true,
          },
          userAnswer: {
            words: { active: "active", performance: "performance" },
          },
          score: 1,
          moduleScore: {
            words: { active: true, performance: true },
            score: 1,
          },
          timeStarted: "2022-12-05T16:59:03+00:00",
          timeFinished: "2022-12-05T16:59:04+00:00",
          gaveUp: false,
          submitted: true,
          completed: true,
        },
      ],
    }),
	});
	
	try {
		return await req.json();
	} catch (any) {
		return {};
	}
}
