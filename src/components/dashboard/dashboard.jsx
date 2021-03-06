import React from 'react'

function Dashboard(props) {
    return (
        <nav class="navbar navbar-vertical navbar-expand-xl navbar-light">
            <div class="d-flex align-items-center">
                <div class="toggle-icon-wrapper">
                    <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-toggle="tooltip" data-placement="left" title="" data-original-title="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
                </div><a class="navbar-brand" href="../index.html">
                    <div class="d-flex align-items-center py-3"><img class="mr-2" src="../assets/img/illustrations/falcon.png" alt="" width="40" /><span class="text-sans-serif">falcon</span></div>
                </a>
            </div>
            <div class="collapse navbar-collapse navbar-glass perfect-scrollbar scrollbar" id="navbarVerticalCollapse">
                <ul class="navbar-nav flex-column">
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#home" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="home">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-chart-pie fa-w-17" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" data-fa-i2svg=""><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg> <span class="fas fa-chart-pie"></span></span><span class="nav-link-text">Home</span></div>
                    </a>
                        <ul class="nav collapse" id="home" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../index.html">Dashboard</a></li>
                            <li class="nav-item"><a class="nav-link" href="../home/dashboard-alt.html">Dashboard alt</a></li>
                            <li class="nav-item"><a class="nav-link" href="../home/feed.html">Feed</a></li>
                            <li class="nav-item"><a class="nav-link" href="../home/landing.html">Landing</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#pages" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pages">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-copy fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg> <span class="fas fa-copy"></span></span><span class="nav-link-text">Pages</span></div>
                    </a>
                        <ul class="nav collapse" id="pages" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../pages/activity.html">Activity</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/associations.html">Associations</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/billing.html">Billing</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/customer-details.html">Customer details</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/event-detail.html">Event detail</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/event-create.html">Event create</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/events.html">Events</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/faq.html">Faq</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/invoice.html">Invoice</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/invite-people.html">Invite people</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/notifications.html">Notifications</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/people.html">People</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/pricing.html">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/pricing-alt.html">Pricing alt</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/profile.html">Profile</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/settings.html">Settings</a></li>
                            <li class="nav-item"><a class="nav-link" href="../pages/starter.html">Starter</a></li>
                            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#pages-errors" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pages-errors">Errors</a>
                                <ul class="nav collapse" id="pages-errors" data-parent="#pages">
                                    <li class="nav-item"><a class="nav-link" href="../pages/errors/404.html">404</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../pages/errors/500.html">500</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="../chat.html">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-comments fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg> <span class="fas fa-comments"></span></span><span class="nav-link-text"> Chat</span></div>
                    </a></li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#email" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="email">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-envelope-open fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path></svg> <span class="fas fa-envelope-open"></span></span><span class="nav-link-text">Email</span><span class="badge badge-pill ml-2 badge-soft-success"></span></div>
                    </a>
                        <ul class="nav collapse" id="email" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../email/inbox.html">Inbox</a></li>
                            <li class="nav-item"><a class="nav-link" href="../email/email-detail.html">Email detail</a></li>
                            <li class="nav-item"><a class="nav-link" href="../email/compose.html">Compose</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#authentication" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-unlock-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="unlock-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"></path></svg> <span class="fas fa-unlock-alt"></span></span><span class="nav-link-text">Authentication</span></div>
                    </a>
                        <ul class="nav collapse" id="authentication" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#authentication-basic" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication-basic">Basic</a>
                                <ul class="nav collapse" id="authentication-basic" data-parent="#authentication">
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/login.html">Login</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/logout.html">Logout</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/register.html">Register</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/forgot-password.html">Forgot password</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/reset-password.html">Reset password</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/confirm-mail.html">Confirm mail</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/basic/lock-screen.html">Lock screen</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#authentication-card" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication-card">Card</a>
                                <ul class="nav collapse" id="authentication-card" data-parent="#authentication">
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/login.html">Login</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/logout.html">Logout</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/register.html">Register</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/forgot-password.html">Forgot password</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/reset-password.html">Reset password</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/confirm-mail.html">Confirm mail</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/card/lock-screen.html">Lock screen</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#authentication-split" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="authentication-split">Split</a>
                                <ul class="nav collapse" id="authentication-split" data-parent="#authentication">
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/login.html">Login</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/logout.html">Logout</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/register.html">Register</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/forgot-password.html">Forgot password</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/reset-password.html">Reset password</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/confirm-mail.html">Confirm mail</a></li>
                                    <li class="nav-item"><a class="nav-link" href="../authentication/split/lock-screen.html">Lock screen</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="../authentication/wizard.html">Wizard</a></li>
                            <li class="nav-item"><a class="nav-link" href="#!" data-toggle="modal" data-target="#authentication-modal">In Modal</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#e-commerce" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="e-commerce">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-cart-plus fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg> <span class="fas fa-cart-plus"></span></span><span class="nav-link-text">E commerce</span></div>
                    </a>
                        <ul class="nav collapse" id="e-commerce" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/product-list.html">Product list</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/product-grid.html">Product grid</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/product-details.html">Product details</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/orders.html">Orders</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/order-details.html">Order details</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/customers.html">Customers</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/shopping-cart.html">Shopping cart</a></li>
                            <li class="nav-item"><a class="nav-link" href="../e-commerce/checkout.html">Checkout</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="px-3 px-xl-0 navbar-vertical-divider">
                    <hr class="border-300 my-2" />
                </div>
                <ul class="navbar-nav flex-column">
                    <li class="nav-item"><a class="nav-link" href="../widgets.html">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-poll fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"></path></svg> <span class="fas fa-poll"></span></span><span class="nav-link-text"> Widgets</span><span class="badge badge-pill ml-2 badge-soft-success">New</span></div>
                    </a></li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#components" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="components">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-puzzle-piece fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="puzzle-piece" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"></path></svg> <span class="fas fa-puzzle-piece"></span></span><span class="nav-link-text">Components</span></div>
                    </a>
                        <ul class="nav collapse" id="components" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../components/accordion.html">Accordion</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/alerts.html">Alerts</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/avatar.html">Avatar</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/background.html">Background</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/badges.html">Badges</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/breadcrumb.html">Breadcrumb</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/bulk-select.html">Bulk select</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/buttons.html">Buttons</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/cards.html">Cards</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/carousel.html">Carousel</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/collapse.html">Collapse</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/countup.html">Countup</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/dropdowns.html">Dropdowns</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/fancyscroll.html">Fancyscroll</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/fancytab.html">Fancytab</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/forms.html">Forms</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/hoverbox.html">Hoverbox</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/list-group.html">List group</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/modals.html">Modals</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/media-object.html">Media object</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/navs.html">Navs</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/navbar.html">Navbar</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/navbar-top.html">
                                <div class="d-flex align-items-center"><span>Navbar top</span><span class="badge badge-pill ml-2 badge-soft-success">New</span></div>
                            </a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/navbar-vertical.html">Navbar vertical</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/page-headers.html">Page headers</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/pagination.html">Pagination</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/popovers.html">Popovers</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/progress.html">Progress</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/scrollspy.html">Scrollspy</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/sidepanel.html">
                                <div class="d-flex align-items-center"><span>Sidepanel</span><span class="badge badge-pill ml-2 badge-soft-success">New</span></div>
                            </a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/spinners.html">Spinners</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/tables.html">Tables</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/tabs.html">Tabs</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/toasts.html">Toasts</a></li>
                            <li class="nav-item"><a class="nav-link" href="../components/tooltips.html">Tooltips</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#utilities" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="utilities">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-fire fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path></svg> <span class="fas fa-fire"></span></span><span class="nav-link-text">Utilities</span></div>
                    </a>
                        <ul class="nav collapse" id="utilities" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../utilities/borders.html">Borders</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/clearfix.html">Clearfix</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/close-icon.html">Close icon</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/colors.html">Colors</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/display.html">Display</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/embed.html">Embed</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/figures.html">Figures</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/flex.html">Flex</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/grid.html">Grid</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/sizing.html">Sizing</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/spacing.html">Spacing</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/stretched-link.html">Stretched link</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/typography.html">Typography</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/vertical-align.html">Vertical align</a></li>
                            <li class="nav-item"><a class="nav-link" href="../utilities/visibility.html">Visibility</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#plugins" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="plugins">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-plug fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z"></path></svg> <span class="fas fa-plug"></span></span><span class="nav-link-text">Plugins</span></div>
                    </a>
                        <ul class="nav collapse" id="plugins" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../plugins/bootstrap-wizard.html">Bootstrap wizard</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/charts.html">Charts</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/countdown.html">Countdown</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/data-table.html">Data table</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/date-picker.html">Date picker</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/dropzone.html">Dropzone</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/echarts.html">Echarts</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/emojionearea.html">Emojionearea</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/fancybox.html">Fancybox</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/fontawesome.html">Fontawesome</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/google-map.html">Google map</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/inline-player.html">Inline player</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/jquery-validation.html">Jquery validation</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/leaflet.html">Leaflet</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/lightbox.html">Lightbox</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/lottie.html">Lottie</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/toastr.html">Toastr</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/owl-carousel.html">Owl carousel</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/perfect-scrollbar.html">Perfect scrollbar</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/progressbar.html">Progressbar</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/raty.html">Raty</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/select2.html">Select2</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/tinymce.html">Tinymce</a></li>
                            <li class="nav-item"><a class="nav-link" href="../plugins/typed-text.html">Typed text</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="px-3 px-xl-0 navbar-vertical-divider">
                    <hr class="border-300 my-2" />
                </div>
                <ul class="navbar-nav flex-column">
                    <li class="nav-item"><a class="nav-link dropdown-indicator" href="#documentation" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="documentation">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-book fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg> <span class="fas fa-book"></span></span><span class="nav-link-text">Documentation</span></div>
                    </a>
                        <ul class="nav collapse show" id="documentation" data-parent="#navbarVerticalCollapse">
                            <li class="nav-item"><a class="nav-link" href="../documentation/getting-started.html">Getting started</a></li>
                            <li class="nav-item active"><a class="nav-link" href="../documentation/file-structure.html">File structure</a></li>
                            <li class="nav-item"><a class="nav-link" href="../documentation/customization.html">Customization</a></li>
                            <li class="nav-item"><a class="nav-link" href="../documentation/dark-mode.html">Dark mode</a></li>
                            <li class="nav-item"><a class="nav-link" href="../documentation/fluid-layout.html">Fluid layout</a></li>
                            <li class="nav-item"><a class="nav-link" href="../documentation/gulp.html">Gulp</a></li>
                            <li class="nav-item"><a class="nav-link" href="../documentation/RTL.html">RTL</a></li>
                            <li class="nav-item"><a class="nav-link" href="../documentation/plugins.html">Plugins</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="../changelog.html">
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><svg class="svg-inline--fa fa-code-branch fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path></svg> <span class="fas fa-code-branch"></span></span><span class="nav-link-text"> Changelog</span><span class="badge badge-pill ml-2 badge-soft-primary">v2.4.1</span></div>
                    </a></li>
                </ul>
                <div class="settings px-3 px-xl-0">
                    <div class="navbar-vertical-divider">
                        <hr class="border-300 my-3" />
                    </div><a class="btn btn-primary btn-sm btn-block my-3 btn-purchase" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/"> Purchase</a>
                </div>
            </div>
        </nav>)
}

export default Dashboard
