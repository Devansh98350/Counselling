import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../Layout";
import Card from "../card";
import Breadcrumbs from "../../Breadcrumb";
import Banner from "../../Common/Banner";
import Explore from "../../Common/Explore";

const Heading = [
  {
    id: 1,
    category: "CFTI",
    nirf: "151",
    found: 1994,
    logo: "https://tse4.mm.bing.net/th?id=OIP.DXnxKzVe4_UXPxqKUuCteAHaH5&pid=Api&P=0&h=180",
    build:
      "https://cdn.downtoearth.org.in/library/large/2020-08-27/0.89122400_1598512427_untitled.jpg",
    name: "Assam University",
    link: "#",
  },
  {
    id: 2,
    category: "CFTI",
    nirf: 53,
    found: 1955,
    logo: "https://tse2.mm.bing.net/th?id=OIP.41_BaWRoUglo6KdZr21gcAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.h58Sq5kQ1ysIMo677EcdBwHaDt&pid=Api&P=0&h=180",
    name: "Birla Institute of Technology, Mesra, Ranchi",
    link: "#",
  },
  {
    id: 3,
    category: "CFTI",
    nirf: "NA",
    found: 1902,
    logo: "https://tse4.mm.bing.net/th?id=OIP.tk4ZXcauO7b52Z3K1hl3MQAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.HEQ6xCVw7Ap77Q-YvhwqrQHaEQ&pid=Api&P=0&h=180",
    name: "Gurukula Kangri Vishwavidyalaya, Haridwar",
    link: "#",
  },
  {
    id: 4,
    category: "CFTI",
    nirf: "NA",
    found: 2001,
    logo: "https://tse2.mm.bing.net/th?id=OIP.iAoXUwZ9Pfs8gKiH5Z5VXgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.wdZ9L-RI0m9TejJmwiwCWQAAAA&pid=Api&P=0&h=180",
    name: "Indian Institute of Carpet Technology, Bhadohi",
    link: "#",
  },
  {
    id: 5,
    category: "CFTI",
    nirf: "201",
    found: 2012,
    logo: "https://tse4.mm.bing.net/th?id=OIP.G_rWnnL9IGjcaWGG5hss8wAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.pxGYhxNuvTUwlvwyTgmIbwHaCr&pid=Api&P=0&h=180",
    name: "Institute of Infrastructure, Technology, Research and Management-Ahmedabad",
    link: "#",
  },
  {
    id: 6,
    category: "CFTI",
    nirf: "NA",
    found: 1983,
    logo: "https://tse2.mm.bing.net/th?id=OIP.0L705Nb6LTeV56Mk3zHxiAHaHa&pid=Api&P=0&h=180",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/14417905485.jpg",
    name: "Institute of Technology, Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur, (C.G.)",
    link: "#",
  },
  {
    id: 7,
    category: "CFTI",
    nirf: "NA",
    found: 1956,
    logo: "https://tse3.mm.bing.net/th?id=OIP.yAlPpFu4Ia03HUG2inrnLgAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.xI31_UetGnn9QIXpZASK1AHaFj&pid=Api&P=0&h=180",
    name: "J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad",
    link: "#",
  },
  {
    id: 8,
    category: "CFTI",
    nirf: "151-200",
    found: 1966,
    logo: "https://tse3.mm.bing.net/th?id=OIP.cGG9MKlmKiCUlRPjXEJZ7QHaHa&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.KqDeb2NWRrHm2g0Jl0PHLgHaEo&pid=Api&P=0&h=180",
    name: "National Institute of Foundry & Forge Technology, Hatia, Ranchi",
    link: "#",
  },
  {
    id: 9,
    category: "CFTI",
    nirf: "151-200",
    found: 1989,
    logo: "https://www.reviewadda.com/assets/uploads/college/logo/LOGO_13476.png",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.4DymgpefkhnAmVpBupFG2QHaE8&pid=Api&P=0&h=180",
    name: "Sant Longowal Institute of Engineering and Technology",
    link: "#",
  },
  {
    id: 10,
    category: "CFTI",
    nirf: "101",
    found: 2001,
    logo: "https://www.excelbee.com/images/university/mizoram-university-aizwal-logo.png",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.I2FbuwhaC-0dEXL-GJYD8QHaE6&pid=Api&P=0&h=180",
    name: "Mizoram University, Aizawl",
    link: "#",
  },
  {
    id: 11,
    category: "CFTI",
    nirf: "69",
    found: 2009,
    logo: "https://img.collegepravesh.com/2022/06/Tezpur-University-Logo-150x150.png",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.ysNFLRm9AkKPVaCbRkRaPQHaES&pid=Api&P=0&h=180",
    name: "School of Engineering, Tezpur University, Napaam, Tezpur",
    link: "#",
  },
  {
    id: 12,
    category: "CFTI",
    nirf: "11",
    found: 2008,
    logo: "https://tse2.mm.bing.net/th?id=OIP.7fDcebC6vlmq5PCtxahWtQAAAA&pid=Api&P=0&h=180",
    build:
      "https://static.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/273/2018/2/13/SPA-Bhopal-6.png",
    name: "School of Planning & Architecture, Bhopal",
    link: "#",
  },
  {
    id: 13,
    category: "CFTI",
    nirf: "5",
    found: 1940,
    logo: "https://tse3.mm.bing.net/th?id=OIP.GyznZyzkcHLVkJuOlJDT9AAAAA&pid=Api&P=0&h=180",
    build:
      "https://1.bp.blogspot.com/-50_YlQyi_c8/Xz1sM8_7WfI/AAAAAAAAAEM/401mvF08rYgojamzHlybsvG-P33xrR71gCLcBGAsYHQ/s800/School%2Bof%2BPlanning%2Band%2BArchitecture.jpg",
    name: "School of Planning & Architecture, New Delhi",
    link: "#",
  },
  {
    id: 14,
    category: "CFTI",
    nirf: "18",
    found: 2015,
    logo: "https://tse3.mm.bing.net/th?id=OIP.Wwlgq2VCP67rJ9Q2PIAQZAAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.VNMdjN5KWURCAwKK9Jo1uwHaFv&pid=Api&P=0&h=180",
    name: "School of Planning & Architecture: Vijayawada",
    link: "#",
  },
  {
    id: 15,
    category: "CFTI",
    nirf: "26",
    found: 2004,
    logo: "https://tse1.mm.bing.net/th?id=OIP.CloZCulE4F09TA3dc14P3QAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse3.mm.bing.net/th?id=OIP.-qakoO7Ceo2twHmtJD7GlQHaCu&pid=Api&P=0&h=180",
    name: "Shri Mata Vaishno Devi University, Katra, Jammu & Kashmir",
    link: "#",
  },
  {
    id: 16,
    category: "CFTI",
    nirf: "NA",
    found: 1973,
    logo: "https://yt3.ggpht.com/a/AGF-l7_f2bSX3JM3woaofDPr9tOILkYlCd3YIc0gug=s900-c-k-c0xffffffff-no-rj-mo",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.T92pMWttOrmTpCbWnygZYgHaEK&pid=Api&P=0&h=180",
    name: "HNB Garhwal University Srinagar (Garhwal)",
    link: "#",
  },
  {
    id: 17,
    category: "CFTI",
    nirf: "55",
    found: 2014,
    logo: "https://zerovigyan.com/wp-content/uploads/IIIT-Naya-Raipur-Logo.webp",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.2F1GVMkuLITZPZnZ69BUgQHaD6&pid=Api&P=0&h=180",
    name: "International Institute of Information Technology, Naya Raipur",
    link: "#",
  },
  {
    id: 18,
    category: "CFTI",
    nirf: "NA",
    found: 1974,
    logo: "https://www.pngfind.com/pngs/m/312-3122746_university-of-hyderabad-logo-hd-png-download.png",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/appImage/15090869991448022137UOHNEW.jpg",
    name: "University of Hyderabad",
    link: "#",
  },
  {
    id: 19,
    category: "CFTI",
    nirf: "101-151",
    found: 1921,
    logo: "https://tse4.mm.bing.net/th?id=OIP.6z_7B4g3u9aU_HnyI-6eewAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.9ODL6CzHxCfFH8wAWBfDXQHaEK&pid=Api&P=0&h=180",
    name: "Punjab Engineering College, Chandigarh",
    link: "#",
  },
  {
    id: 20,
    category: "CFTI",
    nirf: "2",
    found: 1969,
    logo: "https://tse1.mm.bing.net/th?id=OIP.OwMBa2J4pwhX48_MDm3BxAHaJK&pid=Api&P=0&h=180",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.rxgeUCNO5Hj3yK30EnXw1gHaE8&pid=Api&P=0&h=180",
    name: "Jawaharlal Nehru University, Delhi",
    link: "#",
  },
  {
    id: 21,
    category: "CFTI",
    nirf: "84",
    found: 2006,
    logo: "https://tse1.mm.bing.net/th?id=OIP.LqjXAMwamVt_iDSUk03IIgHaHd&pid=Api&P=0&h=180",
    build:
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/220/2018/4/18/International-Institute-of-Information-Technology-Bhubaneswar-2.jpg",
    name: "International Institute of Information Technology, Bhubaneswar",
    link: "#",
  },
  {
    id: 22,
    category: "CFTI",
    nirf: "NA",
    found: 2006,
    logo: "https://cit.ac.in/images/cit-logo.png",
    build:
      "https://nenow.in/wp-content/uploads/2019/01/Central-Institute-of-Technology-1140x570.jpg",
    name: "Central institute of Technology Kokrajar, Assam",
    link: "#",
  },
  {
    id: 23,
    category: "CFTI",
    nirf: "151-200",
    found: 1984,
    logo: "https://tse4.mm.bing.net/th?id=OIP.-RowyzSH2bBS2OijVlpEhgHaK-&pid=Api&P=0&h=180",
    build:
      "https://www.gkseries.com/blog/wp-content/uploads/2020/05/Pondicherry-Engineering-College-Puducherry.jpg",
    name: "Pondicherry Engineering College, Puducherry",
    link: "#",
  },
  {
    id: 24,
    category: "CFTI",
    nirf: "52",
    found: 2010,
    logo: "https://tse2.mm.bing.net/th?id=OIP.lnd5XppXWRZtoS1ZlQeUFAHaHa&pid=Api&P=0&h=180",
    build:
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9038/2020/8/20/Campus-View%20of%20Ghani%20Khan%20Choudhury%20Institute%20of%20Engineering%20And%20Technology%20Malda_Campus-View.png",
    name: "Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal",
    link: "#",
  },
  {
    id: 25,
    category: "CFTI",
    nirf: "151",
    found: 2009,
    logo: "https://tse1.mm.bing.net/th?id=OIP.qx7SxMdcG442DFWspbakKwHaIR&pid=Api&P=0&h=180",
    build:
      "https://tse4.mm.bing.net/th?id=OIP.EL1HwKZlD4RHPyEqZUQlrgHaEq&pid=Api&P=0&h=180",
    name: "Central University of Rajasthan, Rajasthan",
    link: "#",
  },
  {
    id: 26,
    category: "CFTI",
    nirf: "151-200",
    found: 2006,
    logo: "https://tse4.mm.bing.net/th?id=OIP.s4Q-_9yLV8Oidr8gZ3ke0wAAAA&pid=Api&P=0&h=180",
    build:
      "https://storage.googleapis.com/ezap-prod/colleges/263/national-institute-of-food-technology-entrepreneurship-and-management-campus.jpg",
    name: "National Institute of Food Technology Entrepreneurship and Management, Sonepat, Haryana",
    link: "#",
  },
  {
    id: 27,
    category: "CFTI",
    nirf: "6",
    found: 1967,
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirNMpWyO1Rg5v8B24KBHf9T1nxIlL52C0Zbv1nXZUs3I5LYIgcppUISAmVIiJuL0n7_b64e2HS8r5gAxDdAGtMTXGavP2CSRRCaXsarx3o6xBerMr-ED6LST_BO9ivGCQiVi-7ucxLSgiOme6NMr0Pwh87pYpq7Sw5sXC_K9aC4i7ChKiUv3N1s0tAxQ/w640-h640/Indian%20Institute%20of%20Food%20Processing%20Technology%20(IIFPT),%20Thanjavur%20Recruitment%202022%20-%20Apply%20here%20for%20Young%20Professional,%20Consultant%20Posts%20-.jpg",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.KQAhWh70t7zj_tClK0u6qgHaDz&pid=Api&P=0&h=180",
    name: "Indian Institute of Food Processing Technology, Thanjavur, Tamil Nadu",
    link: "#",
  },
  {
    id: 28,
    category: "CFTI",
    nirf: "NA",
    found: 1986,
    logo: "https://www.reviewadda.com/assets/uploads/college/logo/LOGO_4265.png",
    build:
      "https://tse1.mm.bing.net/th?id=OIP.L_93DfTI3S_kqnkGT-ltCgAAAA&pid=Api&P=0&h=180",
    name: "North Eastern Regional Institute of Science and Technology, Nirjuli, Itanagar, Arunachal Pradesh",
    link: "#",
  },
  {
    id: 29,
    category: "CFTI",
    nirf: "52",
    found: 1984,
    logo: "https://tse2.mm.bing.net/th?id=OIP.2NcIoA6s5KCGZPHgw001HwAAAA&pid=Api&P=0&h=180",
    build:
      "https://tse2.mm.bing.net/th?id=OIP.dbxWv3KksNqMiHc2ZBuTiAHaFj&pid=Api&P=0&h=180",
    name: "Indian Institute of Handloom Technology(IIHT), Varanasi",
    link: "#",
  },
  {
    id: 30,
    category: "CFTI",
    nirf: "NA",
    found: 2004,
    logo: "https://www.osmaniauniversity.org/wp-content/uploads/2020/04/CSVTU.jpg",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/1590412600csvtu%20infra2.jpg",
    name: "Chhattisgarh Swami Vivekananda Technical University (CVSTU), Bhilai",
    link: "#",
  },
  {
    id: 31,
    category: "CFTI",
    nirf: "NA",
    found: 1933,
    logo: "https://www.wemakescholars.com/admin/uploads/providers/Rise9V2hc9mDbNX4NjfalUg2wuzqSfn2.jpg",
    build: "https://iocb.ictmumbai.edu.in/SliderPhoto/3.jpg",
    name: "Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar",
    link: "#",
  },
  {
    id: 32,
    category: "CFTI",
    nirf: "NA",
    found: 1973,
    logo: "https://tse3.mm.bing.net/th?id=OIP.evP2XMFnvkhK19KwtDKYeAHaHa&pid=Api&P=0&h=180",
    build:
      "https://images.static-collegedunia.com/public/college_data/images/campusimage/1433229625north%201.jpg",
    name: "North-Eastern Hill University, Shillong",
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

const CFTI_main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="CFTI's Details">
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
      <Banner />
      <Explore />
    </Layout>
  );
};

export default CFTI_main;
