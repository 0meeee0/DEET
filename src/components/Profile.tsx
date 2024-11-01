export default function Profile() {
  return (
    <>
      <div className="sum">
        <div className="profile-img-container">
          <img
            className="profile-img"
            src="https://i1.sndcdn.com/artworks-k7y07eudhuPfgcUO-Qni8Ww-t500x500.jpg"
            alt="Profile"
          />
          <div className="isOnline"></div>
        </div>
        <div className="profile-info">
          <h3 className="username">Mehdi</h3>
          <span className="status">Online</span>
        </div>
        <span className="more-settings">⋮</span>
      </div>
    </>
  );
}
