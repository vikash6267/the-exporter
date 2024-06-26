import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../component/Header/Navbar';
import Footer from '../component/common/Footer';
import MilletsBenefitsGuide from '../component/Product/One';
import IndianSpicesIntroduction from '../component/Product/Two';
import GrainsOfTheWorld from '../component/Product/Three';
function SingleBlog() {
    const {blog} = useParams();

    useEffect(()=>{
   console.log(blog)
    },[])
  return (
    <div>
<Navbar></Navbar>


<div>
    {
        blog == 1 && <MilletsBenefitsGuide />
    }
    {
        blog == 2 && <IndianSpicesIntroduction />
    }
    {
        blog == 3 && <GrainsOfTheWorld />
    }
</div>





<Footer></Footer>



    </div>
  )
}

export default SingleBlog