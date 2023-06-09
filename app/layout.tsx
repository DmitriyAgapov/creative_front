import './globals.css'
import DefaultScripts from "@/Components/Scripts";
import Footer from "@/Components/Footer";
import Header, { Offcanvas, Preloader } from "@/Components/Header";
export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<head>
			<link rel="preconnect"
				href="https://fonts.googleapis.com"/>
			<link rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin={"anonymous"}/>
			<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
				rel="stylesheet"/>
		</head>
		<body>
		<Preloader />
		<Header />
		<Offcanvas/>
		<div className="has-smooth"
			id="has_smooth"></div>

		<div id="smooth-wrapper">
			<div id="smooth-content">
				<main> {children}</main>
				<Footer/>
			</div>
		</div>
		<button id="scroll_top"
			className="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>


		<DefaultScripts/>
		</body>
		</html>
	)
}
