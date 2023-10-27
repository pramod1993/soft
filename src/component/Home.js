import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import house from '../img/house.jpg';
import pool from '../img/pool.jpg';
import antalya from '../img/antalya.jpg';
import palmhouse from '../img/palm-house.jpg';
import tinyhouse from '../img/tiny-house.jpg';
import airbnb from '../img/air-bnb.jpg';
import bghome from '../img/waves-white.svg';
import hometop from '../img/hometop.svg';
import homebutton from '../img/homebutton.svg';
import team from '../img/team-2.jpg';
import team1 from '../img/team-3.jpg';
import team2 from '../img/team-4.jpg';
import comma from '../img/comma.png';
const Home = () => {
  return (
    <>
      <div className='relative max-w-4xl m-auto'>
           <div className='absolute sm:top-[-169px] top-[-180px] left-0 right-0 md:m-0 m-2'>
                <div className='text-center text-white'>
                        <h1 className='font-semibold'>Book your next trip</h1>
                        <p>An arrangement you make to have a hotel room, tickets, etc. at a particular<br/> time in the future</p>
                </div>
                <div className=" bg-white px-3 pt-2 pb-3 rounded-md shadow-lg">
                        
                    <form action="" className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                        <div>
                            <label htmlFor="">Leave From</label>
                            <select name="" id="" className='block w-full px-2 py-1 h-10'>
                                <option value=''>Select Your Location</option>
                                <option value='Brazil'>Brazil</option>
                                <option value='Bucharest'>Bucharest</option>
                                <option value='London'>London</option>
                                <option value='USA'>USA</option>
                                <option value='India Get'>India Get</option>
                                <option value='Agra'>Agra</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">To</label>
                            <select name="" id="" className='block  w-full px-2 py-1 h-10'>
                                <option value=''>Select Your Location</option>
                                <option value='Brazil'>Brazil</option>
                                <option value='Bucharest'>Bucharest</option>
                                <option value='London'>London</option>
                                <option value='USA'>USA</option>
                                <option value='India Get'>India Get</option>
                                <option value='Agra'>Agra</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Depart</label>
                            <input type="date" name="date" id="date"  data-role="calendarpicker"  data-dialog-mode="true"  className='block w-full px-2 py-1 h-10 border' placeholder='Please Select Date'/>
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="submit" value="Submit" className='block h-10 w-full bg-orange-600 text-white text-center' />
                        </div>
                    </form>
                </div>
           </div>
      </div>
      <div className='container'>
        <div className='grid md:grid-cols-3 gap-4 md:pt-16 pt-80 '>
            <div className='rounded-md shadow-md'>
                <img src={house} alt="house" />
                <div className='p-4'>
                    <small>Entire Apartment • 3 Guests • 2 Beds</small>
                    <h1 className='text-lg font-semibold'>Lovely and cosy apartment</h1>
                    <p>Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.</p>

                    <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>FROM/NIGHT</a>
                </div>
            </div>
            <div className='rounded-md shadow-md'>
                <img src={pool} alt="pool" />
                <div className='p-4'>
                    <small>Entire Apartment • 3 Guests • 2 Beds</small>
                    <h1 className='text-lg font-semibold'>Lovely and cosy apartment</h1>
                    <p>Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.</p>
                    <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>FROM/NIGHT</a>
                </div>
            </div>
            <div className='rounded-md shadow-md'>
                <img src={antalya} alt="antalya" />
                <div className='p-4'>
                    <small>Entire Apartment • 3 Guests • 2 Beds</small>
                    <h1 className='text-lg font-semibold'>Lovely and cosy apartment</h1>
                    <p>Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.</p>
                    <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>FROM/NIGHT</a>
                </div>
            </div>
            <div className='rounded-md shadow-md'>
                <img src={palmhouse} alt="palmhouse" />
                <div className='p-4'>
                    <small>Entire Apartment • 3 Guests • 2 Beds</small>
                    <h1 className='text-lg font-semibold'>Lovely and cosy apartment</h1>
                    <p>Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.</p>
                    <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>FROM/NIGHT</a>
                </div>
            </div>
            <div className='rounded-md shadow-md'>
                <img src={tinyhouse} alt="tinyhouse" />
                <div className='p-4'>
                    <small>Entire Apartment • 3 Guests • 2 Beds</small>
                    <h1 className='text-lg font-semibold'>Lovely and cosy apartment</h1>
                    <p>Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.</p>
                    <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>FROM/NIGHT</a>
                </div>
            </div>
            <div className='rounded-md shadow-md'>
                <img src={airbnb} alt="airbnb" />
                <div className='p-4'>
                    <small>Entire Apartment • 3 Guests • 2 Beds</small>
                    <h1 className='text-lg font-semibold'>Lovely and cosy apartment</h1>
                    <p>Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.</p>
                    <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>FROM/NIGHT</a>
                </div>
            </div>
        </div>
      </div>
      <div className='relative bg-[#3a416ff7] mt-3'>
      <div className=' absolute top-0 left-0 right-0'>
            <img src={hometop} alt="hometop" />
      </div>
      <span className=' absolute top-0 left-0 right-0 bottom-0'  style={{background:`url(${bghome})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}></span>
        <div className="container pb-36">
            <div className='text-center text-white z-10 relative pt-36'>
                <span className='bg-white text-black rounded-md px-3 py-2'>TESTIMONIALS</span>
                <h2 className='text-lg font-semibold mt-2'>Some thoughts from our clients</h2>
                <p>If you’re selected for them you’ll also get three tickets, opportunity <br/> to access Investor Office Hours and Mentor <br/> Hours and much more all for free.</p>
            </div>
            <div className="md:grid-cols-3 grid gap-4 z-10 relative">
                <div className='mt-[-50px]'>
                    <div className='m-auto'>
                        <img src={team} alt="team" className='w-40 h-44 m-auto rounded-lg relative top-24' />
                    </div>
                    <div className='text-center m-auto bg-white pt-28 pb-2'>
                        <h2 className='text-lg font-semibold'>Olivia Harper</h2>
                        <p>@oliviaharper</p>
                        <p>The connections you make at Web Summit are unparalleled, we met users all over the world.</p>
                        <img src={comma} alt="comma" className='w-12 h-12 m-auto' />
                    </div>
                </div>
                <div className='mt-[-50px]'>
                    <div className='m-auto'>
                        <img src={team1} alt="team1" className='w-40 h-44 m-auto rounded-lg relative top-24' />
                    </div>
                    <div className='text-center m-auto bg-white pt-28 pb-2'>
                        <h2 className='text-lg font-semibold'>Olivia Harper</h2>
                        <p>@oliviaharper</p>
                        <p>The connections you make at Web Summit are unparalleled, we met users all over the world.</p>
                        <img src={comma} alt="comma" className='w-12 h-12  m-auto' />
                    </div>
                </div>
                <div className='mt-[-50px]'>
                    <div className='m-auto'>
                        <img src={team2} alt="team2" className='w-40 h-44 m-auto rounded-lg relative top-24' />
                    </div>
                    <div className='text-center m-auto bg-white pt-28 pb-2'>
                        <h2  className='text-lg font-semibold'>Olivia Harper</h2>
                        <p>@oliviaharper</p>
                        <p>The connections you make at Web Summit are unparalleled, we met users all over the world.</p>
                        <img src={comma} alt="comma" className='w-12 h-12 m-auto' />

                    </div>
                </div>
            </div>
        </div>
        <div className=' absolute bottom-0 left-0 right-0'>
            <img src={homebutton} alt="homebutton" />
      </div>
      </div>
      <div className="container">
        <div className="text-center">
            <h2 className='font-semibold text-2xl'>Frequently Asked Questions</h2>
            <p>A lot of people don’t appreciate the moment until it’s <br/> passed. I'm not trying my hardest,<br/>  and I'm not trying to do</p>
        </div>
        <div>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I order?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can i make the payment?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How much time does it take to receive the order?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Can I resell the products?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Where do I find the shipping details?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
      </div>
    </>
  )
}

export default Home
