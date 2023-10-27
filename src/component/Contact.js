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
      <div className="container">
        <div className='w-full '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.091739732266!2d85.36205097406483!3d25.734479609731938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed65a420570e15%3A0xa2d2622b0a33e4ae!2sPramod%20Singh%20(Bihari)!5e0!3m2!1sen!2sin!4v1698399587393!5m2!1sen!2sin" className='w-full h-56 mb-4' loading="lazy" ></iframe>
        </div>
      </div>
    </>
  )
}

export default Contact
