import React from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import Card from "../card";
import Breadcrumbs from "../../Breadcrumb";

const Heading = [
  {
    id: 1,
    category: "NIT",
    nirf: 49,
    found: 1961,
    logo: "https://tse2.mm.bing.net/th?id=OIP.bnXDOIBWXNwuNGWiBu77ywAAAA&pid=Api&P=0&h=180",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/15036539021407237573Motilal_NIT_Main_building.jpg",
    name: "NIT Allahabad",
    link: "#",
  },
  {
    id: 2,
    category: "NIT",
    nirf: 80,
    found: 1960,
    logo: "https://tse3.mm.bing.net/th?id=OIP.yTgS3Hk6lF5bKA8VCK1RFQAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.WTO43DMVYEG8Zbe7zilsTwHaDS&pid=Api&P=0&h=180",
    name: "NIT Bhopal",
    link: "#",
  },
  {
    id: 3,
    category: "NIT",
    nirf: 23,
    found: 1961,
    logo: "https://a2zjobsite.com/wp-content/uploads/2022/07/images.jpg",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/14417776315.jpg",
    name: "NIT Calicut",
    link: "#",
  },
  {
    id: 4,
    category: "NIT",
    nirf: "NA",
    found: 1986,
    logo: "https://tse1.mm.bing.net/th?id=OIP.SpSPMmPtOhAGfoZIjyY1gAHaHQ&pid=Api&P=0&h=180",
    build:
      "https://getmyuni.azureedge.net/college-image/big/national-institute-of-technology-hamirpur-nit-hamirpur.jpg",
    name: "NIT Hamirpur",
    link: "#",
  },
  {
    id: 5,
    category: "NIT",
    nirf: 37,
    found: 1963,
    logo: "https://tse2.mm.bing.net/th?id=OIP.FJdbfGutpWenGvSoiSx8MAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.nfU_SYL5ToBztySMp60R8wHaEK&pid=Api&P=0&h=180",
    name: "NIT Jaipur",
    link: "#",
  },
  {
    id: 6,
    category: "NIT",
    nirf: 46,
    found: 1987,
    logo: "https://tse3.mm.bing.net/th?id=OIP.LS6j63r7cRp9fNEEyuVnzAAAAA&pid=Api&P=0&h=180",
    build:
      "https://www.pagalguy.com/wp-content/uploads/2018/10/754F80042BEA6E86.jpg",
    name: "NIT Jalandhar",
    link: "#",
  },
  {
    id: 7,
    category: "NIT",
    nirf: "NA",
    found: 1960,
    logo: "https://www.ranklogos.com/wp-content/uploads/2014/11/National-Institute-of-Technology-Jamshedpur-413x500.png",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.1DXmBe06mkgSZt8loTlOMAHaDF&pid=Api&P=0&h=180",
    name: "NIT Jamshedpur",
    link: "#",
  },
  {
    id: 8,
    category: "NIT",
    nirf: 58,
    found: 1963,
    logo: "https://www.static-contents.youth4work.com/university/Documents/Colleges/collegeLogo/906.png?v=20190221183953",
    build:
      "https://images.shiksha.com/mediadata/images/1488258207php2clFL3.jpeg",
    name: "NIT Kurukshetra",
    link: "#",
  },
  {
    id: 9,
    category: "NIT",
    nirf: 41,
    found: 1960,
    logo: "https://img.collegepravesh.com/2018/01/VNIT-Nagpur-Logo.png",
    build:
      "https://files.askiitians.com/cdn1/images/2015427-18434610-8822-campus-pics-img36.jpg",
    name: "NIT Nagpur",
    link: "#",
  },
  {
    id: 10,
    category: "NIT",
    nirf: 16,
    found: 1961,
    logo: "https://www.ranklogos.com/wp-content/uploads/2014/11/National-Institute-of-Technology-Rourkela-500x492.gif",
    build:
      "https://i1.wp.com/studybharat.com/wp-content/uploads/2019/01/National-Institute-of-Technology-Rourkela.jpg?resize=780%2C405&ssl=1",
    name: "NIT Rourkela",
    link: "#",
  },
  {
    id: 11,
    category: "NIT",
    nirf: 40,
    found: 1967,
    logo: "https://tse3.mm.bing.net/th?id=OIP.Dy5_HcG09Rcc652Leu8TdwHaG6&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.LaruTJ5q8kEtalknsDOaZQAAAA&pid=Api&P=0&h=180",
    name: "NIT Silchar",
    link: "#",
  },
  {
    id: 12,
    category: "NIT",
    nirf: 12,
    found: 1960,
    logo: "https://www.edarabia.com/wp-content/uploads/2013/08/national-institute-of-technology-karnataka-logo-india.jpg",
    build:
      "https://getmyuni.azureedge.net/college-image/big/national-institute-of-technology-nit-surathkal.jpg",
    name: "NIT Karnataka",
    link: "#",
  },
  {
    id: 13,
    category: "NIT",
    nirf: 21,
    found: 1959,
    logo: "https://tse1.mm.bing.net/th?id=OIP.33cagNAv_MLLYMdX2kRWGgAAAA&pid=Api&P=0&h=180",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/14405035581434951475ultra%20mega%20hostels%201.8k.jpg",
    name: "NIT Warangal",
    link: "#",
  },
  {
    id: 14,
    category: "NIT",
    nirf: 43,
    found: 1960,
    logo: "https://shivajobs.in/wp-content/uploads/2022/04/NIT_Durgapur_Logo.svg_-300x300.png",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.rK5lYfZb_R1tr128J4wjzAHaE8&pid=Api&P=0&h=180",
    name: "NIT Durgapur",
    link: "#",
  },
  {
    id: 15,
    category: "NIT",
    nirf: 82,
    found: 1960,
    logo: "https://nitsri.ac.in/Department/TEQIP-III/nit.png",
    build: "https://i.ytimg.com/vi/cQKCndcHCvg/hqdefault.jpg",
    name: "NIT Srinagar",
    link: "#",
  },
  {
    id: 16,
    category: "NIT",
    nirf: 65,
    found: 1961,
    logo: "https://img.collegepravesh.com/2015/09/SVNIT-Surat-Logo.png",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.1W34hXdF2NX_awfm38GE9wHaEK&pid=Api&P=0&h=180",
    name: "NIT Surat",
    link: "#",
  },
  {
    id: 17,
    category: "NIT",
    nirf: 9,
    found: 1964,
    logo: "https://www.nitt.edu/home/about/Low-Resolution-Emblem.png",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.1uo6wDhW0_JBiWJipoXS9wHaEK&pid=Api&P=0&h=180",
    name: "NIT Trichy",
    link: "#",
  },
  {
    id: 18,
    category: "NIT",
    nirf: 56,
    found: 2004,
    logo: "https://tse3.mm.bing.net/th?id=OIP.UXEtRhRHxzf-6LchSeoBHwAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.nQBvnpLCTkpMTiebPJqZXgHaE8&pid=Api&P=0&h=180",
    name: "NIT Patna",
    link: "#",
  },
  {
    id: 19,
    category: "NIT",
    nirf: 70,
    found: 1956,
    logo: "https://latestgovtjobs.in/wp-content/uploads/2017/05/national-institute-of-technology-raipur.jpg",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/15046152089.jpg",
    name: "NIT Raipur",
    link: "#",
  },
  {
    id: 20,
    category: "NIT",
    nirf: 91,
    found: 1965,
    logo: "https://tse1.mm.bing.net/th?id=OIP.KhXrKjUI6kuotlAJJ7HrJwAAAA&pid=Api&P=0&h=180",
    build:
      "https://www.static-contents.youth4work.com/university/Documents/Colleges/newsEvent/188cb652-6927-45ee-9b8f-6db21619a949.jpg",
    name: "NIT Agartala",
    link: "#",
  },
  {
    id: 21,
    category: "NIT",
    nirf: "NA",
    found: 2010,
    logo: "https://i0.wp.com/allaboutindia.info/wp-content/uploads/2018/06/nit-arunachal-logo.jpg",
    build:
      "https://files.askiitians.com/cdn1/images/201557-1509559-2696-14068781892.jpg",
    name: "NIT Arunachal Pradesh",
    link: "#",
  },
  {
    id: 22,
    category: "NIT",
    nirf: 51,
    found: 2010,
    logo: "https://tse4.mm.bing.net/th?id=OIP.EM28EK0OMkEgxHmlE4dApQAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.BNjUOXi9Gh1-zqV3Tr2LNwHaEK&pid=Api&P=0&h=180",
    name: "NIT Delhi",
    link: "#",
  },
  {
    id: 23,
    category: "NIT",
    nirf: 90,
    found: 2010,
    logo: "https://tse4.mm.bing.net/th?id=OIP.7fz6Vt9lEeJ2MnLA9yZliwHaHR&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.5SNSw7_h76-IC8Y0VPwyBwHaDe&pid=Api&P=0&h=180",
    name: "NIT Goa",
    link: "#",
  },
  {
    id: 24,
    category: "NIT",
    nirf: 95,
    found: 2010,
    logo: "https://tse3.mm.bing.net/th?id=OIP.ZjP34INWtAoi-Zqvoa2GKQHaHP&pid=Api&P=0&h=180",
    build:
      "https://www.vidyavision.com/CollegeUploads/Photos/2017-23-5-16-15-13_nit-manipur.png",
    name: "NIT Manipur",
    link: "#",
  },
  {
    id: 25,
    category: "NIT",
    nirf: 72,
    found: 2010,
    logo: "https://3.bp.blogspot.com/-cbr8AX29w_Q/UFLB2hvmOlI/AAAAAAAANnI/VJY3SRzH9Qk/s1600/NIT_Meghalaya_logo.jpg",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/14353157811413614283nit3.jpg",
    name: "NIT Meghalaya",
    link: "#",
  },
  {
    id: 26,
    category: "NIT",
    nirf: 6,
    found: 2010,
    logo: "https://tse2.mm.bing.net/th?id=OIP.2yHowjdb9J0yQEGl9MqZVwHaG_&pid=Api&P=0&h=180",
    build:
      "https://storage.googleapis.com/ezap-prod/colleges/1226/nit-mizoram-campus.jpg",
    name: "NIT Mizoram",
    link: "#",
  },
  {
    id: 27,
    category: "NIT",
    nirf: 201,
    found: 2010,
    logo: "https://img.collegepravesh.com/2013/06/NIT-NAGALAND-LOGO.jpg",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.tPFe9zuDuDplaTOSXilqrQHaEK&pid=Api&P=0&h=180",
    name: "NIT Nagaland",
    link: "#",
  },
  {
    id: 28,
    category: "NIT",
    nirf: "101",
    found: 2010,
    logo: "https://www.gktoday.in/wp-content/uploads/2019/07/nit-puducherry.jpg",
    build:
      "https://www.vidyavision.com/CollegeUploads/Photos/2017-23-5-14-20-02_nit-puduchery1.jpg",
    name: "NIT Puducherry",
    link: "#",
  },
  {
    id: 29,
    category: "NIT",
    nirf: "NA",
    found: 2010,
    logo: "https://tse4.mm.bing.net/th?id=OIP.A8wTCkQeIXh1m-V3cri1TAAAAA&pid=Api&P=0&h=180",
    build:
      "https://www.admissionfever.com/Media/clgimg/gallery/3892_img8670838576888284.jpg",
    name: "NIT Sikkim",
    link: "#",
  },
  {
    id: 30,
    category: "NIT",
    nirf: "NA",
    found: 2009,
    logo: "https://tse4.mm.bing.net/th?id=OIP.TkXZIczygyc1O_rzUSGTgwAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.TpzMkjedLs81wNIw1pB9fgAAAA&pid=Api&P=0&h=180",
    name: "NIT Uttarakhand",
    link: "#",
  },
  {
    id: 31,
    category: "NIT",
    nirf: "NA",
    found: 2015,
    logo: "https://nitandhra.ac.in/main/assets/images/logo-white.webp",
    build:
      "https://images.shiksha.com/mediadata/images/articles/1637673927phpxpuPzv.jpeg",
    name: "NIT Andhra Pradesh",
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

const NIT_main = () => {
  return (
    <Layout title="NIT's Details">
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

export default NIT_main;
