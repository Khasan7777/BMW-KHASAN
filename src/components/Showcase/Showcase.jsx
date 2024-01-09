import React from "react";
import "./Showcase.css"

const Showcase = () => {
    return( 
        <div className="BigShowcaseBox">
                
            <div className="MediumShowcaseBox">
            
                <div className="TitleShowcaseBox">
                Features that make it stand out
                </div>
                <div className="DescriptionShowcaseBox">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis condimentum dolor, eget imperdiet velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vitae tempus nisl. Praesent sed ornare massa. Integer quis dui scelerisque, molestie massa eget, molestie arcu. Cras eget accumsan risus. Cras fermentum vitae ex eu semper. Duis ornare velit sit amet hendrerit imperdiet. Nulla lacinia tellus nec mi ornare, eget ullamcorper dolor aliquet. Sed dolor justo, imperdiet at turpis eget, gravida tincidunt eros. Morbi sed volutpat nunc. Vivamus tempor lacus et sem ultrices, vitae condimentum enim blandit. Vivamus vulputate lectus nec ligula lacinia, ut iaculis augue suscipit. Cras accumsan interdum nulla in sagittis. Nulla condimentum dui vitae est laoreet, id molestie metus convallis.
                </div>
                <div className="ButtonShowcase">
                More Images
                </div>

            </div>





            <div className="MediumShowcaseBox1">

            
                
               <div className="ImageBox">
                    <div className="Image1"> 
                    <img src="/assets/image1.png"  alt="Image1" className="Image1png"/>
                  <span className="ImageText1">LED Headlight</span>
                <span className="ImageTextChange1">bright and shine</span>
             </div>
             <div className="Image2">
                <img src="/assets/Image2.png" alt="Image2" className="Image2png" />
                
                <span className="ImageText2">Interior</span>
                <span className="ImageTextDifferent2"> Carbon fiber</span>
            
                </div>


            </div>
            <div className="Image3">
            <img src="/assets/Image3.png" alt="Image3" className="Image3png"/>
            <span className="ImageText3">checking</span>
             <span className="ImageTextSame3">German material</span>     
      </div>  
      </div>               
      </div>

               
                
           


            

      

    

    );
};
export default Showcase
