import Link from "next/link"

const Header = () => {
    return(
        <header className="fixed w-full h-20 flex items-center justify-between px-">
            <nav>
                <Link href="/">Logo</Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Public</Link></li>
                    <li><Link href="/orders">orders</Link></li>
                    <li><button>Sair</button></li>
                </ul>
            </nav>
        </header>
    )
}

export  { Header }