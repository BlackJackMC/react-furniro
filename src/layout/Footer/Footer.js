import Link from "next/link";
import { Divider, Grid, FormControl, TextField, Container } from "@mui/material";
import SubmitButton from "./SubmitButton";

function FooterSection({ title, children }) {
	return (
		<section>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

function Newsletter() {
	return (
		<form action={{}}>
			<FormControl className="flex flex-row">
				<TextField type="email" id="emails-newsletter" label="Enter Your Email Address" variant="standard" />
				<SubmitButton className="border-0 border-b rounded-none border-b-black hover:border-0 hover:border-b-2 hover:bg-transparent" variant="outlined"	>
					Subscribe
				</SubmitButton>
			</FormControl>
		</form>
	);
}

export default function Footer({ nav }) {
	return (
		<footer className="mt-auto">
			<Divider />
			<Container maxWidth="false" className="my-0 mx-auto max-w-[95%]">
				<Grid className="mt-8" container>
					<Grid xs={4} container>
						<Grid xs={9}>
							<section>
								<h1 className="font-bold text-black text-2xl mb-12">Furniro.</h1>
								<p>
									400 University Drive Suite 200 Coral Gables, FL
									33134 USA
								</p>
							</section>
						</Grid>
					</Grid>
					<Grid xs={8} container>
						<Grid xs={3}>
							<FooterSection title="Link">
								<ul>
									{nav.map((e) => (
										<li key={e.id}>
											<Link href={e.url}>{e.name}</Link>
										</li>
									))}
								</ul>
							</FooterSection>
						</Grid>
						<Grid xs={3}>
							<FooterSection title="Help">
								<ul>
									<li>
										<Link href="">Payment Options</Link>
									</li>
									<li>
										<Link href="">Return</Link>
									</li>
									<li>
										<Link href="">Privacy Policies</Link>
									</li>
								</ul>
							</FooterSection>
						</Grid>
						<Grid xs={4}>
							<FooterSection title="Newsletter">
								<Newsletter />
							</FooterSection>
						</Grid>
					</Grid>
				</Grid>
				<Divider />
				<p className="my-8">2023 furniro. All rights reserved.</p>
			</Container>
		</footer>
	);
}
