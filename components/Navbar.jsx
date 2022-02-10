import React from 'react';
import {BsSearch, BsMinecartLoaded} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
import Submenu from './submenu';

function Navbar() {
  return (
    <div className='navbar'>


        <div className="logo">
            <h3>salomon</h3>
        </div>


        <div className="navbar__menu">

            <ul className='navbar__menu--container'>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Men</p>


                    <div className="sub-menu mega-menu mega-menu-column-5">
                        <div className="list-item">

                            <h4 className="title">Shoes</h4>

                            <ul>
                                <li><a href="#"></a>Hiking</li>
                                <li><a href="#"></a>Trail Running</li>
                                <li><a href="#"></a>Road Running</li>
                                <li><a href="#"></a>Sportstyle</li>
                                <li><a href="#"></a>Sandals & Watershoes</li>
                                <li><a href="#"></a>Winter Shoes</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>Forces</li>
                            </ul>
                        </div>

                        <div className="list-item">

                            <h4 className="title">Tops</h4>

                            <ul>
                                <li><a href="#"></a>Jackets</li>
                                <li><a href="#"></a>Midlayers</li>
                                <li><a href="#"></a>Tops & Tees</li>
                                <li><a href="#"></a>Sports Bras</li>
                                <li><a href="#"></a>Dresses and Skirts</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Bottoms</h4>

                            <ul>
                                <li><a href="#"></a>Ski Pants</li>
                                <li><a href="#"></a>Pants</li>
                                <li><a href="#"></a>Tights</li>
                                <li><a href="#"></a>Shorts</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Bags & Packs</h4>

                            <ul>
                                <li><a href="#"></a>Running Pakcs and Belts</li>
                                <li><a href="#"></a>Backpacks</li>
                                <li><a href="#"></a>Flasks & Reservoirs</li>
                                <li><a href="#"></a>Travel & Sports Bags</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Accessories</h4>

                            <ul>
                                <li><a href="#"></a>Headwear</li>
                                <li><a href="#"></a>Gloves</li>
                                <li><a href="#"></a>Socks</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Helmets</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Poles</li>
                                <li><a href="#"></a>Goggles</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Snowboarding</h4>

                            <ul>
                                <li><a href="#"></a>Boards</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Helmets</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Goggles</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Cross Country Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Poles</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                            

                        </div>
                    </div>

                </li>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Women</p>

                    <div className="sub-menu mega-menu mega-menu-column-5">
                        <div className="list-item">

                            <h4 className="title">Shoes</h4>

                            <ul>
                                <li><a href="#"></a>Trail Running</li>
                                <li><a href="#"></a>Hiking</li>
                                <li><a href="#"></a>Sportstyle</li>
                                <li><a href="#"></a>Road Running</li>
                                <li><a href="#"></a>Winter Shoes</li>
                                <li><a href="#"></a>Sandals & Watershoes</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>Forces</li>
                            </ul>
                        </div>

                        <div className="list-item">

                            <h4 className="title">Tops</h4>

                            <ul>
                                <li><a href="#"></a>Jackets</li>
                                <li><a href="#"></a>Midlayers</li>
                                <li><a href="#"></a>Tops & Tees</li>
                                <li><a href="#"></a>Sports Bras</li>
                                <li><a href="#"></a>Dresses and Skirts</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Bottoms</h4>

                            <ul>
                                <li><a href="#"></a>Ski Pants</li>
                                <li><a href="#"></a>Pants</li>
                                <li><a href="#"></a>Tights</li>
                                <li><a href="#"></a>Shorts</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Bags & Packs</h4>

                            <ul>
                                <li><a href="#"></a>Running Pakcs and Belts</li>
                                <li><a href="#"></a>Backpacks</li>
                                <li><a href="#"></a>Flasks & Reservoirs</li>
                                <li><a href="#"></a>Travel & Sports Bags</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Accessories</h4>

                            <ul>
                                <li><a href="#"></a>Headwear</li>
                                <li><a href="#"></a>Gloves</li>
                                <li><a href="#"></a>Socks</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Poles</li>
                                <li><a href="#"></a>Helmets</li>
                                <li><a href="#"></a>Goggles</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Snowboarding</h4>

                            <ul>
                                <li><a href="#"></a>Boards</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Helmets</li>
                                <li><a href="#"></a>Goggles</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Cross Country Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Poles</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>Clothing</li>
                            </ul>
                            

                        </div>
                    </div>    
                </li>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Kids</p>

                    <div className="sub-menu mega-menu mega-menu-column-5">
                        <div className="list-item">

                            <h4 className="title">Shoes</h4>

                            <ul>
                                <li><a href="#"></a>Hiking</li>
                                <li><a href="#"></a>Trail Running</li>
                                <li><a href="#"></a>Road Running</li>
                            </ul>
                        </div>

                       

                        <div className="list-item">
                            <h4 className="title">Clothing</h4>

                            <ul>

                                <li><a href="#"></a>Socks</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Poles</li>
                                <li><a href="#"></a>Goggles & Protection</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Snowboarding</h4>

                            <ul>
                                <li><a href="#"></a>Boards</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Cross Country Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Boots</li>
                                <li><a href="#"></a>Bindings</li>
                                <li><a href="#"></a>Poles</li>
                            </ul>
                            

                        </div>
                    </div>
                </li>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Sports</p>

                    <div className="sub-menu mega-menu mega-menu-column-5">
                        <div className="list-item">

                            <h4 className="title">Trail running</h4>

                            <ul>
                                <li><a href="#"></a>Shoes</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Bags and Belts</li>
                                <li><a href="#"></a>Flasks & Reservoirs</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>S/lab premium range</li>
                            </ul>
                        </div>

                        <div className="list-item">

                            <h4 className="title">Road running</h4>

                            <ul>
                                <li><a href="#"></a>Shoes</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Bags and Belts</li>
                                <li><a href="#"></a>Flasks & Reservoirs</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>S/lab premium range</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Hiking</h4>

                            <ul>
                                <li><a href="#"></a>Shoes</li>
                                <li><a href="#"></a>Flasks & Reservoirs</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Bags and Packs</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Skis</li>
                                <li><a href="#"></a>Ski Boots</li>
                                <li><a href="#"></a>Ski Bindings</li>
                                <li><a href="#"></a>Ski Poles</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Protection</li>
                                <li><a href="#"></a>Bags and Packs</li>
                                <li><a href="#"></a>Sports & Equipment Bags</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Snowboarding</h4>

                            <ul>
                                <li><a href="#"></a>Snowboards</li>
                                <li><a href="#"></a>Snowboard Boots</li>
                                <li><a href="#"></a>Snowboard Bindings</li>
                                <li><a href="#"></a>Protection</li>
                                <li><a href="#"></a>Accessories</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Cross Country Skiing</h4>

                            <ul>
                                <li><a href="#"></a>Cross Country Skis</li>
                                <li><a href="#"></a>Cross Country Boots</li>
                                <li><a href="#"></a>Cross Country Bindings</li>
                                <li><a href="#"></a>Cross Country Poles</li>
                                <li><a href="#"></a>S/lab premium range</li>
                                <li><a href="#"></a>Clothing</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>Bags & Belts</li>
                            </ul>
                        </div>

                        
                    </div>
                </li>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Sportstyle</p>

                    <div className="sub-menu mega-menu mega-menu-column-1">
                        <div className="list-item">

                            <h4 className="title">Shoes</h4>

                            <ul>
                                <li><a href="#"></a>Sneakers</li>
                                <li><a href="#"></a>Advanced</li>
                                <li><a href="#"></a>Intersections</li>
                   
                            </ul>
                        </div>

                    </div>
                </li>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Promotions</p>
                    <div className="sub-menu mega-menu mega-menu-column-2">
                        <div className="list-item">

                            <h4 className="title">Outlet</h4>

                            <ul>
                                <li><a href="#"></a>Apparel and Gear</li>
                                <li><a href="#"></a>Shoes</li>
                                <li><a href="#"></a>Last Chance</li>
                            </ul>
                        </div>

                        <div className="list-item">

                            <h4 className="title">Sale</h4>

                        </div>

                    </div>
                </li>

                <li className='navbar__menu--item menu-item-has-children'>
                    <p>Explore</p>

                    <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">

                            <h4 className="title">Shoes</h4>

                            <ul>
                                <li><a href="#"></a>Hiking</li>
                                <li><a href="#"></a>Trail Running</li>
                                <li><a href="#"></a>Road Running</li>
                                <li><a href="#"></a>Sportstyle</li>
                                <li><a href="#"></a>Sandals & Watershoes</li>
                                <li><a href="#"></a>Winter Shoes</li>
                                <li><a href="#"></a>Accessories</li>
                                <li><a href="#"></a>Forces</li>
                            </ul>
                        </div>

                        <div className="list-item">

                            <h4 className="title">Tops</h4>

                            <ul>
                                <li><a href="#"></a>Jackets</li>
                                <li><a href="#"></a>Midlayers</li>
                                <li><a href="#"></a>Tops & Tees</li>
                                <li><a href="#"></a>Sports Bras</li>
                                <li><a href="#"></a>Dresses and Skirts</li>
                            </ul>
                        </div>

                        <div className="list-item">
                            <h4 className="title">Bottoms</h4>

                            <ul>
                                <li><a href="#"></a>Ski Pants</li>
                                <li><a href="#"></a>Pants</li>
                                <li><a href="#"></a>Tights</li>
                                <li><a href="#"></a>Shorts</li>
                            </ul>
                        </div>

                    </div>
                </li>

            </ul>

        </div>


        <div className="navbar__links">

            <div className="navbar__link search">
                <p><BsSearch/><span>Search</span></p>
            </div>

            <div className="navbar__link user">
                <HiOutlineUser size="3rem"/>
            </div>

            <div className="navbar__link cart">
                <BsMinecartLoaded size="3rem"/>
            </div>

        </div>


    </div>
  )
}

export default Navbar;
