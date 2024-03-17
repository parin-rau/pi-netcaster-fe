export const getArgv = (key, options = { toString: false }) => {
	const args = [];
	process.argv.forEach((val) => {
		args.push(val);
	});

	const parseVal = (key) => {
		const targetArg = args.find(
			(a) => a.split("=")[0].split("--")[1] === key
		);
		const value = targetArg.split("=")[1];
		return options.toString === true ? value.toString() : JSON.parse(value);
	};

	const value = parseVal(key);
	return value;
};
