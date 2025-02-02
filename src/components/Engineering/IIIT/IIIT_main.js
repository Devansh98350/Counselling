import React from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import Card from "../card";
import Breadcrumbs from "../../Breadcrumb";

const Heading = [
  {
    id: 1,
    category: "IIIT",
    nirf: 88,
    found: 1997,
    logo: "https://tse1.mm.bing.net/th?id=OIP.a6WAygEg8MbNNZWTGBzINgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.whoI2brW6t4v-apmr1ZFhAHaE7&pid=Api&P=0&h=180",
    name: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM Gwalior)",
    link: "#",
  },
  {
    id: 2,
    category: "IIIT",
    nirf: "NA",
    found: 2013,
    logo: "https://tse2.mm.bing.net/th?id=OIP.sGlFPy41tLy_Hy1G577JoQHaHZ&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.RlWIyQPc16O36CLuXWOyEwHaDf&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Kota (IIIT Kota)",
    link: "#",
  },
  {
    id: 3,
    category: "IIIT",
    nirf: "151-200",
    found: 2013,
    logo: "https://tse3.mm.bing.net/th?id=OIP.WuqGzSt1IPkh4CyPJBS0RwHaHe&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP._p1Pmbiwnvt4qORrzJWtEQHaDt&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Guwahati (IIIT Guwahati)",
    link: "#",
  },
  {
    id: 4,
    category: "IIIT",
    nirf: "NA",
    found: 2014,
    logo: "https://tse1.mm.bing.net/th?id=OIP.bNTE4qQs1cdcDd__gtPTKAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.ej_SWFScziVDP-bJeN2LpgHaD3&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Kalyani (IIIT Kalyani)",
    link: "#",
  },
  {
    id: 5,
    category: "IIIT",
    nirf: "NA",
    found: 2014,
    logo: "https://tse3.mm.bing.net/th?id=OIP.q1Gn59Uw2PHU9VabWveITwAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.oQdf9KCVFX6v69B83QrJ3AAAAA&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Sonepat (IIIT Sonepat)",
    link: "#",
  },
  {
    id: 6,
    category: "IIIT",
    nirf: 62,
    found: 2015,
    logo: "https://tse3.mm.bing.net/th?id=OIP.EHy59FdeV8tmY0sLUjpWwAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.PxZZa7dZOePQHudWGYx58QHaDl&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Una (IIIT Una)",
    link: "#",
  },
  {
    id: 7,
    category: "IIIT",
    nirf: "NA",
    found: 2013,
    logo: "https://tse3.mm.bing.net/th?id=OIP.wX2EetgLjTUceexcMdPyJAHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.t1bEEGI3iVYarjbWbLGOAgHaE8&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Sri City (IIIT Sri City)",
    link: "#",
  },
  {
    id: 8,
    category: "IIIT",
    nirf: "NA",
    found: 2013,
    logo: "https://tse1.mm.bing.net/th?id=OIP.X3JKG1RCxW6shPkudiAgkAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.68rAhByDczQw5inldtGhogHaEP&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Vadodara (IIIT Vadodara)",
    link: "#",
  },
  {
    id: 9,
    category: "IIIT",
    nirf: 93,
    found: 1999,
    logo: "https://tse3.mm.bing.net/th?id=OIP.UIm5HTcjFaaGU0ixe-filgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.3-unsdPl2sDNVIP_fbqEVAAAAA&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Allahabad (IIIT Allahabad)",
    link: "#",
  },
  {
    id: 10,
    category: "IIIT",
    nirf: 184,
    found: 2007,
    logo: "https://tse4.mm.bing.net/th?id=OIP.cwG451ltgJ7B0zYFyx8zgQAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.IakbidYqfAEwb82yhyr5FgHaE8&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram (IIITDM Kancheepuram)",
    link: "#",
  },
  {
    id: 11,
    category: "IIIT",
    nirf: 97,
    found: 2005,
    logo: "https://tse1.mm.bing.net/th?id=OIP._IAPfFI5aScNagqofdP7dwAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.3_y6pCc2UwlOoAwcuxWvfQHaCe&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (IIITDM Jabalpur)",
    link: "#",
  },
  {
    id: 12,
    category: "IIIT",
    nirf: "NA",
    found: 2015,
    logo: "https://tse1.mm.bing.net/th?id=OIP.SBx6qemYuC_vR8ap32OtXAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.FeGCDas2z2zY06HhMkQcawHaDt&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Manipur (IIIT Manipur)",
    link: "#",
  },
  {
    id: 13,
    category: "IIIT",
    nirf: 22,
    found: 2013,
    logo: "https://tse4.mm.bing.net/th?id=OIP.VokPECfREbwqj0gc9QLDEgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.-Lo0bKV6BtVrNv5BBEg6aQHaER&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Tiruchirappalli (IIIT Trichy)",
    link: "#",
  },
  {
    id: 14,
    category: "IIIT",
    nirf: "NA",
    found: 2015,
    logo: "https://tse1.mm.bing.net/th?id=OIP.M0AhQPVEHYOHrp4kIEAXUgAAAA&pid=Api&P=0&h=180",
    build:
      "https://media-exp1.licdn.com/dms/image/C561BAQH0j_AqWeTgNw/company-background_10000/0/1594728288553?e=2147483647&v=beta&t=qu8gWu3gdIynj4T2DlINt47gqKhjzzEvElohxFOlLHY",
    name: "Indian Institute of Information Technology, Lucknow (IIIT Lucknow)",
    link: "#",
  },
  {
    id: 15,
    category: "IIIT",
    nirf: "NA",
    found: 2015,
    logo: "https://tse2.mm.bing.net/th?id=OIP.f9BwYqFU64BPSFyJ5rf2BgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.5zh7a97t8o4kXfTeEgApdQHaDt&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Dharwad (IIIT Dharwad)",
    link: "#",
  },
  {
    id: 16,
    category: "IIIT",
    nirf: "NA",
    found: 2015,
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHbipWFfLeFP8I9Dop2xwpZ-_m3M1PRNYqRDxaUHykAS83QZhqVg094evnUVTwj7qvYYh5zQxo5AiHklXcBmlgeRHpQ7eUTT_saWHfjlReoK13bCtTzphhazJ6TzjTL9yXcxtfT8V-dP_RPr6HNW2gM7qXI1ikk4CyQcxTrSqMu85pW8bFo-hc2ecN/w400-h400/Indian%20Institute%20of%20Information%20Technology,%20Design%20&%20Manufacturing%20Kurnool.png",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.Buls9W3RQ1n0uq4sca3a3QHaE4&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Design and Manufacturing, Kurnool (IIITDM Kurnool)",
    link: "#",
  },
  {
    id: 17,
    category: "IIIT",
    nirf: "NA",
    found: 2015,
    logo: "https://tse1.mm.bing.net/th?id=OIP.X6ord8rkzM90g7Z3ZD4G9AAAAA&pid=Api&P=0&h=180",
    build:
      "https://dl.dropboxusercontent.com/s/zp3kbj9um2xj68l/IIIT%20Kottayam%20Img%20Rah87.jpg",
    name: "Indian Institute of Information Technology, Kottayam (IIIT Kottayam)",
    link: "#",
  },
  {
    id: 18,
    category: "IIIT",
    nirf: "NA",
    found: 2016,
    logo: "https://tse2.mm.bing.net/th?id=OIP._S-wm_q-cCFFPxO9Ani9aAAAAA&pid=Api&P=0&h=180",
    build: "https://img.collegepravesh.com/2022/09/IIIT-Ranchi.jpg",
    name: "Indian Institute of Information Technology, Ranchi (IIIT Ranchi)",
    link: "#",
  },
  {
    id: 19,
    category: "IIIT",
    nirf: "NA",
    found: 2016,
    logo: "https://tse3.mm.bing.net/th?id=OIP.0v7x5ZSWfacsYWnyBnnUjQAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.UqxsEh35tru-iRHKSwgsigHaDV&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Nagpur (IIIT Nagpur)",
    link: "#",
  },
  {
    id: 20,
    category: "IIIT",
    nirf: "NA",
    found: 2016,
    logo: "https://tse4.mm.bing.net/th?id=OIP.D9-M7EHMZh29N_cSyubPhwHaHa&pid=Api&P=0&h=180",
    build:
      "https://images.shiksha.com/mediadata/images/1489033744phpVTMdTY.jpeg",
    name: "Indian Institute of Information Technology, Pune (IIIT Pune)",
    link: "#",
  },
  {
    id: 21,
    category: "IIIT",
    nirf: "NA",
    found: 2017,
    logo: "https://tse3.mm.bing.net/th?id=OIP.rEVL-JsIAF-gilBgLCc13gAAAA&pid=Api&P=0&h=180",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/appImage/1491982439ainmg.jpg",
    name: "Indian Institute of Information Technology, Bhagalpur (IIIT Bhagalpur)",
    link: "#",
  },
  {
    id: 22,
    category: "IIIT",
    nirf: 52,
    found: 2017,
    logo: "https://tse1.mm.bing.net/th?id=OIP.YNBZGYKh06hhjKkwlSdtmQAAAA&pid=Api&P=0&h=180",
    build:
      "https://storage.googleapis.com/ezap-prod/colleges/1227/indian-institute-of-information-technology-bhopal-campus.jpg",
    name: "Indian Institute of Information Technology, Bhopal (IIIT Bhopal)",
    link: "#",
  },
  {
    id: 23,
    category: "IIIT",
    nirf: "NA",
    found: 2017,
    logo: "https://tse1.mm.bing.net/th?id=OIP.emtmdJq1e2-ztZAnw1mUMAAAAA&pid=Api&P=0&h=180",
    build:
      "https://www.searchurcollege.com/exam/admin/search/gallery/college/col_352.jpg",
    name: "Indian Institute of Information Technology, Surat (IIIT Surat)",
    link: "#",
  },
  {
    id: 24,
    category: "IIIT",
    nirf: "NA",
    found: 2017,
    logo: "https://tse2.mm.bing.net/th?id=OIP.bwUfz7vDXS33-URBvhK0cQAAAA&pid=Api&P=0&h=180",
    build: "https://iiitagartala.ac.in/img/c.jpg",
    name: "Indian Institute of Information Technology, Agartala (IIIT Agartala)",
    link: "#",
  },
  {
    id: 25,
    category: "IIIT",
    nirf: "NA",
    found: 2018,
    logo: "https://tse2.mm.bing.net/th?id=OIP.D671XWMGTDtWiWVILYgC0QAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.pMJLDuWNCD8WEuh0n6hyuQAAAA&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Raichur (IIIT Raichur)",
    link: "#",
  },
  {
    id: 26,
    category: "IIIT",
    nirf: "NA",
    found: 2019,
    logo: "https://tse2.mm.bing.net/th?id=OIP.NPoSfXFtDqwIlbsditH-HgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.whoI2brW6t4v-apmr1ZFhAHaE7&pid=Api&P=0&h=180",
    name: "Indian Institute of Information Technology, Vadodara – International Campus Diu (IIITV-ICD Diu)",
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

const IIIT_main = () => {
  return (
    <Layout title="IIIT's Details">
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

export default IIIT_main;
