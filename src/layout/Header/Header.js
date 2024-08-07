import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import { PersonOutlined, ShoppingCartOutlined, Search, FavoriteBorderOutlined } from '@mui/icons-material';

import MainNav from "./MainNav";

export default function Header({ nav }) {
	return (
		<header className="mx-8 py-5 flex justify-between items-center">
			<Button disableFocusRipple disableTouchRipple disableElevation className="hover:bg-transparent" href="/" size="large" variant="text" startIcon={<Image alt="Shop logo" src="/images/Furniro.svg" width={50} height={32}/>}>
				<span className="align-bottom text-3xl leading-none font-bold text-black">Furniro</span>
			</Button>
			<MainNav nav={nav}/>
			<nav>
				<ul className="flex">
					<li><IconButton className="mr-8"><PersonOutlined color=""/></IconButton></li>
					<li><IconButton className="mr-8"><Search color=""/></IconButton></li>
					<li><IconButton className="mr-8"><FavoriteBorderOutlined color=""/></IconButton></li>
					<li><IconButton className="mr-8"><ShoppingCartOutlined color=""/></IconButton></li>
				</ul>
			</nav>
		</header>
  	);
}
