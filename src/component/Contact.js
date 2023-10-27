import React from 'react'
import contimg from '../img/ivancik.jpg';
const Contact = () => {
  return (
    <>
    <div className="relative text-center text-white">
        <div className='absolute top-[-128px] left-0 right-0 m-auto'>
        <h1 className='font-bold'>Contact Us</h1>
            <ul className='flex gap-3'>
                <li>
                    <a href="/" className='text-white no-underline'>Home</a>
                </li>
                <li>
                    /
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    </div>
      <div className="container"> 
        <div className='max-w-5xl m-auto my-4 shadow-lg p-4'>
            <div className="md:grid-cols-2 grid gap-3">
                <div>
                    <form action="" className='gap-3 grid'>
                        <div>
                            <label htmlFor="">First NAme</label>
                            <input type="text" name='name' placeholder='Your Name' className='block border w-full px-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Last NAme</label>
                            <input type="text" name='name' placeholder='Your Name'  className='block border w-full px-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Email Address</label>
                            <input type="Email" name='email' placeholder='Your Email' className='block border w-full px-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Your Password</label>
                            <input type="password" name='password' placeholder='Your Password' className='block border w-full px-3 py-2' />
                        </div>
                        <div>
                            <label htmlFor="">Your message</label>
                            <textarea name="name" cols="20" rows="7" className='block border w-full px-3 py-2'></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className='bg-orange-600 px-3 py-2 text-white no-underline' />
                        </div>
                    </form>
                </div>
                <div>
                    <img src={contimg} alt="contimg" />
                </div>
            </div>
        </div> 
      </div>
    </>
  )
}

export default Contact
