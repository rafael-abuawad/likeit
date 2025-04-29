import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  EllipsisVerticalIcon,
  ClipboardIcon,
  ShareIcon,
  AlertTriangleIcon,
  HeartIcon,
  BadgeDollarSignIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";

export function Post() {
  return (
      <Card className="w-full max-w-lg border-none shadow-none gap-1 p-4">
        <CardHeader className="p-0">
          <CardTitle>
            <div className="flex items-center justify-between">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant="link" size="sm" className="p-0">
                      <span>John Doe</span>
                    </Button>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <p>Add to library</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-0">
                    <EllipsisVerticalIcon className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2">
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" size="sm" className="justify-start">
                      <Image
                        src="/images/base.svg"
                        alt="Base"
                        width={20}
                        height={20}
                      />
                      <span>Basescan</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <ShareIcon className="w-4 h-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <ClipboardIcon className="w-4 h-4" />
                      <span>Copy link</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start">
                      <AlertTriangleIcon className="w-4 h-4" />
                      <span>Report</span>
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/placeholder.avif"
              alt="Base"
              fill
              className="object-cover"
            />
          </div>
        </CardContent>

        <CardFooter className="p-0 pt-2 flex flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <Button variant="outline" size="sm">
              View details
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HeartIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <BadgeDollarSignIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <UsersIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ShareIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-between w-full text-sm">
            <p />
            <p>100 likes</p>
          </div>
        </CardFooter>
      </Card>
  );
}
