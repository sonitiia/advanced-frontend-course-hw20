import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar, Stack } from "@mui/material";

const User = ({ user, isVerified }) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <Avatar src={user.photo} alt={user.name} />
      <Stack flexDirection="row" alignItems="center">
        <h5>{user.name}</h5>
        {isVerified && <VerifiedIcon fontSize="xs" />}
      </Stack>
    </Stack>
  );
};

export default User;
