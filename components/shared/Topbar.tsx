import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

function Topbar(){
    return(
        <nav className="topbar">
             <Link href='/' className='flex items-center gap-4'>
            <Image src="/assets/logo1.png" alt='logo' width={80} height={80} />
            <p className='text-heading3-bold text-rose-800 max-xs:hidden'>ELLO</p>
            </Link>   
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                        <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher
                appearance={{
                    baseTheme: dark,
                    elements: {
                      organizationSwitcherTrigger: "py-2 px-4",
                    },
                  }}
                />
            </div>
        </nav>
       
        
    ) 
}
export default Topbar;