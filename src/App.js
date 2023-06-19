import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "react-image-gallery/styles/css/image-gallery.css";

import NavigationBar from './layout/NavBar';

import Works from './pages/Works';
import Home from './pages/Home'
import View from './pages/View';
import ListByYear from './pages/ListByYear';
import ListByTag from './pages/ListByTag';
import ListBySubtitle from './pages/ListBySubtitle';

import woopWeb1 from './assets/woop_web_1.jpg'
import woopWeb2 from './assets/woop_web_2.jpg'
import woopWeb3 from './assets/woop_web_3.jpg'
import woopRider1 from './assets/woop_rider_1.jpg'
import woopRider2 from './assets/woop_rider_2.jpg'
import woopRider3 from './assets/woop_rider_3.jpg'
import woopRider4 from './assets/woop_rider_4.jpg'
import woopRider5 from './assets/woop_rider_5.jpg'
import woopCustomer1 from './assets/woop_customer_1.jpg'
import woopCustomer2 from './assets/woop_customer_2.jpg'
import woopCustomer3 from './assets/woop_customer_3.jpg'
import woopCustomer4 from './assets/woop_customer_4.jpg'
import woopCustomer5 from './assets/woop_customer_5.jpg'
import woopCustomer6 from './assets/woop_customer_6.jpg'
import woopAssetModules from './assets/woop_assets_modules.png'
import woopAssetSubModules from './assets/woop_assets_submodules.png'
import woopAssetMinis from './assets/woop_assets_mini.png'
import woopAssetFeatures from './assets/woop_assets_featuresbackground.png'
import woopAssetPlaceholders from './assets/woop_assets_placeholders.jpg'
import woopAssetErrors from './assets/woop_assets_error.png'
import asiawise1 from './assets/asiawise_1.jpg'
import asiawise2 from './assets/asiawise_2.jpg'
import asiawise3 from './assets/asiawise_3.jpg'
import asiawise4 from './assets/asiawise_4.jpg'
import capstone1 from './assets/capstone_1.jpg'
import capstone2 from './assets/capstone_2.jpg'
import capstone3 from './assets/capstone_3.jpg'
import capstone4 from './assets/capstone_4.jpg'
import capstone5 from './assets/capstone_5.jpg'
import capstone6 from './assets/capstone_6.jpg'
import capstone7 from './assets/capstone_7.jpg'
import capstone8 from './assets/capstone_8.jpg'
import capstone9 from './assets/capstone_9.jpg'
import capstone10 from './assets/capstone_10.jpg'
import capstone11 from './assets/capstone_11.jpg'
import capstone12 from './assets/capstone_12.jpg'
import capstone13 from './assets/capstone_13.jpg'
import capstone14 from './assets/capstone_14.jpg'
import capstone15 from './assets/capstone_15.jpg'
import baet1 from './assets/baet_1.jpg'
import baet2 from './assets/baet_2.jpg'
import napolcom1 from './assets/napolcom_1.jpg'
import napolcom2 from './assets/napolcom_2.jpg'
import icfp1 from './assets/icfp_1.jpg'
import icfp2 from './assets/icfp_2.jpg'
import icfp3 from './assets/icfp_3.jpg'
import icfp4 from './assets/icfp_4.jpg'
import icfpContent from './assets/icfp_content.pdf'
import asiawiseManual1 from './assets/asiawise_math_1.jpg'
import asiawiseManual2 from './assets/asiawise_math_2.jpg'
import asiawiseManual3 from './assets/asiawise_math_3.jpg'
import asiawiseManual4 from './assets/asiawise_math_4.jpg'
import asiawiseManual5 from './assets/asiawise_math_5.jpg'
import asiawiseBanner1 from './assets/asiawise_banner_1.jpg'
import asiawiseBanner2 from './assets/asiawise_banner_2.jpg'
import asiawiseBanner3 from './assets/asiawise_banner_3.jpg'
import asiawiseBanner4 from './assets/asiawise_banner_4.jpg'
import asiawiseBanner5 from './assets/asiawise_banner_5.jpg'
import asiawiseBanner6 from './assets/asiawise_banner_6.jpg'
import asiawiseBanner7 from './assets/asiawise_banner_7.jpg'
import boot1 from './assets/boot_1.jpg'
import boot2 from './assets/boot_2.jpg'
import boot3 from './assets/boot_3.jpg'
import boot4 from './assets/boot_4.jpg'
import bootContent from './assets/boot_content.mp4'
import wallpaper1 from './assets/wallpaper_1.jpg'
import wallpaper2 from './assets/wallpaper_2.jpg'
import wallpaper3 from './assets/wallpaper_3.jpg'
import wallpaper4 from './assets/wallpaper_4.jpg'
import wallpaper5 from './assets/wallpaper_5.jpg'
import wallpaper6 from './assets/wallpaper_6.jpg'
import wallpaper7 from './assets/wallpaper_7.jpg'
import wallpaper8 from './assets/wallpaper_8.jpg'
import wallpaper9 from './assets/wallpaper_9.jpg'
import wallpaper10 from './assets/wallpaper_10.jpg'
import wallpaper11 from './assets/wallpaper_11.jpg'
import katagalugan1 from './assets/katagalugan_1.jpg'
import katagalugan2 from './assets/katagalugan_2.jpg'
import katagalugan3 from './assets/katagalugan_3.jpg'
import playlist1 from './assets/playlist_1.jpg'
import playlist2 from './assets/playlist_2.jpg'
import playlist3 from './assets/playlist_3.jpg'
import playlist4 from './assets/playlist_4.jpg'
import playlist5 from './assets/playlist_5.jpg'
import brigada1 from './assets/brigada_1.jpg'
import brigada2 from './assets/brigada_2.jpg'
import dengue1 from './assets/dengue_1.jpg'
import dengue2 from './assets/dengue_2.jpg'
import india1 from './assets/india_1.jpg'
import india2 from './assets/india_2.jpg'
import india3 from './assets/india_3.jpg'
import miscellaneous1 from './assets/miscellaneous_1.jpg'
import miscellaneous2 from './assets/miscellaneous_2.jpg'
import miscellaneous3 from './assets/miscellaneous_3.jpg'
import miscellaneous4 from './assets/miscellaneous_4.jpg'
import miscellaneousContent from './assets/miscellaneous_content.mp4'
import uno1 from './assets/uno_1.jpg'
import uno2 from './assets/uno_2.jpg'
import uno3 from './assets/uno_3.jpg'
import uno4 from './assets/uno_4.jpg'
import roll1 from './assets/roll_1.jpg'
import roll2 from './assets/roll_2.jpg'
import roll3 from './assets/roll_3.jpg'
import roll4 from './assets/roll_4.jpg'

