import React, {useState, Fragment} from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NavBarSigned = ({userLogged, setUserLogged}) => {

    const [nav, setNav] = useState(false);
    const [openLogin, setLogIn] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleLogIn = () => {
        setLogIn(true);
    }

    return(
        <Fragment>
            
        </Fragment>
    );
}

export default NavBarSigned;
