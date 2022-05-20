import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import CustomModal from '../common/modal/customModal';
import { selectCommon, selectUsers } from '../../redux/store/store';
import { closeProfileModal } from '../../redux/slices/commonSlice';
import { ProfileAvatarWrapper, ProfileCloseButton, ProfileDetailKey, ProfileDetailPair, ProfileDetailValue, ProfileName, ProfileNameSightings, ProfileSightings, ProfileWrapper } from './profileStyle';
import { Avatar } from '@mui/material';
import { SubmitButton } from '../common/customForm/customFormStyle';
import { setIsLogged } from '../../redux/slices/userSlice';
import { IS_LOGGED_LOCAL_STORAGE } from '../../util/constants';
import { useEffect } from 'react';
import { getCurrentUserAsync } from '../../redux/slices/usersSlice';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { profileModalOpen } = useAppSelector(selectCommon);
  const { currentUser } = useAppSelector(selectUsers);

  useEffect(() => {
    //blocked as I can't pass the auth_token I get when logging in (CORS)
    //dispatch(getCurrentUserAsync());
  }, [])

  const handleCloseProfileModal = () => {
    dispatch(closeProfileModal());
  }

  const handleLogoutClicked = () => {
    dispatch(setIsLogged(false));
    localStorage.setItem(IS_LOGGED_LOCAL_STORAGE, JSON.stringify(false));
    dispatch(closeProfileModal());
  }

  return (
    <CustomModal isOpen={profileModalOpen} handleClose={handleCloseProfileModal}>
      <ProfileWrapper>
        <ProfileCloseButton onClick={handleCloseProfileModal}>
          &#10006;
        </ProfileCloseButton>
        <ProfileAvatarWrapper>
          <Avatar src='./logo192.png' sx={{
            width: '80px',
            height: '80px',
          }} />
          <ProfileNameSightings>
            <ProfileName>
              Milos Lukic
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
            Michael
          </ProfileDetailValue>
        </ProfileDetailPair>

        <ProfileDetailPair>
          <ProfileDetailKey>
            Last Name
          </ProfileDetailKey>
          <ProfileDetailValue>
            Berry
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

        <SubmitButton
          width="150px"
          sx={{
            marginTop: '20px'
          }}
          onClick={handleLogoutClicked}
        >Logout</SubmitButton>
      </ProfileWrapper>
    </CustomModal >

  )
};

export default Profile;