import React from "react";
import { StaffCard } from "../StaffCard/StaffCard";

import Cathy from "../../Photos/cathy_zhao.jpeg"
import Vivek from "../../Photos/vivek_nagarajan.jpg"
import Avery from "../../Photos/avery_espiritu.png"
import Alexander from "../../Photos/alexander_vassilev.png"
import Darren from "../../Photos/darren_wang.jpg"
import Praveen from "../../Photos/praveen_prabaharan.png"
import John from "../../Photos/john_lockwood.png"
import Eric from "../../Photos/eric_ewing.jpg"
import Mehdi from "../../Photos/mehdi_atmani.png"
import Sarah from "../../Photos/sarah_liao.png"
import Leanne from "../../Photos/leanne_chia.png"
import Salman from "../../Photos/salman_aji.png"
import Kevin from "../../Photos/kevin_yang.png"
import Gun from "../../Photos/kanpat_vesessook.png"
import Millie from "../../Photos/millie2.jpg"
import Matias from "../../Photos/matias_bronner.png"
import Andrew from "../../Photos/andrew_park.jpg"
import Kyle from "../../Photos/kyle_wisialowski.jpeg"
import Gordan from "../../Photos/gordan_milovac.jpeg"

import MelonPult from "../../Photos/melonpult.webp"
import Dogtail from "../../Photos/Dogtail.webp"
import Sunflower from "../../Photos/Sunflower.webp"
import WallNut from "../../Photos/wallnut.png"
import PotatoMine from "../../Photos/potatomine.webp"
import CoffeeBean from "../../Photos/Coffee-Bean.webp"
import CoconutCannon from "../../Photos/cococannon.webp"
import Spikeweed from "../../Photos/spikeweed.png"
import Snowpea from "../../Photos/snowpea.png"
import Plantern from    "../../Photos/plantern.png"
import Peashooter from "../../Photos/peashooter.png"
import Magnetshroom from "../../Photos/magnetshroom.png"
import Kernelpult from "../../Photos/kernelpult.png"
import CaptainDeadbeard from "../../Photos/captain_deadbeard.png"
import CrazyDave from "../../Photos/crazydave.png"
import Hypnoshroom from "../../Photos/hypnoshroom.png"
import MagnifyingGrass from "../../Photos/magnifyingglass.png"



interface StaffProps{}

