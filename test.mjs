const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
	for (let i = 0; i < 5; i++) {
		delay(500).then(() => {
			console.log("finsihed")
		});
		console.log("hello");
	}
}

main();