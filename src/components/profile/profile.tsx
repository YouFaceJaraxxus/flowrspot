import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import CustomModal from '../common/modal/customModal';
import { selectCommon, selectUsers } from '../../redux/store/store';
import { closeProfileModal } from '../../redux/slices/commonSlice';
import { ProfileAvatarWrapper, ProfileCloseButton, ProfileDetailKey, ProfileDetailPair, ProfileDetailValue, ProfileName, ProfileNameSightings, ProfileSightings, ProfileWrapper } from './profileStyle';
import { Avatar } from '@mui/material';
import { setIsLogged } from '../../redux/slices/userSlice';
import { CustomButton } from '../common/customButton/customButtonStyle';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { profileModalOpen } = useAppSelector(selectCommon);
  const { currentUser } = useAppSelector(selectUsers);

  const handleCloseProfileModal = () => {
    dispatch(closeProfileModal());
  }

  const handleLogoutClicked = () => {
    dispatch(setIsLogged(false));
    dispatch(closeProfileModal());
  }

  return (
    <CustomModal isOpen={profileModalOpen} handleClose={handleCloseProfileModal}>
      <ProfileWrapper>
        <ProfileCloseButton onClick={handleCloseProfileModal}>
          &#10006;
        </ProfileCloseButton>
        <ProfileAvatarWrapper>
          <Avatar src='./images/profile_avatar.png' sx={{
            width: '80px',
            height: '80px',
          }} />
          <ProfileNameSightings>
            <ProfileName>
              {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : 'Michael Berry'}
            </ProfileName>
            <ProfileSightings>
              76 sightings
            </ProfileSightings>
          </ProfileNameSightings>
        </ProfileAvatarWrapper>

        <ProfileDetailPair>
          <ProfileDetailKey>
            First Name
          </ProfileDetailKey>
          <ProfileDetailValue>
            {currentUser?.first_name ?? 'Michael'}
          </ProfileDetailValue>
        </ProfileDetailPair>

        <ProfileDetailPair>
          <ProfileDetailKey>
            Last Name
          </ProfileDetailKey>
          <ProfileDetailValue>
            {currentUser?.last_name ?? 'Berry'}
          </ProfileDetailValue>
        </ProfileDetailPair>

        <ProfileDetailPair>
          <ProfileDetailKey>
            Date of Birth
          </ProfileDetailKey>
          <ProfileDetailValue>
            May 20, 1980
          </ProfileDetailValue>
        </ProfileDetailPair>

        <ProfileDetailPair>
          <ProfileDetailKey>
            First Name
          </ProfileDetailKey>
          <ProfileDetailValue>
            michael.berry@gmail.com
          </ProfileDetailValue>
        </ProfileDetailPair>

        <CustomButton
          width="150px"
          sx={{
            marginTop: '20px'
          }}
          onClick={handleLogoutClicked}
        >Logout
        </CustomButton>
      </ProfileWrapper>
    </CustomModal >

  )
};

export default Profile;