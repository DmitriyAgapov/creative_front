import Link from 'next/link'

export default function NotFound() {
	return (
		<section className="service__hero-2 section_screen">
			<div className="container">
				<div className="row">
					<div className="col-xxl-12">

			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<p>
				Back to <Link href="/"> main page</Link>
			</p>
					</div>
					</div>
			</div></section>
	)
}
