import React, { useContext} from 'react';
import { useParams } from 'react-router';
import { singleContext } from '../../App';
import '../../../node_modules/react-bootstrap';
import '../../../node_modules/react-youtube';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom';
import {Card, CardGroup} from 'react-bootstrap';
import '../../../node_modules/mdb-react-ui-kit';
import StarRatings from 'react-star-ratings';
import img from "../../Images/certificate (1).png";
import img1 from "../../Images/video.png";
import img2 from '../../Images/folder.png';




const onPlayerReady  = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}
const opts = {
  height: '420',
  width: '600',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};



const SingleCourse = () => {
    //context data 
    const courses = useContext(singleContext)
    //for collect url dynamic param value
    const { id } = useParams()
    // match url id and fakedb courses object to render UI
    const findMatch = courses.find(single => parseInt(id) === single.id);
    // destruture match course
    const { videoId, institute, title, rating, totalRate, lebel, price, description, review1, review2, review3, review4, uname1, uname2, uname3, uname4, uimg1, uimg2, uimg3, uimg4} = findMatch;
    
    return (
        <>

        <section className='container my-lg-5'>
        <div className='row'>
            {/* banner left part text */}

            <div className="col-md-6 text-center pe-40 t-20;">
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom:"20px",marginTop:"20px",  border: "2px solid red" }}> 
            <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
            </div>
            
            </div>
           
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom:"20px"}}>  
                       
                    <p></p>
                    
                </div>
            
                
                
                
            </div>
      
 

            <div className="col-md-6 d-flex align-items-center ">
                <div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
                
                <h1 className='text-decoration-underline background-red text-center'>{title}</h1>
                <h6 className="text-center">Offer by: {institute}</h6>
                <p className='text-center'><p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p></p>
                <p className='text-center'>Total Enrolled: {totalRate} Students</p>
                <h5 className='text-center'>Course Fee: INR <del>22999</del> {price}</h5>
                <p className='text-center'><strong>Level:Beginner</strong> {lebel}</p>
                <p>{description}</p>                                                                                                                   
                    
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
             
                <button className='btn1 btn-primary px-5 py-3 mb-40  center'id='play'onClick={()=>window.location.href=`https://wa.me/message/3E3YLZJCHBDNP1?text=I'm${title}interestedincourse`}>Buy Now</button>
                </div>
                </div>
                
            </div>
            
            {/* banner right part images */}
        
    
            
        </div>
      
       
   
        
    </section>
    <div className="row">
            <div className="col-lg-12 mb-1">  
    <div class="shadow-lg p-3 mb-5 bg-white rounded m-10">
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"10px",marginTop:"10px"}}>
    
    <CardGroup>
  <Card>
   
    <Card.Body>
      <Card.Title>21 hours on-demand video</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Card.Img variant="top" src={img} />
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Certificate of completion</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Card.Img variant="top" src={img1}/>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Full Downloadabe Resource</Card.Title>
     
    </Card.Body>
    <Card.Footer>
    <Card.Img variant="top" src={img2} />
    </Card.Footer>
  </Card>
</CardGroup>


    </div>
    </div>
    </div>
    </div>
    <section className='container'>
    
    
    <div className="row">
            <div className="col-lg-3 mb-3">  
    <div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg1} />
  <Card.Body>
    <Card.Title>{uname1}</Card.Title>
    <Card.Text>
             {review1}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>
<div className="col-lg-3 mb-3">  
<div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg2} />
  <Card.Body>
    <Card.Title>{uname2}</Card.Title>
    <Card.Text>
      {review2}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>
<div className="col-lg-3 mb-3">  
<div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg3} />
  <Card.Body>
    <Card.Title>{uname3}</Card.Title>
    <Card.Text>
      {review3}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>
<div className="col-lg-3 mb-3">  
    <div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg4} />
  <Card.Body>
    <Card.Title>{uname4}</Card.Title>
    <Card.Text>
      {review4}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>

</div>

</section>


    </>
    
 );
};

export default SingleCourse;