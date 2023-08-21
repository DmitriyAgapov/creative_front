import { sortMenu } from "@/utils/utils";
import { MenuItem } from "@/Components/Header";
import React from "react";

function Footer({menus, config}:{menus:any[], config: {
		Address: string;
		email: string;
		PhoneNumber: string

	}}) {
	const sortedMenu = sortMenu(menus);
	return <footer className="footer__area-2 pt-130">
		<div className="container">


			<div className="footer__middle-2">
				<div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">

							<ul className="footer__nav footer-menu menu-anim">
								{sortedMenu.map((item:any) => <MenuItem className={'footer__menu-item'} key={item.id} item={item.attributes} />)}

							</ul>


						{/*<div className="footer__location-2">*/}
						{/*	<div className="location">*/}
						{/*		<h3>London</h3>*/}
						{/*		<p>Baltia Squar, Mark Street, <br/>*/}
						{/*			London</p>*/}
						{/*	</div>*/}
						{/*	<div className="location">*/}
						{/*		<h3>New York</h3>*/}
						{/*		<p>Nenuya Centre, Elia Street <br/>*/}
						{/*			New York, USA</p>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</div>

				</div>
			</div>

			<div className="footer__btm-2">
				<div className="row">
					<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
						<div className="footer__copyright-2">
							<p>© 2022 - 2025
							</p>
						</div>
					</div>

							<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">

								<div className="footer__location-2">
									<div className="location">
										<h5  className={'mb-2'}>Address</h5>
										<p>{config.Address}</p>
									</div>
									<div className="location">
										<h5  className={'mb-2'}>Email</h5>
										<p><a href={`mailto:${config.email}`}>{config.email}</a></p>

									</div>	<div className="location">

										<h5 className={'mb-2'}>Phone</h5>
										<p><a href={`tel:${config.PhoneNumber}`}>{config.PhoneNumber}</a></p>
									</div>
								</div>
							</div>




				</div>
			</div>
		</div>

	</footer>;
}
export default Footer
