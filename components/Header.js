import Image from "next/image"
import nextConfig from "../next.config"
import HeaderItem from "./HeaderItem"
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'



function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <a href="./">
                    <HeaderItem title='HOME'Icon={HomeIcon}/>
                </a>
                
                <a href="/?genre=fetchTrending">
                   <HeaderItem title='TRENDING'Icon={LightningBoltIcon}/> 
                </a>
                
                <HeaderItem title='VERIFIED'Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS'Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH'Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT'Icon={UserIcon}/>
                
            </div>
            <Image className = "object-contain"
                   src       = 'https://links.papareact.com/ua6/'
                   width     = {200}
                   height    = {100}
            />
        </header>
    )
}

export default Header
