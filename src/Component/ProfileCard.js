import React from 'react'
import styled from 'styled-components';
import Jun from '../jun.jpg'; 


const Image = styled.div`
background-image: url(${Jun});
height: 100px;
width: 100px;
border-radius: 50%;
background-size: cover;
border: white solid 4px;
`;

const ProfileInfo = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 1fr;
`;

const Name = styled.p`
color: white;
font-size: 20px;
font-family: 'Alata', sans-serif;

`;


const ProfileCard = () => {
    return (
        <>
        <ProfileInfo>
            <Image></Image>
            <Name>  Jun 🦊</Name>
        </ProfileInfo>
        </>
    )
  

}


export default ProfileCard