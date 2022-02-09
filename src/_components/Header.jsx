import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"

function Header() {
    return (
        <div class="transparent header-container">
            <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="de-flex sm-pt10">
                        <div class="de-flex-col">
                            <div class="de-flex-col">
                                {/* <!-- logo begin --> */}
                                <div id="logo">
                                    <a href="03_grey-index.html">
                                        <img alt="" src="images/logo-3.png" />
                                    </a>
                                </div>
                                {/* <!-- logo close --> */}
                            </div>
                            <div class="de-flex-col">
                                <input id="quick_search" class="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                            </div>
                        </div>
                        <div class="de-flex-col header-col-mid">
                            {/* <!-- mainmenu begin --> */}
                            <ul id="mainmenu">
                                <li>
                                    <a href="03_grey-index.html">Home<span></span></a>
                                    <ul>
                                        <li><a href="03_grey-index.html">Homepage 1</a></li>
                                        <li><a href="03_grey-index-2.html">Homepage 2</a></li>
                                        <li><a href="03_grey-index-3.html">Homepage 3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="03_grey-explore.html">Explore<span></span></a>
                                    <ul>
                                        <li><a href="03_grey-explore.html">Explore</a></li>
                                        <li><a href="03_grey-explore-2.html">Explore 2</a></li>
                                        <li><a href="03_grey-collection.html">Collections</a></li>
                                        <li><a href="03_grey-item-details.html">Item Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="03_grey-author.html">Author<span></span></a>
                                    <ul>
                                        <li><a href="03_grey-author.html">Author</a></li>
                                        <li><a href="03_grey-wallet.html">Wallet</a></li>
                                        <li><a href="03_grey-create.html">Create</a></li>
                                        <li><a href="03_grey-login.html">Login</a></li>
                                    </ul>
                                </li>                                    
                                <li>
                                    <a href="03_grey-activity.html">Activity<span></span></a>
                                </li>
                            </ul>
                            {/* <!-- mainmenu close --> */}
                            <div class="menu_side_area">
                                <a href="03_grey-wallet.html" class="btn-main"><i class="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
  export default Header;