import React from 'react'
import Humbg from './MITSUBISHI LANDING/Humbg.png'
import Previous from './MITSUBISHI LANDING/Previous Button.png'
import Next from './MITSUBISHI LANDING/Next Button.png'
import Simba from './MITSUBISHI LANDING/Simba Logo.png'
import Budget from './MITSUBISHI LANDING/Budget setter.png'
import Slide from './MITSUBISHI LANDING/Next Slide Active.png'
import Slide_Inactive from './MITSUBISHI LANDING/Next Slide Inactive.png'
import car_1 from './MITSUBISHI LANDING/car 1.png'
import car_2 from './MITSUBISHI LANDING/car 2.png'
import car_3 from './MITSUBISHI LANDING/Car 3.png'
import Advert from './MITSUBISHI LANDING/Advert Banner.png'

export default function mitsubishi() {
    return (
        <body class="bodycode ">
            <header class="mithead white">
                    
                <img src={Humbg} alt="" class="right log" />

                <div class="mitmid flexbox-container">
                    
                    <img src={Previous} alt=""class="left img6 ali" />
                    <p>MITSUBISHI MOTORS</p>
                    <img src={Next} alt=""class="right img6 ali1" />

                </div>

                <div class="headbottom flexbox-container">
                    <div class="left bottomleft">
                        <p>Mitsubishi</p>
                        <div class="cicle">

                        </div>
                        <div class="cicle">
                            
                        </div>
                        <div class="cicle">
                            
                        </div>

                    </div>
                    <div class="right bottomright">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem a
                    </div>
                </div>
            </header>


            <div class="nav1 flexbox-container " >

                <img src={Simba} alt="" />

                <nav class="height1">
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li class="active step2"><a href="#"><p> Our vehicles </p></a></li>
                        <li><a href="#">Parts</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Financing</a></li>
                    </ul>
                </nav>

            </div>
            

            <div class="quicksearch greycode4 white">
                <div class="search1 flexbox-container the-search">

                    <table class="greycode1 the-search the-search1">
                        <tr>
                            <td class="td1">
                                <label for="cars">Select make</label><br/>
                                <input type="text" name="" id="" placeholder="make" class="borderless inputs" />
                            </td>
                            <td class="td1">
                                <label for="cars">Select model</label><br/>
                                <select name="model" id="model" class="inputs borderless">
                                    <option value="model">Model</option>
                                </select>
                            </td>
                            <td class="td1">
                                <label for="cars">Select vehicle status</label><br/>
                                <select name="model" id="model" class="inputs borderless">
                                    <option value="model">Status</option>
                                </select>
                            </td>
                            <td class="td1">
                                <label for="cars">Select car colour</label><br/>
                                <select name="model" id="model" class="inputs borderless">
                                    <option value="model">Colour</option>
                                </select >
                            </td>
                            <td class="td1 budget2">
                                <label for="cars" class="budget">Enter Budget</label><br/>
                                <img src={Budget} alt="" class="con1" />
                                <p class="budget1">Ksh 15,000,000</p>
                            </td>
                            
                        </tr>
                    </table>

                </div>


                <div class="search2 flexbox-container the-search white">

                    <table class="greycode1 the-search the-search1 tabl">
                        <tr>
                            <td class="td1">
                                <label for="cars">Enter year</label><br/>
                                <select name="model" id="model" class="inputs borderless">
                                    <option value="model">Year</option>
                                </select>
                            </td>
                            <td class="td1">
                                <label for="cars">Enter body style</label><br/>
                                <select name="model" id="model" class="inputs borderless">
                                    <option value="model">Style</option>
                                </select>
                            </td>
                            <td class="td1">
                                <label for="cars">Enter Engine Type</label><br/>
                                <select name="model" id="model"  class="inputs borderless">
                                    <option value="model" >Engine Type</option>
                                </select>
                            </td>
                            <td class="td1">
                                <label for="cars">EFuel type</label><br/>
                                <select name="model" id="model" class="inputs borderless">
                                    <option value="model">Type</option>
                                </select>
                            </td>
                            <td class="borderless td1">
                                <button type="submit" class="borderless t-search">Quick Search</button>
                            </td>
                        </tr>
                    </table>

                </div>

            </div>

            <div class="content white">
                <div class="select flexbox-container quote">
                    <div class="selec quote">
                        <p>Saloon Cars</p>
                        <img src={Slide} alt="" class ="size" />                
                    </div>
                    <div class="selec quote">
                        <p>Medium SUVs</p>
                        <img src={Slide_Inactive} alt="" class ="size" />                
                    </div>
                    <div class="selec quote">
                        <p>Large SUVs</p>
                        <img src={Slide_Inactive} alt="" class ="size" />                
                    </div>
                    <div class="selec quote">
                        <p>Used Vehicles</p>
                        <img src={Slide_Inactive} alt="" class ="size" />                
                    </div>
                </div>

                <div class="car1 flexbox-container" >
                    <div class="carB log">                
                        <img src={car_1} alt="" class="img3 imn" /> 
                        <p class="one log">
                            Preview Vehicle
                        </p> <hr/>
                        <p class="carname log">
                            Mitsubishi Mirage G4 2021
                        </p><hr/>
                        <p class="review log">
                            Sed ut perspiciatis unde omnis iste natus error sit<br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa quae ab illo<br/>
                            inventore veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam<br/>
                            voluptatem quia voluptas sit Sed ut perspiciatis<br/>
                            unde omnis iste natus error sit voluptatem<br/><br/>
                        </p><hr/>
                        <p class="price log">
                            Ksh 2,500,000
                        </p>
                        <p class="quote quote2">
                            Get Quote
                        </p>
                    </div>
                    <div class="car log">                
                        <img src={car_2} alt=""  class="img3 imn"/> 
                        <p class="one log">
                            Preview Vehicle
                        </p> <hr/>
                        <p class="carname log">
                            Mitsubishi Mirage 2 G4 2021
                        </p><hr/>
                        <p class="review log">
                            Sed ut perspiciatis unde omnis iste natus error sit<br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa quae ab illo<br/>
                            inventore veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam voluptatem<br/>
                            quia voluptas sit Sed ut perspiciatis unde omnis<br/>
                            iste natus error sit voluptatem accusantium<br/>
                            doloremque laudantium, totam rem aperiam,<br/>
                        </p><hr/>
                        <p class="price log">
                            Ksh 3,500,000
                        </p>
                        <p class="quote quote2">
                            Get Quote
                        </p>
                    </div>
                    <div class="carA log">                
                        <img src={car_3} alt=""  class="img3 imn"/> 
                        <p class="one log">
                            Preview Vehicle
                        </p> <hr/>
                        <p class="carname log">
                            Mitsubishi Mirage3 G4 2021
                        </p><hr/>
                        <p class="review log">
                            Sed ut perspiciatis unde omnis iste natus error sit<br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa quae ab illo<br/>
                            inventore veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam<br/>
                            voluptatem quia voluptas sit Sed ut perspiciatis<br/>
                            unde omnis iste natus error sit voluptatem<br/>
                            accusantium doloremque laudantium, totam rem<br/>
                        </p><hr/>
                        <p class="price log">
                            Ksh 4,500,000
                        </p>
                        <p class="quote quote2">
                            Get Quote
                        </p>
                    </div>
                </div>

                <div class="car2 flexbox-container">
                    <div class="carB log">                
                        <img src={car_1} alt=""  class="img3 imn"/> 
                        <p class="one log">
                            Preview Vehicle
                        </p> <hr/>
                        <p class="carname log">
                            Mitsubishi Mirage G4 2021
                        </p><hr/>
                        <p class="review log">
                            Sed ut perspiciatis unde omnis iste natus error sit<br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa quae ab illo<br/>
                            inventore veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam<br/>
                            voluptatem quia voluptas sit Sed ut perspiciatis<br/>
                            unde omnis iste natus error sit voluptatem<br/><br/>
                        </p><hr/>
                        <p class="price log">
                            Ksh 2,500,000
                        </p>
                        <p class="quote">
                            Get Quote
                        </p>
                    </div>
                    <div class="car log">                
                        <img src={car_2} alt=""  class="img3 imn"/> 
                        <p class="one log">
                            Preview Vehicle
                        </p> <hr/>
                        <p class="carname log">
                            Mitsubishi Mirage 2 G4 2021
                        </p><hr/>
                        <p class="review log">
                            Sed ut perspiciatis unde omnis iste natus error sit <br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa quae ab illo<br/>
                            inventore veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam voluptatem<br/>
                            quia voluptas sit Sed ut perspiciatis unde omnis<br/>
                            iste natus error sit voluptatem accusantium<br/>
                            doloremque laudantium, totam rem aperiam,<br/>
                        </p><hr/>
                        <p class="price log">
                            Ksh 3,500,000
                        </p>
                        <p class="quote">
                            Get Quote
                        </p>
                    </div>
                    <div class="carA log">                
                        <img src={car_3} alt=""  class="img3 imn"/> 
                        <p class="one log">
                            Preview Vehicle
                        </p> <hr/>
                        <p class="carname log">
                            Mitsubishi Mirage3 G4 2021
                        </p><hr/>
                        <p class="review log">
                            Sed ut perspiciatis unde omnis iste natus error sit<br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa quae ab illo<br/>
                            inventore veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam<br/>
                            voluptatem quia voluptas sit Sed ut perspiciatis<br/>
                            unde omnis iste natus error sit voluptatem<br/>
                            accusantium doloremque laudantium, totam rem<br/>
                        </p><hr/>
                        <p class="price log">
                            Ksh 4,500,000
                        </p>
                        <p class="quote quote1">
                            Get Quote
                        </p>
                    </div>
                </div>

            </div>

            <img src={Advert} alt="" class="break width"/>

            <footer class="foott white">

                <img src={Simba} alt="" class="break img5 simlo" />

                <div class="footers flexbox-container ">
                    <p class="ratedmid customer">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br/>
                        accusantium doloremque laudantium, totam rem aperiam,<br/>
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto<br/>
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam<br/>
                        voluptatem quia voluptas sit Sed ut perspiciatis unde omnis<br/>
                    </p>
                    <div class="contact customer ratedmid">
                        <h2>Contact Us</h2>
                        <p>
                            <b>PHONE NUMBER</b> <br/>
                            (+254)703 046 000
                        </p>
                        <p>
                            <b>EMAIL ADDRESS</b> <br/>
                            Simbacares@simbacorp.com
                        </p>
                        <p>
                            <b>OUR LOCATION</b> <br/>
                            Mombasa Road, Opp.Panari Hotel, Nairobi
                        </p>
                        <p>
                            <b>WORKING HOURS</b> <br/>
                            Mon-Sat 8:00am - 5:00pm
                        </p>
                    </div>

                    <div class="customer ratedmid">
                        <h2>Customer Services</h2>
                        <p>Fix it For Me</p>
                        <p>FAQs</p>
                        <p>Store Locator</p>
                        <p>Delivery Information</p>
                        <p>Returns & Refunds</p>
                        <p>Product recall</p>
                    </div>

                    <div class="customer ">
                        <h2>Payment Method</h2>
                        <p>Fix it For Me</p>
                        <p>FAQs</p>
                        <p>Store Locator</p>
                        <p>Delivery Information</p>
                        <p>Returns & Refunds</p>
                        <p>Product recall</p>
                    </div>
                </div>
            </footer>
        </body>
    )
}
