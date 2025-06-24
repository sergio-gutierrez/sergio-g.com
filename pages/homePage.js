
const renderHomeContent = () => {
    return(
    <div className="content-container">
      <div className="home-container">
        
        <img
          src="temp_picture.png"
          alt="Sergio Gutierrez"
          className="circle-photo"
        />
      </div>
      
      <p className="bio">
        Hello and Welcome to my website! <br />
        My name is Sergio Gutierrez! <br />
        I am a Computer Science graduate at SUNY Oneonta!<br />
        Feel free to reach out or check out my projects!
      </p>
    </div>
  );
};
export default renderHomeContent