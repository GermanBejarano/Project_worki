// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Profile2 from "views/Pages/Profile.js";
import Login from "views/Pages/Login";
import Post from "views/Pages/Post";
import Events from "views/Pages/Events";
import Feed from "views/Pages/Feed";
import UpdateProfile from "views/Pages/UpdateProfile";
import AddPost from "views/Pages/AddPost";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/profile2",
    name: "Perfil",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile2,
    layout: "/admin",
    see: true,
  },
  {
    path: "/update_profile",
    name: "UpdateProfile",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: UpdateProfile,
    layout: "/admin",
    see: false,
  },
  {
    path: "/post",
    name: "Post",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    secondaryNavbar: true,
    component: Post,
    layout: "/admin",
    see: true,
  },
  {
    path: "/addpost",
    name: "AddPost",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    secondaryNavbar: true,
    component: AddPost,
    layout: "/admin",
    see: false,
  },
  {
    path: "/feed",
    name: "Feed",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    secondaryNavbar: true,
    component: Feed,
    layout: "/admin",
    see: true,
  },
  {
    path: "/event",
    name: "Eventos",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Events,
    layout: "/admin",
    see: true,
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Login,
    layout: "/auth",
    see: true,
  },

  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   rtlName: "لوحة القيادة",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   rtlName: "لوحة القيادة",
  //   icon: <PersonIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },

  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   rtlName: "صفحات",
  //   state: "pageCollapse",
  //   views: [

  // {
  //   path: "/signin",
  //   name: "Sign In",
  //   rtlName: "لوحة القيادة",
  //   icon: <DocumentIcon color="inherit" />,
  //   component: SignIn,
  //   layout: "/auth",
  // },
  // {
  //   path: "/signup",
  //   name: "Sign Up",
  //   rtlName: "لوحة القيادة",
  //   icon: <RocketIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: SignUp,
  //   layout: "/auth",
  // },
  // ],
  // },
];
export default dashRoutes;
