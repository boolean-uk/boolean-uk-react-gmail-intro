import profileIcon from '../../assets/icons/profile-picture.svg'

function ProfilePicture() {
    return (
        <div className="profile-picture">
            <img src={profileIcon} alt="Profile picture icon" />
        </div>
    )
}

export default ProfilePicture