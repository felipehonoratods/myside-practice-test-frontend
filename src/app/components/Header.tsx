import Image from "next/image"

export const Header = () => {
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-white border-b py-2 shadow-dark-mild lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <span className="ms-2 text-xl">
                    <Image src={'https://myside.com.br/public-web/assets/logos/myside-logo.svg'} alt="MySide" width={200} height={200} />
                </span>
            </div>
        </nav>
    )
}