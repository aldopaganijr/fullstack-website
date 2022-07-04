import Link from "next/link";
import {FiShoppingBag} from 'react-icons/fi'
import { NavStyles, NavItems } from "../styles/NavStyles";

export default function Nav () {
    return(
        <NavStyles>
        <Link href={'/'}>Alla prima</Link>
        <NavItems>
            <div>
                <FiShoppingBag />
                <h3>Cart</h3>
            </div>
        </NavItems>
        </NavStyles>
    );
}

