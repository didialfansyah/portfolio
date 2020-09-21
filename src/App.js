import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from './layout/navbar/navbar';
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Education from './pages/education/education';
import Skills from './pages/skills/skills';
import Interests from './pages/interests/interests';
import Awards from './pages/awards/awards';
import ImgFile1 from './images/works1.PNG';
import ImgFile2 from './images/works2.PNG';
import ImgFile3 from './images/works3.PNG';
import ImgFile4 from './images/works4.PNG';
import ImgFile5 from './images/works5.PNG';
import ImgFile6 from './images/works6.PNG';

//import logo from './logo.svg';
//import './App.css';

const navbarData = {
  list : [
    {
      name : 'ABOUT',
      id : '/about'
    },
    {
      name : 'EXPERIENCE',
      id : '/experience'
    },
    {
      name : 'EDUCATION',
      id : '/education'
    },
    {
      name : 'SKILLS',
      id : '/skills'
    },
    {
      name : 'INTERESTS',
      id : '/interests'
    }
    ,
    {
      name : 'AWARDS',
      id : '/awards'
    }
  ]
}

const dataAbout = {
  id : 'about',
  first : 'DIDI',
  last : 'ALFANSYAH',
  number : '+62 821 6508 2099',
  email : 'didialfansyah@gmail.com',
  content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet. Duis eu porttitor odio. Nullam purus nisi, sollicitudin non volutpat quis, pellentesque condimentum orci. Ut gravida tincidunt dui sit amet tempor. Mauris nisl lorem, posuere nec pellentesque et, lobortis id magna. Quisque vitae malesuada quam. Integer eleifend metus ullamcorper sapien fermentum, sed egestas eros mattis. Vestibulum dapibus tortor accumsan mauris ornare ullamcorper. Nullam feugiat ante ante. Nulla id vulputate eros, quis ultricies est. Phasellus eget imperdiet felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in felis ornare nisl gravida fringilla sed sit amet mauris.'
}

const dataExp = {
  id : 'experience',
  content : [
    {
      src : ImgFile1,
      alt : 'Website Inalum',
      title : 'Website Inalum',
      url : 'https://sleepy-kowalevski-be7b30.netlify.app/',
      isi : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet.'
    },
    {
      src : ImgFile2,
      alt : 'Tweet Generated',
      title : 'Tweet Generated',
      url : 'https://agitated-yonath-f4c36c.netlify.app/',
      isi : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet.'
    },
    {
      src : ImgFile3,
      alt : 'Converter String',
      title : 'Converter String',
      url : 'https://nervous-northcutt-0eb7eb.netlify.app/',
      isi : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet.'
    },
    {
      src : ImgFile4,
      alt : 'Counting Cats',
      title : 'Counting Cats Old',
      url : 'https://agitated-galileo-59b1d0.netlify.app/',
      isi : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet.'
    },
    {
      src : ImgFile5,
      alt : 'Greeting Online',
      title : 'Greeting Online Shop',
      url : 'https://nifty-fermat-2fb3c0.netlify.app/',
      isi : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet.'
    },
    {
      src : ImgFile6,
      alt : 'Tes Modular',
      title : 'Tes Modular Project',
      url : 'https://zen-bhaskara-1749ee.netlify.app/',
      isi : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lobortis laoreet.'
    }
  ]
}

const dataEdu = {
  id : 'education',
  education : [
    {
      title : 'SMK SANDHY PUTRA MEDAN',
      jurusan : 'Rekayasa Perangkat Lunak',
      tanggal : 'August 2014 - 2017'
    },
    {
      title : 'WEBMEDIA TRAINING CENTER',
      jurusan : 'WEBMASTER PROFESSIONAL',
      tanggal : 'June 2014 - August 2014'
    },
    {
      title : 'HACKTIV8 PART TIME PROGRAM',
      jurusan : 'Intro to Programming',
      tanggal : 'April 2020 - July 2020'
    },
  ]
}

const dataSkill = {
  id : 'skills',
  skill : [
    {
      title : 'HTML',
      val : 80
    },
    {
      title : 'CSS',
      val : 75
    },
    {
      title : 'PHP',
      val : 88
    },
    {
      title : 'JAVASCRIPT',
      val : 85
    },
    {
      title : 'VB.NET',
      val : 75
    },
    {
      title : 'JAVA',
      val : 70
    }
  ]
}

const dataAward = {
  id : 'awards',
  education : [
    {
      title : 'Rank 1 LKS SMK Kota',
      jurusan : 'Web Design and Developer',
      tanggal : 'November 2015'
    },
    {
      title : 'Rank 1 LKS SMK Provinsi',
      jurusan : 'Web Design and Developer',
      tanggal : 'May 2016'
    },
    {
      title : 'Rank 4 LKS SMK Nasional',
      jurusan : 'Web Design and Developer',
      tanggal : 'May 2016'
    },
    {
      title : 'Rank 3 Robot Contest Provinsi',
      jurusan : 'Line Follower Robot Contest',
      tanggal : 'November 2016'
    },
  ]
}
function App() {
  return (
    <Router>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {/*<Navbar
            data = {navbarData}
          />*/}
            <Navbar
              data = {navbarData}
            />
        </div>
        <div className="col-md-8">
          <Switch>
            <Route exact path="/">
              <Redirect to="/about"/>
            </Route>
            <Route exact path="/about">
              <About
                  data = {dataAbout}
              />
            </Route>
            <Route exact path="/experience">
              <Experience
                data = {dataExp}
              />
            </Route>
            <Route exact path="/education">
              <Education
                 data = {dataEdu}
              />
            </Route>
            <Route exact path="/skills">
              <Skills
                data = {dataSkill}
              />
            </Route>
            <Route exact path="/interests">
              <Interests/>
            </Route>
            <Route exact path="/awards">
              <Awards
                data = {dataAward}
              />
            </Route>
          </Switch>
            {/*
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                <About
                  data = {dataAbout}
                />
                <Experience
                  data = {dataExp}
                />
                <Education
                  data = {dataEdu}
                />
                <Skills
                  data = {dataSkill}
                />
                <Interests/>
                <Awards
                  data = {dataAward}
                />
            </div>
            */}
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
