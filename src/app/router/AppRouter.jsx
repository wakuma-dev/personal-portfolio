import React, {Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../components/layout/navbar/MainLayout";
import Loader from "../../components/common/Loader";
const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const About = lazy(()=> import('../../pages/About/About.jsx'));
const Service = lazy(()=> import('../../pages/Service/Service.jsx'));
const Contact = lazy(()=> import('../../pages/Contact/Contact.jsx'));
export default function AppRouter(){
   return (
     <Suspense fallback={<Loader />}>
       <Routes>
         <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/service" element={<Service />} />
           <Route path="/contact" element={<Contact />} />
         </Route>
       </Routes>
     </Suspense>
   );
}