export class Staff extends React.Component<StaffProps> {
    render(){
        return (
            <section id="staff">
                <div id="content-container">
                    
                    <h2>Staff</h2>
                    <h3>Professors</h3>
                    <div className="card-container-staff2">
                        <StaffCard name="Eric Ewing (Professor)" cslogin="" pronouns="he/him"
                        blurb="This is my third semester teaching 410/1411. I also teach Deep Learning and a robot art course, 1952z Robots as a Medium. My research is on multi-robot coordination and multi-agent systems and how large numbers of agents can work together in the same environment." 
                        image={Eric} favCharacter = "Kernal-Pult" hometown = "Syracuse, New York" pvzImage={Kernelpult}></StaffCard>
                    </div>
                    <div className="card-container-staff2">
                        <StaffCard name="Millie (Dog)" cslogin="" pronouns="she/her"
                        blurb="Woof! I'm Millie, Eric's dog. I like going on walks." 
                        image={Millie} favCharacter = "Dogtail" hometown = "Eric's House" pvzImage={Dogtail}></StaffCard>
                    </div>
                    <h3>Head Teaching Assistants</h3>
                    <div className="card-container-staff2">
                        <StaffCard name="Darren" cslogin="dwang157" pronouns="he/him"
                        blurb="Hi! I'm a Junior concentrating in CS and Psychology. In my free time I enjoy trying new food and exploring new cafes." 
                        image={Darren} favCharacter = "Coconut Cannon" hometown="Flushing, New York" pvzImage={CoconutCannon}></StaffCard>

                        <StaffCard name="Leanne" cslogin="lchia1" pronouns="she/her"
                        blurb="Hi! I'm Leanne, and I'm a junior studying CS and APMA-Econ. I really enjoy exploring new cafes, collecting vinyls, listening to music, and doing ballroom dance! :)" 
                        image={Leanne} favCharacter = "Peashooter" hometown = "Singapore" pvzImage={Peashooter}></StaffCard>

                        <StaffCard name="Salman" cslogin="saji" pronouns="he/him"
                        blurb="Hey! I'm Salman, and I'm a junior from Syria studying CS and APMA. In my free time, I love to play Minecraft, watch a sitcom (currently watching The Middle), or hike! Super excited to meet you all :)" 
                        image={Salman} favCharacter = "Kernel-pult" hometown = "Latakia, Syria" pvzImage={Kernelpult}></StaffCard>

                    </div>
                    <h3>Joint STA/UTAs</h3>
                    <div className="card-container-staff2">
                        <StaffCard name="Avery" cslogin="aoespiri" pronouns="he/him"
                        blurb="Hello! I’m a current junior studying Computer Science from New Jersey. Outside of classes, I’m heavily involved in student theater, and am the co-chair of Musical Forum. I also currently work as a Bruno Fellow and a Tour Guide! In my free time, I love to sing, play games, get food with friends, and watch Survivor!" 
                        image={Avery} favCharacter = "Peashooter" hometown="East Hanover, New Jersey" pvzImage={Peashooter}></StaffCard>

                        <StaffCard name="Sarah" cslogin="sliao13" pronouns="she/her"
                        blurb="Hi there! I'm a junior studying CS. Besides classes, most of my time is spent in clubs. I play violin in AVGE (Anime Video Game Ensemble), dance in Moli Dance Company, and lion and drum in Lion Dance!" 
                        image={Sarah} favCharacter = "Plantern" hometown = "Solon, Ohio" pvzImage={Plantern}></StaffCard>

                    </div>
                    <h3>Teaching Assistants</h3>
                    <div className="card-container-staff2">
                        <StaffCard name="Alexander" cslogin="asvassil" pronouns="he/him"
                        blurb="Hello! I am a Sophomore studying CS at Brown. In my free time I produce electronic music, rock climb, go to the gym, play chess, and speedcube. I am also featured in the 2020 edition of the Guinness book of World Records!" 
                        image={Alexander} favCharacter = "Crazy Dave" hometown="Portland, Oregon" pvzImage={CrazyDave}></StaffCard>

                        <StaffCard name="Gun" cslogin="kvassil" pronouns="he/him"
                        blurb="Hi everyone! I'm Gun, a sophomore studying Computer Science and Economics from Thailand. In my free time, I enjoy scrolling on reels, playing golf, and hanging out with friends. Super excited to meet you all!" 
                        image={Gun} favCharacter = "Hypno-shroom" hometown="Bangkok, Thailand" pvzImage={Hypnoshroom}></StaffCard>

                        <StaffCard name="John" cslogin="jjlockwo" pronouns="he/him"
                        blurb="Hi! I'm a junior studying applied math and computer science. I like to swim, play piano, and play on Switch and Xbox. Recently I've been playing Donkey Kong, Pokemon, and GTA V." 
                        image={John} favCharacter = "Spikeweed" hometown = "Milford, Pennsylvania" pvzImage={Spikeweed}></StaffCard>
                        
                        <StaffCard name="Kevin" cslogin="kyang128" pronouns="he/him"
                        blurb="Hi I'm Kevin and I'm currently a sophomore concentrating in applied math and computer science. Fun fact: I used to play Go competitively. In my free time, I like to play basketball and listen to music, so hit me up if you ever want to hoop!" 
                        image={Kevin} favCharacter = "Magnifying Glass" hometown="Riverside, California" pvzImage={MagnifyingGrass}></StaffCard>

                        <StaffCard name="Mehdi" cslogin="matmani" pronouns="he/him"
                        blurb="Hi! I’m Mehdi, a junior double majoring in CS and Apma–Econ. When I’m not in the SciLi, you’ll most likely find me in the CIT. In my free time, I enjoy playing poker and building in Minecraft!" 
                        image={Mehdi} favCharacter = "Captain Deadbeard" hometown="Casablanca, Morocco" pvzImage={CaptainDeadbeard}></StaffCard>

                        <StaffCard name="Praveen" cslogin="pprabaha" pronouns="he/him"
                        blurb="Hello!! My name is Praveen, and I'm a sophomore studying Computer Science. In my free time I like speedsolving Rubik's Cubes, going on walks, and playing video games! (Minecraft and Terraria) I also love Shiba Inus" 
                        image={Praveen} favCharacter = "Magnet Shroom" hometown = "Mount Laurel, New Jersey" pvzImage={Magnetshroom}></StaffCard>

                        <StaffCard name="Vivek" cslogin="vmnagara" pronouns="he/him"
                        blurb="Hi! I am a junior concentrating in Computer Science. I love developing and playing indie games, watching movies, and listening to songs I haven't heard before." 
                        image={Vivek} favCharacter = "Snow Pea" hometown = "Starkville, Mississippi" pvzImage={Snowpea}></StaffCard>

                        <StaffCard name="Cathy" cslogin="cjzhao" pronouns="she/her"
                        blurb="My name is Cathy Zhao and I am from, Newton, Massachusetts! I love playing poker and eating food." 
                        image={Cathy} favCharacter = "Coffee Bean" hometown = "Newton" pvzImage={CoffeeBean}></StaffCard>

                        <StaffCard name="Matias" cslogin="mcbronne" pronouns="he/him"
                        blurb="Hi, I am Matias! I am a Junior studying CS-Econ, and I am so excited to be your TA this semester. In my free time, I like play the drums and am particularly involved in the jazz scene on campus. Also I can juggle! 🤩" 
                        image={Matias} favCharacter = "Potato Mine" hometown = "Boise, Idaho" pvzImage={PotatoMine}></StaffCard>

                        <StaffCard name="Andrew" cslogin="apark114" pronouns="he/him"
                        blurb="I’m a junior studying Computer Science. Some of my hobbies include squash, playing the guitar, and I’ve recently gotten into climbing as well!" 
                        image={Andrew} favCharacter = "Wall-nut" hometown = "Seoul, Korea" pvzImage={WallNut}></StaffCard>

                        <StaffCard name="Kyle" cslogin="kwisialo" pronouns="he/him"
                        blurb="Hi! My name is Kyle and I am a 5th-year master's student in CS. I studied APMA-Bio for my undergrad at Brown. In my free time you can find me at the pool with Brown's club swim team :)" 
                        image={Kyle} favCharacter = "Sunflower" hometown = "Old Saybrook, CT" pvzImage={Sunflower}></StaffCard>

                        <StaffCard name="Gordan" cslogin="gmilovac" pronouns="he/him"
                        blurb="Hi everyone! My name is Gordan and I'm a 5th Year Master student and your TA. I got my CS-Econ undergrad at Brown and did Varsity Crew for 4 years. I'm addicted to lifting and Clash Royale. Excited for the semester!!" 
                        image={Gordan} favCharacter = "Melon-pult" hometown = "Split, Croatia" pvzImage={MelonPult}></StaffCard>
                    </div>
                </div>
            </section>
        );
    }
}
