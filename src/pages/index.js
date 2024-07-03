import { lazy } from "react";


const Blogs = lazy(()=> import("./blogs/blogs"))
const CarsAbout = lazy(()=> import("./carsAbout/carsAbout"))
const CarsPage = lazy(()=> import("./carsPage/carsPage"))
const Contacts = lazy(()=> import("./contacts/contacts"))
const Faq = lazy(()=> import("./faq/faq"))
const Home = lazy(()=> import("./home/home"))
const Terms = lazy(()=> import("./terms/terms"))
const Uslugi = lazy(()=> import("./uslugi/uslugi"))
const UslugiFirst = lazy(()=> import("./uslugi/UslugiFirst"))
const UslugiSecond = lazy(()=> import("./uslugi/UslugiSecond"))
const AboutUs = lazy(()=> import("./aboutUs/aboutUs"))

export {
    Blogs,
    CarsAbout,
    CarsPage,
    Contacts,
    Faq,
    Home,
    Terms,
    Uslugi,
    UslugiFirst,
    UslugiSecond,
    AboutUs
};