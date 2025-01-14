import React from "react";
import ReactDOM from "react-dom/client";

//header
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating}  = resData.info;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo" src={
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/" +cloudinaryImageId 
                } />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4> 
            <h4>{resData.info.avgRating}star</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          "header": {
            "title": "What's on your mind?",
            "headerStyling": {
              "padding": {
                "left": 16,
                "top": 16,
                "bottom": 4
              }
            }
          },
          "layout": {
            "rows": 1,
            "columns": 10,
            "horizontalScrollEnabled": true,
            "itemSpacing": 24,
            "widgetPadding": {
              
            },
            "containerStyle": {
              "containerPadding": {
                "left": 8,
                "top": 8,
                "right": 12,
                "bottom": 4
              }
            },
            "scrollBar": {
              
            },
            "widgetTheme": {
              "defaultMode": {
                "backgroundColour": "#FFFFFF",
                "theme": "THEME_TYPE_LIGHT"
              },
              "darkMode": {
                "theme": "THEME_TYPE_DARK"
              }
            }
          },
          "imageGridCards": {
            "info": [
              {
                "id": "750579",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                  "text": "Pizzas",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for pizza",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750581",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                  "text": "North Indian",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for north indian",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750589",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                  "text": "Burgers",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for burger",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750591",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                  "text": "Biryani",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for biryani",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "749868",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                  "text": "Cakes",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for cake",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750222",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                  "text": "Rolls",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for roll",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750587",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                  "text": "Chinese",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for chinese",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750131",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                  "text": "Dosa",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for dosa",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750201",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                  "text": "Paratha",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for paratha",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "749768",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                  "text": "Momos",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for momos",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "749772",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                  "text": "Noodles",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for noodles",
                  "altTextCta": "open"
                },
                "entityId": "80463",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750206",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                  "text": "Pasta",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for pasta",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750571",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                  "text": "Pure Veg",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for veg",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750586",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
                  "text": "Gulab Jamun",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for gulab jamun",
                  "altTextCta": "open"
                },
                "entityId": "80430",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750216",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                  "text": "Pav Bhaji",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for pav bhaji",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750635",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_CCS_Kebabs&type=rcv2",
                  "text": "Kebabs",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for kebabs",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80451&tags=layout_CCS_Kebabs",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "749876",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                  "text": "Chole Bhature",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for chhole bhatoore",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750596",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                  "text": "Ice Cream",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for icecream",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "749760",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                  "text": "Khichdi",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for khichdi",
                  "altTextCta": "open"
                },
                "entityId": "80455",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              },
              {
                "id": "750208",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                  "text": "Pastry",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for Pastry",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
                "frequencyCapping": {
                  
                },
                "externalMarketing": {
                  
                }
              }
            ],
            "style": {
              "width": {
                "type": "TYPE_RELATIVE",
                "value": 0.2941,
                "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
              },
              "height": {
                "type": "TYPE_RELATIVE",
                "value": 1.2444,
                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
              }
            }
          },
          "id": "whats_on_your_mind",
          "gridElements": {
            "infoWithStyle": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
              "info": [
                {
                  "id": "750579",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                    "text": "Pizzas",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for pizza",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750581",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                    "text": "North Indian",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for north indian",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750589",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                    "text": "Burgers",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for burger",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750591",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    "text": "Biryani",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for biryani",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "749868",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                    "text": "Cakes",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for cake",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750222",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                    "text": "Rolls",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for roll",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750587",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                    "text": "Chinese",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for chinese",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750131",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                    "text": "Dosa",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for dosa",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750201",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                    "text": "Paratha",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for paratha",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "749768",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                    "text": "Momos",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for momos",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "749772",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    "text": "Noodles",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for noodles",
                    "altTextCta": "open"
                  },
                  "entityId": "80463",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750206",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                    "text": "Pasta",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pasta",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750571",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                    "text": "Pure Veg",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for veg",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750586",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
                    "text": "Gulab Jamun",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for gulab jamun",
                    "altTextCta": "open"
                  },
                  "entityId": "80430",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750216",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                    "text": "Pav Bhaji",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for pav bhaji",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750635",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_CCS_Kebabs&type=rcv2",
                    "text": "Kebabs",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for kebabs",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80451&tags=layout_CCS_Kebabs",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "749876",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                    "text": "Chole Bhature",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for chhole bhatoore",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750596",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
                    "text": "Ice Cream",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for icecream",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "749760",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                    "text": "Khichdi",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurants curated for khichdi",
                    "altTextCta": "open"
                  },
                  "entityId": "80455",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                },
                {
                  "id": "750208",
                  "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
                  "action": {
                    "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
                    "text": "Pastry",
                    "type": "WEBLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    "altText": "restaurant curated for Pastry",
                    "altTextCta": "open"
                  },
                  "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
                  "frequencyCapping": {
                    
                  },
                  "externalMarketing": {
                    
                  }
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.2941,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 1.2444,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          "header": {
            "title": "Top restaurant chains in Jaipur",
            "action": {
              
            },
            "headerStyling": {
              "padding": {
                "left": 16,
                "top": 28,
                "bottom": 18
              }
            }
          },
          "layout": {
            "rows": 1,
            "columns": 19,
            "horizontalScrollEnabled": true,
            "itemSpacing": 32,
            "widgetPadding": {
              
            },
            "containerStyle": {
              "containerPadding": {
                "left": 16,
                "right": 12,
                "bottom": 12
              }
            },
            "scrollBar": {
              "scrollThumbColor": "#E46D47",
              "scrollTrackColor": "#02060C",
              "width": 54,
              "height": 4,
              "scrollStyling": {
                "padding": {
                  "top": 6,
                  "bottom": 24
                }
              }
            },
            "widgetTheme": {
              "defaultMode": {
                "backgroundColour": "#1B3028",
                "theme": "THEME_TYPE_DARK"
              },
              "darkMode": {
                "backgroundColour": "#1B3028",
                "theme": "THEME_TYPE_DARK"
              }
            }
          },
          "id": "top_brands_for_you",
          "gridElements": {
            "infoWithStyle": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
              "restaurants": [
                {
                  "info": {
                    "id": "677827",
                    "name": "Chinese Wok",
                    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                    "locality": "Jagatpura",
                    "areaName": "Capital High Street",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Chinese",
                      "Asian",
                      "Tibetan",
                      "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "61955",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1.3K+",
                    "sla": {
                      "deliveryTime": 34,
                      "lastMileTravel": 4.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "4.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹149"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/chinese-wok-jagatpura-capital-high-street-rest677827",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "513065",
                    "name": "Burger King",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_513065.JPG",
                    "locality": "JTM Mall",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Burgers",
                      "American"
                    ],
                    "avgRating": 4.4,
                    "parentId": "166",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "7.5K+",
                    "sla": {
                      "deliveryTime": 48,
                      "lastMileTravel": 10,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "10.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                          "description": "Delivery!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/burger-king-jtm-mall-jagatpura-rest513065",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "639638",
                    "name": "Goila Butter Chicken",
                    "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
                    "locality": "Jagatpura",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                      "North Indian",
                      "Biryani",
                      "Kebabs",
                      "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "322587",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "839",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹125 OFF",
                      "subHeader": "ABOVE ₹249",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "1.7",
                        "ratingCount": "6"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/goila-butter-chicken-jagatpura-rest639638",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "637653",
                    "name": "Subway",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/3b2bff33-d141-4117-bf09-54751897f26c_637653.JPG",
                    "locality": "Main Mahal Road",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "sandwich",
                      "Salads",
                      "wrap",
                      "Healthy Food"
                    ],
                    "avgRating": 4.1,
                    "parentId": "2",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1.7K+",
                    "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 04:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/subway-main-mahal-road-jagatpura-rest637653",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "822485",
                    "name": "La Pino'z Pizza",
                    "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
                    "locality": "MAHAL ROAD",
                    "areaName": "HIGHSTREET MALL",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Pizzas",
                      "Pastas",
                      "Italian",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.2,
                    "parentId": "4961",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "659",
                    "sla": {
                      "deliveryTime": 32,
                      "lastMileTravel": 4.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "4.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 01:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/la-pinoz-pizza-mahal-road-highstreet-mall-rest822485",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "752841",
                    "name": "NIC Ice Creams",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c0d4b1de-d5fa-41ec-a6fa-03632ba71e7a_752841.jpg",
                    "locality": "Pratap Nagar",
                    "areaName": "RHB",
                    "costForTwo": "₹120 for two",
                    "cuisines": [
                      "Ice Cream",
                      "Desserts"
                    ],
                    "avgRating": 4.7,
                    "veg": true,
                    "parentId": "6249",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "518",
                    "sla": {
                      "deliveryTime": 29,
                      "lastMileTravel": 7.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "7.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹137"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/nic-ice-creams-pratap-nagar-rhb-rest752841",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "59227",
                    "name": "Kebabs & Curries Company",
                    "cloudinaryImageId": "bptpyopxdrv8k1kdfvwa",
                    "locality": "Sitapura",
                    "areaName": "Sitapura",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                      "Indian",
                      "Chinese",
                      "Biryani",
                      "North Indian",
                      "Mughlai",
                      "Awadhi"
                    ],
                    "avgRating": 4.3,
                    "parentId": "6302",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "15K+",
                    "sla": {
                      "deliveryTime": 28,
                      "lastMileTravel": 6.4,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "6.4 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-13 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "30% OFF",
                      "subHeader": "UPTO ₹75"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.5",
                        "ratingCount": "1.1K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/kebabs-and-curries-company-sitapura-rest59227",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "677828",
                    "name": "Big Bowl",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_677828.JPG",
                    "locality": "Jagatpura",
                    "areaName": "Capital High Street",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Chinese",
                      "Tibetan",
                      "Desserts"
                    ],
                    "avgRating": 4.5,
                    "parentId": "434792",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "865",
                    "sla": {
                      "deliveryTime": 41,
                      "lastMileTravel": 4.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "40-45 mins",
                      "lastMileTravelString": "4.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Rajma%20Chawal.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Rajma%20Chawal.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹149"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/big-bowl-jagatpura-capital-high-street-rest677828",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "752842",
                    "name": "Grameen Kulfi",
                    "cloudinaryImageId": "930b886678eb9de74b5a3150bdd0f405",
                    "locality": "Pratap Nagar",
                    "areaName": "RHB",
                    "costForTwo": "₹120 for two",
                    "cuisines": [
                      "Ice Cream",
                      "Desserts"
                    ],
                    "avgRating": 4.8,
                    "veg": true,
                    "parentId": "12175",
                    "avgRatingString": "4.8",
                    "totalRatingsString": "86",
                    "sla": {
                      "deliveryTime": 30,
                      "lastMileTravel": 7.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "7.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/grameen-kulfi-pratap-nagar-rhb-rest752842",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "220706",
                    "name": "Burger Farm",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_220706.JPG",
                    "locality": "Pratap Nagar",
                    "areaName": "Pratap Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                      "American",
                      "Barbecue",
                      "Italian-American",
                      "Snacks",
                      "Combo",
                      "Grill",
                      "Beverages"
                    ],
                    "avgRating": 4.6,
                    "parentId": "4660",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "12K+",
                    "sla": {
                      "deliveryTime": 29,
                      "lastMileTravel": 7.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "7.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                          "description": "Delivery!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "1.3K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/burger-farm-pratap-nagar-rest220706",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "782832",
                    "name": "Lord Petrick",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/017c410d-27d1-4bb3-969b-1d60e795ab6c_782832aa.jpg",
                    "locality": "HALDIGHATI MARG",
                    "areaName": "PARTAP NAGAR",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Burgers",
                      "Snacks",
                      "Italian",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.5,
                    "parentId": "429673",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "610",
                    "sla": {
                      "deliveryTime": 34,
                      "lastMileTravel": 8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "8.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 03:55:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/lord-petrick-haldighati-marg-partap-nagar-rest782832",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "677829",
                    "name": "The Momo Co.",
                    "cloudinaryImageId": "9668a5819fcba35364dcff30d5f5cfbb",
                    "locality": "Jagatpura",
                    "areaName": "Capital High Street",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Chinese",
                      "Asian",
                      "Tibetan",
                      "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "11442",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "171",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 4.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "4.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹149"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/the-momo-co-jagatpura-capital-high-street-rest677829",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "602344",
                    "name": "GetAWay-Ice Creams & Desserts",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/cd6c3f29-d9e7-40c6-9b58-6ee0246977c2_602344.jpg",
                    "locality": "R-TECH CAPITAL HIGHSTREET",
                    "areaName": "APPAREL PARK",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                      "Healthy Food",
                      "Ice Cream",
                      "Desserts",
                      "Sweets"
                    ],
                    "avgRating": 4.7,
                    "veg": true,
                    "parentId": "354819",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "84",
                    "sla": {
                      "deliveryTime": 26,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "brand",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹175 OFF",
                      "subHeader": "ABOVE ₹399",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/getaway-ice-creams-and-desserts-r-tech-capital-highstreet-apparel-park-rest602344",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "750687",
                    "name": "KFC",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ce96a7a1-1eb4-4294-943b-6d910f5016b7_750687.JPG",
                    "locality": "Model Town",
                    "areaName": "Jaipur Textile Market",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Burgers",
                      "Fast Food",
                      "Rolls & Wraps"
                    ],
                    "avgRating": 4.3,
                    "parentId": "547",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1.6K+",
                    "sla": {
                      "deliveryTime": 51,
                      "lastMileTravel": 10,
                      "serviceability": "SERVICEABLE",
                      "slaString": "50-55 mins",
                      "lastMileTravelString": "10.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 01:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "20% OFF",
                      "subHeader": "UPTO ₹50"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/kfc-model-town-jaipur-textile-market-rest750687",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "587427",
                    "name": "Biryani By Kilo",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/0115048e-1f52-45a7-9214-494f936da296_587427.JPG",
                    "locality": "Main Mahal Road",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹499 for two",
                    "cuisines": [
                      "Biryani",
                      "Hyderabadi",
                      "North Indian",
                      "Kebabs",
                      "Mughlai",
                      "Desserts"
                    ],
                    "avgRating": 4.4,
                    "parentId": "130",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1.9K+",
                    "sla": {
                      "deliveryTime": 50,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Rxawards/_CATEGORY-Biryani.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Biryani.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹150 OFF",
                      "subHeader": "ABOVE ₹299",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/biryani-by-kilo-main-mahal-road-jagatpura-rest587427",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "59274",
                    "name": "Rominus Pizza and Burger",
                    "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
                    "locality": "Malviya Nagar",
                    "areaName": "Malviya Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                      "Pizzas",
                      "Italian-American",
                      "American",
                      "Barbecue",
                      "Snacks",
                      "Grill",
                      "Italian",
                      "Pastas",
                      "Sweets",
                      "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "8387",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "21K+",
                    "sla": {
                      "deliveryTime": 43,
                      "lastMileTravel": 5.6,
                      "serviceability": "SERVICEABLE",
                      "slaString": "40-45 mins",
                      "lastMileTravelString": "5.6 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 04:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                          "description": "Delivery!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Pizza.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "3.7",
                        "ratingCount": "121"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/rominus-pizza-and-burger-malviya-nagar-rest59274",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "415389",
                    "name": "Delights by INOX",
                    "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
                    "locality": "JTM Mall",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Snacks"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "385095",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "23",
                    "sla": {
                      "deliveryTime": 54,
                      "lastMileTravel": 10,
                      "serviceability": "SERVICEABLE",
                      "slaString": "50-55 mins",
                      "lastMileTravelString": "10.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 01:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/delights-by-inox-jtm-mall-jagatpura-rest415389",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "371011",
                    "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
                    "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
                    "locality": "Mahal road",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Ice Cream Cakes",
                      "Desserts",
                      "Ice Cream",
                      "Bakery"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "21932",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "23",
                    "sla": {
                      "deliveryTime": 38,
                      "lastMileTravel": 7.9,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "7.9 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 05:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹90"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/gourmet-ice-cream-cakes-by-baskin-robbins-mahal-road-jagatpura-rest371011",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "369910",
                    "name": "House of Han",
                    "cloudinaryImageId": "gyegtr2ix95isk6iu3vf",
                    "locality": "Sitapura",
                    "areaName": "Tonk Road",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                      "Chinese",
                      "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "21955",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "30",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 4.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "4.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-13 23:30:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹100 OFF",
                      "subHeader": "ABOVE ₹499",
                      "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.5",
                        "ratingCount": "131"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/house-of-han-sitapura-tonk-road-rest369910",
                    "type": "WEBLINK"
                  }
                }
              ],
              "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
              "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.41111112,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.7027027,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                },
                "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
              },
              "collectionId": "84124"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
          "title": "Restaurants with online food delivery in Jaipur",
          "id": "popular_restaurants_title"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
          "sortConfigs": [
            {
              "key": "relevance",
              "title": "Relevance (Default)",
              "selected": true,
              "defaultSelection": true
            },
            {
              "key": "deliveryTimeAsc",
              "title": "Delivery Time"
            },
            {
              "key": "modelBasedRatingDesc",
              "title": "Rating"
            },
            {
              "key": "costForTwoAsc",
              "title": "Cost: Low to High"
            },
            {
              "key": "costForTwoDesc",
              "title": "Cost: High to Low"
            }
          ],
          "restaurantCount": 1082,
          "facetList": [
            {
              "label": "Delivery Time",
              "id": "deliveryTime",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Fast Delivery",
                  "id": "deliveryTimefacetquery1",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby"
            },
            {
              "label": "Cuisines",
              "id": "catalog_cuisines",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Afghani",
                  "id": "query_afghani",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "American",
                  "id": "query_american",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Andhra",
                  "id": "query_andhra",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Arabian",
                  "id": "query_arabian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Asian",
                  "id": "query_asian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Awadhi",
                  "id": "query_awadhi",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Bakery",
                  "id": "query_bakery",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Barbecue",
                  "id": "query_barbecue",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Bengali",
                  "id": "query_bengali",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Beverages",
                  "id": "query_beverages",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Biryani",
                  "id": "query_biryani",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Burger",
                  "id": "query_burger",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Burgers",
                  "id": "query_burgers",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Cafe",
                  "id": "query_cafe",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Cakes",
                  "id": "query_cakes",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Cakes and Pastries",
                  "id": "query_cakes_and_pastries",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Chaat",
                  "id": "query_chaat",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Chinese",
                  "id": "query_chinese",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Coffee",
                  "id": "query_coffee",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Combo",
                  "id": "query_combo",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Combos",
                  "id": "query_combos",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Continental",
                  "id": "query_continental",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Default",
                  "id": "query_default",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Desserts",
                  "id": "query_desserts",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Fast Food",
                  "id": "query_fast_food",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Fast food",
                  "id": "query_fast_food",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "French",
                  "id": "query_french",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Grill",
                  "id": "query_grill",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Healthy Food",
                  "id": "query_healthy_food",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Home Food",
                  "id": "query_home_food",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Hyderabadi",
                  "id": "query_hyderabadi",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Ice Cream",
                  "id": "query_ice_cream",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Ice Cream Cakes",
                  "id": "query_ice_cream_cakes",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Indian",
                  "id": "query_indian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Italian",
                  "id": "query_italian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Italian-American",
                  "id": "query_italian-american",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Jain",
                  "id": "query_jain",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Japanese",
                  "id": "query_japanese",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Juices",
                  "id": "query_juices",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Kebabs",
                  "id": "query_kebabs",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Lebanese",
                  "id": "query_lebanese",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Lucknowi",
                  "id": "query_lucknowi",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Meat",
                  "id": "query_meat",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Mexican",
                  "id": "query_mexican",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Middle Eastern",
                  "id": "query_middle_eastern",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Momos",
                  "id": "query_momos",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Mughlai",
                  "id": "query_mughlai",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Navratri Special",
                  "id": "query_navratri_special",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "North Eastern",
                  "id": "query_north_eastern",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "North Indian",
                  "id": "query_north_indian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Northindian",
                  "id": "query_northindian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Oriental",
                  "id": "query_oriental",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Paan",
                  "id": "query_paan",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Pan-Asian",
                  "id": "query_pan-asian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Pastas",
                  "id": "query_pastas",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Pizzas",
                  "id": "query_pizzas",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Punjabi",
                  "id": "query_punjabi",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Rajasthani",
                  "id": "query_rajasthani",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Rolls & Wraps",
                  "id": "query_rolls_&_wraps",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Salads",
                  "id": "query_salads",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Seafood",
                  "id": "query_seafood",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Snacks",
                  "id": "query_snacks",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "South Indian",
                  "id": "query_south_indian",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Street Food",
                  "id": "query_street_food",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Sweets",
                  "id": "query_sweets",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Tandoor",
                  "id": "query_tandoor",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Tea",
                  "id": "query_tea",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Thai",
                  "id": "query_thai",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Thali",
                  "id": "query_thali",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Thalis",
                  "id": "query_thalis",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Tibetan",
                  "id": "query_tibetan",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Waffle",
                  "id": "query_waffle",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "fastfood",
                  "id": "query_fastfood",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "pav bhaji",
                  "id": "query_pav_bhaji",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "pizza",
                  "id": "query_pizza",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "rolls",
                  "id": "query_rolls",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "sandwich",
                  "id": "query_sandwich",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "wrap",
                  "id": "query_wrap",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "canSearch": true,
              "subLabel": "Filterbycuisine",
              "openFilter": true
            },
            {
              "label": "Explore",
              "id": "explore",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "New on Swiggy",
                  "id": "newfacetquery1",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD"
            },
            {
              "label": "Ratings",
              "id": "rating",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Ratings 4.5+",
                  "id": "ratingfacetquery3",
                  "analytics": {
                    
                  }
                },
                {
                  "label": "Ratings 4.0+",
                  "id": "ratingfacetquery4",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Ratings 3.5+",
                  "id": "ratingfacetquery5",
                  "analytics": {
                    
                  }
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby"
            },
            {
              "label": "Veg/Non-Veg",
              "id": "isVeg",
              "selection": "SELECT_TYPE_SINGLESELECT",
              "facetInfo": [
                {
                  "label": "Pure Veg",
                  "id": "isVegfacetquery2",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Non Veg",
                  "id": "isVegfacetquery3",
                  "analytics": {
                    
                  }
                }
              ],
              "viewType": "VIEW_TYPE_FLATTENED",
              "subLabel": "Filterby"
            },
            {
              "label": "Offers",
              "id": "restaurantOfferMultiTd",
              "selection": "SELECT_TYPE_SINGLESELECT",
              "facetInfo": [
                {
                  "label": "Offers",
                  "id": "restaurantOfferMultiTdfacetquery3",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_FLATTENED",
              "subLabel": "Restaurantswith"
            },
            {
              "label": "Cost for two",
              "id": "costForTwo",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Rs. 300-Rs. 600",
                  "id": "costForTwofacetquery3",
                  "analytics": {
                    
                  },
                  "openFilter": true
                },
                {
                  "label": "Greater than Rs. 600",
                  "id": "costForTwofacetquery4",
                  "analytics": {
                    
                  }
                },
                {
                  "label": "Less than Rs. 300",
                  "id": "costForTwofacetquery5",
                  "analytics": {
                    
                  },
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby"
            }
          ]
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          "layout": {
            "columns": 4
          },
          "id": "restaurant_grid_listing",
          "gridElements": {
            "infoWithStyle": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
              "restaurants": [
                {
                  "info": {
                    "id": "677827",
                    "name": "Chinese Wok",
                    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                    "locality": "Jagatpura",
                    "areaName": "Capital High Street",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Chinese",
                      "Asian",
                      "Tibetan",
                      "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "61955",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1.3K+",
                    "sla": {
                      "deliveryTime": 34,
                      "lastMileTravel": 4.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "4.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹149"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/chinese-wok-jagatpura-capital-high-street-rest677827",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "513065",
                    "name": "Burger King",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_513065.JPG",
                    "locality": "JTM Mall",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Burgers",
                      "American"
                    ],
                    "avgRating": 4.4,
                    "parentId": "166",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "7.5K+",
                    "sla": {
                      "deliveryTime": 48,
                      "lastMileTravel": 10,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "10.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                          "description": "Delivery!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/burger-king-jtm-mall-jagatpura-rest513065",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "372938",
                    "name": "Khandelwal Pavitra Bhojnalaya",
                    "cloudinaryImageId": "yn8zq6yxe5qjtv4c47ql",
                    "locality": "Housing Board",
                    "areaName": "Pratap Nagar",
                    "costForTwo": "₹280 for two",
                    "cuisines": [
                      "Indian",
                      "Thalis",
                      "Chinese"
                    ],
                    "avgRating": 4.1,
                    "veg": true,
                    "parentId": "117399",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "13K+",
                    "sla": {
                      "deliveryTime": 29,
                      "lastMileTravel": 6.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "6.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-13 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹125 OFF",
                      "subHeader": "ABOVE ₹249",
                      "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/khandelwal-pavitra-bhojnalaya-housing-board-pratap-nagar-rest372938",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "639638",
                    "name": "Goila Butter Chicken",
                    "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
                    "locality": "Jagatpura",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                      "North Indian",
                      "Biryani",
                      "Kebabs",
                      "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "322587",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "839",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "₹125 OFF",
                      "subHeader": "ABOVE ₹249",
                      "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "1.7",
                        "ratingCount": "6"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/goila-butter-chicken-jagatpura-rest639638",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "637653",
                    "name": "Subway",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/3b2bff33-d141-4117-bf09-54751897f26c_637653.JPG",
                    "locality": "Main Mahal Road",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "sandwich",
                      "Salads",
                      "wrap",
                      "Healthy Food"
                    ],
                    "avgRating": 4.1,
                    "parentId": "2",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1.7K+",
                    "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "5.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 04:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/subway-main-mahal-road-jagatpura-rest637653",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "887985",
                    "name": "Sambharsa",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c0d6e3ec-8a16-40fe-a46c-3660d6a1537e_887985.jpg",
                    "locality": "NRI Colony Rd",
                    "areaName": "Jagatpura",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "Indian",
                      "South Indian",
                      "Beverages",
                      "Snacks"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "176462",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "332",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 8.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "8.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-13 23:30:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/sambharsa-nri-colony-rd-jagatpura-rest887985",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "936896",
                    "name": "Bakingo",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/91ad2635-c7a5-41dc-89a1-88fd19069226_936896.jpg",
                    "locality": "Sector-19",
                    "areaName": "Pratap Nagar",
                    "costForTwo": "₹299 for two",
                    "cuisines": [
                      "Bakery",
                      "Desserts",
                      "Beverages",
                      "Snacks"
                    ],
                    "avgRating": 4.7,
                    "parentId": "3818",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "1.1K+",
                    "sla": {
                      "deliveryTime": 28,
                      "lastMileTravel": 6.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "6.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 01:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/bakingo-sector-19-pratap-nagar-rest936896",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                },
                {
                  "info": {
                    "id": "752841",
                    "name": "NIC Ice Creams",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c0d4b1de-d5fa-41ec-a6fa-03632ba71e7a_752841.jpg",
                    "locality": "Pratap Nagar",
                    "areaName": "RHB",
                    "costForTwo": "₹120 for two",
                    "cuisines": [
                      "Ice Cream",
                      "Desserts"
                    ],
                    "avgRating": 4.7,
                    "veg": true,
                    "parentId": "6249",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "518",
                    "sla": {
                      "deliveryTime": 29,
                      "lastMileTravel": 7.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "7.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-01-14 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹137"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/jaipur/nic-ice-creams-pratap-nagar-rhb-rest752841",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                  },
                  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                }
              ],
              "theme": "SeoRestaurantListingGridWidget"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
          "message": "Show More",
          "id": "show_more_button"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
          "title": "Best Places to Eat Across Cities",
          "brands": [
            {
              "text": "Best Restaurants in Bangalore",
              "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
            },
            {
              "text": "Best Restaurants in Pune",
              "link": "https://www.swiggy.com/city/pune/best-restaurants"
            },
            {
              "text": "Best Restaurants in Mumbai",
              "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
            },
            {
              "text": "Best Restaurants in Delhi",
              "link": "https://www.swiggy.com/city/delhi/best-restaurants"
            },
            {
              "text": "Best Restaurants in Hyderabad",
              "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
            },
            {
              "text": "Best Restaurants in Kolkata",
              "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
            },
            {
              "text": "Best Restaurants in Chennai",
              "link": "https://www.swiggy.com/city/chennai/best-restaurants"
            },
            {
              "text": "Best Restaurants in Chandigarh",
              "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
            },
            {
              "text": "Best Restaurants in Ahmedabad",
              "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
            },
            {
              "text": "Best Restaurants in Jaipur",
              "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
            },
            {
              "text": "Best Restaurants in Nagpur",
              "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
            },
            {
              "text": "Best Restaurants in Bhubaneswar",
              "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
            },
            {
              "text": "Best Restaurants in Kochi",
              "link": "https://www.swiggy.com/city/kochi/best-restaurants"
            },
            {
              "text": "Best Restaurants in Surat",
              "link": "https://www.swiggy.com/city/surat/best-restaurants"
            },
            {
              "text": "Best Restaurants in Dehradun",
              "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
            },
            {
              "text": "Best Restaurants in Ludhiana",
              "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
            },
            {
              "text": "Best Restaurants in Patna",
              "link": "https://www.swiggy.com/city/patna/best-restaurants"
            },
            {
              "text": "Best Restaurants in Mangaluru",
              "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
            },
            {
              "text": "Best Restaurants in Bhopal",
              "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
            },
            {
              "text": "Best Restaurants in Gurgaon",
              "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
            },
            {
              "text": "Best Restaurants in Coimbatore",
              "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
            },
            {
              "text": "Best Restaurants in Agra",
              "link": "https://www.swiggy.com/city/agra/best-restaurants"
            },
            {
              "text": "Best Restaurants in Noida",
              "link": "https://www.swiggy.com/city/noida/best-restaurants"
            },
            {
              "text": "Best Restaurants in Vijayawada",
              "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
            },
            {
              "text": "Best Restaurants in Guwahati",
              "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
            },
            {
              "text": "Best Restaurants in Mysore",
              "link": "https://www.swiggy.com/city/mysore/best-restaurants"
            },
            {
              "text": "Best Restaurants in Pondicherry",
              "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
            },
            {
              "text": "Best Restaurants in Thiruvananthapuram",
              "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
            },
            {
              "text": "Best Restaurants in Ranchi",
              "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
            },
            {
              "text": "Best Restaurants in Vizag",
              "link": "https://www.swiggy.com/city/vizag/best-restaurants"
            },
            {
              "text": "Best Restaurants in Udaipur",
              "link": "https://www.swiggy.com/city/udaipur/best-restaurants"
            },
            {
              "text": "Best Restaurants in Vadodara",
              "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
            }
          ],
          "id": "restaurant_near_me_links"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
          "title": "Best Cuisines Near Me",
          "brands": [
            {
              "text": "Chinese Restaurant Near Me",
              "link": "https://www.swiggy.com/chinese-restaurants-near-me"
            },
            {
              "text": "South Indian Restaurant Near Me",
              "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
            },
            {
              "text": "Indian Restaurant Near Me",
              "link": "https://www.swiggy.com/indian-restaurants-near-me"
            },
            {
              "text": "Kerala Restaurant Near Me",
              "link": "https://www.swiggy.com/kerala-restaurants-near-me"
            },
            {
              "text": "Korean Restaurant Near Me",
              "link": "https://www.swiggy.com/korean-restaurants-near-me"
            },
            {
              "text": "North Indian Restaurant Near Me",
              "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
            },
            {
              "text": "Seafood Restaurant Near Me",
              "link": "https://www.swiggy.com/seafood-restaurants-near-me"
            },
            {
              "text": "Bengali Restaurant Near Me",
              "link": "https://www.swiggy.com/bengali-restaurants-near-me"
            },
            {
              "text": "Punjabi Restaurant Near Me",
              "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
            },
            {
              "text": "Italian Restaurant Near Me",
              "link": "https://www.swiggy.com/italian-restaurants-near-me"
            },
            {
              "text": "Andhra Restaurant Near Me",
              "link": "https://www.swiggy.com/andhra-restaurants-near-me"
            },
            {
              "text": "Biryani Restaurant Near Me",
              "link": "https://www.swiggy.com/biryani-restaurants-near-me"
            },
            {
              "text": "Japanese Restaurant Near Me",
              "link": "https://www.swiggy.com/japanese-restaurants-near-me"
            },
            {
              "text": "Arabian Restaurant Near Me",
              "link": "https://www.swiggy.com/arabian-restaurants-near-me"
            },
            {
              "text": "Fast Food Restaurant Near Me",
              "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
            },
            {
              "text": "Jain Restaurant Near Me",
              "link": "https://www.swiggy.com/jain-restaurants-near-me"
            },
            {
              "text": "Gujarati Restaurant Near Me",
              "link": "https://www.swiggy.com/gujarati-restaurants-near-me"
            },
            {
              "text": "Thai Restaurant Near Me",
              "link": "https://www.swiggy.com/thai-restaurants-near-me"
            },
            {
              "text": "Pizzas Restaurant Near Me",
              "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
            },
            {
              "text": "Asian Restaurant Near Me",
              "link": "https://www.swiggy.com/asian-restaurants-near-me"
            },
            {
              "text": "Cafe Restaurant Near Me",
              "link": "https://www.swiggy.com/cafe-restaurants-near-me"
            },
            {
              "text": "Continental Restaurant Near Me",
              "link": "https://www.swiggy.com/continental-restaurants-near-me"
            },
            {
              "text": "Mexican Restaurant Near Me",
              "link": "https://www.swiggy.com/mexican-restaurants-near-me"
            },
            {
              "text": "Mughlai Restaurant Near Me",
              "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
            },
            {
              "text": "Sushi Restaurant Near Me",
              "link": "https://www.swiggy.com/sushi-restaurants-near-me"
            },
            {
              "text": "Mangalorean Restaurant Near Me",
              "link": "https://www.swiggy.com/mangalorean-restaurants-near-me"
            },
            {
              "text": "Tibetan Restaurant Near Me",
              "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
            },
            {
              "text": "Barbecue Restaurant Near Me",
              "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
            },
            {
              "text": "Maharashtrian Restaurant Near Me",
              "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
            },
            {
              "text": "Nepalese Restaurant Near Me",
              "link": "https://www.swiggy.com/nepalese-restaurants-near-me"
            },
            {
              "text": "Rajasthani Restaurant Near Me",
              "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
            },
            {
              "text": "Turkish Restaurant Near Me",
              "link": "https://www.swiggy.com/turkish-restaurants-near-me"
            }
          ],
          "id": "restaurant_near_me_links"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
          "title": "Explore Every Restaurants Near Me",
          "brands": [
            {
              "text": "Explore Restaurants Near Me",
              "link": "https://www.swiggy.com/restaurants-near-me"
            },
            {
              "text": "Explore Top Rated Restaurants Near Me",
              "link": "https://www.swiggy.com/best-restaurants-near-me"
            }
          ],
          "id": "restaurant_near_me_links"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
          "title": "For better experience,download the Swiggy app now",
          "androidAppImage": "portal/m/play_store.png",
          "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
          "iosAppImage": "portal/m/app_store.png",
          "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
          "id": "app_install_links"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
          "cities": [
            {
              "text": "Bangalore",
              "link": "https://www.swiggy.com/city/bangalore"
            },
            {
              "text": "Gurgaon",
              "link": "https://www.swiggy.com/city/gurgaon"
            },
            {
              "text": "Hyderabad",
              "link": "https://www.swiggy.com/city/hyderabad"
            },
            {
              "text": "Delhi",
              "link": "https://www.swiggy.com/city/delhi"
            },
            {
              "text": "Mumbai",
              "link": "https://www.swiggy.com/city/mumbai"
            },
            {
              "text": "Pune",
              "link": "https://www.swiggy.com/city/pune"
            },
            {
              "text": "Kolkata",
              "link": "https://www.swiggy.com/city/kolkata"
            },
            {
              "text": "Chennai",
              "link": "https://www.swiggy.com/city/chennai"
            },
            {
              "text": "Ahmedabad",
              "link": "https://www.swiggy.com/city/ahmedabad"
            },
            {
              "text": "Chandigarh",
              "link": "https://www.swiggy.com/city/chandigarh"
            },
            {
              "text": "Jaipur",
              "link": "https://www.swiggy.com/city/jaipur"
            },
            {
              "text": "Kochi",
              "link": "https://www.swiggy.com/city/kochi"
            },
            {
              "text": "Coimbatore",
              "link": "https://www.swiggy.com/city/coimbatore"
            },
            {
              "text": "Lucknow",
              "link": "https://www.swiggy.com/city/lucknow"
            },
            {
              "text": "Nagpur",
              "link": "https://www.swiggy.com/city/nagpur"
            },
            {
              "text": "Vadodara",
              "link": "https://www.swiggy.com/city/vadodara"
            },
            {
              "text": "Indore",
              "link": "https://www.swiggy.com/city/indore"
            },
            {
              "text": "Guwahati",
              "link": "https://www.swiggy.com/city/guwahati"
            },
            {
              "text": "Vizag",
              "link": "https://www.swiggy.com/city/vizag"
            },
            {
              "text": "Surat",
              "link": "https://www.swiggy.com/city/surat"
            },
            {
              "text": "Dehradun",
              "link": "https://www.swiggy.com/city/dehradun"
            },
            {
              "text": "Noida",
              "link": "https://www.swiggy.com/city/noida"
            },
            {
              "text": "Ludhiana",
              "link": "https://www.swiggy.com/city/ludhiana"
            },
            {
              "text": "Trichy",
              "link": "https://www.swiggy.com/city/trichy"
            },
            {
              "text": "Vijayawada",
              "link": "https://www.swiggy.com/city/vijayawada"
            },
            {
              "text": "Kanpur",
              "link": "https://www.swiggy.com/city/kanpur"
            },
            {
              "text": "Mysore",
              "link": "https://www.swiggy.com/city/mysore"
            },
            {
              "text": "Nashik",
              "link": "https://www.swiggy.com/city/nashik"
            },
            {
              "text": "Udaipur",
              "link": "https://www.swiggy.com/city/udaipur"
            },
            {
              "text": "Pondicherry",
              "link": "https://www.swiggy.com/city/pondicherry"
            },
            {
              "text": "Agra",
              "link": "https://www.swiggy.com/city/agra"
            },
            {
              "text": "Aurangabad",
              "link": "https://www.swiggy.com/city/aurangabad"
            },
            {
              "text": "Jalandhar",
              "link": "https://www.swiggy.com/city/jalandhar"
            },
            {
              "text": "Kota",
              "link": "https://www.swiggy.com/city/kota"
            },
            {
              "text": "Madurai",
              "link": "https://www.swiggy.com/city/madurai"
            },
            {
              "text": "Allahabad",
              "link": "https://www.swiggy.com/city/allahabad"
            },
            {
              "text": "Manipal",
              "link": "https://www.swiggy.com/city/manipal"
            },
            {
              "text": "Amritsar",
              "link": "https://www.swiggy.com/city/amritsar"
            },
            {
              "text": "Bareilly",
              "link": "https://www.swiggy.com/city/bareilly"
            },
            {
              "text": "Meerut",
              "link": "https://www.swiggy.com/city/meerut"
            },
            {
              "text": "Bhopal",
              "link": "https://www.swiggy.com/city/bhopal"
            },
            {
              "text": "Ooty",
              "link": "https://www.swiggy.com/city/ooty"
            },
            {
              "text": "Bhubaneswar",
              "link": "https://www.swiggy.com/city/bhubaneswar"
            },
            {
              "text": "Raipur",
              "link": "https://www.swiggy.com/city/raipur"
            },
            {
              "text": "Bikaner",
              "link": "https://www.swiggy.com/city/bikaner"
            },
            {
              "text": "Rajkot",
              "link": "https://www.swiggy.com/city/rajkot"
            },
            {
              "text": "Kozhikode",
              "link": "https://www.swiggy.com/city/kozhikode"
            },
            {
              "text": "Central Goa",
              "link": "https://www.swiggy.com/city/central-goa"
            },
            {
              "text": "Sirsa",
              "link": "https://www.swiggy.com/city/sirsa"
            },
            {
              "text": "Gwalior",
              "link": "https://www.swiggy.com/city/gwalior"
            },
            {
              "text": "Thrissur",
              "link": "https://www.swiggy.com/city/thrissur"
            },
            {
              "text": "Kharagpur",
              "link": "https://www.swiggy.com/city/kharagpur"
            },
            {
              "text": "Tirupati",
              "link": "https://www.swiggy.com/city/tirupati"
            },
            {
              "text": "Tirupur",
              "link": "https://www.swiggy.com/city/tirupur"
            },
            {
              "text": "Vellore",
              "link": "https://www.swiggy.com/city/vellore"
            },
            {
              "text": "Thiruvananthapuram",
              "link": "https://www.swiggy.com/city/thiruvananthapuram"
            },
            {
              "text": "Warangal",
              "link": "https://www.swiggy.com/city/warangal"
            },
            {
              "text": "Varanasi",
              "link": "https://www.swiggy.com/city/varanasi"
            },
            {
              "text": "Mangaluru",
              "link": "https://www.swiggy.com/city/mangaluru"
            },
            {
              "text": "Patna",
              "link": "https://www.swiggy.com/city/patna"
            },
            {
              "text": "Ranchi",
              "link": "https://www.swiggy.com/city/ranchi"
            },
            {
              "text": "Faridabad",
              "link": "https://www.swiggy.com/city/faridabad"
            },
            {
              "text": "Guntur",
              "link": "https://www.swiggy.com/city/guntur"
            },
            {
              "text": "Ujjain",
              "link": "https://www.swiggy.com/city/ujjain"
            },
            {
              "text": "Patiala",
              "link": "https://www.swiggy.com/city/patiala"
            },
            {
              "text": "Karnal",
              "link": "https://www.swiggy.com/city/karnal"
            },
            {
              "text": "Kakinada",
              "link": "https://www.swiggy.com/city/kakinada"
            },
            {
              "text": "Rajahmundry",
              "link": "https://www.swiggy.com/city/rajahmundry"
            },
            {
              "text": "Bilaspur",
              "link": "https://www.swiggy.com/city/bilaspur"
            },
            {
              "text": "Bhilai",
              "link": "https://www.swiggy.com/city/bhilai"
            },
            {
              "text": "Anand",
              "link": "https://www.swiggy.com/city/anand"
            },
            {
              "text": "Bhavnagar",
              "link": "https://www.swiggy.com/city/bhavnagar"
            },
            {
              "text": "Jammu",
              "link": "https://www.swiggy.com/city/jammu"
            },
            {
              "text": "Muktsar",
              "link": "https://www.swiggy.com/city/muktsar"
            },
            {
              "text": "Panipat",
              "link": "https://www.swiggy.com/city/panipat"
            },
            {
              "text": "Jamshedpur",
              "link": "https://www.swiggy.com/city/jamshedpur"
            },
            {
              "text": "Dhanbad",
              "link": "https://www.swiggy.com/city/dhanbad"
            },
            {
              "text": "Bokaro",
              "link": "https://www.swiggy.com/city/bokaro"
            },
            {
              "text": "Hubli",
              "link": "https://www.swiggy.com/city/hubli"
            },
            {
              "text": "Belgaum",
              "link": "https://www.swiggy.com/city/belgaum"
            },
            {
              "text": "Jabalpur",
              "link": "https://www.swiggy.com/city/jabalpur"
            },
            {
              "text": "Kolhapur",
              "link": "https://www.swiggy.com/city/kolhapur"
            },
            {
              "text": "Solapur",
              "link": "https://www.swiggy.com/city/solapur"
            },
            {
              "text": "Shillong",
              "link": "https://www.swiggy.com/city/shillong"
            },
            {
              "text": "Cuttack",
              "link": "https://www.swiggy.com/city/cuttack"
            },
            {
              "text": "Aligarh",
              "link": "https://www.swiggy.com/city/aligarh"
            },
            {
              "text": "Salem",
              "link": "https://www.swiggy.com/city/salem"
            },
            {
              "text": "Agartala",
              "link": "https://www.swiggy.com/city/agartala"
            },
            {
              "text": "Jodhpur",
              "link": "https://www.swiggy.com/city/jodhpur"
            },
            {
              "text": "Ajmer",
              "link": "https://www.swiggy.com/city/ajmer"
            },
            {
              "text": "Jhansi",
              "link": "https://www.swiggy.com/city/jhansi"
            },
            {
              "text": "Gorakhpur",
              "link": "https://www.swiggy.com/city/gorakhpur"
            },
            {
              "text": "Thanjavur",
              "link": "https://www.swiggy.com/city/thanjavur"
            },
            {
              "text": "Erode",
              "link": "https://www.swiggy.com/city/erode"
            },
            {
              "text": "Nellore",
              "link": "https://www.swiggy.com/city/nellore"
            },
            {
              "text": "Rourkela",
              "link": "https://www.swiggy.com/city/rourkela"
            },
            {
              "text": "Anantapur",
              "link": "https://www.swiggy.com/city/anantapur"
            },
            {
              "text": "Kurnool",
              "link": "https://www.swiggy.com/city/kurnool"
            },
            {
              "text": "Ahmednagar",
              "link": "https://www.swiggy.com/city/ahmednagar"
            },
            {
              "text": "Phagwara",
              "link": "https://www.swiggy.com/city/phagwara"
            },
            {
              "text": "Ambala",
              "link": "https://www.swiggy.com/city/ambala"
            },
            {
              "text": "Ballari",
              "link": "https://www.swiggy.com/city/ballari"
            },
            {
              "text": "Saharanpur",
              "link": "https://www.swiggy.com/city/saharanpur"
            },
            {
              "text": "Tirunelveli",
              "link": "https://www.swiggy.com/city/tirunelveli"
            },
            {
              "text": "Bathinda",
              "link": "https://www.swiggy.com/city/bathinda"
            },
            {
              "text": "Mathura",
              "link": "https://www.swiggy.com/city/mathura"
            },
            {
              "text": "Haridwar",
              "link": "https://www.swiggy.com/city/haridwar"
            },
            {
              "text": "Ratnagiri",
              "link": "https://www.swiggy.com/city/ratnagiri"
            },
            {
              "text": "Sangli",
              "link": "https://www.swiggy.com/city/sangli"
            },
            {
              "text": "Amravati",
              "link": "https://www.swiggy.com/city/amravati"
            },
            {
              "text": "Rishikesh",
              "link": "https://www.swiggy.com/city/rishikesh"
            },
            {
              "text": "Nagercoil",
              "link": "https://www.swiggy.com/city/nagercoil"
            },
            {
              "text": "KanyaKumari",
              "link": "https://www.swiggy.com/city/kanyakumari"
            },
            {
              "text": "Kadapa",
              "link": "https://www.swiggy.com/city/kadapa"
            },
            {
              "text": "Nizamabad",
              "link": "https://www.swiggy.com/city/nizamabad"
            },
            {
              "text": "Shivamogga",
              "link": "https://www.swiggy.com/city/shivamogga"
            },
            {
              "text": "Davanagere",
              "link": "https://www.swiggy.com/city/davanagere"
            },
            {
              "text": "Roorkee",
              "link": "https://www.swiggy.com/city/roorkee"
            },
            {
              "text": "Nanded",
              "link": "https://www.swiggy.com/city/nanded"
            },
            {
              "text": "Rewa",
              "link": "https://www.swiggy.com/city/rewa"
            },
            {
              "text": "Satna",
              "link": "https://www.swiggy.com/city/satna"
            },
            {
              "text": "Shimla",
              "link": "https://www.swiggy.com/city/shimla"
            },
            {
              "text": "Muzaffarpur",
              "link": "https://www.swiggy.com/city/muzaffarpur"
            },
            {
              "text": "Valsad",
              "link": "https://www.swiggy.com/city/valsad"
            },
            {
              "text": "Vapi",
              "link": "https://www.swiggy.com/city/vapi"
            },
            {
              "text": "Chhapra",
              "link": "https://www.swiggy.com/city/chhapra"
            },
            {
              "text": "Dharamshala",
              "link": "https://www.swiggy.com/city/dharamshala"
            },
            {
              "text": "Kollam",
              "link": "https://www.swiggy.com/city/kollam"
            },
            {
              "text": "Silchar",
              "link": "https://www.swiggy.com/city/silchar"
            },
            {
              "text": "Alappuzha",
              "link": "https://www.swiggy.com/city/alappuzha"
            },
            {
              "text": "Sonipat",
              "link": "https://www.swiggy.com/city/sonipat"
            },
            {
              "text": "Rohtak",
              "link": "https://www.swiggy.com/city/rohtak"
            },
            {
              "text": "Mehsana",
              "link": "https://www.swiggy.com/city/mehsana"
            },
            {
              "text": "Kullu",
              "link": "https://www.swiggy.com/city/kullu"
            },
            {
              "text": "Dhule",
              "link": "https://www.swiggy.com/city/dhule"
            },
            {
              "text": "Dharwad",
              "link": "https://www.swiggy.com/city/dharwad"
            },
            {
              "text": "Latur",
              "link": "https://www.swiggy.com/city/latur"
            },
            {
              "text": "Vizianagaram",
              "link": "https://www.swiggy.com/city/vizianagaram"
            },
            {
              "text": "Khammam",
              "link": "https://www.swiggy.com/city/khammam"
            },
            {
              "text": "Hampi",
              "link": "https://www.swiggy.com/city/hampi"
            },
            {
              "text": "Nainital",
              "link": "https://www.swiggy.com/city/nainital"
            },
            {
              "text": "Akola",
              "link": "https://www.swiggy.com/city/akola"
            },
            {
              "text": "Kalaburagi",
              "link": "https://www.swiggy.com/city/kalaburagi"
            },
            {
              "text": "Gaya",
              "link": "https://www.swiggy.com/city/gaya"
            },
            {
              "text": "Muzaffarnagar",
              "link": "https://www.swiggy.com/city/muzaffarnagar"
            },
            {
              "text": "Dewas",
              "link": "https://www.swiggy.com/city/dewas"
            },
            {
              "text": "Korba",
              "link": "https://www.swiggy.com/city/korba"
            },
            {
              "text": "Mussoorie",
              "link": "https://www.swiggy.com/city/mussoorie"
            },
            {
              "text": "Jalgaon",
              "link": "https://www.swiggy.com/city/jalgaon"
            },
            {
              "text": "Yamuna Nagar",
              "link": "https://www.swiggy.com/city/yamuna-nagar"
            },
            {
              "text": "Bhagalpur",
              "link": "https://www.swiggy.com/city/bhagalpur"
            },
            {
              "text": "Hapur",
              "link": "https://www.swiggy.com/city/hapur"
            },
            {
              "text": "Morena",
              "link": "https://www.swiggy.com/city/morena"
            },
            {
              "text": "Hassan",
              "link": "https://www.swiggy.com/city/hassan"
            },
            {
              "text": "Hisar",
              "link": "https://www.swiggy.com/city/hisar"
            },
            {
              "text": "Godhra",
              "link": "https://www.swiggy.com/city/godhra"
            },
            {
              "text": "Kolar ",
              "link": "https://www.swiggy.com/city/kolar"
            },
            {
              "text": "Rampur",
              "link": "https://www.swiggy.com/city/rampur"
            },
            {
              "text": "Sitapur",
              "link": "https://www.swiggy.com/city/sitapur"
            },
            {
              "text": "Etawah",
              "link": "https://www.swiggy.com/city/etawah"
            },
            {
              "text": "Porbandar",
              "link": "https://www.swiggy.com/city/porbandar"
            },
            {
              "text": "Nadiad",
              "link": "https://www.swiggy.com/city/nadiad"
            },
            {
              "text": "Sagar",
              "link": "https://www.swiggy.com/city/sagar"
            },
            {
              "text": "Morbi",
              "link": "https://www.swiggy.com/city/morbi"
            },
            {
              "text": "Chhindwara",
              "link": "https://www.swiggy.com/city/chhindwara"
            },
            {
              "text": "Tumakuru",
              "link": "https://www.swiggy.com/city/tumakuru"
            },
            {
              "text": "Singrauli",
              "link": "https://www.swiggy.com/city/singrauli"
            },
            {
              "text": "Thoothukudi",
              "link": "https://www.swiggy.com/city/thoothukudi"
            },
            {
              "text": "Katni",
              "link": "https://www.swiggy.com/city/katni"
            },
            {
              "text": "Khandwa",
              "link": "https://www.swiggy.com/city/khandwa"
            },
            {
              "text": "Eluru",
              "link": "https://www.swiggy.com/city/eluru"
            },
            {
              "text": "Malappuram",
              "link": "https://www.swiggy.com/city/malappuram"
            },
            {
              "text": "Dibrugarh",
              "link": "https://www.swiggy.com/city/dibrugarh"
            },
            {
              "text": "Deoghar",
              "link": "https://www.swiggy.com/city/deoghar"
            },
            {
              "text": "Khanna",
              "link": "https://www.swiggy.com/city/khanna"
            },
            {
              "text": "Bidar",
              "link": "https://www.swiggy.com/city/bidar"
            },
            {
              "text": "Anantnag",
              "link": "https://www.swiggy.com/city/anantnag"
            },
            {
              "text": "Madikeri",
              "link": "https://www.swiggy.com/city/madikeri"
            },
            {
              "text": "Haldwani",
              "link": "https://www.swiggy.com/city/haldwani"
            },
            {
              "text": "Panchkula",
              "link": "https://www.swiggy.com/city/panchkula"
            },
            {
              "text": "Farrukhabad",
              "link": "https://www.swiggy.com/city/farrukhabad"
            },
            {
              "text": "Malegaon",
              "link": "https://www.swiggy.com/city/malegaon"
            },
            {
              "text": "Dindigul",
              "link": "https://www.swiggy.com/city/dindigul"
            },
            {
              "text": "Shahjahanpur",
              "link": "https://www.swiggy.com/city/shahjahanpur"
            },
            {
              "text": "Beed",
              "link": "https://www.swiggy.com/city/beed"
            },
            {
              "text": "Junagadh",
              "link": "https://www.swiggy.com/city/junagadh"
            },
            {
              "text": "Asansol",
              "link": "https://www.swiggy.com/city/asansol"
            },
            {
              "text": "Beawar",
              "link": "https://www.swiggy.com/city/beawar"
            },
            {
              "text": "Kishangarh",
              "link": "https://www.swiggy.com/city/kishangarh"
            },
            {
              "text": "Budhwal",
              "link": "https://www.swiggy.com/city/budhwal"
            },
            {
              "text": "Parbhani",
              "link": "https://www.swiggy.com/city/parbhani"
            },
            {
              "text": "Gondia",
              "link": "https://www.swiggy.com/city/gondia"
            },
            {
              "text": "Ichalkaranji",
              "link": "https://www.swiggy.com/city/ichalkaranji"
            },
            {
              "text": "Jalna",
              "link": "https://www.swiggy.com/city/jalna"
            },
            {
              "text": "Yavatmal",
              "link": "https://www.swiggy.com/city/yavatmal"
            },
            {
              "text": "Shivpuri",
              "link": "https://www.swiggy.com/city/shivpuri"
            },
            {
              "text": "Moga",
              "link": "https://www.swiggy.com/city/moga"
            },
            {
              "text": "Abohar",
              "link": "https://www.swiggy.com/city/abohar"
            },
            {
              "text": "Adoni",
              "link": "https://www.swiggy.com/city/adoni"
            },
            {
              "text": "Madanapalle",
              "link": "https://www.swiggy.com/city/madanapalle"
            },
            {
              "text": "Tiruvannamalai",
              "link": "https://www.swiggy.com/city/tiruvannamalai"
            },
            {
              "text": "Satara",
              "link": "https://www.swiggy.com/city/satara"
            },
            {
              "text": "Ambur",
              "link": "https://www.swiggy.com/city/ambur"
            },
            {
              "text": "Karimnagar",
              "link": "https://www.swiggy.com/city/karimnagar"
            },
            {
              "text": "Ratlam",
              "link": "https://www.swiggy.com/city/ratlam"
            },
            {
              "text": "Moradabad",
              "link": "https://www.swiggy.com/city/moradabad"
            },
            {
              "text": "Machilipatnam",
              "link": "https://www.swiggy.com/city/machilipatnam"
            },
            {
              "text": "Ongole",
              "link": "https://www.swiggy.com/city/ongole"
            },
            {
              "text": "Kottayam",
              "link": "https://www.swiggy.com/city/kottayam"
            },
            {
              "text": "Darbhanga",
              "link": "https://www.swiggy.com/city/darbhanga"
            },
            {
              "text": "Kurukshetra",
              "link": "https://www.swiggy.com/city/kurukshetra"
            },
            {
              "text": "Unnao",
              "link": "https://www.swiggy.com/city/unnao"
            },
            {
              "text": "Bulandshahr",
              "link": "https://www.swiggy.com/city/bulandshahr"
            },
            {
              "text": "Durgapur",
              "link": "https://www.swiggy.com/city/durgapur"
            },
            {
              "text": "Siliguri",
              "link": "https://www.swiggy.com/city/siliguri"
            },
            {
              "text": "Pali",
              "link": "https://www.swiggy.com/city/pali"
            },
            {
              "text": "Tadepalligudem",
              "link": "https://www.swiggy.com/city/tadepalligudem"
            },
            {
              "text": "Ramagundam",
              "link": "https://www.swiggy.com/city/ramagundam"
            },
            {
              "text": "Mahbubnagar",
              "link": "https://www.swiggy.com/city/mahbubnagar"
            },
            {
              "text": "Bhiwani",
              "link": "https://www.swiggy.com/city/bhiwani"
            },
            {
              "text": "Cuddalore",
              "link": "https://www.swiggy.com/city/cuddalore"
            },
            {
              "text": "Kaithal",
              "link": "https://www.swiggy.com/city/kaithal"
            },
            {
              "text": "Jagtial",
              "link": "https://www.swiggy.com/city/jagtial"
            },
            {
              "text": "Palakkad",
              "link": "https://www.swiggy.com/city/palakkad"
            },
            {
              "text": "Guna",
              "link": "https://www.swiggy.com/city/guna"
            },
            {
              "text": "Kumbakonam",
              "link": "https://www.swiggy.com/city/kumbakonam"
            },
            {
              "text": "Maunath Bhanjan",
              "link": "https://www.swiggy.com/city/maunath-bhanjan"
            },
            {
              "text": "Baripada",
              "link": "https://www.swiggy.com/city/baripada"
            },
            {
              "text": "Orai",
              "link": "https://www.swiggy.com/city/orai"
            },
            {
              "text": "Bhadrak",
              "link": "https://www.swiggy.com/city/bhadrak"
            },
            {
              "text": "Batala",
              "link": "https://www.swiggy.com/city/batala"
            },
            {
              "text": "Firozpur",
              "link": "https://www.swiggy.com/city/firozpur"
            },
            {
              "text": "Barnala",
              "link": "https://www.swiggy.com/city/barnala"
            },
            {
              "text": "Raigarh",
              "link": "https://www.swiggy.com/city/raigarh"
            },
            {
              "text": "Nagaon",
              "link": "https://www.swiggy.com/city/nagaon"
            },
            {
              "text": "Mainpuri",
              "link": "https://www.swiggy.com/city/mainpuri"
            },
            {
              "text": "Balurghat",
              "link": "https://www.swiggy.com/city/balurghat"
            },
            {
              "text": "Giridih",
              "link": "https://www.swiggy.com/city/giridih"
            },
            {
              "text": "Ghazipur",
              "link": "https://www.swiggy.com/city/ghazipur"
            },
            {
              "text": "Jagdalpur",
              "link": "https://www.swiggy.com/city/jagdalpur"
            },
            {
              "text": "Vidisha",
              "link": "https://www.swiggy.com/city/vidisha"
            },
            {
              "text": "Dimapur",
              "link": "https://www.swiggy.com/city/dimapur"
            },
            {
              "text": "Shikohabad",
              "link": "https://www.swiggy.com/city/shikohabad"
            },
            {
              "text": "Imphal",
              "link": "https://www.swiggy.com/city/imphal"
            },
            {
              "text": "Lakhimpur",
              "link": "https://www.swiggy.com/city/lakhimpur"
            },
            {
              "text": "Rudrapur",
              "link": "https://www.swiggy.com/city/rudrapur"
            },
            {
              "text": "Ambikapur",
              "link": "https://www.swiggy.com/city/ambikapur"
            },
            {
              "text": "Damoh",
              "link": "https://www.swiggy.com/city/damoh"
            },
            {
              "text": "Rae Bareli",
              "link": "https://www.swiggy.com/city/rae-bareli"
            },
            {
              "text": "Tinsukia",
              "link": "https://www.swiggy.com/city/tinsukia"
            },
            {
              "text": "Rajapalayam",
              "link": "https://www.swiggy.com/city/rajapalayam"
            },
            {
              "text": "Rajnandgaon",
              "link": "https://www.swiggy.com/city/rajnandgaon"
            },
            {
              "text": "Kashipur",
              "link": "https://www.swiggy.com/city/kashipur"
            },
            {
              "text": "Ranibennur",
              "link": "https://www.swiggy.com/city/ranibennur"
            },
            {
              "text": "Burhanpur",
              "link": "https://www.swiggy.com/city/burhanpur"
            },
            {
              "text": "Bhadravati",
              "link": "https://www.swiggy.com/city/bhadravati"
            },
            {
              "text": "Chittoor",
              "link": "https://www.swiggy.com/city/chittoor"
            },
            {
              "text": "Pudukkottai",
              "link": "https://www.swiggy.com/city/pudukkottai"
            },
            {
              "text": "Hardoi",
              "link": "https://www.swiggy.com/city/hardoi"
            },
            {
              "text": "Basti",
              "link": "https://www.swiggy.com/city/basti"
            },
            {
              "text": "Karaikkudi",
              "link": "https://www.swiggy.com/city/karaikkudi"
            },
            {
              "text": "Lalitpur",
              "link": "https://www.swiggy.com/city/lalitpur"
            },
            {
              "text": "Hospet",
              "link": "https://www.swiggy.com/city/hospet"
            },
            {
              "text": "Budaun",
              "link": "https://www.swiggy.com/city/budaun"
            },
            {
              "text": "Neemuch",
              "link": "https://www.swiggy.com/city/neemuch"
            },
            {
              "text": "Pilibhit",
              "link": "https://www.swiggy.com/city/pilibhit"
            },
            {
              "text": "Amroha",
              "link": "https://www.swiggy.com/city/amroha"
            },
            {
              "text": "Barshi",
              "link": "https://www.swiggy.com/city/barshi"
            },
            {
              "text": "Sri Ganganagar",
              "link": "https://www.swiggy.com/city/sri-ganganagar"
            },
            {
              "text": "Wardha",
              "link": "https://www.swiggy.com/city/wardha"
            },
            {
              "text": "Sehore",
              "link": "https://www.swiggy.com/city/sehore"
            },
            {
              "text": "Bhimavaram",
              "link": "https://www.swiggy.com/city/bhimavaram"
            },
            {
              "text": "Hanumangarh",
              "link": "https://www.swiggy.com/city/hanumangarh"
            },
            {
              "text": "Pathankot",
              "link": "https://www.swiggy.com/city/pathankot"
            },
            {
              "text": "Puri",
              "link": "https://www.swiggy.com/city/puri"
            },
            {
              "text": "Fatehpur",
              "link": "https://www.swiggy.com/city/fatehpur"
            },
            {
              "text": "Surendranagar Dudhrej",
              "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
            },
            {
              "text": "Jamnagar",
              "link": "https://www.swiggy.com/city/jamnagar"
            },
            {
              "text": "Bhuj",
              "link": "https://www.swiggy.com/city/bhuj"
            },
            {
              "text": "Gandhidham",
              "link": "https://www.swiggy.com/city/gandhidham"
            },
            {
              "text": "Bharuch",
              "link": "https://www.swiggy.com/city/bharuch"
            },
            {
              "text": "Navsari",
              "link": "https://www.swiggy.com/city/navsari"
            },
            {
              "text": "Amreli",
              "link": "https://www.swiggy.com/city/amreli"
            },
            {
              "text": "Palanpur",
              "link": "https://www.swiggy.com/city/palanpur"
            },
            {
              "text": "Bhilwara",
              "link": "https://www.swiggy.com/city/bhilwara"
            },
            {
              "text": "Suratgarh",
              "link": "https://www.swiggy.com/city/suratgarh"
            },
            {
              "text": "Sikar",
              "link": "https://www.swiggy.com/city/sikar"
            },
            {
              "text": "Churu",
              "link": "https://www.swiggy.com/city/churu"
            },
            {
              "text": "Alwar",
              "link": "https://www.swiggy.com/city/alwar"
            },
            {
              "text": "Bhiwadi",
              "link": "https://www.swiggy.com/city/bhiwadi"
            },
            {
              "text": "Bharatpur",
              "link": "https://www.swiggy.com/city/bharatpur"
            },
            {
              "text": "Mount Abu",
              "link": "https://www.swiggy.com/city/mount-abu"
            },
            {
              "text": "Bundi",
              "link": "https://www.swiggy.com/city/bundi"
            },
            {
              "text": "Sawai Madhopur",
              "link": "https://www.swiggy.com/city/sawai-madhopur"
            },
            {
              "text": "Purulia",
              "link": "https://www.swiggy.com/city/purulia"
            },
            {
              "text": "Bardhaman",
              "link": "https://www.swiggy.com/city/bardhaman"
            },
            {
              "text": "Raniganj",
              "link": "https://www.swiggy.com/city/raniganj"
            },
            {
              "text": "Darjeeling",
              "link": "https://www.swiggy.com/city/darjeeling"
            },
            {
              "text": "Jalpaiguri",
              "link": "https://www.swiggy.com/city/jalpaiguri"
            },
            {
              "text": "Chittorgarh",
              "link": "https://www.swiggy.com/city/chittorgarh"
            },
            {
              "text": "Dholpur",
              "link": "https://www.swiggy.com/city/dholpur"
            },
            {
              "text": "Uluberia",
              "link": "https://www.swiggy.com/city/uluberia"
            },
            {
              "text": "Nabadwip",
              "link": "https://www.swiggy.com/city/nabadwip"
            },
            {
              "text": "Bongaon",
              "link": "https://www.swiggy.com/city/bongaon"
            },
            {
              "text": "Kanchrapara",
              "link": "https://www.swiggy.com/city/kanchrapara"
            },
            {
              "text": "Bankura",
              "link": "https://www.swiggy.com/city/bankura"
            },
            {
              "text": "Habra",
              "link": "https://www.swiggy.com/city/habra"
            },
            {
              "text": "Firozabad",
              "link": "https://www.swiggy.com/city/firozabad"
            },
            {
              "text": "Nalgonda",
              "link": "https://www.swiggy.com/city/nalgonda"
            },
            {
              "text": "Chandrapur",
              "link": "https://www.swiggy.com/city/chandrapur"
            },
            {
              "text": "Bijapur",
              "link": "https://www.swiggy.com/city/bijapur"
            },
            {
              "text": "Bhusawal",
              "link": "https://www.swiggy.com/city/bhusawal"
            },
            {
              "text": "Raichur",
              "link": "https://www.swiggy.com/city/raichur"
            },
            {
              "text": "Bahraich",
              "link": "https://www.swiggy.com/city/bahraich"
            },
            {
              "text": "Azamgarh",
              "link": "https://www.swiggy.com/city/azamgarh"
            },
            {
              "text": "Bahadurgarh",
              "link": "https://www.swiggy.com/city/bahadurgarh"
            },
            {
              "text": "Jind",
              "link": "https://www.swiggy.com/city/jind"
            },
            {
              "text": "Rewari",
              "link": "https://www.swiggy.com/city/rewari"
            },
            {
              "text": "Palwal",
              "link": "https://www.swiggy.com/city/palwal"
            },
            {
              "text": "Hathras",
              "link": "https://www.swiggy.com/city/hathras"
            },
            {
              "text": "Sambalpur",
              "link": "https://www.swiggy.com/city/sambalpur"
            },
            {
              "text": "Banda",
              "link": "https://www.swiggy.com/city/banda"
            },
            {
              "text": "Hoshiarpur",
              "link": "https://www.swiggy.com/city/hoshiarpur"
            },
            {
              "text": "Faridkot",
              "link": "https://www.swiggy.com/city/faridkot"
            },
            {
              "text": "Mandsaur",
              "link": "https://www.swiggy.com/city/mandsaur"
            },
            {
              "text": "Suryapet",
              "link": "https://www.swiggy.com/city/suryapet"
            },
            {
              "text": "Adilabad",
              "link": "https://www.swiggy.com/city/adilabad"
            },
            {
              "text": "Narasaraopet",
              "link": "https://www.swiggy.com/city/narasaraopet"
            },
            {
              "text": "Faizabad",
              "link": "https://www.swiggy.com/city/faizabad"
            },
            {
              "text": "Tadpatri",
              "link": "https://www.swiggy.com/city/tadpatri"
            },
            {
              "text": "Gonda",
              "link": "https://www.swiggy.com/city/gonda"
            },
            {
              "text": "Mughalsarai",
              "link": "https://www.swiggy.com/city/mughalsarai"
            },
            {
              "text": "Medinipur",
              "link": "https://www.swiggy.com/city/medinipur"
            },
            {
              "text": "Nagda",
              "link": "https://www.swiggy.com/city/nagda"
            },
            {
              "text": "Chilakaluripet",
              "link": "https://www.swiggy.com/city/chilakaluripet"
            },
            {
              "text": "Hindupur",
              "link": "https://www.swiggy.com/city/hindupur"
            },
            {
              "text": "Kasganj",
              "link": "https://www.swiggy.com/city/kasganj"
            },
            {
              "text": "Raiganj",
              "link": "https://www.swiggy.com/city/raiganj"
            },
            {
              "text": "Deoria City",
              "link": "https://www.swiggy.com/city/deoria-city"
            },
            {
              "text": "Sultanpur",
              "link": "https://www.swiggy.com/city/sultanpur"
            },
            {
              "text": "Shamli",
              "link": "https://www.swiggy.com/city/shamli"
            },
            {
              "text": "Krishnanagar",
              "link": "https://www.swiggy.com/city/krishnanagar"
            },
            {
              "text": "Ballia",
              "link": "https://www.swiggy.com/city/ballia"
            },
            {
              "text": "Guntakal",
              "link": "https://www.swiggy.com/city/guntakal"
            },
            {
              "text": "Miryalaguda",
              "link": "https://www.swiggy.com/city/miryalaguda"
            },
            {
              "text": "Etah",
              "link": "https://www.swiggy.com/city/etah"
            },
            {
              "text": "Berhampore",
              "link": "https://www.swiggy.com/city/berhampore"
            },
            {
              "text": "Gudivada",
              "link": "https://www.swiggy.com/city/gudivada"
            },
            {
              "text": "Haldia",
              "link": "https://www.swiggy.com/city/haldia"
            },
            {
              "text": "Santipur",
              "link": "https://www.swiggy.com/city/santipur"
            },
            {
              "text": "Basirhat",
              "link": "https://www.swiggy.com/city/basirhat"
            },
            {
              "text": "Seoni",
              "link": "https://www.swiggy.com/city/seoni"
            },
            {
              "text": "Udgir",
              "link": "https://www.swiggy.com/city/udgir"
            },
            {
              "text": "Proddatur",
              "link": "https://www.swiggy.com/city/proddatur"
            },
            {
              "text": "Nagapattinam",
              "link": "https://www.swiggy.com/city/nagapattinam"
            },
            {
              "text": "Chikmagalur",
              "link": "https://www.swiggy.com/city/chikmagalur"
            },
            {
              "text": "Chandausi",
              "link": "https://www.swiggy.com/city/chandausi"
            },
            {
              "text": "Bhind",
              "link": "https://www.swiggy.com/city/bhind"
            },
            {
              "text": "Mandya",
              "link": "https://www.swiggy.com/city/mandya"
            },
            {
              "text": "Bagalkot",
              "link": "https://www.swiggy.com/city/bagalkot"
            },
            {
              "text": "Nandurbar",
              "link": "https://www.swiggy.com/city/nandurbar"
            },
            {
              "text": "Chitradurga",
              "link": "https://www.swiggy.com/city/chitradurga"
            },
            {
              "text": "Osmanabad",
              "link": "https://www.swiggy.com/city/osmanabad"
            },
            {
              "text": "Modinagar",
              "link": "https://www.swiggy.com/city/modinagar"
            },
            {
              "text": "Gadag-Betigeri",
              "link": "https://www.swiggy.com/city/gadag-betigeri"
            },
            {
              "text": "Hoshangabad",
              "link": "https://www.swiggy.com/city/hoshangabad"
            },
            {
              "text": "Jaunpur",
              "link": "https://www.swiggy.com/city/jaunpur"
            },
            {
              "text": "Khurja",
              "link": "https://www.swiggy.com/city/khurja"
            },
            {
              "text": "Port Blair",
              "link": "https://www.swiggy.com/city/port-blair"
            },
            {
              "text": "Jorhat",
              "link": "https://www.swiggy.com/city/jorhat"
            },
            {
              "text": "Nandyal",
              "link": "https://www.swiggy.com/city/nandyal"
            },
            {
              "text": "Biharsharif",
              "link": "https://www.swiggy.com/city/biharsharif"
            },
            {
              "text": "Buxar",
              "link": "https://www.swiggy.com/city/buxar"
            },
            {
              "text": "Siwan",
              "link": "https://www.swiggy.com/city/siwan"
            },
            {
              "text": "Dehri",
              "link": "https://www.swiggy.com/city/dehri"
            },
            {
              "text": "Bettiah",
              "link": "https://www.swiggy.com/city/bettiah"
            },
            {
              "text": "Kishanganj",
              "link": "https://www.swiggy.com/city/kishanganj"
            },
            {
              "text": "Saharsa",
              "link": "https://www.swiggy.com/city/saharsa"
            },
            {
              "text": "Hajipur",
              "link": "https://www.swiggy.com/city/hajipur"
            },
            {
              "text": "Motihari",
              "link": "https://www.swiggy.com/city/motihari"
            },
            {
              "text": "Sasaram",
              "link": "https://www.swiggy.com/city/sasaram"
            },
            {
              "text": "Munger",
              "link": "https://www.swiggy.com/city/munger"
            },
            {
              "text": "Katihar",
              "link": "https://www.swiggy.com/city/katihar"
            },
            {
              "text": "Arrah",
              "link": "https://www.swiggy.com/city/arrah"
            },
            {
              "text": "Srikakulam",
              "link": "https://www.swiggy.com/city/srikakulam"
            },
            {
              "text": "Begusarai",
              "link": "https://www.swiggy.com/city/begusarai"
            },
            {
              "text": "Neyveli",
              "link": "https://www.swiggy.com/city/neyveli"
            },
            {
              "text": "Waidhan",
              "link": "https://www.swiggy.com/city/waidhan"
            },
            {
              "text": "Markapur",
              "link": "https://www.swiggy.com/city/markapur"
            },
            {
              "text": "Chikkaballapur",
              "link": "https://www.swiggy.com/city/chikkaballapur"
            },
            {
              "text": "Bhatkal",
              "link": "https://www.swiggy.com/city/bhatkal"
            },
            {
              "text": "Gokak",
              "link": "https://www.swiggy.com/city/gokak"
            },
            {
              "text": "Itarsi",
              "link": "https://www.swiggy.com/city/itarsi"
            },
            {
              "text": "Dabra",
              "link": "https://www.swiggy.com/city/dabra"
            },
            {
              "text": "Dhar",
              "link": "https://www.swiggy.com/city/dhar"
            },
            {
              "text": "Chalisgaon",
              "link": "https://www.swiggy.com/city/chalisgaon"
            },
            {
              "text": "Thiruvallur",
              "link": "https://www.swiggy.com/city/thiruvallur"
            },
            {
              "text": "Namakkal",
              "link": "https://www.swiggy.com/city/namakkal"
            },
            {
              "text": "Dharmapuri",
              "link": "https://www.swiggy.com/city/dharmapuri"
            },
            {
              "text": "Bhandara",
              "link": "https://www.swiggy.com/city/bhandara"
            },
            {
              "text": "Virudhunagar",
              "link": "https://www.swiggy.com/city/virudhunagar"
            },
            {
              "text": "Siddipet",
              "link": "https://www.swiggy.com/city/siddipet"
            },
            {
              "text": "Gadwal",
              "link": "https://www.swiggy.com/city/gadwal"
            },
            {
              "text": "Bodhan-Rural",
              "link": "https://www.swiggy.com/city/bodhan-rural"
            },
            {
              "text": "Kamareddy",
              "link": "https://www.swiggy.com/city/kamareddy"
            },
            {
              "text": "Jhunjhunu",
              "link": "https://www.swiggy.com/city/jhunjhunu"
            },
            {
              "text": "Kapurthala",
              "link": "https://www.swiggy.com/city/kapurthala"
            },
            {
              "text": "Sangrur",
              "link": "https://www.swiggy.com/city/sangrur"
            },
            {
              "text": "Gurdaspur",
              "link": "https://www.swiggy.com/city/gurdaspur"
            },
            {
              "text": "Ramgarh",
              "link": "https://www.swiggy.com/city/ramgarh"
            },
            {
              "text": "Bantwal",
              "link": "https://www.swiggy.com/city/bantwal"
            },
            {
              "text": "Doddaballapura",
              "link": "https://www.swiggy.com/city/doddaballapura"
            },
            {
              "text": "Buldana",
              "link": "https://www.swiggy.com/city/buldana"
            },
            {
              "text": "Karad",
              "link": "https://www.swiggy.com/city/karad"
            },
            {
              "text": "Krishnagiri",
              "link": "https://www.swiggy.com/city/krishnagiri"
            },
            {
              "text": "Tiptur",
              "link": "https://www.swiggy.com/city/tiptur"
            },
            {
              "text": "Bhadrachalam",
              "link": "https://www.swiggy.com/city/bhadrachalam"
            },
            {
              "text": "Mancherial",
              "link": "https://www.swiggy.com/city/mancherial"
            },
            {
              "text": "Balrampur",
              "link": "https://www.swiggy.com/city/balrampur"
            },
            {
              "text": "Bharabanki",
              "link": "https://www.swiggy.com/city/bharabanki"
            },
            {
              "text": "Malout",
              "link": "https://www.swiggy.com/city/malout"
            },
            {
              "text": "Fatehgarh Sahib",
              "link": "https://www.swiggy.com/city/fatehgarh-sahib"
            },
            {
              "text": "Ropar",
              "link": "https://www.swiggy.com/city/ropar"
            },
            {
              "text": "Nangal",
              "link": "https://www.swiggy.com/city/nangal"
            },
            {
              "text": "Narnaul",
              "link": "https://www.swiggy.com/city/narnaul"
            },
            {
              "text": "Naraingarh",
              "link": "https://www.swiggy.com/city/naraingarh"
            },
            {
              "text": "Himmatnagar",
              "link": "https://www.swiggy.com/city/himmatnagar"
            },
            {
              "text": "Dausa",
              "link": "https://www.swiggy.com/city/dausa"
            },
            {
              "text": "Jahanabad",
              "link": "https://www.swiggy.com/city/jahanabad"
            },
            {
              "text": "Samastipur",
              "link": "https://www.swiggy.com/city/samastipur"
            },
            {
              "text": "Purnea",
              "link": "https://www.swiggy.com/city/purnea"
            },
            {
              "text": "Berhampur",
              "link": "https://www.swiggy.com/city/berhampur"
            },
            {
              "text": "Malda",
              "link": "https://www.swiggy.com/city/malda"
            },
            {
              "text": "Tuni",
              "link": "https://www.swiggy.com/city/tuni"
            },
            {
              "text": "Puttur",
              "link": "https://www.swiggy.com/city/puttur"
            },
            {
              "text": "Rayachoty",
              "link": "https://www.swiggy.com/city/rayachoty"
            },
            {
              "text": "Medak",
              "link": "https://www.swiggy.com/city/medak"
            },
            {
              "text": "Nirmal",
              "link": "https://www.swiggy.com/city/nirmal"
            },
            {
              "text": "Mirzapur",
              "link": "https://www.swiggy.com/city/mirzapur"
            },
            {
              "text": "Tanuku",
              "link": "https://www.swiggy.com/city/tanuku"
            },
            {
              "text": "Dahod",
              "link": "https://www.swiggy.com/city/dahod"
            },
            {
              "text": "Barmer",
              "link": "https://www.swiggy.com/city/barmer"
            },
            {
              "text": "Gangapur City",
              "link": "https://www.swiggy.com/city/gangapur-city"
            },
            {
              "text": "Mandi Gobindgarh",
              "link": "https://www.swiggy.com/city/mandi-gobindgarh"
            },
            {
              "text": "Tarn Taran Sahib",
              "link": "https://www.swiggy.com/city/tarn-taran-sahib"
            },
            {
              "text": "Nakodar",
              "link": "https://www.swiggy.com/city/nakodar"
            },
            {
              "text": "Ankleshwar",
              "link": "https://www.swiggy.com/city/ankleshwar"
            },
            {
              "text": "Vyara",
              "link": "https://www.swiggy.com/city/vyara"
            },
            {
              "text": "Bardoli",
              "link": "https://www.swiggy.com/city/bardoli"
            },
            {
              "text": "Halol",
              "link": "https://www.swiggy.com/city/halol"
            },
            {
              "text": "Bijnor",
              "link": "https://www.swiggy.com/city/bijnor"
            },
            {
              "text": "Sawantwadi",
              "link": "https://www.swiggy.com/city/sawantwadi"
            },
            {
              "text": "Shrirampur",
              "link": "https://www.swiggy.com/city/shrirampur"
            },
            {
              "text": "Sangamner",
              "link": "https://www.swiggy.com/city/sangamner"
            },
            {
              "text": "Baramati",
              "link": "https://www.swiggy.com/city/baramati"
            },
            {
              "text": "Betul",
              "link": "https://www.swiggy.com/city/betul"
            },
            {
              "text": "Chhatarpur",
              "link": "https://www.swiggy.com/city/chhatarpur"
            },
            {
              "text": "Datia",
              "link": "https://www.swiggy.com/city/datia"
            },
            {
              "text": "Balaghat",
              "link": "https://www.swiggy.com/city/balaghat"
            },
            {
              "text": "Sivakasi",
              "link": "https://www.swiggy.com/city/sivakasi"
            },
            {
              "text": "Viluppuram",
              "link": "https://www.swiggy.com/city/viluppuram"
            },
            {
              "text": "Ramanathapuram",
              "link": "https://www.swiggy.com/city/ramanathapuram"
            },
            {
              "text": "Sirsi",
              "link": "https://www.swiggy.com/city/sirsi"
            },
            {
              "text": "Kodaikanal",
              "link": "https://www.swiggy.com/city/kodaikanal"
            },
            {
              "text": "Theni",
              "link": "https://www.swiggy.com/city/theni"
            },
            {
              "text": "Karur",
              "link": "https://www.swiggy.com/city/karur"
            },
            {
              "text": "Karwar",
              "link": "https://www.swiggy.com/city/karwar"
            },
            {
              "text": "Sindhanur",
              "link": "https://www.swiggy.com/city/sindhanur"
            },
            {
              "text": "Kannur",
              "link": "https://www.swiggy.com/city/kannur"
            },
            {
              "text": "Noida 1",
              "link": "https://www.swiggy.com/city/noida-1"
            },
            {
              "text": "Karunagappaly",
              "link": "https://www.swiggy.com/city/karunagappaly"
            },
            {
              "text": "Thiruvalla",
              "link": "https://www.swiggy.com/city/thiruvalla"
            },
            {
              "text": "Thodupuzha",
              "link": "https://www.swiggy.com/city/thodupuzha"
            },
            {
              "text": "Kadiri",
              "link": "https://www.swiggy.com/city/kadiri"
            },
            {
              "text": "Kavali",
              "link": "https://www.swiggy.com/city/kavali"
            },
            {
              "text": "Tezpur",
              "link": "https://www.swiggy.com/city/tezpur"
            },
            {
              "text": "Kayamkulam",
              "link": "https://www.swiggy.com/city/kayamkulam"
            },
            {
              "text": "Kottarakkara",
              "link": "https://www.swiggy.com/city/kottarakkara"
            },
            {
              "text": "Mandi Dabwali",
              "link": "https://www.swiggy.com/city/mandi-dabwali"
            },
            {
              "text": "Fatehabad",
              "link": "https://www.swiggy.com/city/fatehabad"
            },
            {
              "text": "Jagraon",
              "link": "https://www.swiggy.com/city/jagraon"
            },
            {
              "text": "Mansa",
              "link": "https://www.swiggy.com/city/mansa"
            },
            {
              "text": "Pinjore City",
              "link": "https://www.swiggy.com/city/pinjore-city"
            },
            {
              "text": "Fazilka",
              "link": "https://www.swiggy.com/city/fazilka"
            },
            {
              "text": "Baddi",
              "link": "https://www.swiggy.com/city/baddi"
            },
            {
              "text": "Solan",
              "link": "https://www.swiggy.com/city/solan"
            },
            {
              "text": "Daltonganj",
              "link": "https://www.swiggy.com/city/daltonganj"
            },
            {
              "text": "Balangir",
              "link": "https://www.swiggy.com/city/balangir"
            },
            {
              "text": "Paonta Sahib",
              "link": "https://www.swiggy.com/city/paonta-sahib"
            },
            {
              "text": "Kothagudem",
              "link": "https://www.swiggy.com/city/kothagudem"
            },
            {
              "text": "Hansi",
              "link": "https://www.swiggy.com/city/hansi"
            },
            {
              "text": "Aurangabad_Bihar",
              "link": "https://www.swiggy.com/city/aurangabadbihar"
            },
            {
              "text": "Charkhi Dadri",
              "link": "https://www.swiggy.com/city/charkhi-dadri"
            },
            {
              "text": "Gopalganj",
              "link": "https://www.swiggy.com/city/gopalganj"
            },
            {
              "text": "Jharsuguda",
              "link": "https://www.swiggy.com/city/jharsuguda"
            },
            {
              "text": "Tohana",
              "link": "https://www.swiggy.com/city/tohana"
            },
            {
              "text": "Jhalawar",
              "link": "https://www.swiggy.com/city/jhalawar"
            },
            {
              "text": "Sivasagar",
              "link": "https://www.swiggy.com/city/sivasagar"
            },
            {
              "text": "Bagdogra",
              "link": "https://www.swiggy.com/city/bagdogra"
            },
            {
              "text": "Angul",
              "link": "https://www.swiggy.com/city/angul"
            },
            {
              "text": "Kendrapada",
              "link": "https://www.swiggy.com/city/kendrapada"
            },
            {
              "text": "Mallapuram (Do not Use)",
              "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
            },
            {
              "text": "Veraval",
              "link": "https://www.swiggy.com/city/veraval"
            },
            {
              "text": "Daman",
              "link": "https://www.swiggy.com/city/daman"
            },
            {
              "text": "Chiplun",
              "link": "https://www.swiggy.com/city/chiplun"
            },
            {
              "text": "Silvassa",
              "link": "https://www.swiggy.com/city/silvassa"
            },
            {
              "text": "Bapatla&Chirala",
              "link": "https://www.swiggy.com/city/bapatla-and-chirala"
            },
            {
              "text": "Lonavla",
              "link": "https://www.swiggy.com/city/lonavla"
            },
            {
              "text": "Bongaigaon",
              "link": "https://www.swiggy.com/city/bongaigaon"
            },
            {
              "text": "Golaghat",
              "link": "https://www.swiggy.com/city/golaghat"
            },
            {
              "text": "Duliajan",
              "link": "https://www.swiggy.com/city/duliajan"
            },
            {
              "text": "Ramnagar",
              "link": "https://www.swiggy.com/city/ramnagar"
            },
            {
              "text": "Bolpur",
              "link": "https://www.swiggy.com/city/bolpur"
            },
            {
              "text": "Madhubani",
              "link": "https://www.swiggy.com/city/madhubani"
            },
            {
              "text": "Balasore",
              "link": "https://www.swiggy.com/city/balasore"
            },
            {
              "text": "Palampur",
              "link": "https://www.swiggy.com/city/palampur"
            },
            {
              "text": "Kotdwar",
              "link": "https://www.swiggy.com/city/kotdwar"
            },
            {
              "text": "Koppal",
              "link": "https://www.swiggy.com/city/koppal"
            },
            {
              "text": "Chikhli",
              "link": "https://www.swiggy.com/city/chikhli"
            },
            {
              "text": "Dahanu",
              "link": "https://www.swiggy.com/city/dahanu"
            },
            {
              "text": "Itanagar",
              "link": "https://www.swiggy.com/city/itanagar"
            },
            {
              "text": "Rangpo",
              "link": "https://www.swiggy.com/city/rangpo"
            },
            {
              "text": "Aizawl",
              "link": "https://www.swiggy.com/city/aizawl"
            },
            {
              "text": "Gangtok",
              "link": "https://www.swiggy.com/city/gangtok"
            },
            {
              "text": "Mayiladuthurai",
              "link": "https://www.swiggy.com/city/mayiladuthurai"
            },
            {
              "text": "Kannauj",
              "link": "https://www.swiggy.com/city/kannauj"
            },
            {
              "text": "Cooch Behar",
              "link": "https://www.swiggy.com/city/cooch-behar"
            },
            {
              "text": "Jaigaon",
              "link": "https://www.swiggy.com/city/jaigaon"
            },
            {
              "text": "Palani",
              "link": "https://www.swiggy.com/city/palani"
            },
            {
              "text": "Bilimora",
              "link": "https://www.swiggy.com/city/bilimora"
            },
            {
              "text": "Udhampur",
              "link": "https://www.swiggy.com/city/udhampur"
            },
            {
              "text": "Boisar",
              "link": "https://www.swiggy.com/city/boisar"
            },
            {
              "text": "Kohima",
              "link": "https://www.swiggy.com/city/kohima"
            },
            {
              "text": "Naharlagun",
              "link": "https://www.swiggy.com/city/naharlagun"
            },
            {
              "text": "Dumka",
              "link": "https://www.swiggy.com/city/dumka"
            },
            {
              "text": "Rajsamand",
              "link": "https://www.swiggy.com/city/rajsamand"
            },
            {
              "text": "Gauriganj",
              "link": "https://www.swiggy.com/city/gauriganj"
            },
            {
              "text": "Bodinayakanur",
              "link": "https://www.swiggy.com/city/bodinayakanur"
            },
            {
              "text": "Bhawanipatna",
              "link": "https://www.swiggy.com/city/bhawanipatna"
            },
            {
              "text": "Baran",
              "link": "https://www.swiggy.com/city/baran"
            },
            {
              "text": "Narsinghpur",
              "link": "https://www.swiggy.com/city/narsinghpur"
            },
            {
              "text": "Uran Islampur",
              "link": "https://www.swiggy.com/city/uran-islampur"
            },
            {
              "text": "Kovilpatti",
              "link": "https://www.swiggy.com/city/kovilpatti"
            },
            {
              "text": "Kasaragod",
              "link": "https://www.swiggy.com/city/kasaragod"
            },
            {
              "text": "Pusad",
              "link": "https://www.swiggy.com/city/pusad"
            },
            {
              "text": "Kendujhar",
              "link": "https://www.swiggy.com/city/kendujhar"
            },
            {
              "text": "Manali",
              "link": "https://www.swiggy.com/city/manali"
            },
            {
              "text": "Diu",
              "link": "https://www.swiggy.com/city/diu"
            },
            {
              "text": "Khamgaon",
              "link": "https://www.swiggy.com/city/khamgaon"
            },
            {
              "text": "Ramanagara",
              "link": "https://www.swiggy.com/city/ramanagara"
            },
            {
              "text": "Alipurduar",
              "link": "https://www.swiggy.com/city/alipurduar"
            },
            {
              "text": "Almora",
              "link": "https://www.swiggy.com/city/almora"
            },
            {
              "text": "Jhargram",
              "link": "https://www.swiggy.com/city/jhargram"
            },
            {
              "text": "Arambagh",
              "link": "https://www.swiggy.com/city/arambagh"
            },
            {
              "text": "Bhadohi",
              "link": "https://www.swiggy.com/city/bhadohi"
            },
            {
              "text": "Tenkasi",
              "link": "https://www.swiggy.com/city/tenkasi"
            },
            {
              "text": "Srivilliputhur",
              "link": "https://www.swiggy.com/city/srivilliputhur"
            },
            {
              "text": "Chidambaram",
              "link": "https://www.swiggy.com/city/chidambaram"
            },
            {
              "text": "Rajgarh",
              "link": "https://www.swiggy.com/city/rajgarh"
            },
            {
              "text": "Pratapgarh",
              "link": "https://www.swiggy.com/city/pratapgarh"
            },
            {
              "text": "Washim",
              "link": "https://www.swiggy.com/city/washim"
            },
            {
              "text": "Mandi HP",
              "link": "https://www.swiggy.com/city/mandi-hp"
            },
            {
              "text": "Ranaghat",
              "link": "https://www.swiggy.com/city/ranaghat"
            },
            {
              "text": "Raghunathpur",
              "link": "https://www.swiggy.com/city/raghunathpur"
            },
            {
              "text": "Suri",
              "link": "https://www.swiggy.com/city/suri"
            },
            {
              "text": "Kadayanallur",
              "link": "https://www.swiggy.com/city/kadayanallur"
            },
            {
              "text": "Thiruvarur",
              "link": "https://www.swiggy.com/city/thiruvarur"
            },
            {
              "text": "Ranaghat-WB",
              "link": "https://www.swiggy.com/city/ranaghat-wb"
            },
            {
              "text": "Idukki",
              "link": "https://www.swiggy.com/city/idukki"
            },
            {
              "text": "Wayanad",
              "link": "https://www.swiggy.com/city/wayanad"
            },
            {
              "text": "Perambalur",
              "link": "https://www.swiggy.com/city/perambalur"
            },
            {
              "text": "Paramakudi",
              "link": "https://www.swiggy.com/city/paramakudi"
            },
            {
              "text": "Khopoli",
              "link": "https://www.swiggy.com/city/khopoli"
            },
            {
              "text": "Bela Pratapgarh",
              "link": "https://www.swiggy.com/city/bela-pratapgarh"
            },
            {
              "text": "Mahoba",
              "link": "https://www.swiggy.com/city/mahoba"
            },
            {
              "text": "Sitamarhi",
              "link": "https://www.swiggy.com/city/sitamarhi"
            },
            {
              "text": "Chakdaha",
              "link": "https://www.swiggy.com/city/chakdaha"
            },
            {
              "text": "Khalilabad",
              "link": "https://www.swiggy.com/city/khalilabad"
            },
            {
              "text": "Pattukkottai",
              "link": "https://www.swiggy.com/city/pattukkottai"
            },
            {
              "text": "Tindivanam",
              "link": "https://www.swiggy.com/city/tindivanam"
            },
            {
              "text": "Tiruttani",
              "link": "https://www.swiggy.com/city/tiruttani"
            },
            {
              "text": "Gangarampur",
              "link": "https://www.swiggy.com/city/gangarampur"
            },
            {
              "text": "Dharapuram",
              "link": "https://www.swiggy.com/city/dharapuram"
            },
            {
              "text": "Arakkonam",
              "link": "https://www.swiggy.com/city/arakkonam"
            },
            {
              "text": "Sirkali",
              "link": "https://www.swiggy.com/city/sirkali"
            },
            {
              "text": "Aruppukottai",
              "link": "https://www.swiggy.com/city/aruppukottai"
            },
            {
              "text": "Mettupalayam",
              "link": "https://www.swiggy.com/city/mettupalayam"
            },
            {
              "text": "Digboi",
              "link": "https://www.swiggy.com/city/digboi"
            },
            {
              "text": "Biswanath Chariali",
              "link": "https://www.swiggy.com/city/biswanath-chariali"
            },
            {
              "text": "Nalbari",
              "link": "https://www.swiggy.com/city/nalbari"
            },
            {
              "text": "Shirdi city",
              "link": "https://www.swiggy.com/city/shirdi-city"
            },
            {
              "text": "Mukerian",
              "link": "https://www.swiggy.com/city/mukerian"
            },
            {
              "text": "Hosur",
              "link": "https://www.swiggy.com/city/hosur"
            },
            {
              "text": "Palakollu",
              "link": "https://www.swiggy.com/city/palakollu"
            },
            {
              "text": "Amalapuram",
              "link": "https://www.swiggy.com/city/amalapuram"
            },
            {
              "text": "Ravulapalem",
              "link": "https://www.swiggy.com/city/ravulapalem"
            },
            {
              "text": "Narsipatnam",
              "link": "https://www.swiggy.com/city/narsipatnam"
            },
            {
              "text": "Barh",
              "link": "https://www.swiggy.com/city/barh"
            },
            {
              "text": "Palghar",
              "link": "https://www.swiggy.com/city/palghar"
            },
            {
              "text": "Shahdol",
              "link": "https://www.swiggy.com/city/shahdol"
            },
            {
              "text": "Kushalnagar",
              "link": "https://www.swiggy.com/city/kushalnagar"
            },
            {
              "text": "Dungarpur",
              "link": "https://www.swiggy.com/city/dungarpur"
            },
            {
              "text": "Chaibasa",
              "link": "https://www.swiggy.com/city/chaibasa"
            },
            {
              "text": "Haveri",
              "link": "https://www.swiggy.com/city/haveri"
            },
            {
              "text": "Karaikal",
              "link": "https://www.swiggy.com/city/karaikal"
            },
            {
              "text": "Jjajjar",
              "link": "https://www.swiggy.com/city/jjajjar"
            },
            {
              "text": "Kokrajhar",
              "link": "https://www.swiggy.com/city/kokrajhar"
            },
            {
              "text": "Rangia",
              "link": "https://www.swiggy.com/city/rangia"
            },
            {
              "text": "Hamirpur",
              "link": "https://www.swiggy.com/city/hamirpur"
            },
            {
              "text": "Una",
              "link": "https://www.swiggy.com/city/una"
            },
            {
              "text": "Sulthan Bathery",
              "link": "https://www.swiggy.com/city/sulthan-bathery"
            },
            {
              "text": "Rayagada",
              "link": "https://www.swiggy.com/city/rayagada"
            },
            {
              "text": "Paradeep",
              "link": "https://www.swiggy.com/city/paradeep"
            },
            {
              "text": "Mandapeta",
              "link": "https://www.swiggy.com/city/mandapeta"
            },
            {
              "text": "Jamui",
              "link": "https://www.swiggy.com/city/jamui"
            },
            {
              "text": "Pilkhuwa",
              "link": "https://www.swiggy.com/city/pilkhuwa"
            },
            {
              "text": "Parvathipuram",
              "link": "https://www.swiggy.com/city/parvathipuram"
            },
            {
              "text": "Ambajogai",
              "link": "https://www.swiggy.com/city/ambajogai"
            },
            {
              "text": "Araria",
              "link": "https://www.swiggy.com/city/araria"
            },
            {
              "text": "North Lakhimpur",
              "link": "https://www.swiggy.com/city/north-lakhimpur"
            },
            {
              "text": "Rajampet",
              "link": "https://www.swiggy.com/city/rajampet"
            },
            {
              "text": "Udumalaipettai",
              "link": "https://www.swiggy.com/city/udumalaipettai"
            },
            {
              "text": "Tirupattur",
              "link": "https://www.swiggy.com/city/tirupattur"
            },
            {
              "text": "Hojai",
              "link": "https://www.swiggy.com/city/hojai"
            },
            {
              "text": "Khagaria",
              "link": "https://www.swiggy.com/city/khagaria"
            },
            {
              "text": "Dasuya",
              "link": "https://www.swiggy.com/city/dasuya"
            },
            {
              "text": "Gudur",
              "link": "https://www.swiggy.com/city/gudur"
            },
            {
              "text": "Sullurpeta",
              "link": "https://www.swiggy.com/city/sullurpeta"
            },
            {
              "text": "Piler",
              "link": "https://www.swiggy.com/city/piler"
            },
            {
              "text": "SankaranKoil",
              "link": "https://www.swiggy.com/city/sankarankoil"
            },
            {
              "text": "Nabha",
              "link": "https://www.swiggy.com/city/nabha"
            },
            {
              "text": "LPU - Phagwara",
              "link": "https://www.swiggy.com/city/lpu-phagwara"
            },
            {
              "text": "Jangipur",
              "link": "https://www.swiggy.com/city/jangipur"
            },
            {
              "text": "Roha",
              "link": "https://www.swiggy.com/city/roha"
            },
            {
              "text": "Maharajganj",
              "link": "https://www.swiggy.com/city/maharajganj"
            },
            {
              "text": "Kallakurichi",
              "link": "https://www.swiggy.com/city/kallakurichi"
            },
            {
              "text": "Kalimpong",
              "link": "https://www.swiggy.com/city/kalimpong"
            },
            {
              "text": "Sundernagar",
              "link": "https://www.swiggy.com/city/sundernagar"
            },
            {
              "text": "Nawada",
              "link": "https://www.swiggy.com/city/nawada"
            },
            {
              "text": "Forbesganj",
              "link": "https://www.swiggy.com/city/forbesganj"
            },
            {
              "text": "Mokameh Khas",
              "link": "https://www.swiggy.com/city/mokameh-khas"
            },
            {
              "text": "Bazpur",
              "link": "https://www.swiggy.com/city/bazpur"
            },
            {
              "text": "Lakhisarai",
              "link": "https://www.swiggy.com/city/lakhisarai"
            },
            {
              "text": "Rameswaram",
              "link": "https://www.swiggy.com/city/rameswaram"
            },
            {
              "text": "Sahjanwa",
              "link": "https://www.swiggy.com/city/sahjanwa"
            },
            {
              "text": "Siddharthnagar",
              "link": "https://www.swiggy.com/city/siddharthnagar"
            },
            {
              "text": "Nanjangud",
              "link": "https://www.swiggy.com/city/nanjangud"
            },
            {
              "text": "Chamarajanagar",
              "link": "https://www.swiggy.com/city/chamarajanagar"
            },
            {
              "text": "Kurali",
              "link": "https://www.swiggy.com/city/kurali"
            },
            {
              "text": "Sundar Nagar",
              "link": "https://www.swiggy.com/city/sundar-nagar"
            },
            {
              "text": "Bobbili",
              "link": "https://www.swiggy.com/city/bobbili"
            },
            {
              "text": "Jangaon",
              "link": "https://www.swiggy.com/city/jangaon"
            },
            {
              "text": "Banswara",
              "link": "https://www.swiggy.com/city/banswara"
            },
            {
              "text": "Sundergarh",
              "link": "https://www.swiggy.com/city/sundergarh"
            },
            {
              "text": "Godda",
              "link": "https://www.swiggy.com/city/godda"
            },
            {
              "text": "Madhupur",
              "link": "https://www.swiggy.com/city/madhupur"
            },
            {
              "text": "Katwa",
              "link": "https://www.swiggy.com/city/katwa"
            },
            {
              "text": "Dhupguri",
              "link": "https://www.swiggy.com/city/dhupguri"
            },
            {
              "text": "Contai",
              "link": "https://www.swiggy.com/city/contai"
            },
            {
              "text": "Baramulla",
              "link": "https://www.swiggy.com/city/baramulla"
            },
            {
              "text": "Kangeyam",
              "link": "https://www.swiggy.com/city/kangeyam"
            },
            {
              "text": "Naugachia",
              "link": "https://www.swiggy.com/city/naugachia"
            },
            {
              "text": "Madhepura",
              "link": "https://www.swiggy.com/city/madhepura"
            },
            {
              "text": "Jamkhambhaliya",
              "link": "https://www.swiggy.com/city/jamkhambhaliya"
            },
            {
              "text": "Mundra",
              "link": "https://www.swiggy.com/city/mundra"
            },
            {
              "text": "Patan",
              "link": "https://www.swiggy.com/city/patan"
            },
            {
              "text": "Mahuva",
              "link": "https://www.swiggy.com/city/mahuva"
            },
            {
              "text": "Attur",
              "link": "https://www.swiggy.com/city/attur"
            },
            {
              "text": "Pen",
              "link": "https://www.swiggy.com/city/pen"
            },
            {
              "text": "Mandla",
              "link": "https://www.swiggy.com/city/mandla"
            },
            {
              "text": "Sidhi",
              "link": "https://www.swiggy.com/city/sidhi"
            },
            {
              "text": "Lakshadweep",
              "link": "https://www.swiggy.com/city/lakshadweep"
            },
            {
              "text": "Chitrakoot",
              "link": "https://www.swiggy.com/city/chitrakoot"
            },
            {
              "text": "Rajam",
              "link": "https://www.swiggy.com/city/rajam"
            },
            {
              "text": "Nippani",
              "link": "https://www.swiggy.com/city/nippani"
            },
            {
              "text": "Sankeshwar",
              "link": "https://www.swiggy.com/city/sankeshwar"
            },
            {
              "text": "Chikkodi",
              "link": "https://www.swiggy.com/city/chikkodi"
            },
            {
              "text": "Modasa",
              "link": "https://www.swiggy.com/city/modasa"
            },
            {
              "text": "Bavla",
              "link": "https://www.swiggy.com/city/bavla"
            },
            {
              "text": "Puttur_AP",
              "link": "https://www.swiggy.com/city/puttur-ap"
            },
            {
              "text": "Sinnar",
              "link": "https://www.swiggy.com/city/sinnar"
            },
            {
              "text": "singur",
              "link": "https://www.swiggy.com/city/singur"
            },
            {
              "text": "Nelamangala",
              "link": "https://www.swiggy.com/city/nelamangala"
            },
            {
              "text": "Srinagar Uttarakhand",
              "link": "https://www.swiggy.com/city/srinagar-uttarakhand"
            },
            {
              "text": "Dhampur",
              "link": "https://www.swiggy.com/city/dhampur"
            }
          ],
          "id": "footer_content"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
          "citySlug": "jaipur",
          "lat": "26.7655739",
          "lng": "75.8536434",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          "gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-bf00d200-ccd3-4e41-a30e-98931a6bba2e\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\",\"businessLine\":\"FOOD\"}}",
          "id": "meta_data",
          "metaInfo": {
            "pageType": "FOOD_HOME_PAGE",
            "pageTitle": "Order Food Online from India's Best Food Delivery Service | Swiggy",
            "pageMetaDescription": "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
            "pageKeywords": "Food delivery, Online food order, Online food dleivery"
          },
          "screenType": "filteredCollection",
          "seoParams": {
            "apiName": "FoodHomePage",
            "seoUrl": "www.swiggy.com",
            "pageType": "FOOD_HOME_PAGE",
            "businessLine": "FOOD"
          },
          "pageContext": {
            "citySlug": "jaipur",
            "cityName": "Jaipur",
            "pageType": "FOOD_HOME_PAGE"
          }
        }
      }
    }
  ];

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                resData = {resList[0]}/>
            </div>
        </div>
    );
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);