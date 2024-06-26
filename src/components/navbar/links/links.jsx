import Link from "next/link";

const Links=()=>{

    const links=[
        {
            title:"Home",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
    ];

    return (
        <div>
            {links.map(link=>(<Link key={link.title} href={link.path}>{link.title}</Link>))}
        </div>
    )
}   

export default Links