function App() {
  const works = [
    {
      "id": "woop",
      "title": "Woop!",
      "category": "development",
      "subtitle": "Internship Project",
      "description": "Woop! is a three-component system composed of an admin web app, customer mobile app and a rider mobile app. It was designed to handle e-commerce processes such as order placement, order fulfillment, and order delivery. For the web application, React and Bootstrap were used while for the mobile applications, Dart and Flutter. As for the backend and API, Django and Axios were utilized",
      "years": [2023],
      "contributions": [
        "Spearheaded the documentation process",
        "Lead the UI/UX Team",
        "Oversaw front-end developers' works",
        "Developed the web application",
        "Developed the UI of the mobile rider application",
        "Co-developed the UI of the mobile customer application",
        "Created the assets"
      ],
      "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome", "Web Development", "Flutter", "Dart"],
      "screens": [
        {

          "img": woopWeb2,
          "desc": "The scheduling page allows admins to approve orders and assign them with riders.",
        },
        {
          "img": woopWeb1,
          "desc": "The records page allows admins to review completed, denied, and approved orders.",
        },
        {
          "img": woopWeb3,
          "desc": "The establishments page allows admin to add, edit, and remove partner stores.",
        },
        {
          "img": woopRider1,
          "desc": "The login screen allows riders to sign in.",
        },
        {
          "img": woopRider2,
          "desc": "The protected screen determines the rider's shift schedule.",
        },
        {
          "img": woopRider3,
          "desc": "The tasks screen allows riders to see the orders assigned to them.",
        },
        {
          "img": woopRider4,
          "desc": "The transaction logs screen allows riders to see errands they've accomplished.",
        },
        {
          "img": woopRider5,
          "desc": "The account screen allows riders to see their information and schedule.",
        },
        {
          "img": woopCustomer1,
          "desc": "The registration screen allows customers to sign up for Woop!.",
        },
        {
          "img": woopCustomer2,
          "desc": "The login screen allows customers to sign in.",
        },
        {
          "img": woopCustomer3,
          "desc": "The home screen allows customers to see promotions and select an errand.",
        },
        {
          "img": woopCustomer4,
          "desc": "The pasabuy screen allows customers to ask a rider to buy something for them.",
        },
        {
          "img": woopCustomer5,
          "desc": "The parcel delivery screen allows customers to ask a rider to deliver a letter, document, or parcel for them.",
        },
        {
          "img": woopCustomer6,
          "desc": "The account screen allows customers to see their information and ask for help.",
        },
      ]
    },
    {
      "id": "woop-assets",
      "title": "Woop! Assets",
      "category": "design",
      "subtitle": "Internship Project",
      "description": "A collection of icons, backgrounds, foregrounds, and placeholders used acrossed the different components of Woop!",
      "years": [2023],
      "tags": ["Photoshop", "Graphic design", "Assets", "Icons"],
      "screens": [
        {
          "img": woopAssetModules,
          "desc": "Icons for the main services offered by Woop! From top-left to bottom-right: Parcel Delivery, Bills Payment, Food Delivery, Pasabuy, and Custom",
        },
        {
          "img": woopAssetSubModules,
          "desc": "Icons for every subservice of Parcel Delivery and Pasabuy. From top-left to bottom-right: Letter, Document, Parcel, Medicine, and Grocery"
        },
        {
          "img": woopAssetMinis,
          "desc": "Icons for the main services offered by Woop! but simplified for better readability.",
        },
        {
          "img": woopAssetFeatures,
          "desc": "Banner that displays the different features of Woop!.",
        },
        {
          "img": woopAssetPlaceholders,
          "desc": "Set of images used in place of empty establishment photos.",
        },
        {
          "img": woopAssetErrors,
          "desc": "Icons used in cases of empty lists or data errors.",
        },
      ]
    },
    {
      "id": "ims",
      "title": "IMS",
      "category": "development",
      "subtitle": "Capstone Project",
      "description": "Senior thesis project: An inventory management system that has warehouse mapping, inventory analytics, barcode auto-generation, and a mobile companion that can scan barcodes.",
      "years": [2022, 2023],
      "reference": "https://inventoryapp-330808.web.app/",
      "contributions": [
        "Acted as project leader",
        "Spearheaded the documentation process",
        "Served as the main front-end developer",
        "Oversaw UI/UX design",
        "Headed the back-end development",
      ],
      "tags": ["Web development", "UI design", "Front-end", "Back-end", "Django", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
      "screens": [
        {
          "img": capstone1,
          "desc": "The login page showcases the system's features and allows the users to sign in to IMS."
        },
        {
          "img": capstone2,
          "desc": "The home pages displays the summarized performance of the business in 4 different time periods."
        },
        {
          "img": capstone3,
          "desc": "From the home page, users can generate an order of a low/empty stock product via email or text message."
        },
        {
          "img": capstone4,
          "desc": "The stockcard page lists down all the products of the business and their respective information, and stats."
        },
        {
          "img": capstone5,
          "desc": "The warehouse page lists down all the warehouses and their respective map."
        },
        {
          "img": capstone6,
          "desc": "Clicking on a storage displays the storage and products inside of it."
        },
        {
          "img": capstone7,
          "desc": "When editing is toggled, a storage's flooring, type, and products can be edited."
        },
        {
          "img": capstone8,
          "desc": "Products of a storage can be edited to and fro the stockcard and storage."
        },
        {
          "img": capstone9,
          "desc": "The transactions page displays all the transactions of the business. Also, each transaction can be voided."
        },
        {
          "img": capstone10,
          "desc": "The suppliers page shows all the suppliers of the business and their respective information and catalogue."
        },
        {
          "img": capstone11,
          "desc": "The analytics page presents a chart that creates a trend of individual product movement."
        },
        {
          "img": capstone12,
          "desc": "The print codes page lists down all the products and their barcode. The list can be converted to pdf."
        },
        {
          "img": capstone13,
          "desc": "The generate reports page generates different reports whose data can be filtered out according to product type and date."
        },
        {
          "img": capstone14
        },
        {
          "img": capstone15,
          "desc": "The user management page allows addition, modification, deactivation and deletion of mobile users."
        }
      ]
    },
    {
      "id": "dengue",
      "title": "Dengue Fever Pamphlet",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A pamphlet made using Photoshop that gives relevant information about Dengue Fever — it's causes, symptoms, and treatments.",
      "years": [2021],
      "tags": ["Photoshop", "Graphic design", "Pamphlet"],
      "screens": [
        {
          "img": dengue1
        },
        {
          "img": dengue2
        }
      ]
    },
    {
      "id": "roll",
      "title": "Advanced Roll-a-ball Game",
      "category": "development",
      "subtitle": "Course Project",
      "description": "A roll-a-ball game in the first person point of view. The ball must obtain all the orbs while passing over the obstacles.",
      "years": [2020],
      "tags": ["Unity", "Game development", "Scripting"],
      "screens": [
        {
          "img": roll1
        },
        {
          "img": roll2
        },
        {
          "img": roll3
        },
        {
          "img": roll4
        }
      ],
      "content": { "type": 'youtube', "src": "https://www.youtube.com/embed/Siw9wOZV4Bg?rel=0" }
    },
    {
      "id": "uno",
      "title": "Uno Punto Game",
      "category": "development",
      "subtitle": "Course Project",
      "description": "Uno Punto is a vertical scrolling game developed using Unity. It is about the adventure of Uno Punto (0.1), the last known living germ from the tragic Baygon spraying incident that destroyed his home and people. He was away when the incident happened so he refuse to believe that his family are gone so he travels the world of the homeowner to look for his family.",
      "years": [2020],
      "tags": ["Unity", "Game development", "Scripting"],
      "screens": [
        {
          "img": uno1
        },
        {
          "img": uno2
        },
        {
          "img": uno3
        },
        {
          "img": uno4
        }
      ],
      "content": { "type": 'youtube', "src": "https://www.youtube.com/embed/HcJnfMdvg8E?rel=0" }
    },
    {
      "id": "asiawise",
      "title": "Asiawise Website",
      "category": "development",
      "subtitle": "Freelance Project",
      "description": "A commisioned website that showcases the background and services offered by Asiawise. The front-end framework used was Ruby on Rails.",
      "years": [2020],
      "reference": "https://asiawiseu.com/",
      "tags": ["Web development", "UI design", "Front-end", "Ruby", "Javascript", "HTML", "CSS", "Bootstrap", "FontAwesome"],
      "screens": [
        {
          "img": asiawise1,
          "desc": "The home section displays announcements and allows users to enroll in their programs."
        },
        {
          "img": asiawise2,
          "desc": "The background of Asiawise is displayed via modal and separated by tabs.",
        },
        {
          "img": asiawise3,
          "desc": "The programs and products section shows the different programs offered by Asiawise.",
        },
        {
          "img": asiawise4,
          "desc": "Clicking on a program displays its full information in a modal.",
        }
      ]
    },
    {
      "id": "baet",
      "title": "Bait's Kakanin Advertisements",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A commisioned set of digital posters as advertisement materials for a food business.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Advertising"],
      "screens": [
        {
          "img": baet1
        },
        {
          "img": baet2
        }
      ]
    },
    {
      "id": "napolcom",
      "title": "NAPOLCOM Reviewer Book Cover",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A commisioned book cover layout done in Photoshop for a NAPOLCOM Reviewer.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Book Cover"],
      "screens": [
        {
          "img": napolcom1
        },
        {
          "img": napolcom2
        }
      ]
    },
    {
      "id": "asiawise-manuals",
      "title": "Asiawise Math Manuals",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A collection of manuals on how to interpret or evaluate math topics. Editing was made using Adobe Photoshop.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Manual", "Infographic"],
      "screens": [
        {
          "img": asiawiseManual1
        },
        {
          "img": asiawiseManual2
        },
        {
          "img": asiawiseManual3
        },
        {
          "img": asiawiseManual4
        },
        {
          "img": asiawiseManual5
        }
      ]
    },
    {
      "id": "asiawise-banners",
      "title": "Asiawise Google Classroom Covers",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A collection of cover photos used on the online classes of Asiawise. Editing was made using Adobe Photoshop.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Cover"],
      "screens": [
        {
          "img": asiawiseBanner1
        },
        {
          "img": asiawiseBanner2
        },
        {
          "img": asiawiseBanner3
        },
        {
          "img": asiawiseBanner4
        },
        {
          "img": asiawiseBanner5
        },
        {
          "img": asiawiseBanner6
        },
        {
          "img": asiawiseBanner7
        },
      ]
    },
    {
      "id": "brigada",
      "title": "Brigada Eskwela '20 Banner",
      "category": "design",
      "subtitle": "Commisioned Work",
      "description": "A Photoshop-created poster for Carolina National High School donation advisory held during their 2020 Brigada Eskwela.",
      "years": [2020],
      "tags": ["Photoshop", "Graphic design", "Banner"],
      "screens": [
        {
          "img": brigada1
        },
        {
          "img": brigada2
        }
      ]
    },
    {
      "id": "wallpapers",
      "title": "Minimalist Wallpapers",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A diverse set of wallpapers I made in Photoshop for my former Android phone and old desktop pc.",
      "years": [2019, 2020],
      "tags": ["Photoshop", "Graphic design", "Wallpaper"],
      "screens": [
        {
          "img": wallpaper1
        },
        {
          "img": wallpaper2
        },
        {
          "img": wallpaper3
        },
        {
          "img": wallpaper4
        },
        {
          "img": wallpaper5
        },
        {
          "img": wallpaper6
        },
        {
          "img": wallpaper7
        },
        {
          "img": wallpaper8
        },
        {
          "img": wallpaper9
        },
        {
          "img": wallpaper10
        },
        {
          "img": wallpaper11
        }
      ]
    },
    {
      "id": "katagalugan",
      "title": "Katagalugan Album Covers",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A set of album covers I made in Adobe Photoshop for the imaginary band Katagalugan.",
      "years": [2019, 2020],
      "tags": ["Photoshop", "Graphic design", "Album cover"],
      "screens": [
        {
          "img": katagalugan1
        },
        {
          "img": katagalugan2
        },
        {
          "img": katagalugan3
        }
      ]
    },
    {
      "id": "india",
      "title": "India's Living Treasures Booklet",
      "category": "design",
      "subtitle": "Course  Project",
      "description": "A booklet that features three animals that are unique only to India. Editing was done in Photoshop.",
      "years": [2018],
      "tags": ["Photoshop", "Graphic design", "Booklet"],
      "screens": [
        {
          "img": india1
        },
        {
          "img": india2
        },
        {
          "img": india3
        }
      ]
    },
    {
      "id": "playlist",
      "title": "Playlist Arts",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A collection of cover arts I made in Photoshop for my music playlist. It is used in BlackPlayer Ex music player.",
      "years": [2018],
      "tags": ["Photoshop", "Graphic design", "Cover art"],
      "screens": [
        {
          "img": playlist1
        },
        {
          "img": playlist2
        },
        {
          "img": playlist3
        },
        {
          "img": playlist4
        },
        {
          "img": playlist5
        }
      ]
    },
    {
      "id": "boot",
      "title": "Custom Boot Animation",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A customized boot animation I did in Adobe Flash for my O+ 8.5 Android phone.",
      "years": [2016],
      "tags": ["Adobe Flash", "Graphic design", "Animation"],
      "screens": [
        {
          "img": boot1
        },
        {
          "img": boot2
        },
        {
          "img": boot3
        },
        {
          "img": boot4
        }
      ],
      "content": { "type": 'video', "src": bootContent }
    },
    {
      "id": "icfp",
      "title": "ICFP II Magazine",
      "category": "design",
      "subtitle": "Course Project",
      "description": "A documentation magazine of our outreach program in Casuray, Magarao. Editing was made using Adobe InDesign and Photoshop.",
      "years": [2016],
      "tags": ["Photoshop", "Graphic design", "Magazine"],
      "contributions": [
        "Lead the documentation team",
        "Acted as editor-in-chief",
        "Developed the flow of the magazine",
        "Conceptualized the layouts of each content",
        "Produced hand-drawn graphics",
        "Designed the layout of all the pages using Photoshop"
      ],
      "screens": [
        {
          "img": icfp1
        },
        {
          "img": icfp2
        },
        {
          "img": icfp3
        },
        {
          "img": icfp4
        }
      ],
      "content": { "type": 'document', "src": icfpContent }
    },
    {
      "id": "miscellaneous",
      "title": "Miscellaneous Artworks",
      "category": "design",
      "subtitle": "Personal Project",
      "description": "A collection of diverse artworks I made which I think are worth showcasing.",
      "years": [2018, 2019, 2021, 2022],
      "tags": ["Photoshop", "Graphic design", "Cover art", "Animation", "Infographic", "Manual", "Poster", "Banner"],
      "screens": [
        {
          "img": miscellaneous1,
          "desc": "An instruction manual made using Photoshop on how to play Pusoy Dos."
        },
        {
          "img": miscellaneous2,
          "desc": "A Photoshop-created poster for an event in AdNU CS department."
        },
        {
          "img": miscellaneous3,
          "desc": "An infographic made using Photoshop about the Durkheim Museum."
        },
        {
          "img": miscellaneous4,
          "desc": "A Christmas-themed banner for our 2022 family reunion."
        },
      ],
      "content": { "type": 'video', "src": miscellaneousContent }
    },
  ]
  
  return (
    <div id="main">
      <NavigationBar/>
      <div className="w-100 py-1 px-2 py-md-2 px-md-4 py-lg-4 px-lg-5">
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/works"
            element={
              <Works
                type={["development", "design"]}
                isCategoryVisible={true}
                data={works}
              />}
          />
          <Route 
            path="/development"
            element={
              <Works
                type={["development"]}
                data={works}
              />}
          />
          <Route 
            path="/design"
            element={
              <Works
                type={["design"]}
                data={works}
              />}
          />
          <Route 
            path="/view"
            element={
              <View
              />}
          />
          <Route 
            path="/listbyyear"
            element={
              <ListByYear
                data={works}
              />}
          />
          <Route 
            path="/listbytag"
            element={
              <ListByTag
                data={works}
              />}
          />
          <Route 
            path="/listbytype"
            element={
              <ListBySubtitle
                data={works}
              />}
          />
          {works.map((work) => {
            return(
              <Route 
                key={work.id}
                path={"/view-work/" + work.id}
                element={
                  <View
                    data={work}
                  />
                }
              />
            )
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
