import User from "../user/User";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Stack, Typography } from "@mui/material";
import Image from "mui-image";
import StyledPaper from "../styled/StyledPaper";

const Post = ({ author, date, content, image, isVerified }) => {
  return (
    <StyledPaper>
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <User user={author} isVerified={isVerified} />
        {author.nickname && <h6>{author.nickname}</h6>}
        {date && <h6>{date}</h6>}
      </Stack>
      <Stack>
        <Typography>{content}</Typography>
        <Image src={image} alt={author.name} style={{ width: "100%" }} />
        <Stack flexDirection="row" justifyContent="space-between" m={2}>
          <FavoriteBorderIcon cursor="pointer" />
          <ChatBubbleOutlineIcon cursor="pointer" />
          <IosShareIcon cursor="pointer" />
        </Stack>
      </Stack>
    </StyledPaper>
  );
};

export default Post;
