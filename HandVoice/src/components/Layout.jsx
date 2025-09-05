import { Outlet } from "react-router";
import { Headers } from "./Headers.jsx"
import { Rodape } from "./Rodape.jsx"

export function Layout() {
    return (
        <>
            <Headers/>
            <Outlet/>
            <Rodape/>
        </>
    )
}