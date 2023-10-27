const nodemailer =require("nodemailer");

export async function GET(request: Request) {
	// @ts-ignore

	const searchParams = request.nextUrl.searchParams
	const phoneData = searchParams.get('phone')
	const nameData = searchParams.get('firstName')
	const emailData = searchParams.get('email')
	const msgData = searchParams.get('message')
	// console.log({
	// 	body: {
	// 		firstName: nameData,
	// 		lastName: nameData,
	// 		phone: phoneData,
	// 		email: emailData,
	// 		message: `<div><p>name: ${nameData}</p><p>phone: ${phoneData}</p><p>email: ${emailData}</p></div>`
	// 	}
	// })
	await Send({
		body: {
			firstName: nameData,
			phone: phoneData,
			email: emailData,
			message: `<div><p>name: ${nameData}</p><p>phone: ${phoneData}</p><p>email: ${emailData}</p><p>Сообщение: ${msgData}</p></div>`
		}
	})
	// query is "hello" for /api/search?query=hello

}
//
// @ts-ignore
async function Send(request)  {

	// @ts-ignore
	const { firstName, phone, email, message } = request.body;

	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.timeweb.ru",
		auth: {
			user: "info@creative-solution.space",
			pass: "lvh520szw5",
		},
		secure: true,
	});

	 await new Promise((resolve, reject) => {
		// @ts-ignore
		transporter.verify(function (error, success) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log("Server is ready to take our messages");
				resolve(success);
			}
		});
	});

	const mailData = {
		from: {
			name: "Katrin Agapova",
			address: "info@creative-solution.space",
		},
		replyTo: "info@creative-solution.space",
		to: "info@creative-solution.space",
		subject: `form message`,
		text: JSON.stringify(firstName, phone, email),
		html: `${message}`,
	};

	await new Promise((resolve, reject) => {
// @ts-ignore
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});

	return new Response( 'Hello from Next.js!',{
		status: 200 ,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		},
	})
}
