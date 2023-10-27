import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-cyan-600 p-3'>
        <div className="container">
            <div className="md:grid-cols-4 grid gap-3  text-white mb-3">
                <div>
                    <ul className='p-0 m-0'>
                    <p><strong>Company</strong></p>
                        <li>
                            <a href="#" className=' text-white no-underline'>About Us</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Freebies</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Premium Tools</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='p-0 m-0'>
                    <p><strong>Resources</strong></p>
                        <li>
                            <a href="#" className=' text-white no-underline'>Illustrations</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Bits & Snippets</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Affiliate Program</a>
                        </li> 
                    </ul>
                </div>
                <div>
                    <ul className='p-0 m-0'>
                    <p><strong>Help & Support</strong></p>
                        <li>
                            <a href="#" className=' text-white no-underline'>Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Knowledge Center</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Custom Development</a>
                        </li> 
                        <li>
                            <a href="#" className=' text-white no-underline'>Sponsorships</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='p-0 m-0'>
                    <p><strong>Legal</strong></p>
                        <li>
                            <a href="#" className=' text-white no-underline'>Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className=' text-white no-underline'>Licenses (EULA)</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className='text-center border-t text-white '>
                <p className='m-0 pt-2'>All rights reserved. Copyright © 2023 Soft UI Design System</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
