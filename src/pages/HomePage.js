import React from 'react';
import imgURL from "../images/dummy.jpg";
import "../styles/Homepage.css";
import SelectionsCard from '../components/SelectionsCard';

const HomePage = () => {
    return (
        <div className="home-page-container">
            <div className="current-issue-card">
                <span className="card-header">Current Issue</span>
                <div className="current-issue-img-container">
                    <img src={imgURL} alt="duumy" />
                </div>
                <div className="current-issue-text-container">
                    <p className="current-issue-text">Summer – Fall 2015 contents by and with: </p>
                    <ul>
                        <li>Sound artist Israel Martínez discusses his work amid Mexico’s War on Drugs. A profound interview on the power and range of sound art.</li>
                        <li>Mark Fisher. An interview with the radical music writer and acclaimed author of Capitalist Realism and Ghosts of My Life on music and culture today, Popular Modernism, time wars, music and Neoliberalism and the borrowed phrase, “the slow cancellation of the future.”</li>
                        <li>Editorial on Spectatorship (Part 1). Read exclusive opinion, stories and revelations on what it means to be a spectator today [and yesterday] from Katie Alice Greer (Priests), Dan Deacon, Mark Andersen (Positive Force DC), Kim Gordon (Essay reproduction) and Ian MacKaye (Q & A). Part 2 coming soon.</li>
                        <li>The Photography of Sebastian Mayer. A select presentation from the accomplished German photographer.</li>
                        <li>Dadabots. A presentation of open-source algorithms which search, remix, comment and post music throughout the Soundcloud community as told through a correspondence with the musician-hackers.</li>
                    </ul>
                </div>
                <button className="read-more-btn">Read more</button>
            </div>  
            <div className="where-to-buy-card">
                <span className="card-header">Where to Buy</span>
                <p className="address-text">USA <br/> Printed Matter<br/> 195 10th Avenue New York, NY 10011<br/> http://printedmatter.org <br/>(Contact for US Distribution)</p>
                <p className="address-text">ArtBook at MoMA PS1<br/> 22-25 Jackson Avenue<br/> Long Island City, NY 11101 <br/>http://momaps1.org/about/bookstore/</p>
                <p className="address-text">Rough Trade NYC <br/>64 North 9th Street <br/>Brooklyn, NY 11249<br/> http://www.roughtradenyc.com/</p>
                <p className="address-text">Consumer Research Center/bookshop<br/> Carpenter Center for the Visual Arts<br/> Harvard University<br/> 24 Quincy Street <br/>Cambridge, MA 02138 <br/>https://ccva.fas.harvard.edu/consumer-research-center-bookshop </p>
                <p className="address-text">Other Music<br/> 15 East 4th Street<br/> New York, NY 10003 <br/>www.othermusic.com</p>
                <p className="address-text">Som Records<br/> 1843 14th Street NW<br/> Washington, DC 20009<br/> www.somrecordsdc.com</p>
                <button className="read-more-btn">Read more</button>
            </div>

            <div className="on-app-store-card">
            <span className="card-header">On App Store</span>
                <div className="on-app-store-img-container">
                    <img src={imgURL} alt="duumy" />
                </div>
                <p className="on-app-store-text">A lightweight reading experience to take with you anywhere and half the price of our print edition.</p>
                <div className="apple-google-play-img-container">
                    <img src={imgURL} alt="duumy" />
                    <img src={imgURL} alt="duumy" />
                </div>
            </div>

            <div className="about-card">
            <span className="card-header">About</span>
                <p>HIGHWAY is an intermittent publication about life with music and sound. The print and iOS editions are pocket-sized companions to the musicians, writers, artists, thinkers, documentarians, storytellers and objects we encounter.  
                   <br/> <br/> Today, there are readers and listeners with a new curiosity into how these subjects and objects practice, converse, resonate and are remembered in the international worlds of music and sound. HIGHWAY is for them.</p>
            </div>

            <div className="contact-card">
            <span className="card-header">Contact</span>
                <p>info [at] highwaymagazine [dot] info</p>
            </div>

            <div className="newsletter-card">
                <span className="card-header">Newsletter</span>
                <p>Sign up to hear about new issues and events.</p>
                <input />
                <button className="subscribe-btn">Subscribe</button>
            </div>

            <div className="social-card">
            <span className="card-header">Social:</span>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>Facebook</span>
                <span>Youtube</span>
                <span>Tumblr</span>
            </div>
            <SelectionsCard />
            <SelectionsCard />
        </div>
    )
}

export default HomePage;
