import backyahd from "../assets/backyahd.png";
import thehoot from "../assets/thehoot.png";
import secretsauce from "../assets/secretsauce.png";
import goldjacket from "../assets/goldjacket.png";
import thejunction from "../assets/thejunction.png";
import thescraper from "../assets/thescraper.png";
import thedogbowl from "../assets/thedogbowl.png";
import theblockbuster from "../assets/theblockbuster.png";
import steamshovel from "../assets/steamshovel.png";
import boomerang from "../assets/boomerang.png";
import karl from "../assets/karl.png";

const eventsData = [
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9883278546225355856/large_69e6902a-3806-458d-a764-d8e9b6db1a12.png",
    name: "HOOT AT OLD BARNWELL & AIKEN GC",
    date: "Friday November 3rd, 2023",
    location: "Aiken Gold Club  •  Old Barnwell, SC",
    isOpen: true,
    base_color: "1B1B1B",
    faq_color: "000",
    register_button_color: "40403F",
    register_button_hover: "636464",
    headerImageSrc: thehoot,
    register_link:
      "https://www.golfgenius.com/register?league_id=9170151817961561265",
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9174040506315856973/large_464e948e-608f-4522-82cc-75db9118f1c8.png",
    name: "BACKYAHD AT ESSEX COUNTY CLUB",
    date: "Monday September 25th, 2023",
    location: "Essex County Club, MA",
    isOpen: false,
    base_color: "963f33",
    faq_color: "5b1811",
    register_button_color: "e85c4d",
    register_button_hover: "c43a30",
    headerImageSrc: backyahd,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9661112696602385811/large_655e070b-cd28-465f-831c-99363dae88cd.png",
    name: "GOLD JACKET AT BROOKSIDE COUNTRY CLUB",
    date: "Monday August 28th, 2023",
    location: "Brookside Country Club, OH",
    isOpen: false,
    base_color: "FDD035",
    faq_color: "93772D",
    register_button_hover: "B19658",
    headerImageSrc: goldjacket,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9798854098584362023/large_9b00e25a-3667-4e35-b570-f66f7d986d53.png",
    name: "SECRET SAUCE AT KINGSLEY CLUB",
    date: "Monday October 2nd, 2023",
    location: "Kingsley Club, MI",
    isOpen: false,
    base_color: "EDCA4A",
    faq_color: "665926",
    register_button_color: "665926",
    register_button_hover: "8C722C",
    headerImageSrc: secretsauce,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9661108941962108306/large_585e47e6-1ff9-4c4b-a377-2b319b3a47d0.jpg",
    name: "THE JUNCTION AT COMMONGROUND",
    date: "Friday August 18th, 2023",
    location: "CommonGround Golf Course, CO",
    isOpen: false,
    base_color: "65933F",
    faq_color: "1C7A7F",
    register_button_hover: "0E9393",
    headerImageSrc: thejunction,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/8207176983965097419/large_109556f1-557d-489f-9bbc-b3ab8b19f8f8.png",
    name: "THE SCRAPER AT PRAIRIE DUNES",
    date: "Monday July 10th, 2023",
    location: "Prairie Dunes Country Club, KS",
    isOpen: false,
    base_color: "502216",
    faq_color: "8E5932",
    register_button_hover: "A5522E",
    headerImageSrc: thescraper,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/8456575828099095603/large_f1a52c01-a4a6-4f68-8e1e-588c63f5c4c5.png",
    name: "DOG BOWL AT YALE GOLF COURSE",
    date: "Saturday June 24th, 2023",
    location: "Yale Golf Course, CT",
    isOpen: false,
    base_color: "28255F",
    faq_color: "2B2F81",
    register_button_hover: "4951A0",
    headerImageSrc: thedogbowl,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9251660368751647858/large_d66c1b32-64fd-4993-9c68-0ea01e0f6772.png",
    name: "BLOCKBUSTER AT HOLLYWOOD GOLF CLUB",
    date: "Tuesday June 20th, 2023",
    location: "Hollywood Golf Club, NJ",
    isOpen: false,
    base_color: "4065B0",
    faq_color: "1F3556",
    register_button_hover: "194072",
    headerImageSrc: theblockbuster,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/8196899023878118853/large_e718d304-ff29-44ad-b2b7-1e21ee241671.png",
    name: "STEAMSHOVEL AT LAWSONIA",
    date: "Saturday May 13th, 2023",
    location: "The Links at Lawsonia, WI",
    isOpen: false,
    base_color: "FCB216",
    faq_color: "A08452",
    register_button_hover: "D3AF75",
    headerImageSrc: steamshovel,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/8329523900778044920/large_389f8c67-d3a1-4343-a98c-7025524dae27.png",
    name: "BOOMERANG AT SOULE PARK",
    date: "Saturday April 29th, 2023",
    location: "Soule Park Golf Club, CA",
    isOpen: false,
    base_color: "432314",
    faq_color: "E19A46",
    register_button_hover: "D6A672",
    headerImageSrc: boomerang,
  },
  {
    logoSrc:
      "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9161036084279270465/large_fa019db7-b901-423c-a185-9f5881b37f44.png",
    name: "KARL AT LAKE MERCED",
    date: "Monday March 20th, 2023",
    location: "Lake Merced GC, CA",
    isOpen: false,
    base_color: "889CA3",
    faq_color: "304E56",
    register_button_hover: "266E7F",
    headerImageSrc: karl,
  },
];

export default eventsData;
