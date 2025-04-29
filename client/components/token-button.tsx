import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
export function TokenButton() {
    return (
        <div className="hidden md:block fixed right-12 bottom-12 z-40">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="/wallet">
                        <Button
                            className="relative cursor-pointer flex items-center justify-center bg-zinc-900 h-14 w-14 md:h-16 md:w-16 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-800"
                        >
                            <Image src="/images/flaunch.webp" alt="Token" width={32} height={32} />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p className="text-md">Buy Likes on <span className="font-bold italic">flaunch.gg</span></p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}
