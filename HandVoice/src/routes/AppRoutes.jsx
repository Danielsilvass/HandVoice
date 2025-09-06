import {Routes, Route} from "react-router"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home.jsx"
import { Content } from "../pages/Content.jsx"
import { Alphabet } from "../pages/Alphabet.jsx"
import { Contact } from "../pages/Contact.jsx"
import { Reference } from "../pages/Reference.jsx"
import { Ecommerce } from "../pages/Ecommerce.jsx"

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/Content" element={<Content />}></Route>
          <Route path="/Alphabet" element={<Alphabet />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/reference" element={<Reference />}></Route>
          <Route path="/Ecommerce" element={<Ecommerce />}></Route>
        </Route>
      </Routes>
  )
}