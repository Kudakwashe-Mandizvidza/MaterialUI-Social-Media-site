import { EmojiEmotions, Mail, Notifications, Pets} from "@mui/icons-material";
import { InputBase, Toolbar, AppBar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import {borderRadius} from '@mui/system';
import { useState } from "react";
import React from "react";
 
const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});

const Search = styled("div")(({theme})=>({
    backgroundColor:'white', 
    padding:'0 10px',
    width:'40%',
    borderRadius:theme.shape.borderRadius
}));

const Icons = styled(Box)(({theme})=>({
    display:'none',
    gap:"20px", 
    alignItems:'center', 
    [theme.breakpoints.up("sm")]:{
        display:'flex'
    }
}));

const UserBox = styled(Box)(({theme})=>({
    display:'flex',
    gap:"10px", 
    alignItems:'center'
}));



const Navbar = () => {
    const [open, setOpen] = useState(false);
  return( <AppBar position="sticky">
    <StyledToolBar><Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}} ><b>Eden</b></Typography>
    <EmojiEmotions sx={{display:{xs:"block", sm:"none"}}}/>
    <Search ><InputBase placeholder="search..."></InputBase></Search>
    <Icons>
        <Badge badgeContent={5} color="error">
            <Mail/>
        </Badge>
        <Badge badgeContent={2} color="error">
            <Notifications/>
        </Badge>
        <Avatar sx={{width:30, height:30}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAABBQEAAAAAAAAAAAAAAAAAAQIDBAUG/8QAPRAAAQMDAgMEBgcHBQEAAAAAAQACAwQRIQUSMUFRE2FxkQYUIjKBwRUzQlKhsfAjVGJyc5LhNDWCstEk/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAQEBAQACAwAAAAAAAAAAAAABEQIhQRIxUf/aAAwDAQACEQMRAD8A1kWCa+RsYu8gBZ1RqJddsIx1W20lWIoyCXWToXw2FnC6ypLuBLjcpjeGFNVvXB4FG1YzZHt91xUzKyZvMFNMae0WyoX1VMz36iJvi8Bc5qmoS1chja4tiAtYHDis7cAbEEBTWddw0te3cxwc3q03CXauNp6yahl3Uz7Dm3kfELqNP1CKvi3M9l499h5f4V1ZVralDUqVFJtQW2SgocVUIAiyFBPVMiHG5RU1kLN9ff0QppiKWV8zrvd8E1CFFNdwUbFIVEMOQShR1BIppS3B2lSBJIN0bx1BCDny25xnK0YdIlmYHNcwk8uFlHT0b2ytEsZA45yt+kG1wAXPrr8OOf1SboEcQDpZHP8A4bWChEZo6yN0OAbtNvC/yW9O9hsA4E81lzvhfM0NeC4cgpLdbsmJWV0reIurLNQH2m2VABKurDUbVxO+1ZK6djW3LgsZ7w0KAyuBuDjomjSnrXPuI8BVb3Nzkp9PLDN7L/ZcpXUmLtKCshS+rPQgai6RFkASoXGzlKQopAgkaU9psQeihZwT3PbG0uebNCC1UMaTHKL58k5sTZh75aRxANrqjad1LHOXERvJLWA8Ol+/BVqnkDmAjiuHUyunNnSRlHHTv7SwLnE58VBLAyGVtmgEezgKxUyxCP23PD+RaCT+Czu1Lnkve95ybvFj5K8/ZcWC4BQPmvhqifIXFNXXWDiUw5QkJQNODcGxVyl1F0dmyZCpEqIojohVwEe8hc7vPVCaNZCmdEDwURaW8VQirTTMbi9z3KvW1ZEhjjdgDNuapmQlWRi9fi26qLRg28FXlkc8+0SVFe/FGRzVZdfosUdXpETHi7SC3wIJVKsoptPeSQXRH7TVc9Fnj6MdcgbJDe/K4BUmravLTOa31N5pnYdKefdbl8VmzV56sZgnhdC0mVzbrLqngVTg0uxzPNLWysknL4yezIu27Q3HgMdVXm3ewTe23B65KnPMi9d2+ErZ3DvUjZ2njhU2myNy34ZlsX9wPApCVSbKWOBvi+VYJJWK3LpSUwlFimlqjRNyEbUIjqOyf9wqCsJpqaSZ7DZo58zyVPt9Y+8zyVavk1B1KRVPb2ZIwBzW0+TM3FziXcSblKE1A4oweUnJKUiI6T0TfdtTEeRa8fiPkFoekFT6vpkm5w3yENb53WJ6LS7NSczlJGfMEH/1b2rQxPEU9QbRUxMhH3jyCK5ydg7OmpKiMiZjwQeB7N2dp77/AJo1kwltIYG7GtY5m3pY/wCUkzpZ65tdIPZkdsvyBtwHwUmsUroKale8Wc9z8HkMJ7GSkuglMugHfNalBSS1VMHs22B2m5WXbd4LT0uklqIHmKpMTQ6xAPcpmkuLP0XP/B5pDpU/Vnmpfouf9+f5pp0uX9+f/cr8WtQ/RVR1Z5pVJ9Fy/vr/AO5CfE1ZMjupWTqlWZH9iMhpuT3rTcQ0EngMlc/M/fIXc1qskCQe8i+OCY0+0sCVCAhVF3RJOz1amdyL9p+OF1GuU76mCKOP7UgB6DByuOgk7GojkOA17XeRXa6xM+LT5ZI8HAv0ubXVn2MPUJI3y09FTD9jTvbY83Ovk/mrfpaL09K7+M/ks6piFJQxPJ21L3h1ubW/o/qyu68Xv0Wie9pDg5u4HkdpSjmnJhTnFMWVOaQBlT0lT6s5zs5tfwVYJxti5QdFvuLg4SEqtQSNfTMaCLtwRfKsFbBcoSIQVdTqAyMRD3n8fBZWDxCt6o7/AOoWOdouPNVAPgs37CG3XyUksLoXNDuJF/BR7S5wAGSbK/qQzEe4hQUgnJoTgqEd7pXdOex+niacXY1ge8ceGVwx4LtqFoqdDhac74Aw+VkRgumdPUeuVAvGJGg35ZBt+uverNZOaz0clkNrxzeV3C3/AGUFc5sr46Ck2ljHAbvvO3DKncYjp+o0UeRFEHE9XA5/EBWjmjwTU7kmrKlAVvTmMfWMEjQWjJFrpk1M5vZOaCQ9reHWy0tNoTA5z5ntBcPZ25UtxrmbVOaRrNQdMwbWbsgC2Oa0g4OaCMg5VWsohFGZGybuoIsR8VLTu3QMN7m1lrm+EssvlKhJdC2jL1IWq79WgquFd1NtpmPxkWt4KmTjIWPYnoWAzl33RdS6j7sfiU3Th+2cb8G8OqXUj7cYHIFPQppQmhOCgUrt9FuNIpemwLhzkLudLIj0mmLjtAiaSTywqjnquFmn0zSHj1p7g8W+w0Gw/Xd3Kzp1O2ntFObTVcb2hp4gWv8AJVJZGeuy1b5WyNZMLMBBLgHX8rAJ1DI6r1A188jR2b24v1NgB3ZVGGQWkg8RhIp61nZ1s7PuyOH4qFYVtwe1TR97B+Slje2zdxYDwLS2yhoHbqSPuwp3Xsdri0nmFeudjfPWG1BY9gjuCHODbjlc2wq1Ff1ZpPMkhQzTVDXFslmhoLg4DuxZXIbCFgGPZCcTDq7SoTroW2VHVPei+PyVN31fxQhZqLGm/Wu/lSah9e3+VCE9CqE4IQoA8F1tfj0bf/Sb8kIVHO6cf2VV/SKq0/1vl+YQhSCfV/8AdKj+b5KmhCDW0z/Tf8irZ4IQtwIc8Ugw0WQhAiEIQf/Z" onClick={e=>setOpen(true)} />
    </Icons>
    <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src="data:image/jpeg;base64,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" />
        <Typography variant="span" >Einstein</Typography>
    </UserBox>
    </StyledToolBar>
    <Menu
    id="demo-positioned-menu"
    aria-aria-labelledby="demo-positioned-button"
    open={open}
    onClose={(e)=> setOpen(false)}
    anchorOrigin={{
        vertical:'top',
        horizontal:'right'
    }}
    transformOrigin={{
        vertical:'top',
        horizontal:'right'
    }}
    >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
    </Menu>
   </AppBar>
  );
};

export default Navbar;
