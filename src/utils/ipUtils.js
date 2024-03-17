import os from "os";

export function getDeviceIp() {
	const networkInterfaces = os.networkInterfaces();

	for (const adapter in networkInterfaces) {
		for (let i = 0; i < networkInterfaces[adapter].length; i++) {
			const address = networkInterfaces[adapter][i].address
				.toString()
				.split(".");

			if (
				address[0] === "192" &&
				address[1] === "168"
				//&& address[2] === "1"
			) {
				return address.join(".").toString();
			}
		}
	}
}
