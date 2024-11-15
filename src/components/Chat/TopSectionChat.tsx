import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

export default function TopSectionChat() {
  return (
    <div className="w-3/5 mx-auto bg-white rounded-full shadow-md flex items-center justify-between p-2">
      <div className="flex items-center">
        <div className="profile-img-container relative">
          <img
            className="profile-img w-12 h-12 rounded-full"
            src="https://intranet.youcode.ma/storage/users/profile/thumbnail/804-1696616151.jpg"
            alt="Profile"
          />
          <div className="isOnline bg-green-500 w-3 h-3 rounded-full absolute bottom-0 right-1 border-2 border-white"></div>
        </div>
        <div className="profile-info ml-3">
          <h3 className="username text-black">Nouamane</h3>
          <span className="status">Online</span>
        </div>
      </div>
      <div className="icon-container flex space-x-4 pr-4">
        <PhoneIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500" />
        <VideoCameraIcon
          onClick={(event) => {
            event.preventDefault();
            window.open("", "_blank", "popup");
          }}
          className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500"
        />
      </div>
    </div>
  );
}
