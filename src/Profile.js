import React from "react";
import PropTypes from "prop-types"
function Profile ({props}){
  const styleDiv = {backgroundColor: "bisque", width : '30vw', height: '50hw' , paddinBottom: '5%' ,margin: '10px' ,display: 'flex' ,flexDirection:'column'  ,justifyContent: 'center' }
  const stylePhoto = {width: '30vw',height: '30hw' ,borderRadius: '20%',border: '#282c34', paddinBottom: '5%',margin:'10px'  }
  const {fullname,bio,profession,src} = props
    return (
     <>
   <img style={stylePhoto} src= {src} alt = "Myphoto" />
     <div style={styleDiv}>
        <h3 >{fullname}</h3>  
        <h4>{profession}</h4>    
        <p> {bio}</p>
  </div>

     </>
    )
}
Profile.propTypes={
    fullName: PropTypes.string,
    bio :PropTypes.string,
    profession :PropTypes.string,
}
Profile.defaultProps = {
    fullName : 'MAYAR Rhouma',
    bio : 'Mon bébé',
    profession :'none',

}
export default Profile;