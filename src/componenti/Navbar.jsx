import './Navbar.css'
import Link from './Link'
const x = 300000;
const img = "vite";

function Navbar(){
    return(
        <>
        <nav>{x > 100000? "sono in alto!!!" : "sono in basso!!!"}</nav>
        <img src={img} alt=""></img>
        <img src={`/${img}.svg`}></img>
        <ul>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
        </>
    )
}

export default Navbar

//https://substackcdn.com/image/fetch/w_848,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa1a5ba1d-3fd1-4d67-88e4-6bc241e74ffa_1000x1000.jpeg