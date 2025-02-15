import React from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import Card from "../card";
import Breadcrumbs from "../../Breadcrumb";

const Heading = [
  {
    id: 1,
    category: "IIT",
    nirf: 1,
    found: 1959,
    logo: "https://pnghq.com/wp-content/uploads/2023/02/iit-madras-logo-png-4172-768x768.png",
    build:
      "https://theindianwire.com/wp-content/uploads/2019/01/IIT-Madras.jpg",
    name: "IIT Madras",
    link: "#",
  },
  {
    id: 2,
    category: "IIT",
    nirf: 2,
    found: 1961,
    logo: "https://www.logolynx.com/images/logolynx/cb/cb9a21ef6d81d3cd4637be5bb0b780d6.png",
    build: "https://diamond.iitd.ac.in/images/gallery/gallery-lg1.jpg",
    name: "IIT Delhi",
    link: "/iit-colleges/iit-delhi",
  },
  {
    id: 3,
    category: "IIT",
    nirf: 3,
    found: 1958,
    logo: "https://tse4.mm.bing.net/th?id=OIP.LAsUtuCpoItNz4jmyAh7twHaFj&pid=Api&P=0&h=180",
    build: "https://media.glassdoor.com/l/5c/ee/8f/d6/main-building.jpg",
    name: "IIT Bombay",
    link: "#",
  },
  {
    id: 4,
    category: "IIT",
    nirf: 7,
    found: 1994,
    logo: "https://www.iitg.ac.in/nb/iit_logo.gif",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.ljofhfPaOurAnzjjjpHLbwHaEA&pid=Api&P=0&h=180",
    name: "IIT Guwahati",
    link: "#",
  },
  {
    id: 5,
    category: "IIT",
    nirf: 4,
    found: 1959,
    logo: "https://gyaanarth.com/wp-content/uploads/2022/03/IIT_Kanpur_Logo.svg-1024x1004.png",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.26y8fCtylZ0JpDvvk5aM8QHaDj&pid=Api&P=0&h=180",
    name: "IIT Kanpur",
    link: "#",
  },
  {
    id: 6,
    category: "IIT",
    nirf: 6,
    found: 1951,
    logo: "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/03/IIT_Kharagpur_Logo.svg_.png?fit=780%2C874&ssl=1",
    build:
      "https://tse4.explicit.bing.net/th?id=OIP.Nj3dd-ErO9sYiLlT-Idz-QHaFj&pid=Api&P=0&h=180",
    name: "IIT Kharagpur",
    link: "#",
  },
  {
    id: 7,
    category: "IIT",
    nirf: 5,
    found: 1847,
    logo: "https://tse1.mm.bing.net/th?id=OIP.2vQrDkHNICmTeEWjupckhgHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.ftsf8kbLMUasS4K7t53WrAHaEo&pid=Api&P=0&h=180",
    name: "IIT Roorkee",
    link: "#",
  },
  {
    id: 8,
    category: "IIT",
    nirf: 93,
    found: 2016,
    logo: "https://tse4.mm.bing.net/th?id=OIP.8Tqhv2BVMvOhLHjRG62KYgHaGL&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP._LAeEz7wZyits3su1sFUfgHaEK&pid=Api&P=0&h=180",
    name: "IIT Dharwad",
    link: "#",
  },
  {
    id: 9,
    category: "IIT",
    nirf: 22,
    found: 2008,
    logo: "https://www.99entranceexam.in/wp-content/uploads/2015/06/IIT_Ropar-260x300.jpg",
    build:
      "https://www.wishusucess.com/wp-content/uploads/2020/06/IIT-Ropar-640x334.jpg",
    name: "IIT Ropar",
    link: "#",
  },
  {
    id: 10,
    category: "IIT",
    nirf: 8,
    found: 2008,
    logo: "https://tse3.mm.bing.net/th?id=OIP.Pe0PRwb9M52JJbHMGGoZ2AAAAA&pid=Api&P=0&h=180",
    build: "https://i.cdn.newsbytesapp.com/images/l177_24101559132267.jpg",
    name: "IIT Hyderabad",
    link: "#",
  },
  {
    id: 11,
    category: "IIT",
    nirf: 14,
    found: 2009,
    logo: "https://tse3.mm.bing.net/th?id=OIP.rcvV4YZWtADzn3oERjUg0QAAAA&pid=Api&P=0&h=180",
    build: "https://addeducation.in/wp-content/uploads/2022/11/IIT-Indore.jpg",
    name: "IIT Indore",
    link: "#",
  },
  {
    id: 12,
    category: "IIT",
    nirf: 17,
    found: 1926,
    logo: "https://tse3.mm.bing.net/th?id=OIP.pNd_NisbRTtIDlgfzazgPQAAAA&pid=Api&P=0&h=180",
    build:
      "https://images.shiksha.com/mediadata/images/articles/1664858233phpipcZb0.jpeg",
    name: "IIT Dhanbad",
    link: "#",
  },
  {
    id: 13,
    category: "IIT",
    nirf: 15,
    found: 1919,
    logo: "https://tse4.mm.bing.net/th?id=OIP.TH96TSnGtdk5XMBdShKiOgHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.J764KZBtowcsdLsBfdzBkQHaDg&pid=Api&P=0&h=180",
    name: "IIT (BHU) Varanasi",
    link: "#",
  },
  {
    id: 14,
    category: "IIT",
    nirf: 41,
    found: 2008,
    logo: "https://tse2.mm.bing.net/th?id=OIP.s6uoHM87WhG4OIaPbpMD9AHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.7JYuPI4XZ8Bk8w2FEHGlqAHaEH&pid=Api&P=0&h=180",
    name: "IIT Patna",
    link: "/iit-colleges/iit-patna",
  },
  {
    id: 15,
    category: "IIT",
    nirf: 18,
    found: 2008,
    logo: "https://tse1.mm.bing.net/th?id=OIP.IcYpeOxTAJhQWavqFQxRZQHaHS&pid=Api&P=0&w=300&h=300",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.g1oIAVio8ssf8cKJxxaFQwHaEH&pid=Api&P=0&h=180",
    name: "IIT Gandhinagar",
    link: "#",
  },
  {
    id: 16,
    category: "IIT",
    nirf: 47,
    found: 2008,
    logo: "https://www.facultyplus.com/wp-content/uploads/2020/05/1200px-Indian_Institute_of_Technology_Bhubaneswar_Logo.svg_.png",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.-FN23nQCM1IR2Tl1rPcRtQHaDb&pid=Api&P=0&h=180",
    name: "IIT Bhubaneswar",
    link: "#",
  },
  {
    id: 17,
    category: "IIT",
    nirf: 33,
    found: 2009,
    logo: "https://www.campusoption.com/images/colleges/logos/27_05_16_092047_download.jpg",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.vV_tPtEGgFL28wwf4779SAAAAA&pid=Api&P=0&h=180",
    name: "IIT Mandi",
    link: "#",
  },
  {
    id: 18,
    category: "IIT",
    nirf: 30,
    found: 2008,
    logo: "https://tse2.mm.bing.net/th?id=OIP.U2I_tlhfYssEsS1oTdKFLwHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.LbJBs2PkZj0jzdi7EZzk5QHaEH&pid=Api&P=0&h=180",
    name: "IIT Jodhpur",
    link: "#",
  },
  {
    id: 19,
    category: "IIT",
    nirf: 59,
    found: 2015,
    logo: "https://tse2.mm.bing.net/th?id=OIP.NBUkqYOnSsfkl_OVUD1VcwHaFF&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.T-5jMpZ0s1d9zJea6ZLYIAAAAA&pid=Api&P=0&h=180",
    name: "IIT Tirupati",
    link: "#",
  },
  {
    id: 20,
    category: "IIT",
    nirf: 81,
    found: 2016,
    logo: "https://tse4.mm.bing.net/th?id=OIP.Wf0apEB4EkopFzE75G3C8AHaHe&pid=Api&P=0&h=180",
    build:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/10/iitbhilai-1509125865.jpg",
    name: "IIT Bhilai",
    link: "#",
  },
  {
    id: 21,
    category: "IIT",
    nirf: 67,
    found: 2016,
    logo: "https://tse1.mm.bing.net/th?id=OIP.QKQimn85WsE-WlD2DcTI8gAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.OFpZtRqMdxyXG54GBGNP7QHaEK&pid=Api&P=0&h=180",
    name: "IIT Jammu",
    link: "#",
  },
  {
    id: 22,
    category: "IIT",
    nirf: 69,
    found: 2015,
    logo: "https://tse3.mm.bing.net/th?id=OIP.ZB8tb5CURLZBuXv4X6wD0AHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.7fM6jDU98UjTNwERogyuSwHaDt&pid=Api&P=0&h=180",
    name: "IIT Palakkad",
    link: "#",
  },
  {
    id: 23,
    category: "IIT",
    nirf: "NA",
    found: 2016,
    logo: "https://tse2.mm.bing.net/th?id=OIP.n9WfgmF-M5OkoROXT45GFQHaFj&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.ecnHj-b7fNisjkEYyDX_VgHaFj&pid=Api&P=0&h=180",
    name: "IIT Goa",
    link: "#",
  },
];
const MarginInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 2%;
`;

const IIT_main = () => {
  return (
    <Layout title="IIT's Details">
      <Breadcrumbs />
      <div>
        <MarginInformation>
          {Heading.map((item) => {
            return (
              <Card
                build={item.build}
                logo={item.logo}
                name={item.name}
                nirf={item.nirf}
                year={item.found}
                link={item.link}
              />
            );
          })}
        </MarginInformation>
      </div>
    </Layout>
  );
};

export default IIT_main;
